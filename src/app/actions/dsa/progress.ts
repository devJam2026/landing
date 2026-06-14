"use server";

import { prisma } from "@/lib/prisma";
import { dsaProblems } from "@/data/dsa/problems";

/**
 * Ensures that all problems referenced in operations are seeded/upserted in the database.
 */
async function ensureProblemsInDatabase(slugs: string[]) {
  const problemsToEnsure = dsaProblems.filter(p => slugs.includes(p.slug));
  
  for (const prob of problemsToEnsure) {
    await prisma.problem.upsert({
      where: { slug: prob.slug },
      update: {
        title: prob.title,
        difficulty: prob.difficulty,
        pillarSlug: prob.pillarSlug,
        timeComplexity: prob.timeComplexity,
        spaceComplexity: prob.spaceComplexity,
      },
      create: {
        id: String(prob.id),
        slug: prob.slug,
        title: prob.title,
        difficulty: prob.difficulty,
        pillarSlug: prob.pillarSlug,
        timeComplexity: prob.timeComplexity,
        spaceComplexity: prob.spaceComplexity,
      }
    });
  }
}

/**
 * Syncs user's local storage solved problems history to the database.
 */
export async function syncLocalToDatabase(userId: string, localSolvedSlugs: string[]) {
  if (!userId || !Array.isArray(localSolvedSlugs) || localSolvedSlugs.length === 0) {
    return { success: true, count: 0 };
  }

  try {
    // 1. First ensure all referenced problems exist in DB
    await ensureProblemsInDatabase(localSolvedSlugs);

    // 2. Batch upsert progress for the user
    const operations = localSolvedSlugs.map(slug => 
      prisma.userProgress.upsert({
        where: {
          userId_problemSlug: {
            userId,
            problemSlug: slug,
          }
        },
        update: {
          status: "COMPLETED",
        },
        create: {
          userId,
          problemSlug: slug,
          status: "COMPLETED",
        }
      })
    );

    await prisma.$transaction(operations);
    return { success: true, count: localSolvedSlugs.length };
  } catch (err: unknown) {
    console.error("Error in syncLocalToDatabase:", err);
    return { success: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * Toggles problem completion status for a user (COMPLETED <-> ATTEMPTED).
 * If no entry exists, creates it as COMPLETED.
 */
export async function toggleProblemCompletion(userId: string, problemSlug: string) {
  if (!userId || !problemSlug) {
    return { success: false, error: "Invalid user ID or problem slug" };
  }

  try {
    // Ensure problem metadata exists in DB
    await ensureProblemsInDatabase([problemSlug]);

    const existing = await prisma.userProgress.findUnique({
      where: {
        userId_problemSlug: {
          userId,
          problemSlug,
        }
      }
    });

    if (existing) {
      // Toggle status
      const nextStatus = existing.status === "COMPLETED" ? "ATTEMPTED" : "COMPLETED";
      const updated = await prisma.userProgress.update({
        where: {
          userId_problemSlug: {
            userId,
            problemSlug,
          }
        },
        data: {
          status: nextStatus,
        }
      });
      return { success: true, status: updated.status };
    } else {
      // Create as completed
      const created = await prisma.userProgress.create({
        data: {
          userId,
          problemSlug,
          status: "COMPLETED",
        }
      });
      return { success: true, status: created.status };
    }
  } catch (err: unknown) {
    console.error("Error in toggleProblemCompletion:", err);
    return { success: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * Toggles a bookmark for a problem, concept, or pattern.
 */
export async function toggleProblemBookmark(
  userId: string,
  itemSlug: string,
  itemType: "PROBLEM" | "CONCEPT" | "PATTERN"
) {
  if (!userId || !itemSlug || !itemType) {
    return { success: false, error: "Invalid parameters" };
  }

  try {
    const existing = await prisma.bookmark.findUnique({
      where: {
        userId_itemSlug_itemType: {
          userId,
          itemSlug,
          itemType,
        }
      }
    });

    if (existing) {
      // Remove bookmark
      await prisma.bookmark.delete({
        where: {
          userId_itemSlug_itemType: {
            userId,
            itemSlug,
            itemType,
          }
        }
      });
      return { success: true, bookmarked: false };
    } else {
      // Add bookmark
      await prisma.bookmark.create({
        data: {
          userId,
          itemSlug,
          itemType,
        }
      });
      return { success: true, bookmarked: true };
    }
  } catch (err: unknown) {
    console.error("Error in toggleProblemBookmark:", err);
    return { success: false, error: err instanceof Error ? err.message : String(err) };
  }
}
