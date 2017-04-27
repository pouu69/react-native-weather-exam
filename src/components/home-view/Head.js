import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import moment from 'moment';

let winSize = Dimensions.get('window');
let {width, height} = Dimensions.get('window');

class Head extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { dust } = this.props;
        const datetime = new Date();
        const currentDateTime = moment().format('Y-MM-D h:mm:s A');
        return(
            <View style={styles.container}>
                <Text style={styles.head}>
                    {dust.data.locale}
                </Text>
                <Text style={styles.curTime}>
                    {currentDateTime}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:.1,
        width: width,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#21AABD',
        paddingTop:20
    },
    head: {
        fontSize: 36/winSize.scale,
        color: '#fff'
    },
    curTime: {
        paddingTop:5,
        fontSize: 20/winSize.scale,
        color: '#fff'
    }
});

export default Head;
