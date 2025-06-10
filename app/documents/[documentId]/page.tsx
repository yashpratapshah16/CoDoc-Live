"use server"
import { Id } from "@/convex/_generated/dataModel";
import { auth } from "@clerk/nextjs/server";
import Document from "./components/document";
import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

interface DocumentIdProps {
    params: Promise<{ documentId: Id<"documents"> }>
}

const DocumentId: React.FC<DocumentIdProps> = async ({ params }) => {

    const { documentId } = await params;
    const { getToken } = await auth();

    const token = await getToken({ template: "convex" }) ?? undefined;

    if (!token) {
        throw new Error("Unauthorized!");
    }

    const preloadedDocument = await preloadQuery(
        api.documents.getById,
        { id: documentId },
        { token }
    )

    return (<Document preloadedDocument={preloadedDocument} />);
}

export default DocumentId;