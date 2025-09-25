import { keepPreviousData, useQuery } from "@tanstack/react-query"
import css from "./App.module.css"
import { useState } from "react"
import { fetchNotes } from "./services/noteService"
import NoteList from "./components/NoteList/NoteList"
import Pagination from "./components/Pagination/Pagination"
import Modal from "./components/Modal/Modal"
function App() {
const [searchQuery, setSearchQuery] = useState("")
const [isModalOpen, setIsModalOpen] = useState(false)
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
const notes = data?.notes ?? [] 
const totalPages = data?.totalPages ?? 1
const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false)
  return (
    <div className={css.app}>
	<header className={css.toolbar}>
		{/* Компонент SearchBox */}
    <Pagination totalPages={totalPages} setPage={setPage}/>
    <button onClick={openModal} className={css.button}>Create note +</button>
  </header>
  <NoteList notes={notes} loading={isFetching}/>
  {isModalOpen && <Modal onClose={closeModal}/>}
</div>
  )
}

export default App
