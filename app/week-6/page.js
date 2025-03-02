import React from "react";
import { ItemList } from "./item-list";
import Item from "./item";

export default function Page() {
    return (
      <main className='bg-black text-white w-screen h-full pt-3'>
        <div className='bg-gray-800 w-max  h-auto p-5 rounded-md align-middle m-auto'>
          <h1 className='text-3xl font-bold underline text-center mb-5'>Shopping List</h1>
          <ItemList />
        </div>
      </main>
    );
  }