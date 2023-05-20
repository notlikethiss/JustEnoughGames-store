import React from 'react'

//pages
import HomePage from './pages/Home/HomePage'
import StorePage from './pages/Store/StorePage'
import NotFoundPage from './pages/NotFound/NotFoundPage'

//components
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'

const App:React.FC = () => {

  return (
    <>
    
      <Header/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/store' element={<StorePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/products/:id' element=''/>
      </Routes>
    
    </>
  )
}

export default App