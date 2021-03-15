import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

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
    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        console.log('monting');
        this.updateChar();
        this.timerID = setInterval(this.updateChar, 1500);
    }
    componentWillUnmount() {
        console.log('unmonting');
        clearInterval(this.timerID);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,

        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*140 + 22);
        // const id = 8000;
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {  
        console.log('render');
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || errorMessage) ? <View char={char}/> : null;

        return (
            <RandomBlock>
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        )
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ListGroup>
                <ListGroupItem>
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <Term>Born </Term>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <Term>Died </Term>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}

export {ListGroupItem, ListGroup, Term};