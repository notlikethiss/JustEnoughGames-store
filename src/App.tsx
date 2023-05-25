import React from 'react'

//pages
import HomePage from './pages/Home/HomePage'
import StorePage from './pages/Store/StorePage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import ProductPage from './pages/ProductPage/ProductPage'

//components
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'

const App:React.FC = () => {

  return (
    <>
    
      <Header/>

      <Routes>
        <Route path='/' element={<StorePage/>}/>
        <Route path='/store' element={<StorePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/products/:id' element={<ProductPage />}/>
      </Routes>
    
    </>
  )
}

export default App