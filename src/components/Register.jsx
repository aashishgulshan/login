import React, { useState } from 'react';
export const Register= (props) => {
  const [regData, setRegData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., call an API to register the user
    console.table(regData);
  };
    
    return (
      <>
        <div className='container-lg mx-auto p-5 lg:ml-10'>
          <div className='mb-10'>
              <h1 className='font-bold text-sky-900 text-5xl'>Let’s get started.</h1>
              <p className='my-2'>Enter your credentials to access your account.</p>
          </div>
          <form onSubmit={handleSubmit} class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">First Name *</label>
                <input 
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="firstName" 
                  type="text" 
                  placeholder="First Name"
                  value={regData.firstName} 
                  onChange={handleChange} 
                />
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>

              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="middleName">Middle Name</label>
                <input 
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="middleName" 
                  type="text" 
                  placeholder="Midle Name"
                  value={regData.middleName} 
                  onChange={handleChange}
                />
                
              </div>

              <div class="w-full md:w-1/3 px-3">
                <label class="block tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="lastName">Last Name *</label>
                <input 
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="lastName" 
                  type="text" 
                  placeholder="Last Name"
                  value={regData.lastName} 
                  onChange={handleChange}
                />
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
              {/* Date of birth */}
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label htmlFor="dob" className="block tracking-wide text-gray-900 text-xs font-bold mb-2">Date of birth *</label>
                <input 
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  type="date" 
                  id="dob" 
                  name="dob"
                  value={regData.dateOfBirth} 
                  onChange={handleChange}
                />
              </div>
              {/* gender */}
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label htmlFor="gender" className="block tracking-wide text-gray-900 text-xs font-bold">Gender *</label>
                <div className='w-full flex gap-x-4 mt-2'>
                  <input 
                    type="radio" 
                    name="male" 
                    id="male"
                    value="male"
                    onChange={handleChange}
                  />
                  <label htmlFor="male">Male</label>
                  <input 
                    type="radio" 
                    name="female" 
                    id="female"
                    value="female"
                    onChange={handleChange}
                  />
                  <label htmlFor="female"> Female</label>
                </div>
              </div>
            </div>

            {/* Email and Password */}
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="email">Email Address *</label>
                <input 
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="email" 
                  type="email" 
                  placeholder="Email Address"
                  value={regData.email} 
                  onChange={handleChange} 
                />   
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="phoneNumber">Phone Nummber * </label>
                <input
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="phoneNumber" 
                  type="phoneNumber" 
                  placeholder=" Phone Nummber"
                  value={regData.phoneNumber} 
                  onChange={handleChange}
                />   
              </div>
            </div>

                {/* Password field */}
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="password">Password *</label>
                <input 
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="password" 
                  type="password" 
                  placeholder="Password"
                  value={regData.password} 
                  onChange={handleChange}
                />   
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="confirmPassword">Confirm password * </label>
                <input 
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="confirmPassword" 
                  type="confirmPassword" 
                  placeholder="Confirm password"
                  value={regData.confirmPassword} 
                  onChange={handleChange}
                />   
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-2'>
              <div className="form-group w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <button type="submit" className="py-3 px-5 text-white rounded-full bg-sky-500">Get Started</button>
              </div>
              
            </div>
          </form>
          <div className="w-full px-2 md:mb-0">
                <p className='my-4'>Already have an account? <button onClick={() => props.onFormSwitch('login')} className='text-sky-500'>Log In</button></p>
              </div>
        </div>
      </>
    )
  }