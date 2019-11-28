import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import Weather from './Weather';
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
    temp: ''
  };

  getMovies = async() => {
    const {
      data: {
        data:{ movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies });
  };

  componentDidMount(){
    this.getMovies().then(async() => {
      const {
        data: {
          main:{ temp }
        }
      } = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=59f4bd23fcf43a0f883bdebcbbd922f5');
      this.setState({ temp, isLoading: false })
    });
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading 
        ? <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> 
        :(
          <div className="nothing">
              <div className="movies">
                {movies.map(movie => (
                  <Movie 
                    key = {movie.id}
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                  ))
                }
              </div>
              <Weather temp={this.state.temp}/>
          </div>
          )
        }
      </section>
    );
  }
}

export default App;
