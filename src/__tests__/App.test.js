import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import App from '../App';

it('renders the damn component', () => {
  const app = renderer.create(<App/>);
  expect(app).toMatchSnapshot();
})


it('renders without crashing', () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});

it('renders film correctly', () => {
  const tree = mount(<App match={{ params: { id: 'tt0389790' } }} />);
  expect(tree).toMatchSnapshot();
});


