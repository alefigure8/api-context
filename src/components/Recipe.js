import {useContext, useState} from 'react'
import {ModalContext} from '../context/ModelContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 5,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({recipe}) => {

    const {setIdRecipe, singleRecipe, setSingleRecipe} = useContext(ModalContext)

    // modal
    const [ modalStyle ] = useState(getModalStyle)
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const seeIngredients = (singleRecipe) =>{
        let ingredientsLi = []
        for (let i = 1; i <=15 ; i++) {
            if(singleRecipe[`strIngredient${i}`]){
                ingredientsLi.push(<li>{ singleRecipe[`strIngredient${i}`] } {' - '}{ singleRecipe[`strMeasure${i}`] }</li>)
            }
        }
        return ingredientsLi
    }


    return (

        <div
            className='lg:w-3/12 bg-lime-200 border-4 border-solid border-lime-200 block mb-3 rounded-md shadow-xl'
        >
                <h2
                className='text-center font-bold text-2xl my-2'>
                    {recipe.strDrink}
                </h2>
                <img src={recipe.strDrinkThumb} alt={recipe.strDrink}/>
                <button
                    className='bg-lime-700 hover:bg-lime-600 p-2 my-4 block mx-auto w-10/12 text-white rounded-sm duration-300 transition-all'
                    onClick={ e => {
                        e.preventDefault()
                        setIdRecipe(recipe.idDrink)
                        handleOpen()
                    }}
                >Recipe</button>
                <Modal
                    open={open}
                    onClick={ e => {
                        setIdRecipe(null)
                        handleClose()
                        setSingleRecipe({})
                    }}
                >
                    <div
                        style={modalStyle}
                        className={classes.paper}
                    >
                        <h1 className='text-2xl text-center'>{singleRecipe.strDrink}</h1>
                        <h3 className='mt-4 text-xl'>{singleRecipe?.strDrink && 'Instruction'}</h3>
                        <p>{singleRecipe.strInstructions}</p>
                        <img className="w-auto mt-4" src={singleRecipe.strDrinkThumb} alt={singleRecipe.strDrink}/>
                        <h3 className='mt-4 text-xl'>{singleRecipe?.strDrink && 'Ingredients'}</h3>
                        <ul>
                            {seeIngredients(singleRecipe)}
                        </ul>

                    </div>
                </Modal>
        </div>
    )
}

export default Recipe
