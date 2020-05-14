import React, { Component, Fragment } from 'react';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Header />
            </Fragment>
        )
    }
}
