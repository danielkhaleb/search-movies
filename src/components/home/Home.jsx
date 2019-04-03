import React, { Component } from 'react';
import SearchInput from '../inputs/SearchInput';
import { getMovies } from '../../services/api';
import List from '../list/List';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            query: '',
            isLoading: false,
        }
    }

    fetchData(query) {
        this.setState({
            isLoading: true,
        });

        getMovies(query).then((result) => {
            const moviesList = result.data.Search;
            this.setState({
                movies: moviesList
            });
            this.setState({
                isLoading: false
            });


        });

    }

    queryChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    getForKey(event) {
        if (event.key === 'Enter')
            return this.performSearch();
    }

    performSearch() {
        const query = this.state.query;
        this.fetchData(query);
    }

    checkList() {
        return this.state.movies.length > 0;
    }

    render() {

        return (
            <div className="column is-10 is-offset-1">
                <div className="columns">
                    <div className="column is-11">
                        <SearchInput
                            label="Buscar"
                            placeholder="Título do filme"
                            onChange={this.queryChange.bind(this)}
                            onKeyPress={this.getForKey.bind(this)}
                        />
                    </div>
                    <div className="column column is-1">
                    <div className="space"></div>
                        <a className={`btn-search button is-primary ${this.state.isLoading ? "is-loading" : ""}`}>Filtrar</a>
                    </div>
                </div>
                {
                    this.checkList() ?
                        <div className="columns">
                            <div className="column">
                                <List
                                    data={this.state.movies}
                                />
                            </div>
                        </div>
                        : null
                }
            </div>
        );
    }
}
export default Home;