"use client";

import React from "react";
import Item from "./item";
import { useState } from "react";

import items from "./items.json";



export function ItemList()
{

    let itemList = [...items]; //copy of items

    const [sortBy, setSortBy] = useState("name");
    
    const sortedItems = itemList.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    }
    );
   

      
    return(
        <div>
          
          {/* sort by name or category */}
          <label >Sort by:
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="text-black ml-2">  
            <option value="name" className="text-black">Name</option>
            <option value="category" className="text-black">Category</option>
          </select>
          </label>

          {/* display items */}
          <ul>
            {itemList.map((sortedItems) => (
              <Item key={sortedItems.id} name={sortedItems.name} quantity={sortedItems.quantity} category={sortedItems.category} />
            ))}
          </ul>
          

          
            
        </div>

    )
};
    