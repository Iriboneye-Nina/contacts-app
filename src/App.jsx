import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import AuthPages from './pages/auth/AuthPages';
import Display from "./pages/Display"
import Upadate from "./pages/Upadate"
import Detail from "./pages/Detail"

import LayoutPage from "./pages/LayoutPage";
function App() {
  return (
    <BrowserRouter>
       <Routes>
        
        {/* Authentication pages  */}

        <Route path="/" element={<AuthPages />} >
          <Route path="" element={<SignIn />} />

          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      
       
        <Route path="/" element={<LayoutPage/>} />
        <Route path="/contacts" element={<Display/>} />
         {/* <Route path='/login' element={!userToken ? <SignIn /> : <Navigate replace to={'/'} />} />  */}
        {/* Update the route to accept a parameter */}
        <Route path="/update/:contactId" element={<Upadate />} />
        {/* Update the route to accept a parameter */}
        <Route path="/details/:contactId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

