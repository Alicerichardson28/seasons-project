import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        //need two argument 
        // call back function, this going to show your current location
        (position) => console.log(position),
        //this call back will call anytime the location not found
        err => console.log(err)
    );
    return <div>Hi there!</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'))

