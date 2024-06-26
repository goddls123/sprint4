import { useLogout } from "@/hooks/useLogout";
import { NotesIndexTemplate } from "./Index.template";
import { withAuthenticatedUser } from "@/components/hocs/withAuthenticatedUser";
import { useNavigate } from "react-router-dom";
import { useNotes } from "@/hooks/useNotes";
import { createNote } from "../../apis/note";

export const NotesIndexPage = withAuthenticatedUser((props) => {
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    alert("로그아웃 되었습니다.");
    navigate("/");
  };
  const handleClickCreateNote = async () => {
    const note = await createNote({ title: "", content: "" });
    navigate(`/notes/${note.id}`);
  };
  const { notes } = useNotes();
  if (!notes) {
    return null;
  }

  return (
    <NotesIndexTemplate
      notes={notes}
      currentUserMail={props.currentUser.email}
      onClickCreateNote={handleClickCreateNote}
      onClickLogout={handleLogout}
    />
  );
});
