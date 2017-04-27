import React, { Component } from 'react'
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore  from './common/redux/store/configureStore';

console.disableYellowBox = true;

class Root extends Component{
    render(){
        return(
            <Provider store={configureStore()}>
                <App />
            </Provider>
        );
    }
}
export default Root;
