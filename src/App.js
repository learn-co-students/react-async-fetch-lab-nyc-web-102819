import React from 'react';

export default class App extends React.Component {

    state = {
        peopleArray: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(({people}) => this.setState({ peopleArray: people }))
    
    }

    render(){
        return (
            <div>
                { this.state.peopleArray.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}