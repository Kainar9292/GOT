import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroupItem, ListGroup, Term} from '../randomChar/randomChar';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';


const CharBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

// const SelectError = styled.div`
//         color: #fff;
//         text-align: center;
//         font-size: 26px;
// `;

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
            
        }
        
    }

    onCharacterLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onCharacterError = (err) => {
        this.setState({
            char: null,
            error: true,
            // loading: false
        })
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        this.setState({
            loading: true
        })

        this.gotService.getCharacter(charId)
            .then(this.onCharacterLoaded)
            .catch(this.onCharacterError)
            // const d = this.ffo.bar;
    }

    render() {

        if (!this.state.char) {
            return <span>Please select a character</span>
        }

        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || errorMessage) ? <View char={char}/> : null;

        return (
            <CharBlock>
                {errorMessage}
                {spinner}
                {content}
            </CharBlock>
        );
    }
}

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;

    return(
        <>
            <h4>{name}</h4>
            <ListGroup>
                <ListGroupItem>
                    <Term>Gender</Term>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <Term>Born</Term>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <Term>Died</Term>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <Term>Culture</Term>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}