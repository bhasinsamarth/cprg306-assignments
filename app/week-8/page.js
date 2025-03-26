"use client"; 
import React from "react";
import { ItemList } from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import { NewItem } from "./new-item";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className='bg-black w-screen h-full pt-3'>
      <div className='bg-gray-800 w-max  h-auto p-5 rounded-md align-middle m-auto'>
        <h1 className='text-3xl text-white font-bold underline text-center mb-5'>Shopping List</h1>
        
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}