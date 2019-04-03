import React, { Component } from 'react';
import SearchInput from '../inputs/SearchInput';
import { getMovies } from '../../services/api';
import Pagination from "react-js-pagination";
import List from '../list/List';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            query: '',
            isLoading: false,
            doNotSearchYet: true,
            activePage: 1,
            itemsCountPerPage: 10,
            totalItemsCount: 0,
            pageRangeDisplayed: 5,
            oldQuery: ''
        }
    }

    fetchData() {
        let pageNumber = this.state.activePage;
        if(this.state.oldQuery != this.state.query)
            pageNumber = 1;

        this.setState({
            isLoading: true,
            doNotSearchYet: false,
            oldQuery: this.state.query,
            activePage: pageNumber
        });

        getMovies(this.state.query, pageNumber).then((result) => {
            const moviesList = result.data.Search;
            this.setState({
                movies: moviesList,
                isLoading: false,
                totalItemsCount: result.data.totalResults
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

    clickSearch(event) {
        return this.performSearch();
    }

    performSearch() {
        this.fetchData();
    }

    checkList() {
        return this.state.movies != undefined && this.state.movies.length > 0;
    }

    pageChange(pageNumber) {
        if(pageNumber === this.state.activePage)
            return;

        this.setState({activePage: pageNumber}, () => {
            this.fetchData();
        });
    }

    render() {

        return (
            <div className="column is-10 is-offset-1">
                <div className="columns">
                    <div className="column is-11">
                        <SearchInput
                            label="Search"
                            placeholder="Title from movie"
                            onChange={this.queryChange.bind(this)}
                            onKeyPress={this.getForKey.bind(this)}
                        />
                    </div>
                    <div className="column column is-1">
                        <div className="space"></div>
                        <a onClick={this.performSearch.bind(this)}
                            className={`btn-search button is-primary ${this.state.isLoading ?
                                "is-loading" : ""}`}>Search</a>
                    </div>
                </div>
                {
                    this.checkList() ?
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
                        : !this.state.doNotSearchYet ?
                            <div className="columns">
                                <div className="column">
                                    <span className="title is-2">404 - Not Found Movies</span>
                                </div>
                            </div> : null
                }
            </div>
        );
    }
}
export default Home;