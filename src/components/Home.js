import "./home.css"
import { useState, useEffect } from "react";
import { Navbar, Section } from "./index";
import axios from "axios";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

const Home = () =>{

    const[topAlbums, setTopAlbums] = useState();
    const[newAlbums, setNewAlbums] = useState();

    useEffect(()=>{
        const asyncFunction = async ()=>{
            const topAlbumsData = await axios.get(`${ENDPOINT}albums/top`);
            setTopAlbums(topAlbumsData.data);

            const newAlbumsData = await axios.get(`${ENDPOINT}albums/new`);
            setNewAlbums(newAlbumsData.data);
        }    
        asyncFunction();
    },[])

    console.log(topAlbums)

    return(
        <>
        <div className="container-home">
            <Navbar />
        </div>
        <div className="hs-container">
            <div className="hs-content">
                <h1>100 Thousand Songs, add-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div className="hs-img-frame">
                <img src="vibrating-headphone 1.png" alt="headphones" />
            </div>
        </div>
        <Section title={"Top Albums"} data={topAlbums} />
        <Section title={"New Albums"}  data={newAlbums} />
        </>
    )
}

export default Home;