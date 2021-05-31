import React from 'react';
import ReactDOM from 'react-dom';


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

    constructor(props) {
        //super is reference to the parent constructor function
        super(props);

        this.state = {
            //we don't know latitude yet, we set that to null
            //THIS IS THE ONLY TIME we do direct assignment
            //to this.state
            lat: null
        };

        window.navigator.geolocation.getCurrentPosition(
            //need two argument 
            // call back function, this going to show your current location
            (position) => {
                //anytime you want update state we call setState only, setState is function, come from react Component
                this.setState({ lat: position.coords.latitude })

                // //we did not
                // this.state.lat = position.coords.latitude
            },
    
            //this call back will call anytime the location not found or client denied 
            err => console.log(err)
        );
    }
    //React says we have to define render!!
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))

