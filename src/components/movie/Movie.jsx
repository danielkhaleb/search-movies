import React, { Component } from 'react';

class Movie extends Component {

    listDetails(source) {
        return (
            <div className="column">
                <div className="card card-movie">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            {
                                source.Poster === undefined || source.Poster === "N/A" ?
                                    // eslint-disable-next-line
                                    <img src={require('../../utils/imgs/image-not-found.gif')} alt="Image not found" />
                                    :
                                    // eslint-disable-next-line 
                                    <img src={source.Poster} alt="Image of movie" />
                            }
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-6">Title: {source.Title}</p>

                        </div>
                        <div class="content">
                            <br />
                            <p className="subtitle is-7">Type: {source.Type}</p>
                            <p className="subtitle is-7">Year: {source.Year}</p>
                            <p className="subtitle is-7">Imdb Id: {source.imdbID}</p>
                            <p className="subtitle is-7">Rated: {source.Rated}</p>
                            <p className="subtitle is-7">Released: {source.Released}</p>
                            <p className="subtitle is-7">Runtime: {source.Runtime}</p>
                            <p className="subtitle is-7">Genre: {source.Genre}</p>
                            <p className="subtitle is-7">Director: {source.Director}</p>
                            <p className="subtitle is-7">Writer: {source.Writer}</p>
                            <p className="subtitle is-7">Actors: {source.Actors}</p>
                            <p className="subtitle is-7">Plot: {source.Plot}</p>
                            <p className="subtitle is-7">Language: {source.Language}</p>
                            <p className="subtitle is-7">Country: {source.Country}</p>
                            <p className="subtitle is-7">Awards: {source.Awards}</p>
                            <p className="subtitle is-7">Metascore: {source.Metascore}</p>
                            <p className="subtitle is-7">imdb Votes: {source.imdbVotes}</p>
                            <p className="subtitle is-7">BoxOffice: {source.BoxOffice}</p>
                            <p className="subtitle is-7">Production: {source.Production}</p>
                            <p className="subtitle is-7">Website: {source.Website}</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    render() {
        const movie = this.listDetails(this.props.data);
        return (
                <div className="columns">
                    {movie}
                </div>
        );
    }
}
export default Movie;
