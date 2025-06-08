"use client";
import { Navbar } from "@/components/navbar";
import { TemplatesGallery } from "@/components/templates-gallery";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Home = () => {

  const doucments=useQuery(api.documents.get);

  if(doucments===undefined) return (
    <p>Loading....</p>
  )


  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        {
          doucments?.map((document)=>(
            <span key={document._id}>{document.title}</span>
          ))
        }
      </div>
    </div>
  );
}

export default Home;