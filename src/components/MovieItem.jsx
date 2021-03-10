import React from 'react-dom';

const MovieItem = props => {
    const { movie, removeMovie, addMovieToWatchLater } = props;
    return (
        <div className="card">
            <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                alt=""
            />
            <div className="card-body">
                <h6 className="card-title">{movie.title}</h6>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">Rating: {movie.vote_average}</p>
                    <button type="button" className="btn btn-secondary" onClick={addMovieToWatchLater.bind(this, movie)}>
                        Watch Later
                </button>
                </div>
                <button onClick={removeMovie.bind(this, movie)}>Delete movie</button>
            </div>
        </div>
    );
};

export default MovieItem;