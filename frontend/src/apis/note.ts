import { httpClient } from "@/utils/https";
export interface NoteListProps {
  notes: { id: number; title: string }[];
}

export interface Note {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
export interface UpdateNoteParams {
  id: number;
  title: string;
  content: string;
}

export interface CreateNoteParams {
  title: string;
  content: string;
}
export type FetchNotesResponse = Omit<Note, "content">[];
const fetchNotes = async () => {
  const { data } = await httpClient.get<Note[]>("/notes");
  return data;
};
const fetchNote = async (noteId: number) => {
  const { data } = await httpClient.get<Note>(`/notes/${noteId}`);
  return data;
};
const createNote = async (params: CreateNoteParams) => {
  const { data } = await httpClient.post<Note>("/notes", params);
  return data;
};
const updateNote = async ({ id, ...params }: UpdateNoteParams) => {
  console.log(params);
  const { data } = await httpClient.put<Note>(`/notes/${id}`, params);
  return data;
};
const deleteNote = async (id: number) => {
  httpClient.delete<Note>(`/notes/${id}`);
};
export { fetchNote, fetchNotes, createNote, updateNote, deleteNote };
