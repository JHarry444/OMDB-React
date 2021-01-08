import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Image, Container, Row, Col, Table,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { v4 as genId } from 'uuid';

const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=335035be&i=${id}`)
      .then((response) => setDetails(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Image src={details.Poster} fluid />
        </Col>
        <Col xs={9}>
          <Table striped>
            <tbody>
              <tr>
                <td>Title: </td>
                <td>{details.Title}</td>
              </tr>
              <tr>
                <td>Year: </td>
                <td>{details.Year}</td>
              </tr>
              <tr>
                <td>Rated: </td>
                <td>{details.Rated}</td>
              </tr>
              <tr>
                <td>Actors:</td>
                <td>

                  {details.Actors}
                </td>
              </tr>
              <tr>
                <td>Metascore:</td>
                <td>

                  {details.Metascore}
                </td>
              </tr>
              <tr>
                <td>Ratings:</td>
                <td>
                  {details.Ratings && details.Ratings.map((rating) => <p key={genId()}>{`${rating.Source}: ${rating.Value}`}</p>)}
                </td>
              </tr>
              <tr>
                <td>Plot:</td>
                <td>
                  {details.Plot}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
