import {useContext} from 'react'
import {RecipeContext} from '../context/RecipeContext'
import Recipe from '../components/Recipe'

const RecipeList = () => {
    const {recipe} = useContext(RecipeContext)
    return (
        <div
        className='lg:w-10/12 w-6/12 p-2 mx-auto'
        >
            {recipe.length > 0 ? <h1 className='text-4xl my-5 text-center'>Recipes</h1> : <p className='text-4xl my-5 text-center'>No Recipes</p>}
            <div className='flex flex-wrap justify-center gap-x-2 mt-5 p-2 '>
                {recipe.map(singleRecipe => (
                    <Recipe 
                    key={singleRecipe.idDrink} 
                    recipe={singleRecipe}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecipeList
