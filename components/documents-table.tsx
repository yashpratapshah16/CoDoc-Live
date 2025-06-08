import { LoaderIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { DocumentRow } from "./documents-row";
import { Doc } from "@/convex/_generated/dataModel";
import { PaginationStatus } from "convex/react";
import { Button } from "./ui/button";


interface DocumentsTableProps {
    documents: Doc<"documents">[] | undefined
    loadmore:(numItems:number)=>void;
    status:PaginationStatus
}

export const DocumentsTable = ({ documents,loadmore,status}: DocumentsTableProps) => {
    return (
        <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5">
            {
                documents === undefined ? (
                    <div className=" flex justify-center items-center h-24">
                        <LoaderIcon className="animate-spin text-muted-foreground size-5" />
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent border-none">
                                <TableHead>Name</TableHead>
                                <TableHead>&nbsp;</TableHead>
                                <TableHead className="hidden md:table-cell">Shared</TableHead>
                                <TableHead className="hidden md:table-cell">Created At</TableHead>
                            </TableRow>
                        </TableHeader>
                        {
                            documents.length === 0 ? (
                                <TableBody>
                                    <TableRow className="hover:bg-transparent">
                                        <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                                            No documents found
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            ) : (
                                <TableBody>
                                    {
                                        documents.map(document => (
                                            <DocumentRow  key={document._id} document={document} />
                                        ))
                                    }
                                </TableBody>
                            )
                        }
                    </Table>
                )
            }
            <div className="flex items-center justify-center">
                <Button variant={"ghost"} size="sm" onClick={()=>loadmore(5)} disabled={status!=="CanLoadMore"}>
                    {status==="CanLoadMore"?"Load more":"End of results"}
                </Button>
            </div>
        </div>
    )
}