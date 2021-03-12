import React, {Component} from 'react';
import {ListGroupItem, ListGroup} from '../randomChar/randomChar';


export default class ItemList extends Component {

    render() {
        return (
            <ListGroup>
                <ListGroupItem Cursor>
                    John Snow
                </ListGroupItem>
                <ListGroupItem Cursor>
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem Cursor>
                    Geremy
                </ListGroupItem>
            </ListGroup>
        );
    }
}