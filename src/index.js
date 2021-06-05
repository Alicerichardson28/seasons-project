import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'


// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         //need two argument 
//         // call back function, this going to show your current location
//         (position) => console.log(position),

//         //this call back will call anytime the location not found or client denied 
//         err => console.log(err)
//     );
//     return <div>Latitude:</div>;
// };
class App extends React.Component {
    //anytime when we create new instance in App component, constructor will get call first
    //constructor function going to be auto and instantly called before anything else
    //constructor belong to js, not specific to react

    // constructor(props) {
    //     //super is reference to the parent constructor function
    //     super(props);

    //     this.state = {
    //         //we don't know latitude yet, we set that to null
    //         //THIS IS THE ONLY TIME we do direct assignment
    //         //to this.state
    //         lat: null,
    //         errorMessage: ''
    //     };
    // }

    //same as written constructor
    //implement to babel and babel going to write constructor be hide the seen for you
    state = {
        lat: null,
        errorMessage: ''
    }

    //componentDidMount going to show every time when component first rendered
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //need two argument 
            // call back function, this going to show your current location
            (position) => this.setState({ lat: position.coords.latitude }),
                //anytime you want update state we call setState only, setState is function, come from react Component
                // //we did not
                // this.state.lat = position.coords.latitude
            
    
            //this call back will call anytime the location not found or client denied 
            err => this.setState({ errorMessage: err.message })
        );
    }

    //componentDidUpdate going to update when the state is update
    componentDidUpdate() {
        console.log('My component was just updated - it re rendered!');
    }
    //React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        // when waiting loading 
        return <div>Loading ....</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))

