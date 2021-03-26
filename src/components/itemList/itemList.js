import React, {Component} from 'react';
import Spinner from 'reactstrap/lib/Spinner';
import {ListGroupItem, ListGroup} from '../randomChar/randomChar';


export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <ListGroupItem 
                    Cursor 
                    key={item.id}
                    onClick = {() => this.props.onCharSelected(item.id)}
                    >
                    {item.name}
                </ListGroupItem>
            )
        })
    }

    render() {

        const {itemList} = this.state;
        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}