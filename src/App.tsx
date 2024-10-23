import React from 'react'

//pages
import HomePage from './pages/Home/HomePage'
import StorePage from './pages/Store/StorePage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import ProductPage from './pages/ProductPage/ProductPage'

//components
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
    return (
        <div className="root-wrapper">
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/products/:name" element={<ProductPage />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
