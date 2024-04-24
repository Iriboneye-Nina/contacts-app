import React from 'react';
import Navbar from "../components/navigation";
import Layout from "../components/Layout";


const LayoutPage = () => {
  return (
 <>
 <Navbar/>
   <div className="container mx-auto mt-10  justify-center w-96 items-center border border-gray-100 rounded-lg p-4 bg-white  shadow-lg ">
      <h1 className="text-2xl font-bold mb-5">ADD CONTACT FORM</h1>
      
      <Layout/>
      
    </div>
 </>
  
  );
}

export default LayoutPage;

