import React from 'react';
import Project from './Common/Project/Project';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Pet Finder</h1>
                <Project id="project" />
            </div>
        )
    }
}

export default Home;