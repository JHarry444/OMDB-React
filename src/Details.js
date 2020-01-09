import React from 'react';
import axios from 'axios';
import { Image, Container, Row, Col, Table } from 'react-bootstrap';

export default class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            details: {}
        }
    }

    componentDidMount(props) {
        axios.get(`http://www.omdbapi.com/?apikey=335035be&i=${this.props.match.params.id}`)
            .then(response => this.setState({ details: response.data }))
            .catch(err => console.error(err));
    }

    render() {
        console.log(this.state.details);
        return (
            <Container>
                <Row>
                    <Col xs={3}>
                        <Image src={this.state.details.Poster} fluid />
                    </Col>
                    <Col xs={9}  >
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td>Title: </td>
                                    <td>{this.state.details.Title}</td>
                                </tr>
                                <tr>
                                    <td>Year: </td>
                                    <td>{this.state.details.Year}</td>
                                </tr>
                                <tr>
                                    <td>Rated: </td>
                                    <td>{this.state.details.Rated}</td>
                                </tr>
                                <tr>
                                    <td>Actors:</td>
                                    <td> {this.state.details.Actors}</td>
                                </tr>
                                <tr>
                                    <td>Metascore:</td>
                                    <td> {this.state.details.Metascore}</td>
                                </tr>
                                <tr>
                                    <td>Plot:</td>
                                    <td> {this.state.details.Plot}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row >
            </Container >
        );
    }
}