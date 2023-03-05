import axios from 'axios';
import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, logout }) => {
  const { setIsClicked, initialState } = useStateContext();
  const logoutUser = async()=>{
    await axios.get('/logout').then(()=>{
      window.open('http://localhost:3000/', '_self')
    }).catch(() => console.log("cant log out"))
  }
  return (
    <button
      type="button"
      onClick={() => {setIsClicked(initialState); if(logout)logoutUser()}}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
