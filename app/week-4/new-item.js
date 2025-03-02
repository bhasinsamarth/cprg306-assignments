"use client";

import React from "react";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);


    function increment() {
        setQuantity(quantity + 1);
    
    }

    function decrement() {
        setQuantity(quantity - 1);
        
    }

    return (
        <div className="bg-gray-800 p-5 rounded-xl w-min h-min flex flex-1 content-center ">
            <button onClick={increment} className=" rounded-md bg-white w-5 text-black disabled:bg-gray-500" disabled={quantity >= 20}>+</button>
            <input type="text" className="bg-white text-black text-center w-20 h-max rounded-md mx-1" value={quantity} readOnly />
            <button onClick={decrement} className=" rounded-md bg-white w-5 text-black disabled:bg-gray-500" disabled={quantity <= 1}>-</button>


        </div>
    );


}