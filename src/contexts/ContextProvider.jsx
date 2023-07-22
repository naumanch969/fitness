import { createContext, useContext, useState } from 'react'


const StateContext = createContext()


export const ContextProvider = ({ children }) => {

    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')
    const [searchQuery, setSearchQuery] = useState("all")
    const [noSearchMatched, setNoSearchMatched] = useState(false)




    return (
        <StateContext.Provider
            value={{
                exercises, setExercises,
                bodyPart, setBodyPart,
                noSearchMatched, setNoSearchMatched,
                searchQuery, setSearchQuery,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}



export const useStateContext = () => useContext(StateContext)