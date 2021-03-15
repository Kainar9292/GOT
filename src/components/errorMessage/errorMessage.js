import React from 'react';
import styled from 'styled-components';
import img from './error.jpg';


const RandomBlockError = styled.img`
      width: 100%;
`;

const ErrorMessage = () => {
    return (
        <>
            <RandomBlockError src={img} alt='error'></RandomBlockError>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;