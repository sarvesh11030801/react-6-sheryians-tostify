"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const page = () => {
  const notify = () => {
    toast("Login Successful")
  }

  return (
    <>
    <button onClick = {notify} className = "bg-blue-600 text-white rounded p-6 m-10">Login</button>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default page