import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ListItem } from '../components/list-info-item-view';
import Actions from '../common/redux/actions';

let {width, height} = Dimensions.get('window');

class ListInfoView extends Component{
    constructor(props){
        super(props);
    }

    listData = () => {
        return this.props.dust.data.eachTimeData;
    }

    handleItemClk = (id) => {
        this.props.navigator.push({
            refView: 'TyleWebView',
            id: 3,
            type: 'Modal',
            passProps: {
                dust: this.props.dust.data.eachTimeData[id]
            }
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    data={this.listData()}
                    renderItem={({item}) => <ListItem onPress={this.handleItemClk} item={item} />}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex:.2,
        backgroundColor: "#69e8e5"
    }
});

function mapStateToProps(state){
    return {
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
)(ListInfoView);
