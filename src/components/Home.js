import "./home.css"
import { useState, useEffect } from "react";
import { Navbar, Section, FilterSection } from "./index";
import axios from "axios";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

const Home = () =>{

    const[topAlbums, setTopAlbums] = useState([]);
    const[newAlbums, setNewAlbums] = useState([]);
    const[songs, setSongs] = useState([]);
    const[filteredSongs, setFilteredSongs] = useState([]);
    const[genres, setGenres] = useState([]);


    useEffect(()=>{
        const asyncFunction = async ()=>{
            const topAlbumsData = await axios.get(`${ENDPOINT}albums/top`);
            setTopAlbums(topAlbumsData.data);

            const newAlbumsData = await axios.get(`${ENDPOINT}albums/new`);
            setNewAlbums(newAlbumsData.data);

            const filterSongsData = await axios.get(`${ENDPOINT}songs`);
            setSongs(filterSongsData.data);
            setFilteredSongs(filterSongsData.data);

            const filterGenres = await axios.get(`${ENDPOINT}genres`);
            setGenres([{"key": "all", "label": "All"},...filterGenres.data.data]);
        }    
        asyncFunction();
    },[])

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
        <Section navId="ta" title={"Top Albums"} data={topAlbums} />
        <Section navId="na" title={"New Albums"}  data={newAlbums} />
        <FilterSection navId="fa" title={"Songs"}  data={filteredSongs} filters={genres}
            executeFilter={(genre)=>{
                if(genre === "all"){
                    setFilteredSongs(songs);
                }
                else{
                    setFilteredSongs(songs.filter((song)=>{
                        return song.genre.key === genre;
                    }))
                }
            }}
         />
        </>
    )
}

export default Home;