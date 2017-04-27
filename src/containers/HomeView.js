import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListInfoView from './ListInfoView';
import { Head, Main } from '../components/home-view';

import Actions from '../common/redux/actions';

let {width, height} = Dimensions.get('window');

class HomeView extends Component{
    constructor(props){
        super(props);
        this.state = {
            isVisible: true,
            initialPosition: 'unknown',
            lastPosition: 'unknown'
        }
        console.log(this.props);
    }

    componentWillMount(){
        this.props.actions.enterHome();
    }

    componentDidMount(){
        this.props.actions.fetchDust(this.state.lastPosition);
    }

    componentWillUnmount(){
        this.props.actions.leaveHome();
    }


    render(){
        return(
            <View style={styles.container}>
                <Head  {...this.props} />
                <Main  {...this.props} />
                <ListInfoView {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function mapStateToProps(state){
    return {
        currentView: state.views,
        dust : state.dust
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);
