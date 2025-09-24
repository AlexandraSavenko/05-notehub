import type { Note } from "../../types/note"
import css from "./NoteList.module.css"
interface NoteListProps {
  notes: Note[],
  loading: boolean
}
const NoteList: React.FC<NoteListProps> = ({notes, loading}) => {
  return (
    <>
    {loading && <p>Wait, please...</p> }
    {notes && <ul className={css.list}>
	{notes.map(note => <li key={note.id} className={css.listItem}>
    <h2 className={css.title}>{note.title}</h2>
    <p className={css.content}>{note.content}</p>
    <div className={css.footer}>
      <span className={css.tag}>{note.tag}</span>
      <button className={css.button}>Delete</button>
    </div>
  </li>)}
  
</ul>}
    </>
  )
}

export default NoteList
