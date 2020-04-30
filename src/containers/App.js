import React, {Component} from 'react';
import CardList from '../components/CardList' // cardList is a child of App 
//import {robots} from './robots.js';
import SearchBox from '../components/SearchBox'; // SearchBox is a child of App 
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';




class App extends Component {

    constructor(){
        super()

        this.state = {
                robots: [],
                searchfield: ''
            

        }
    }

        componentDidMount(){
            
            fetch('https://jsonplaceholder.typicode.com/users').then(Response =>{

               return Response.json();

            })

            .then(users => {

                this.setState({robots: users});
            })
        

            
        }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value })
        //console.log(event.target.value);
       

       // console.log(filteredRobots);
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {

            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })

        return(
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <ErrorBoundry>
                <CardList robots={filteredRobots}/>
            </ErrorBoundry>
            </Scroll>
            </div>
    
        );

    }
   
}// end of App Component 

export default App;