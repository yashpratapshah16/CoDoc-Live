
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useDebounce } from "@/hooks/use-debounce";
import { useStatus } from "@liveblocks/react";
import { useMutation } from "convex/react";
import { LoaderIcon } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { BsCloudCheck, BsCloudSlash } from "react-icons/bs"
import { toast } from "sonner";

interface DocumentInputProps {
    id: Id<"documents">;
    title: string;
}

export const DocumentInput = ({ id, title }: DocumentInputProps) => {

    const status = useStatus();

    const [value, setValue] = useState(title);
    const [isPending, setIsPending] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const mutate = useMutation(api.documents.updateById);


    const debouncedUpdate = useDebounce(async (newValue: string) => {
        if (newValue === value) return;

        setIsPending(true);
        mutate({ id, title: newValue })
            .then(() => toast.success("Document updated."))
            .catch(() => toast.error("Something went Wrong!"))
            .finally(() => setIsPending(false));
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        debouncedUpdate(newValue);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value === title) return;
        setIsPending(true);

        mutate({ id, title: value })
            .then(() => {
                toast.success("Document updated.");
                setIsEditing(false);
            })
            .catch(() => toast.error("Something went Wrong!"))
            .finally(() => setIsPending(false));
    }

    const showLoader = isPending || status === "connecting" || status === "reconnecting";
    const showError = status === "disconnected";

    return (
        <div className="flex items-center gap-2">
            {
                isEditing ? (
                    <form onSubmit={handleSubmit} className="relative w-fit max-w-[50ch]">
                        <span className=" invisible whitespace-pre px-1.5 text-lg">
                            {value || ""}
                        </span>
                        <input
                            ref={inputRef}
                            value={value}
                            onChange={onChange}
                            onBlur={() => setIsEditing(false)}
                            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate"
                            type="text"
                        />
                    </form>
                ) : (
                    <span
                        onClick={() => {
                            setIsEditing(true);
                            setTimeout(() => {
                                inputRef.current?.focus();
                            }, 0);
                        }}
                        className="text-lg px-1.5 cursor-pointer truncate">
                        {title}
                    </span>
                )
            }

            {showError && <BsCloudSlash className="size-4" />}
            {!showError && !showLoader &&  <BsCloudCheck className="size-4" />}
            {showLoader && <LoaderIcon className="size-4 animate-spin" />}
        </div>
    )
}