import React, { Component } from 'react';

class List extends Component {

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
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    render() {
        const topFive = this.props.data.map((source, index) => {
            if (index < 5) {
                return (this.listDetails(source));
            }
            return null;

        });

        const lastFive = this.props.data.map((source, index) => {
            if (index > 4) {
                return (this.listDetails(source));
            }
            return null;

        });

        return (
            <div>
                <div className="columns">
                    {topFive}
                </div>
                <div className="columns">
                    {lastFive}
                </div>
            </div>
        );
    }
}
export default List;
