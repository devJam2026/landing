import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TokenizationHubClient from "./TokenizationHubClient";

export const metadata = {
  title: "Tokenization in LLMs: Complete AI Engineer Guide | DevJam",
  description: "Learn tokenization in Large Language Models from scratch. Understand tokens, token IDs, BPE, WordPiece, SentencePiece, embeddings, context windows, RAG, API cost, and interview questions.",
};

export default function TokenizationHubPage() {
  return (
    <>
      <Navbar />
      <TokenizationHubClient />
      <Footer />
    </>
  );
}
