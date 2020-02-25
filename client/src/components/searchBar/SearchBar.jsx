import React from 'react'
import './searchBar.css';
import { Link } from "react-router-dom";

function SearchBar () {
        return (
                <div className="searchOptions">
                    <ul className="listOptions">
                        <Link to="/movies" className="link">Movie</Link>
                        <Link to="/podcast" className="link">Podcast</Link>
                        <Link to="/music" className="link"> Music</Link>
                        <Link to="/audiobooks" className="link"> Audiobook</Link>
                        <Link to="/musicVideos" className="link"> Music video</Link>
                    </ul>
                </div>
        )
    }


export default SearchBar
