import React from "react";
import { moviesData } from "../movieData";
import MovieItem from "./MovieItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWatchLater: []
    };
  }

  removeMovie = movie => {
    this.setState({
      movies: this.state.movies.filter(e => e.id !== movie.id)
    });
  }

  addMovieToWatchLater = movie => {
    if (!this.state.moviesWatchLater.includes(movie)) {
      this.setState({
        moviesWatchLater: [...this.state.moviesWatchLater, movie]
      });
    }
  }

  render() {
    return <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="row">
            {this.state.movies.map(movie => {
              return (
                <div className="col-6 mb-4" key={movie.id}>
                  <MovieItem
                    movie={movie}
                    removeMovie={this.removeMovie}
                    addMovieToWatchLater={this.addMovieToWatchLater}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <p>Watch Later: {this.state.moviesWatchLater.length}</p>
        </div>
      </div>
    </div>
  };
}

export default App;