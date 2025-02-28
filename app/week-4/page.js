import React from "react";
import NewItem from "./new-item";


export default function Page() {
    return (
        <main className='bg-black text-white w-screen h-screen pt-3'>
            <div className='bg-gray-800 w-max  h-auto p-5 rounded-md align-middle m-auto'>
            <h1 className="text-white text-3xl font-bold underline text-center pt-3">Counter</h1>
            <NewItem />
            </div>
            
        </main>
        );
     }