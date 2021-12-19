import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

// context
export const CategoryContext = createContext()

// provider
const CategoryProvider = ({children}) => {

    // state
    const [category, setCategory] = useState ([])

    // effect
    useEffect(()=>{
        const getCategory = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const category = await axios(url)
            setCategory(category.data.drinks)
        }
        getCategory()
    }, [])

    return (
        <CategoryContext.Provider
            value={{
                category
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider