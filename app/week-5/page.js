import React from "react";
import NewItem from "./new-item";


export default function Page() {
    return (
        <main className='bg-black w-screen h-screen pt-3 text-black'>
            <div className='bg-gray-800 w-max h-auto p-5 rounded-md align-middle m-auto'>
                <NewItem />
            </div>
            
        </main>
        );
     }