import React from 'react';
import Header from './Header';
import Home from './Home/Home';

const Main = ({ match }) => {
    console.log(match.params.category);
    return (
        <>
            <Header />
            {
                ((match.params.category === 'home' && (<Home />)) || '') ||
                ((match.params.category === 'search' && (<Home />)) || '') ||
                ((match.params.category === 'profile' && (<Home />)) || '')
            }
        </>
    );
};

export default Main;