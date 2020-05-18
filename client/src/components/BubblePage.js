import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

export const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const fetchColors = () => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
    .then(res => {
        setColorList(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
   fetchColors();
  }, [])

  return (
    <>
      <ColorList colors={colorList} fetchColors={fetchColors}  />
      <Bubbles colors={colorList} />
    </>
  );
};

