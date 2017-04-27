import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import HomeView from './HomeView';
import { Main } from '../components/main-tabs-view';
import Actions from '../actions';

class MainTabsView extends Component{
    constructor(props){
        super(props);
    }

    renderTab = (idx) => {
        const { navigator } = this.props;
        switch(idx){
            case 0:
                return <HomeView style={styles.container} navigator={navigator} />
            default:
                return null;
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Main {...this.props} renderTab={this.renderTab} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function mapStateToProps(state){
    return{
        tab: state.navigation.index
    }
}


function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainTabsView);
