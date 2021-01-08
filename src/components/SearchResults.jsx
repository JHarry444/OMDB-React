import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { v4 as genId } from 'uuid';
import Film from './Film';

const SearchResults = ({ films, getDetails }) => (
  <Container>
    <Row>
      {films.map(({
        Title, Year, Poster, imdbID,
      }) => (
        <Col key={genId()} md="3" sm="4" xs="6">
          <Film
            key={genId()}
            Title={Title}
            Year={Year}
            Poster={Poster}
            imdbID={imdbID}
            getDetails={getDetails}
          />
        </Col>
      ))}
    </Row>
  </Container>
);

SearchResults.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  getDetails: PropTypes.func.isRequired,
};

export default SearchResults;
