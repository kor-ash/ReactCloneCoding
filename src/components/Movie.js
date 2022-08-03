import React from 'react';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
const Movie = ({ id, coverImg, title, summary, genres }) => {
    return (
        <div>
            <li>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <img src={coverImg} alt={title} />
                <ul>
                    {genres.map((genre, idx) => <li key={idx}> {genre}</li>)}
                </ul>
                <p>
                    {summary}
                </p>
            </li>
        </div>
    );
};
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

}
export default Movie;