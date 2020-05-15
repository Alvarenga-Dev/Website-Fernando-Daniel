import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body {
        background: #060606;
        font-family: 'Montserrat', sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    body::-webkit-scrollbar {
        width: .8em;
    }

    body::-webkit-scrollbar-track {
        background: #0c0c0c;
    }

    body::-webkit-scrollbar-thumb {
        background: #F1F1F1;
        background-size: 100%;
    }

`;

export default GlobalStyle;
