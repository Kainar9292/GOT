import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const RandomBlock = styled.div`
        background-color: #fff;
        padding: 25px 25px 15px 25px;
        margin-bottom: 40px;
        border-radius: 0.25rem !important;
        h4 {
            margin-bottom: 20px;
            text-align: center;
        }
`;

const Term = styled.span`
    font-weight: bold;
`;

const ListGroupItem = styled.li`
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 0.75rem 1.25rem;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-right: 0;
        border-left: 0;
        border-top: 0;
        border-radius: 0;
        ${props => props.Cursor && css`
            cursor:pointer;
        `}
`;

const ListGroup = styled.ul`
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        border-radius: 0.25rem;
        li {
            border-radius: 0.25rem;
        }
`;

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock>
                <h4>Random Character: John</h4>
                <ListGroup>
                    <ListGroupItem>
                        <Term>Gender </Term>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Born </Term>
                        <span>11.03.1039</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Died </Term>
                        <span>13.09.1089</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Term>Culture </Term>
                        <span>Anarchy</span>
                    </ListGroupItem>
                </ListGroup>
            </RandomBlock>
        );
    }
}

export {ListGroupItem, ListGroup, Term};