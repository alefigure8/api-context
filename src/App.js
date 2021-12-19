import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import RecipeList from './components/RecipeList'

import CategoryProvider from './context/CategoryContext'
import RecipeProvider from './context/RecipeContext'
import ModalProvider from './context/ModelContext'

function App() {
  return (
    <CategoryProvider>
      <RecipeProvider>
        <ModalProvider>
          <Header />
          <div className='md:w-4/6 px-4 mx-auto mt-5 min-w-full'>
            <div className='flex justify-center'>
              <Form />
            </div>
            <RecipeList />
          </div>
        </ModalProvider>
      </RecipeProvider>
    </CategoryProvider>
  );
}

export default App;
