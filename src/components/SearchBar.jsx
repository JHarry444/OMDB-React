import {
  InputGroup, FormControl, Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchBar = ({ searchFunc, handleChange, searchTerm }) => (
  <Form onSubmit={searchFunc}>
    <InputGroup>
      <FormControl
        onChange={handleChange}
        value={searchTerm}
        placeholder="Enter search term here"
      />
      <InputGroup.Append>
        <Button onClick={searchFunc}>Button</Button>
      </InputGroup.Append>
    </InputGroup>
  </Form>
);

SearchBar.propTypes = {
  searchFunc: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default SearchBar;
