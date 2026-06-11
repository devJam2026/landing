import React from "react";
import { aiSubmodules } from "@/data/ai/submodules";
import SubmoduleDetailClient from "./SubmoduleDetailClient";

interface SubmodulePageProps {
  params: Promise<{
    "track-slug": string;
    "module-slug": string;
    "submodule-slug": string;
  }>;
}

export async function generateStaticParams() {
  const params: { "track-slug": string; "module-slug": string; "submodule-slug": string }[] = [];
  Object.values(aiSubmodules).forEach((submodule) => {
    params.push({
      "track-slug": submodule.trackSlug,
      "module-slug": submodule.moduleSlug,
      "submodule-slug": submodule.slug,
    });
  });
  return params;
}

export default async function AiEngineerSubmoduleDetailPage({ params }: SubmodulePageProps) {
  const resolvedParams = await params;
  return (
    <SubmoduleDetailClient
      trackSlug={resolvedParams["track-slug"]}
      moduleSlug={resolvedParams["module-slug"]}
      submoduleSlug={resolvedParams["submodule-slug"]}
    />
  );
}
