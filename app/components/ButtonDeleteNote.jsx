"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { deleteNote } from "@/lib/actionsNotes";

export default function ButtonDeleteNote({ id }) {
  function handleSubmit(event) {
    event.preventDefault();
    // on valide avant suppression
    const confirmed = window.confirm(
      "Es-tu sûr de vouloir supprimer cette note ?"
    );
    if (confirmed) {
      // Ici, on cible explicitement le formulaire parent pour le soumettre
      event.target.closest("form").submit();
      toast.success("La note a été supprimée");
    } else {
      toast("La suppression a été annulée");
    }
  }

  return (
    <form action={deleteNote} onClick={handleSubmit}>
      <Input type="hidden" name="id" value={id} />
      <Button
        type="submit"
        className={`bg-red-500 hover:bg-red-600 text-white mt-4 mb-3`}
      >
        <Trash2 className={`w-4`} />
      </Button>
    </form>
  );
}
