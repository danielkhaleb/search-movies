import React from 'react';
import List from '../List';
import moviesJson from "../../../../mock/movies.json"
import renderer from 'react-test-renderer';

describe('List component', () => {

    it('renders correctly', () => {
        const tree = renderer.create(
            <List
                data={moviesJson}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});