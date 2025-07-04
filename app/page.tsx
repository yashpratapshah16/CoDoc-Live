"use client";
import { DocumentsTable } from "@/components/documents-table";
import { Navbar } from "@/components/navbar";
import { TemplatesGallery } from "@/components/templates-gallery";
import { api } from "@/convex/_generated/api";
import { useSearchParam } from "@/hooks/use-search-param";
import { usePaginatedQuery } from "convex/react";

const Home = () => {
  const [search]=useSearchParam();

  const { results, status, loadMore } = usePaginatedQuery(api.documents.get, {search}, { initialNumItems: 5 });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsTable
          loadmore={loadMore}
          documents={results}
          status={status}
        />
      </div>
    </div>
  );
}

export default Home;