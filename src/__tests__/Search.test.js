import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Search from '../Search';


it('renders without crashing', () => {
  shallow(<Search/>);
});

it('matches snapshot', () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('has query', () => {
    const search = shallow(<Search/>);
    expect
})

