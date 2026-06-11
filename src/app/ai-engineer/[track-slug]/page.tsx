import React from "react";
import { aiTracks } from "@/data/ai/tracks";
import TrackDetailClient from "./TrackDetailClient";

interface TrackPageProps {
  params: Promise<{ "track-slug": string }>;
}

export async function generateStaticParams() {
  return aiTracks.map((track) => ({
    "track-slug": track.slug,
  }));
}

export default async function AiEngineerTrackDetailPage({ params }: TrackPageProps) {
  const resolvedParams = await params;
  return <TrackDetailClient trackSlug={resolvedParams["track-slug"]} />;
}
