"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

interface RenameDialogProps {
    id: Id<"documents">
    title: string
    children: React.ReactNode
}

export const RenameDailog = ({
    id,
    title,
    children,
}: RenameDialogProps) => {

    const update = useMutation(api.documents.updateById);
    const [newTitle, setNewTitle] = useState(title);
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [open, setOpen] = useState(false);

    const handleRename = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmiting(true);
        update({ id, title: newTitle.trim()})
        .then(()=>toast.success("Title Renamed."))
        .finally(()=>{
            setIsSubmiting(false);
            setOpen(false)
        })
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild onClick={() => setOpen(true)}>
                {children}
            </DialogTrigger>
            <DialogContent onClick={(e) => e.stopPropagation()} className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleRename} className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Fname" className="text-right text-black">
                        First Name
                    </Label>
                    <Input
                        disabled={isSubmiting}
                        required
                        autoFocus
                        onChange={(e) => setNewTitle(e.target.value)}
                        id="Fname"
                        value={newTitle}
                        className="col-span-3"
                    />
                    <DialogFooter className="ml-auto col-span-4">
                        <Button type="submit" disabled={isSubmiting}>
                            Save changes
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}



const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                autoComplete="off"
                type={type}
                className={cn(
                    "flex transition-all h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"
