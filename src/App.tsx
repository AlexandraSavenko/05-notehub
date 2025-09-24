import { keepPreviousData, useQuery } from "@tanstack/react-query"
import css from "./App.module.css"
import { useState } from "react"
import { fetchNotes } from "./services/noteService"
import NoteList from "./components/NoteList/NoteList"
function App() {
const [searchQuery, setSearchQuery] = useState("personal")
  const {data, isFetching} = useQuery({
    queryKey: ['notes', searchQuery],
    queryFn: () => fetchNotes(searchQuery),
    placeholderData: keepPreviousData
  })
const notes = data?.notes ?? [] 
  return (
    <div className={css.app}>
	<header className={css.toolbar}>
		{/* Компонент SearchBox */}
		{/* Пагінація */}
		{/* Кнопка створення нотатки */}
    <NoteList notes={notes} loading={isFetching}/>
  </header>
</div>
  )
}

export default App
