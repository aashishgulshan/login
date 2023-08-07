import React, { useState } from 'react';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.table(email, password);
    };

    return (
        <>
    <div className='container-lg mx-auto p-5 lg:ml-10'>
        <div className='mb-8'>
            <h1 className='font-bold text-sky-900 text-5xl'>Welcome</h1>
            <p className='my-2'>Welcome We’ll sign you into your account.</p>
        </div>

        <form onSubmit={handleSubmit} className ="w-full max-w-lg">
            <div className="w-full px-3 my-5 md:mb-0">
                <label className="block tracking-wide text-gray-900 text-s font-bold mb-2" htmlFor="email">Email address *</label>
                <input 
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="email" 
                    type="email" 
                    name="email"
                    placeholder="Please enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />   
            </div>
            <div className="w-full px-3 my-10 md:mb-0">
                <div className='flex justify-between'>
                <label className="block tracking-wide text-gray-900 text-s font-bold mb-2" htmlFor="password">Password *</label>
                <button onClick={() => props.onFormSwitch('forgetPassword')} className="block tracking-wide text-sky-500 text-s font-bold mb-2">Forgot password?</button>
                </div>
                <input 
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="password" 
                    type="password" 
                    name="password"
                    placeholder="Please enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />   
            </div>

            <div className='flex flex-wrap -mx-3  md:mt-10 justify-between'>
                <div className="form-group mb-6 md:mb-0">
                    <button type="submit" className="py-3 px-8 text-white rounded-3xl font-bold bg-sky-500">Log In</button>
                </div>
            </div>
        </form>
        <div className="w-full px-2 md:mb-0">
            <p className='md:my-4 tracking-wide text-gray-900 text-s font-bold'>Don’t have an account? Get started <button onClick={() => props.onFormSwitch('Register')} className='text-sky-500'> here</button></p>
        </div>
    </div>
    </>
    )
  }