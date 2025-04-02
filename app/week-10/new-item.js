    "use client";
    import React from "react";
    import { useState } from "react";

    export  function NewItem({onAddItem}) {
        const [quantity, setQuantity] = useState(1);
        const [name, setName] = useState("");
        const [category, setCategory] = useState("produce");



        const nameChangeHandler = (e) => {
            const newName = e.target.value;
            if (newName.length === 0) {
                alert("Please enter a name");  
            }
            setName(newName);
        }

        function randomId() {
            return Math.floor(Math.random() * 1000000 - Math.random() * 100);
        }
        
        function handleSubmit(e) {
            if (name.length === 0) {
                e.preventDefault();
                // alert("Please enter a name");
                return;
            }
            e.preventDefault();
            onAddItem({id: randomId(),name, quantity, category});
            // alert("Name: " + name + "\nQuantity: " + quantity + "\nCategory: " + category);
            console.log("Name: " + name);
            console.log("Quantity: " + quantity);
            console.log("Category: " + category);
        }

        function increment(e) {
            e.preventDefault();
            setQuantity(quantity + 1);
            
        }

        function decrement(e) {
            e.preventDefault();
            setQuantity(quantity - 1);   
        }

        return (
            <form onSubmit={handleSubmit} className="bg-gray-100 w-96 m-auto p-5 rounded-xl flex flex-col justify-start">
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => nameChangeHandler(e)} />
                </label>
                <label className="flex flex-row ">
                    Quantity: {quantity}
                    <button onClick={(e) => increment(e)} className=" w-7 h-7 border-2 border-black rounded-sm mr-1">+</button>
                    <button onClick={(e) => decrement(e)} className="w-7 h-7 border-2 border-black rounded-sm justify-center" disabled={quantity <= 1}>-</button>
                </label>
                <label>
                    Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="" disabled>Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen-food">Frozen Food</option>
                        <option value="canned-goods">Canned Goods</option>
                        <option value="dry-goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <button className="bg-blue-500 text-white rounded-md p-2 m-2" type="submit">Submit</button>
            </form>
        );


    }