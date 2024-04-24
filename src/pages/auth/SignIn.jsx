                                       import React, { useState } from 'react'
import ResponseMessage from '../../components/ResponseMessage';
import { SignIn as SignInFunction } from '../../api/auth';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [response, setResponse] = useState({
        type: "",
        content: ""
    });
    const [loading, setLoading] = useState(false);
    const [SignInData, setSignInData] = useState({
        email: "",
        password: ""
    });

    // const [error, setError] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: ""
    // });

    const handleSignIn = (e) => {
        e.preventDefault();
        setLoading(true);

        SignInFunction(SignInData)
            .then(response => {
                console.log(response);
                // Response message
                setResponse({
                    type: "success",
                    content: "Login successful!"
                });

                // UP NEXT *********************************
                // Setting up the user data to local storage
                localStorage.setItem('user', JSON.stringify(response.user));
                localStorage.setItem('token', response.token);
                // *****************************************

                // Timing out the loader
                setTimeout(() => {
                    setLoading(false);
                }, 2000);

                // Clearing the input form
                setSignInData({
                    email: "",
                    password: ""
                });
                window.location.replace('/contacts');
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
        setSignInData({
            ...SignInData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='flex flex-col rounded-sm bg-white w-full md:w-1/2 lg:w-1/3 max-w-xl p-10'>
            <h1 className='text-2xl font-bold text-center'>Sign In</h1>
            <p className='text-center'>Log in to your account.</p>
            <form onSubmit={handleSignIn} className='flex flex-col mt-6 gap-6 mb-2'>
                <input type="email" required name='email' value={SignInData.email} onChange={handleInputChange} placeholder="Email" className='px-2 py-3 rounded-md border-2 border-slate-300' />
                <input type="password" required name='password' value={SignInData.password} onChange={handleInputChange} placeholder="Password" className='px-2 py-3 rounded-md border-2 border-slate-300' />
                <button
                    type="submit"
                    className='px-2 py-3 
                    disabled={loading}
                    rounded-md bg-blue-600 text-white hover:bg-blue-400'
                >
                    {loading && "Signing in..."}
                    {!loading && "Sign In"}
                </button>
            </form>
            <p className='mb-4'>Doesn't have an account? <Link to="/signup" className='text-blue-500'>Sign Up here!</Link></p>
            <ResponseMessage type={response.type} content={response.content} />
        </div>
    )
}

export default SignIn