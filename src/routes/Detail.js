import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"
import Home from './Home';
const Detail = () => {
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const [val, setVal] = useState({})
    const getMovie = async () => {
        const json = await (
            await fetch(`https:yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setVal(json.data.movie)
    }
    useEffect(() => {
        getMovie()
        setLoading(false)
    }
        , []
    )
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <h1><div style={{ color: "Blue" }}><span style={{ color: "Black" }}>Title</span>:{val.title}</div></h1>

                    <img src={val.medium_cover_image} alt={val.id}></img>
                    <h1>Rating:{val.rating}</h1>
                    <ul>
                        {val.genres && val.genres.map((item, idx) =>
                            <li key={idx}>
                                {item}
                            </li>
                        )}
                    </ul>
                    <Link to="/"> <button> To Home</button></Link >
                </div>
            }

        </div >
    );
};

export default Detail;