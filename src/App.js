import React, { Fragment } from 'react';
import GlobalStyle from './stylesheet/global';
import Home from './sections/Home';
import Singles from './sections/Singles';

const App = () => (
        <Fragment>
            <GlobalStyle />
            <Home />
            <Singles />
        </Fragment>
);

export default App;
