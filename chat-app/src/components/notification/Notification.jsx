import React from 'react'
import "react-toastify"
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css"

const Notification = () => {
  return (
    <div>
        <ToastContainer position='button-right'/>
    </div>
  )
}

export default Notification;