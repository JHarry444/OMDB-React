import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';

const Search = () => {
  const { push } = useHistory();

  const [searchTerm, setSearchTerm] = useState('');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    axios.get(`http://www.omdbapi.com/?apikey=335035be&s=${searchTerm}`)
      .then((response) => {
        if (response.data.Error) {
          setError(response.data.Error);
        } else {
          setFilms(response.data.Search);
          setError('');
        }
      }).catch((err) => {
        setError(err);
      });
  };

  const getDetails = (id) => {
    push(`/details/${id}`);
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        handleChange={(e) => setSearchTerm(e.target.value)}
        searchFunc={handleSearch}
      />
      {error
        ? (
          <Alert variant="danger" onClose={() => setError('')} dismissible>
            <Alert.Heading>{error}</Alert.Heading>
          </Alert>
        )
        : <SearchResults films={films} getDetails={getDetails} />}
    </div>
  );
};

export default Search;
