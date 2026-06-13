import React from "react";
import TokenizationLessonClient from "./TokenizationLessonClient";
import { tokenizationLessons } from "@/data/ai/tokenization";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    "submodule-slug": string;
  }>;
}

export async function generateStaticParams() {
  return [
    { "submodule-slug": "what-is-tokenization" },
    { "submodule-slug": "tokenization-algorithms" },
    { "submodule-slug": "bpe-wordpiece" },
    { "submodule-slug": "token-ids-vocabulary" },
    { "submodule-slug": "token-cost" },
    { "submodule-slug": "rag-agents" },
    { "submodule-slug": "interview-guide" }
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams["submodule-slug"];
  const lesson = tokenizationLessons[slug];
  
  if (!lesson) return {};
  
  let seoTitle = `${lesson.title} | DevJam`;
  let seoDescription = lesson.subtitle;
  
  if (slug === "what-is-tokenization") {
    seoTitle = "What is Tokenization in LLMs? Beginner AI Engineer Guide | DevJam";
    seoDescription = "Learn what tokenization means in Large Language Models. Understand tokens, token IDs, tokenizer vocabulary, embeddings, context windows, cost, and interview questions.";
  }
  
  return {
    title: seoTitle,
    description: seoDescription,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams["submodule-slug"];
  
  if (!tokenizationLessons[slug]) {
    notFound();
  }
  
  return <TokenizationLessonClient slug={slug} />;
}
