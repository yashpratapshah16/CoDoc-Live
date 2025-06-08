import { ExternalLinkIcon, MoreVertical, PenBoxIcon, TrashIcon } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { RemoveDialog } from "./remove-dialog";
import { Id } from "@/convex/_generated/dataModel";
import { RenameDailog } from "./rename-dialog";


interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    OnNewTab: (id: string) => void;
}

export const DocumentMenu = ({ documentId, title, OnNewTab }: DocumentMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="rounded-full" variant="ghost" size="icon">
                    <MoreVertical className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    onClick={() => OnNewTab(documentId)}
                >
                    <ExternalLinkIcon />
                    Open in new tab
                </DropdownMenuItem>
                <RemoveDialog documentId={documentId} >
                    <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <TrashIcon className="size-4 mr-2" />
                        Remove
                    </DropdownMenuItem>
                </RemoveDialog>
                <RenameDailog
                    id={documentId}
                    title={title}
                >
                <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    onClick={(e) => e.stopPropagation()}
                >
                    <PenBoxIcon className="size-4 mr-2" />
                    Rename Title
                </DropdownMenuItem>
                </RenameDailog>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}