import Editor from "./components/editor";
import { Navbar } from "./components/navbar";
import { Room } from "./components/room";
import Toolbar from "./components/toolbar";

interface DocumentIdProps {
    params: Promise<{ documentId: string }>
}

const DocumentId: React.FC<DocumentIdProps> = async ({ params }) => {

    const { documentId } = await params;

    console.log(documentId)

    return (
        <Room>
            <div className="min-h-screen bg-[#FAFBFD]">
                <div className=" flex flex-col px-4 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden">
                    <Navbar />
                    <Toolbar />
                </div>
                <div className="pt-[114px] print:pt-0">
                    <Editor />
                </div>
            </div>
        </Room>
    );
}

export default DocumentId;