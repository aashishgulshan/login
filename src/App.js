import React, { useState } from 'react';
import Header from "./components/Header";
import {Login} from "./components/Login"
import {Register} from "./components/Register";
import {forgetPassword} from "./components/ForgetPassword";
import Demo from "./components/Demo";
export default function App() {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    // <>
    // <Demo />  
    //   </>
    <>
    <Header />
    {
      currentForm === "login"? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
    </>
  )
}