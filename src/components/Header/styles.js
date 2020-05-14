import styled from 'styled-components';

import capa from '../../assets/capa.png';

export const HeaderContainer = styled.header`

    .headerImage {
        background-image: url(${capa});
        background-repeat: no-repeat;
        background-position: right center;
        height: 100vh;
        position: relative;
        width: 100%;

        @media only screen and (width: 1024px) {
            & {
                background-position: center;
            }
        }
    }

`;

export const HeaderContent = styled.div`
    text-align: center;
    position: absolute;
        left: 8rem;
        bottom: 45%;

    h1 {
        color: #F1F1F1;
        padding: 1em;
    }

    @media only screen and (max-width: 1024px) {
        & {
            left: 0;
            right: 0;
            bottom: 30%;
        }

        h1 {
            font-size: 2em;
        }
    }

    .button-singles {
        background: #F1F1F1;
        border-radius: .5em;
        color: #060606;
        cursor: pointer;
        font-size: 1.2em;
        font-weight: 700;
        transition: .5s all;
        padding: .7em;

        &:hover, &focus {
            background: #060606;
            border: .1em solid #F1F1F1;
            color: #F1F1F1;
            text-decoration: none;
        }
    }
`;

export const SocialMedia = styled.div`
    position: absolute;
        left: 2rem;
        bottom: 5%;

    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;

export const List = styled.ul`
    list-style: none;

    li {
        display: inline;
        margin: 0 1em;
        padding: .5em;
    }
`;

export const Itens = styled.a`
    color: #F1F1F1;
    font-size: 20px;

    &:hover {
        color: #ECECEC
    }
`;
