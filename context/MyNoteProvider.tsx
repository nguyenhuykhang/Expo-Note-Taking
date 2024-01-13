import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { createContext, useContext, useEffect, useState } from "react"

// interface NoteContextType {
//   notes: any[]; // Replace 'any' with the actual type of your notes array
//   setNotes: React.Dispatch<React.SetStateAction<any[]>>; // Replace 'any' with the actual type of your notes array
//   getNotes: () => Promise<void>;
// }

// const NoteContext = createContext<NoteContextType>({
//   notes: [],
//   setNotes: () => {},
//   getNotes: async () => {},
// });

const NoteContext = createContext('')
const MyNoteProvider = ({children}:any) => {
    const [notes, setNotes] = useState([])

    const getNotes = async () => {
        const result = await AsyncStorage.getItem('data')
        if (result !== null) {
            setNotes(JSON.parse(result))
        }
    }
    useEffect(() => {
        getNotes()
    }, [])
    return (
        <NoteContext.Provider value={{notes, setNotes, getNotes}}>
            {children}
        </NoteContext.Provider>
    )
}
export const useNote = () => useContext(NoteContext)
export default MyNoteProvider