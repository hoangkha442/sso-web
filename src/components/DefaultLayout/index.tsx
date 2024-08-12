import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function DefaultLayout() {
  return (
    <>
    <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer />
    </>
  )
}