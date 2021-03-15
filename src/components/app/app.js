import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


const ToggleRandom = styled.button`
    width: 180px;
    height: 50px;
    background-color: peru;
    border-radius: 0.3rem;
    color: black;
    font-weight: 600;
    margin: 15px;
    border: none;
`;

export default class App  extends Component {
    state = {
        visible: true
    }

    randomVisible = () => {
        this.setState((state) => {
            return {
                visible: !state.visible
            }
        })
    }

    render() {
        const char = this.state.visible ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                        </Col>
                    </Row>
                    <ToggleRandom onClick={this.randomVisible}>Click to hide random</ToggleRandom>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};