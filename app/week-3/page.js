import React from "react";
import { ItemList } from "./item-list";
import Item from "./item";

export default function Page() {
    return (
      <main className="bg-black text-white h-width w-screen">
        <h1 style={{fontSize: 24}}>Shopping List</h1>
        <ItemList />
      </main>
    );
  }