import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';


const ToggleRandom = styled.button`
        width: 180px;
        height: 50px;
        background-color: peru;
        border-radius: 0.3rem;
        color: black;
        font-weight: 600;
        margin: 15px 0;
        border: none;
`;

export default class App  extends Component {
    state = {
        visible: true,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
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

        if (this.state.error) {
            return <ErrorMessage/>
        }

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
                    <CharacterPage/> 
                </Container>
            </>
        );
    }
};