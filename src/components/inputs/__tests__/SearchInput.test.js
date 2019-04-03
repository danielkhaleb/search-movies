import React from 'react';
import SearchInput from '../SearchInput';
import renderer from 'react-test-renderer';

describe('Search input component', () => {

    it('renders correctly', () => {
        const tree = renderer.create(
            <SearchInput
                label="Search"
                placeholder="Title from movie"
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});