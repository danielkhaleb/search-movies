import React, { Component } from 'react';
import SearchInput from '../../components/inputs/SearchInput';
import { getMultipleMovies, getSpecificMovie } from '../../services/api';
import Pagination from "react-js-pagination";
import List from '../../components/list/List';
import Movie from '../../components/movie/Movie';
import {withRouter} from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            movie: [],
            query: '',
            isLoading: false,
            doNotSearchYet: true,
            activePage: 1,
            itemsCountPerPage: 10,
            totalItemsCount: 0,
            pageRangeDisplayed: 5,
            oldQuery: '',
            isSearchSpecific: false
        }
    }

    goToTestRoute() {
        this.props.history.push('/testroute');
    }

    fetchDataList() {
        let pageNumber = this.state.activePage;
        if (this.state.oldQuery !== this.state.query)
            pageNumber = 1;

        this.setState({
            isLoading: true,
            doNotSearchYet: false,
            oldQuery: this.state.query,
            activePage: pageNumber,
            isSearchSpecific: false
        });

        const name = this.state.query.replace(' ', '+')

        getMultipleMovies(name, pageNumber).then((result) => {
            const moviesList = result.data.Search;
            this.setState({
                movies: moviesList,
                isLoading: false,
                totalItemsCount: result.data.totalResults
            });
        }).catch(console.log);

    }

    queryChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    clickSearchPerList(event) {
        return this.fetchDataList();
    }

    fetchDataSpecifc() {
        const pageNumber = 1

        this.setState({
            isLoading: true,
            doNotSearchYet: false,
            oldQuery: this.state.query,
            activePage: pageNumber,
            isSearchSpecific: true,
        });

        const name = this.state.query.replace(' ', '+')

        getSpecificMovie(name).then((result) => {
            this.setState({
                movie: result.data,
                isLoading: false,
            });
        }).catch(console.log);
    }

    clickSearchSpecific() {

        return this.fetchDataSpecifc();
    }

    checkList() {
        return this.state.movies !== undefined && this.state.movies.length > 0;
    }

    pageChange(pageNumber) {
        if (pageNumber === this.state.activePage)
            return;

        this.setState({ activePage: pageNumber }, () => {
            this.fetchDataList();
        });
    }

    checkIsMovieExist(){
        return this.state.movie !== undefined && this.state.movie.Response === "True";
    }

    showListMovies() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <div className="pagination-container is-fullwidth">
                            <nav className="pagination" aria-label="pagination">
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={this.state.itemsCountPerPage}
                                    totalItemsCount={this.state.totalItemsCount}
                                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                                    onChange={this.pageChange.bind(this)}
                                    innerClass="pagination-list"
                                    linkClass="pagination-link"
                                    activeLinkClass="pagination-link is-current"
                                />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <List
                            data={this.state.movies}
                        />
                    </div>
                </div>
            </div>
        );
    }

    notFoundMovies() {
        return (
            <div className="columns">
                <div className="column">
                    <span className="title is-2">Not Found Movies</span>
                </div>
            </div>
        );
    }

    render() {

        return (
            <div className="column is-10 is-offset-1 home">
                <div className="columns">
                    <div className="column is-6">
                        <SearchInput
                            label="Search by movie title"
                            placeholder="Title from movie"
                            onChange={this.queryChange.bind(this)}
                        />
                    </div>
                    <div className="column column is-2">
                        <div className="space"></div>
                        <button onClick={this.clickSearchPerList.bind(this)}
                            className={`btn-search button is-primary ${this.state.isLoading ?
                                "is-loading" : ""}`}>Search list</button>
                    </div>
                    <div className="column column is-2">
                        <div className="space"></div>
                        <button onClick={this.clickSearchSpecific.bind(this)}
                            className={`btn-search button is-primary ${this.state.isLoading ?
                                "is-loading" : ""}`}>Search specific</button>
                    </div>
                    <div className="column column is-2">
                        <div className="space"></div>
                        <button onClick={this.goToTestRoute.bind(this)}
                            className={`btn-search button is-primary`}>test route</button>
                    </div>
                </div>
                {
 
                    !this.state.isSearchSpecific ?
                        this.checkList() ?
                            this.showListMovies()
                            : !this.state.isLoading && !this.state.doNotSearchYet ?
                                this.notFoundMovies()
                                : null
                        : this.checkIsMovieExist() ?
                         <Movie
                            data={this.state.movie}
                        /> : this.notFoundMovies()
                }
            </div>
        );
    }
}
export default withRouter(Home);
