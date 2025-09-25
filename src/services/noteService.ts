import api from "../api/api"
import type { Note, NoteFormValues } from "../types/note"

interface FetchNotesResponse {
    notes: Note[],
    totalPages: number
}
interface FetchNotesParams {
    searchQuery: string,
    page: number
}
export const fetchNotes = async ({searchQuery, page}: FetchNotesParams): Promise<FetchNotesResponse> => {
    const searchParams: Record<string, string> = {}
    if(searchQuery) searchParams.search = searchQuery
    if(page) searchParams.page = page.toString()
    const query = new URLSearchParams(searchParams)
const res = await api.get<FetchNotesResponse>(`/notes?${query}`);
return res.data
}

export const createNote = async (newNote: NoteFormValues) => {
    const res = await api.post<FetchNotesResponse>('/notes', newNote);
    return res.data
}
export const deleteNote = async () => {
    
}