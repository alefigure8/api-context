import {useContext, useState} from 'react'
import {CategoryContext} from '../context/CategoryContext'
import {RecipeContext} from '../context/RecipeContext'

const Form = () => {
    // state
    const [searching, setSearching] = useState({
        name: '',
        category: ''
    })

    // constext
    const {category} = useContext(CategoryContext)
    const {setSearchRecipe, setStartSeaching} = useContext(RecipeContext)
 
    // onChange
    const getData = e =>  {
        setSearching({
            ...searching, 
            [e.target.name] : e.target.value})
            setStartSeaching(true)
    }

    return (
        <form 
            className='w-full p-2'
            onSubmit={ e => {
                e.preventDefault()
                setSearchRecipe(searching)
            }}
        >
            <fieldset className='text-center'>
                <legend>Search</legend>
            </fieldset>
            <div className='flex mt-4 justify-center'>
                <div className='md:w-3/12 w-5/12 p-2'>
                    <input
                        name="name"
                        type="text"
                        placeholder='Ingredient'
                        className='block w-full p-1 border-solid border-gray-400 border-2 rounded-md'
                        onChange={getData}
                    ></input>
                </div>
                <div className='md:w-3/12 w-5/12 p-2'>
                    <select
                        className='block w-full p-1 border-solid border-gray-400 border-2 rounded-md'
                        name="category"
                        onChange={getData}
                    >
                        <option value="">--Select--</option>
                        {category.map(cat => (
                        <option 
                            key={cat.strCategory}
                            value={cat.strCategory}
                        >{cat.strCategory}</option>))}
                    </select>
                </div>
                <div className='md:w-2/12 w-2/12  p-2'>
                    <input 
                        type="submit"
                        className='block w-full bg-lime-600 p-2 cursor-pointer mx-2 text-white rounded-md'
                        value="Search"
                    />
                </div>
            </div>
        </form>
    )
}

export default Form
