import React, { useState } from "react";
import Header from "./components/Header";
import "./css/generics.css";
import "./css/index.scss";
import "./css/header.scss";
import "./css/search.scss";
import SearchBooks from "./components/search/SearchBooks";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <SearchBooks />
      </main>
    </>
  );
}
