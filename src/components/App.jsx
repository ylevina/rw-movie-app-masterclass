import React from "react";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import { API_URL, API_KEY_3 } from "../utils/api";
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWatchLater: [],
      sort_by: "popularity.desc"
    };
  }

  componentDidMount() {
    this.getMovies();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  };

  getMovies() {
    Axios
      .get(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&language=en-US`)
      .then((response) => {
        this.setState({
          movies: response.data.results
        });
      })
      .catch(error => console.log(error));
  };

  removeMovie = movie => {
    this.setState({
      movies: this.state.movies.filter(e => e.id !== movie.id)
    });
  };

  addMovieToWatchLater = movie => {
    this.setState({
      moviesWatchLater: [...this.state.moviesWatchLater, movie]
    });
  };

  removeMovieFromWatchLater = movie => {
    this.setState({
      moviesWatchLater: this.state.moviesWatchLater.filter(e => e.id !== movie.id)
    });
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };

  render() {
    return <div className="container">
      <div className="row mt-4">
        <div className="col-9">
          <div className="row mb-4">
            <div className="col-12">
              <MovieTabs
                sort_by={this.state.sort_by}
                updateSortBy={this.updateSortBy}
              />
            </div>
          </div>
          <div className="row">
            {this.state.movies.map(movie => {
              return (
                <div className="col-6 mb-4" key={movie.id}>
                  <MovieItem
                    movie={movie}
                    removeMovie={this.removeMovie}
                    addMovieToWatchLater={this.addMovieToWatchLater}
                    removeMovieFromWatchLater={this.removeMovieFromWatchLater}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="row">
          
        </div>
        <div className="col-3">
          <p>Watch Later: {this.state.moviesWatchLater.length} movies</p>
        </div>
      </div>
    </div>
  };
}

export default App;