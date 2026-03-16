import React from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './MainLayout.css'
const MainLayout = () => {
    
    return (
        <>
            <Header />
            <div className="main-layout">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
