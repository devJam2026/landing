import React from "react";
import { notFound } from "next/navigation";
import { foundationModulesData } from "@/data/ai/foundationModules";
import { foundationSubmodulesData } from "@/data/ai/foundationSubmodules";
import FoundationModulePage from "@/components/ai/FoundationModulePage";
import FoundationSubmoduleHubTemplate from "@/components/ai/FoundationSubmoduleHubTemplate";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface PageProps {
  params: Promise<{
    "module-slug": string;
  }>;
}

export async function generateStaticParams() {
  const classicalSlugs = Object.keys(foundationModulesData);
  const submoduleSlugs = Object.keys(foundationSubmodulesData);
  
  // Combine all slugs and ensure uniqueness
  const allSlugs = Array.from(new Set([...classicalSlugs, ...submoduleSlugs]));

  return allSlugs.map((slug) => ({
    "module-slug": slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams["module-slug"];
  
  const submoduleData = foundationSubmodulesData[slug];
  if (submoduleData) {
    return {
      title: `${submoduleData.title}: Complete AI Engineer Guide | DevJam`,
      description: submoduleData.description,
    };
  }

  const moduleData = foundationModulesData[slug];
  if (moduleData) {
    let seoTitle = `${moduleData.title} Explained: Complete AI Engineer Guide | DevJam`;
    if (slug === "context-engineering") {
      seoTitle = "Context Engineering for LLMs: Complete AI Engineer Guide | DevJam";
    } else if (slug === "structured-output") {
      seoTitle = "Structured Output for LLM Apps: Complete AI Engineer Guide | DevJam";
    }

    return {
      title: seoTitle,
      description: moduleData.summary,
    };
  }

  return {};
}

export default async function FoundationModuleRoutePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams["module-slug"];
  
  const submoduleData = foundationSubmodulesData[slug];
  if (submoduleData) {
    return (
      <>
        <Navbar />
        <FoundationSubmoduleHubTemplate submodule={submoduleData} />
        <Footer />
      </>
    );
  }

  const moduleData = foundationModulesData[slug];
  if (moduleData) {
    return (
      <>
        <Navbar />
        <FoundationModulePage module={moduleData} />
        <Footer />
      </>
    );
  }

  notFound();
}

