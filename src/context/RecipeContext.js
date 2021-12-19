import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const RecipeContext = createContext()

const RecipeProvider = ({children}) => {
    const [recipe, setRecipe] = useState([])
    const [searchRecipe, setSearchRecipe] = useState({
        name: '',
        category: ''
    })
    const [startSearching, setStartSeaching] = useState(false)

    useEffect(() => {
        if(startSearching){
            const getRecipe = async () => {
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchRecipe.name}&c=${searchRecipe.category}`
                    const recipe = await axios(url)
                    setRecipe(recipe.data.drinks)
                    }
                
            getRecipe()
        }
    }, [searchRecipe])

    return (
        <RecipeContext.Provider
            value={{
                recipe,
                setSearchRecipe,
                setStartSeaching
            }}
        >
            {children}
        </RecipeContext.Provider>
        
    )
}

export default RecipeProvider
