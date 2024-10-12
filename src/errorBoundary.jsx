import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {error: null};
    }

    static getDerivedStateFromError(error){
        return {error};
    }

    render(){
        if(this.state.error instanceof ReferenceError){
            return <h1>Ooops! looks like you have called non existed variable!</h1>;
        }
        else if(this.state.error instanceof TypeError){
            return <h1>Ooops! looks like you have a typo!</h1>;
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;