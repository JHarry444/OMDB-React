import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import renderer from 'react-test-renderer';
import SearchBar from '../SearchBar';


it('renders without crashing', () => {
  shallow(<SearchBar />);
});

it('matches snapshot', () => {
  const tree = renderer.create(<SearchBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('contains query', () => {
  // const searchBar = mount(<SearchBar searchTerm='bloop' />)
  // expect(searchBar.find('input[type="text"]').text()).toEqual('bloop');
})

