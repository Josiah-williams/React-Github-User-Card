import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserCard from './Components/UserCard'
import axios from 'axios'


class App extends React.Component{

  constructor() {
    super();
    this.state = {
      user:{}
  };
}


  componentDidMount() {
    axios.get('http://api.github.com/users/Josiah-williams')
      .then(res => {
      this.setState({user: res.data})
     })
      .catch(err => console.log('Error fetching user.'));
      }

      render() {
        return (
          <div>
            <UserCard user={this.state.user} />
          </div>
        );
      }
    }

export default App;