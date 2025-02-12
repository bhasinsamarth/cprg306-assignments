import React from "react";

export default function Item(props) {
    return (
        <div className="px-2 py-2 text-gray-500 hover:text-slate-50 hover:bg-black-500 hover:border-gray-500 hover:border-2 rounded-xl selection:text-green-300 m-4">
            <p>Name: {props.name}</p>
            <p>Quantity: {props.quantity}</p>
            <p>Category: {props.category}</p>
        </div>
        
    )
}