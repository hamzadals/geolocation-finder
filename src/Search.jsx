import React, { useState, useEffect } from "react";
import "./styles.css";
import Output from "./Output";
import Map1 from "./Map1";
// import IPGeolocationAPI from 'ip-geolocation-api-javascript-sdk'

const Search = () => {
  const [input, setInput] = useState("");
  const [ip, setIp] = useState(null);
  const [country, setCountry] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const[lat,setLat]=useState("30.3894007")
  const[lng,setLng]=useState("69.3532207")
const [flag,setFlag]=useState(false)
  // console.log(lat)
  //     console.log(lng)
  // var ipgeolocationApi = new IPGeolocationAPI("2f4d3f38d66c4c09a3edac064f613acb", false);
  
  useEffect(() => {

    async function fetchMyAPI() {
      if(flag){
      const url = `https://api.ipgeolocation.io/ipgeo?apiKey=2f4d3f38d66c4c09a3edac064f613acb&ip=${ip}&lang=en`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      // console.log(data.latitude)
      // console.log(data.longitude)
      setCountry(data.country_name);
      setTimezone(data.time_zone);
      setIsp(data.isp);  
setLat(data.latitude);
setLng(data.longitude);
setFlag(false)
      }

    }
  
    fetchMyAPI();
    
  }, [ip,flag]);
  // const handleInput = (e) => {
  //   setIp(e.target.value)
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIp(input);
setFlag(true)
    setInput(null);
  };
  return (
    <>
      <div className="search">
        <div className="con">
          <h1>Ip Address Tracker</h1>
         <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for any ip address or domain"
            type="text"
          />
          <button onClick={handleSubmit}>
            <svg xmlns="https://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                stroke-width="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </button>
          </form>
        </div>
      </div>
      <Output ip={ip} country={country} {...timezone} isp={isp} />
      <Map1 lat={lat} lng={lng}/>
    </>
  );
};
export default Search;
