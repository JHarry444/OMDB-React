import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Film = ({
  Poster, Title, Year, imdbID, getDetails,
}) => (
  <Card>
    <Card.Img variant="top" src={Poster} />
    <Card.Body>
      <Card.Title>{Title}</Card.Title>
      <Card.Subtitle>
        Year:
        {' '}
        {Year}
      </Card.Subtitle>
      <Button variant="primary" onClick={() => getDetails(imdbID)}>Details</Button>
    </Card.Body>
  </Card>
);

Film.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  getDetails: PropTypes.func.isRequired,
};

export default Film;
