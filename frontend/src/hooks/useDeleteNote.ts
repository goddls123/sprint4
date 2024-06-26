import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FetchNotesResponse, deleteNote } from "../apis/note";

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  const deleteNoteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: (_, noteId) => {
      queryClient.setQueryData(["notes"], (notes: FetchNotesResponse) =>
        notes.filter((note) => note.id !== noteId)
      );
    },
  });

  return { deleteNote: deleteNoteMutation.mutateAsync };
};
