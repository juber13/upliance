/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

import { setFormData } from '../store/userSlice'
import { useDispatch, useSelector } from 'react-redux';




const Form = () => {
    const [userData, setUserData] = useState({});

    const [formSubmited, setFormSubmited] = useState(false);

    const dispatch = useDispatch();
    const savedFormData = useSelector(store => store.user.formData);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setFormData(userData));
        // console.log(JSON.stringify(formData)); // Check if this throws an error
    }

    const saveToLocaleStorage = () => {
        if (!savedFormData) {
            alert("first Submit the user Info then save to locale");
            return;
        } else {

            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }



    const handleChange = (e) => {
        let newUserId = nanoid(8);
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            userId: newUserId
        }));
    };

    return (
        <>
            <div className="main bg-gray-900 h-auto md:h-screen flex items-center justify-center w-full md:mt-0">
                <div className='bg-black text-white p-1 md:p-5 md:rounded-xl shadow-xl md:max-w-6xl px-3'>

                    <div className="heading text-center md:p-5 mt-[10px] md:mt-0">
                        <h3 className='text-red-800 text-3xl md:text-4xl font-bold'>User Info</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="btn-wrapper grid grid-cols-1 gap-2 md:gap-4  md:grid-cols-2">
                            <div className="login-with-google  px-3 border-gray-700">
                                <div className='flex flex-col gap-3'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="" className='text-xs mb-1'>User Data</label>
                                        <textarea className='p-3 resize-none bg-transparent border border-gray-700 text-xs rounded-md outline-none' type="text" placeholder='user info' cols={40} rows={5} readOnly value={savedFormData ? JSON.stringify(savedFormData) : ""}>

                                        </textarea>
                                    </div>

                                    <div className='flex flex-col'>
                                        <label htmlFor="email" className='text-xs mb-1'>Name</label>
                                        <input className='p-3 bg-transparent border border-gray-700 text-xs rounded-md outline-none' type="text" placeholder='Name' name='name' onChange={handleChange} />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label htmlFor="id" className='text-xs mb-1'>Id</label>
                                        <input className='p-3 bg-transparent border border-gray-700 text-xs rounded-md outline-none' type="text" readOnly placeholder='Id' value={savedFormData ? savedFormData.userId : ""} />
                                    </div>

                                    <div className="flex justify-between items-center mt-4 text-xs">
                                        <button type='button' className='bg-green-700 p-2 px-3 rounded-md w-full hover:bg-green-500' onClick={saveToLocaleStorage}>Save to LocaleStorage</button>
                                    </div>
                                </div>
                            </div>

                            <div className="login-with-email flex flex-col pr-2 ">
                                <div className='form flex flex-col gap-4'>

                                    <div className='flex flex-col'>
                                        <label htmlFor="email" className='text-xs mb-1'>Email</label>
                                        <input className='p-3 bg-black border border-gray-700 text-xs rounded-md outline-none' type="email" placeholder='Email' name='email' onChange={handleChange} />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label htmlFor="email" className='text-xs mb-1'>Phone</label>
                                        <input className='p-3 bg-transparent border border-gray-700 text-xs rounded-md outline-none' type="phone" placeholder='Phone' name='phone' onChange={handleChange} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="email" className='text-xs mb-1'>Address</label>
                                        <textarea className='resize-none p-3  bg-transparent border border-gray-700 text-xs rounded-md outline-none' placeholder='Address' cols={40} rows={5} name='address' onChange={handleChange} ></textarea>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-4 text-xs">
                                    <button className='bg-green-700 p-2 px-3 rounded-md w-full hover:bg-green-500' type='submit'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className='footer mt-4 bg-gray-900 p-4 rounded-md'>
                        <ul className='flex gap-3 text-xs text-gray-400 cursor-pointer flex-wrap'>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Privacy</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Form