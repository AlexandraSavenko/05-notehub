import { keepPreviousData, useQuery } from "@tanstack/react-query"
import css from "./App.module.css"
import { useEffect, useState } from "react"
import { fetchNotes } from "./services/noteService"
import NoteList from "./components/NoteList/NoteList"
import Pagination from "./components/Pagination/Pagination"
function App() {
const [searchQuery, setSearchQuery] = useState("")
const [page, setPage] = useState(1)
const queryParams = {
  searchQuery,
  page
}
  const {data, isFetching} = useQuery({
    queryKey: ['notes', searchQuery, page],
    queryFn: () => fetchNotes(queryParams),
    placeholderData: keepPreviousData
  })
useEffect(() => {console.log(page)}, [page])
const notes = data?.notes ?? [] 
const totalPages = data?.totalPages ?? 1

  return (
    <div className={css.app}>
	<header className={css.toolbar}>
		{/* Компонент SearchBox */}
		{/* Кнопка створення нотатки */}
    <Pagination itemsPerPage={notes.length} totalPages={totalPages} setPage={setPage}/>
  </header>
  <NoteList notes={notes} loading={isFetching}/>
</div>
  )
}

export default App
