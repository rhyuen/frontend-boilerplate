import React, {Component} from "react";


class App extends Component{

    state = {

    }


    render(){        
        const Test = () => <div>If you can see this text, the shallow rendering for Enzyme is NOT WORKING.</div>;        
        
        return (
            <div className = "root">                   
                Hi, Just some vague front end code.
                <Test/>
            </div>
        )
    }
}

export default App;