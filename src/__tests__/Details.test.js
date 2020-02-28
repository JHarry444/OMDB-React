import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Details from '../Details';

it('renders the damn component', () => {
  const details = renderer.create(<Details/>);
  expect(details).toMatchSnapshot();
})


it('renders without crashing', () => {
  const details = shallow(<Details />);
  expect(details).toMatchSnapshot();
});

it('renders film correctly', () => {
  const tree = mount(<Details match={{ params: { id: 'tt0389790' } }} />);
  expect(tree).toMatchSnapshot();
});


