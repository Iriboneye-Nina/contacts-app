import React, { useState } from 'react';
import ResponseMessage from '../../components/ResponseMessage';
import { SignUp as SignUpFunction } from '../../api/auth';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [response, setResponse] = useState({
        type: "",
        content: ""
    });
    const [loading, setLoading] = useState(false);
    const [signUpData, setSignUpData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    // const [error, setError] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: ""
    // });

    const handleSignUp = (e) => {
        e.preventDefault();
        setLoading(true);

        SignUpFunction(signUpData)
            .then(response => {
                // Response message
                setResponse({
                    type: "success",
                    content: response.message
                });
                // Timing out the loader
                setTimeout(() => {
                    setLoading(false);
                }, 2000)
                // Clearing the input form
                setSignUpData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                })
                window.location.replace('/auth/signin');
            })
            .catch(error => {
                console.log(error.message);
                // Timing out the loader
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
                // Response message
                setResponse({
                    type: "error",
                    content: error.message
                });
            })

    }

    const handleInputChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='flex flex-col rounded-sm bg-white w-full md:w-1/2 lg:w-1/3 max-w-xl p-10'>
            <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
            <p className='text-center'>Fill in form to create a new account.</p>
            <form onSubmit={handleSignUp} className='flex flex-col mt-6 gap-6 mb-2'>
                <input type="text" required name='firstName' value={signUpData.firstName} onChange={handleInputChange} placeholder="First name" className='px-2 py-3 rounded-md border-2 border-slate-300' />
                <input type="text" required name='lastName' value={signUpData.lastName} onChange={handleInputChange} placeholder="Last Name" className='px-2 py-3 rounded-md border-2 border-slate-300' />
                <input type="email" required name='email' value={signUpData.email} onChange={handleInputChange} placeholder="Email" className='px-2 py-3 rounded-md border-2 border-slate-300' />
                <input type="password" required name='password' value={signUpData.password} onChange={handleInputChange} placeholder="Password" className='px-2 py-3 rounded-md border-2 border-slate-300' />
                <button
                    type="submit"
                    className='px-2 py-3 
                    disabled={loading}
                    rounded-md bg-blue-600 text-white hover:bg-blue-400'
                >
                    {loading && "Signing up..."}
                    {!loading && "Sign Up"}
                </button>
            </form>
            <p className='mb-4'>Already have an account? <Link to="/signin" className='text-blue-500'>Sign In here!</Link></p>
            <ResponseMessage type={response.type} content={response.content} />
        </div>
    )
}

export default SignUp