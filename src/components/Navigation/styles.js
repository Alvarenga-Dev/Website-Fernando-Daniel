import styled from 'styled-components';

export const Styles = styled.div`
    .navbar {
        background: #FBFAFA;
        border-bottom-left-radius: .5em;
        border-bottom-right-radius: .5em;
        font-weight: 500;
    }

    .navbar-brand {
        color: #060606;
        cursor: pointer;
        font-size: 1.1em;
    }

    .navbar-toggle {
        border: none;
        border-radius: .1em;
        transition: .5s all;

        span {
            color: #060606;
            font-size: 1em;
            font-weight: 700;
            padding: .5em;
        }

        &:hover, &:active, &focus {
            border: .1em solid;
            outline: none;
        }
    }

    .nav-link {
        cursor: pointer;
    }

`;
