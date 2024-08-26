"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { deleteNote } from "@/lib/actionsNotes";

export default function ButtonDeleteNote({ id }) {

  function handleSubmit() {
   
    toast.success("La note a été supprimée");
}

    return (
        <form action={deleteNote} onSubmit={handleSubmit}>
            <Input type="hidden" name="id" value={id} />
            <Button
                type="submit"
                className={`bg-red-500 hover:bg-red-600 text-white mt-4 mb-3`}
            >
                <Trash2 />
            </Button>
        </form>
    );
}
