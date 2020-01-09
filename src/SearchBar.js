import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default function SearchBar(props) {
    return (
        <InputGroup>
            <FormControl onChange={props.handleChange}
                placeholder="Enter search term here"
            />
            <InputGroup.Append>
                <Button onClick={props.handleClick}>Button</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}