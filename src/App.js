import React, { Component } from 'react';
import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Counters />
                </main>
            </React.Fragment>
        );
    }
}


export default App;