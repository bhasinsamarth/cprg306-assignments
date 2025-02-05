import React from "react";

export default function Item(props) {
    return (
        <div className="px-4 py-2 bg-black border border-gray-200 text-gray-50 m-4 rounded-xl hover:bg-gray-50 hover:text-black">
            <p>Name: {props.name}</p>
            <p>Quantity: {props.quantity}</p>
            <p>Category: {props.category}</p>
        </div>
        
    )
}