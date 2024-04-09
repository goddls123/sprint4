import { fetchNotes } from "@/apis/note";
import { useQuery } from "@tanstack/react-query";
import { Note } from "../apis/note";

export const useNotes = () => {
  const notesQuerry = useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });
  return { notes: notesQuerry.data };
};
