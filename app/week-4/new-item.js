"use client";
import React from "react";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);


    function increment() {
        setQuantity(quantity + 1);
        if (quantity >= 20) {
            setQuantity(20);
        }
    }

    function decrement() {
        setQuantity(quantity - 1);
        if (quantity <= 1) {
            setQuantity(1);
        }
    }

    return (
        <div className="bg-gray-200 p-5 rounded-xl w-max h-min display:flex items-center flex-1 ">
            <button onClick={increment} className="px-5 py-5 border-2 border-black rounded-xl m-5" disabled={quantity >= 20}>+</button>
            <button onClick={decrement} className="px-5 py-5 border-2 border-black rounded-xl m-5" disabled={quantity <= 1}>- </button>

            <p className="text-xl text-center">Quantity: {quantity}</p>
        </div>
    );


}