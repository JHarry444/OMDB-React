import React from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

export default function SearchBar(props) {
    return (
        <Form onSubmit={props.searchFunc}>
            <InputGroup>
                <FormControl onChange={props.handleChange} value={props.SearchTerm}
                    placeholder="Enter search term here"
                />
                <InputGroup.Append>
                    <Button onClick={props.searchFunc}>Button</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
}