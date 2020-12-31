import React, { Component } from 'react';

class LogOutScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.navigation.navigate('LoginScreen')
    }

    render() {
        return <></>
    }
}
export default LogOutScreen;