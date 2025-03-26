import React from "react";

export default function Item(props) {
    return (
        <div className="p-1 hover:text-green-400 selection:text-green-400 selection:bg-green-100 border-b-2 mb-1">
            <p>Name: {props.name}</p>
            <p>Quantity: {props.quantity}</p>
            <p>Category: {props.category}</p>
        </div>
        
    )
}