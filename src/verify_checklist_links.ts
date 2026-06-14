import { dsaChecklists, getChecklistItems } from './data/dsa/checklists';
import { dsaProblems } from './data/dsa/problems';

console.log("Starting checklists link validation...");

const allProblemsSlugs = new Set(dsaProblems.map((p) => p.slug));
console.log(`Loaded ${allProblemsSlugs.size} total implemented problem slugs.`);

const brokenLinks: Record<string, string[]> = {};
const placeholderProblems: Record<string, string[]> = {};

for (const checklist of dsaChecklists) {
  console.log(`\nAuditing Checklist: ${checklist.title} (${checklist.slug})`);
  const items = getChecklistItems(checklist.slug);
  console.log(`Checklist items count: ${items.length}`);

  items.forEach((item) => {
    const slug = item.problemSlug;
    const isVariant = slug.startsWith('variant-') || slug.startsWith('lc150-variant-') || slug.startsWith('dj96-variant-');
    
    if (isVariant) {
      if (!placeholderProblems[checklist.slug]) {
        placeholderProblems[checklist.slug] = [];
      }
      placeholderProblems[checklist.slug].push(slug);
    } else {
      // Must be implemented in problem database
      if (!allProblemsSlugs.has(slug)) {
        if (!brokenLinks[checklist.slug]) {
          brokenLinks[checklist.slug] = [];
        }
        brokenLinks[checklist.slug].push(slug);
      }
    }
  });
}

console.log('\n--- AUDIT RESULTS ---');
console.log('Broken Links per checklist:', JSON.stringify(brokenLinks, null, 2));
console.log('Placeholder Problems per checklist (count):', Object.keys(placeholderProblems).reduce((acc, k) => {
  acc[k] = placeholderProblems[k].length;
  return acc;
}, {} as Record<string, number>));
