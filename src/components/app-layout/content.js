import React from 'react';
import { Routes, Route } from "react-router-dom";
import Countries from "../countries";
import Country from "../country";

const Content = () => {
    return (
      <Countries/>
      // <Routes>
      //   <Route path="/" exact element={<Countries/>}/>
      //   <Route path="/countries:name" exact element={<Country/>}/>
      // </Routes>
    );
}

export default Content;
