import styled from 'styled-components';

export const CardContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 525px;
    justify-content: center;
    margin: 1.4rem 0;
    width: 400px;

    @media only screen and (max-width: 768px) {
        & {
            width: 100%;
            height: 400px;
        }

        img {
            width: 250px;
            height: 250px;
        }
    }

`;

export const ButtonGoToSpotify = styled.a`
    background: #F1F1F1;
    border: .1em solid #F1F1F1;
    border-radius: .5em;
    color: #060606;
    font-size: 1.2em;
    font-weight: 700;
    margin: 1em 2em;
    transition: .5s all;
    padding: .6em;

    &:hover, &focus {
        background: #060606;
        color: #F1F1F1;
        text-decoration: none;
    }
`;
