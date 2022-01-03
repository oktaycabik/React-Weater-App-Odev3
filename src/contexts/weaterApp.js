/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext } from "react";
import { useState } from "react";
import axios from "axios"
const WeaterApp = createContext();

const WeaterProvider = ({ children }) => {
  const [weater, setWeater] = useState([]);
  const getWeater=async(data)=>{
    const res =await axios(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${data}`,{
        headers:{
            Authorization:"apikey 2aLyOPYgTu5LdGWj3u3J6o:5W9rGwlD2rRVQHiSKP2HYy"
        }
    })
  
    return res.data.result
  }
  const values = {
    weater,
    setWeater,
    getWeater,
  };

  return <WeaterApp.Provider value={values}>{children}</WeaterApp.Provider>;
};

const useWeater = () => useContext(WeaterApp);

export { WeaterProvider, useWeater };
