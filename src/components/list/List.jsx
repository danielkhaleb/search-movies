import React, { Component } from 'react';

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({
            data: this.props.data
        });

        this.state.data.forEach(element => {
            element.IsActive = false;
        });
    }

    listDetails(source) {
        return (
            <div className="column">
                <div className="card card-movie">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={source.Poster} alt="Poster do Filme" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-6">Título: {source.Title}</p>

                        </div>
                        <div class="content">
                        <br/>
                            <p className="subtitle is-7">Tipo: {source.Type}</p>
                            <p className="subtitle is-7">Ano: {source.Year}</p>
                            <p className="subtitle is-7">Imdb Id: {source.imdbID}</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    render() {
        const topFive = this.state.data.map((source, index) => {
            if (index < 5) {
                return (this.listDetails(source));
            }

        });

        const lastFive = this.state.data.map((source, index) => {
            if (index > 4) {
                return (this.listDetails(source));
            }

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
