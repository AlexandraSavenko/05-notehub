import api from "../api/api"
import type { Note } from "../types/note"

interface FetchNotesResponse {
    notes: Note[]
}
export const fetchNotes = async (search: string) => {
const res = await api.get<FetchNotesResponse>("/notes", {
    params: {
        search 
    }
});
return res.data
}

export const createNote = async () => {
    
}
export const deleteNote = async () => {
    
}