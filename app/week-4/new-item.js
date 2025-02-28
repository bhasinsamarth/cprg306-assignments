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
        <div className="bg-gray-800 p-5 rounded-xl w-max h-min flex items-center flex-1 ">
            <button onClick={increment} className=" border-white rounded-md px-1 bg-white mr-1 w-5 text-black disabled:bg-gray-500" disabled={quantity >= 20}>+</button>
            <input type="text" className="bg-white text-black text-center w-20 h- rounded-md" value={quantity} readOnly />
            <button onClick={decrement} className=" rounded-md mx-1 bg-white w-5 text-black disabled:bg-gray-500" disabled={quantity <= 1}>-</button>

            
        </div>
    );


}