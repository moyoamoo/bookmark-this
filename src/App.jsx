import React, { useState } from "react";
import Header from "./components/Header";
import "./css/generics.css";
import "./css/index.scss";
import "./css/header.scss";
import "./css/search.scss";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Search from "./components/search/Search";
import Index from "./components/account/Index";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="account" element={<Index />} />
      </Routes>
    </>
  );
}
