import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const ModalContext = createContext()

const ModelProvider = ({children}) => {

    const [idRecipe, setIdRecipe] = useState(null)
    const [singleRecipe, setSingleRecipe]=useState({})

    useEffect(()=>{
       if(idRecipe) {
        const getRecipe = async ()=>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
            const recipeById = await axios(url)
            setSingleRecipe(recipeById.data.drinks[0])
        }
        getRecipe()
       }
    }, [idRecipe])

    return (
        <ModalContext.Provider
            value={{
                singleRecipe,
                setIdRecipe,
                setSingleRecipe
            }}
        >
            {children}
        </ModalContext.Provider>
        
    )
}

export default ModelProvider
