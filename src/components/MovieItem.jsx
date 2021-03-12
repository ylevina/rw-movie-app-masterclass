import React from 'react';

class MovieItem extends React.Component {
    constructor() {
        super();

        this.state = {
            watchLater: false
        };
    }

    render() {
        const { movie, removeMovie, addMovieToWatchLater, removeMovieFromWatchLater } = this.props;

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
                        {this.state.watchLater ? 
                        <button 
                            type="button" 
                            className="btn btn-success" 
                            onClick={()=>{
                                this.setState({ watchLater: false });
                                removeMovieFromWatchLater(movie);
                            }}>
                            Remove Watch Later
                        </button> :
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => {
                                    this.setState({ watchLater: true });
                                    addMovieToWatchLater(movie);
                                }}>
                                Watch Later
                            </button>}
                    </div>
                    <button onClick={removeMovie.bind(this, movie)}>Delete movie</button>
                </div>
            </div>
        );
    };
};

export default MovieItem;