import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroupItem, ListGroup, Term} from '../randomChar/randomChar';

const CharBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const SelectError = styled.div`
        color: #fff;
        text-align: center;
        font-size: 26px;
`;

export default class CharDetails extends Component {

    render() {
        return (
            <CharBlock>
                <h4>John Snow</h4>
                <ListGroup>
                    <ListGroupItem>
                        <Term>Gender</Term>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Born</Term>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Died</Term>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Culture</Term>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </CharBlock>
        );
    }
}