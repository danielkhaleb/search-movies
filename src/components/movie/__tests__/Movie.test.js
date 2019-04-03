import React from 'react';
import Movie from '../Movie';
import movieJson from "../../../../mock/movie.json"
import renderer from 'react-test-renderer';

describe('Movie component', () => {

    it('renders correctly', () => {
        const tree = renderer.create(
            <Movie
                data={movieJson}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});