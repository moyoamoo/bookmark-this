import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./css/generics.css";
import "./css/index.scss";
import "./css/header.scss";
import "./css/search.scss";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Search from "./components/search/Search";
import Index from "./components/account/Index";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setMessage, selectMessage } from "./redux/accountSlice";

export default function App() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!message) return; //if no message return
    toast(message);

    setTimeout(() => {
      //clear message
      dispatch(setMessage(""));
    }, 3000);
  }, [message]);

  return (
    <>
      <ToastContainer />
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="account" element={<Index />} />
      </Routes>
    </>
  );
}
