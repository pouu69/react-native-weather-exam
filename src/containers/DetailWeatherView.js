import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const WINSIZE = Dimensions.get('window');
const {width, height} = Dimensions.get('window');

class DetailWeatherView extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // this.props.disableGestures(true);
    }

    render() {
        const item = this.props.dust;
        return (
          <View>
              <Text style={styles.day}>{item.day}</Text>
              <Text style={styles.lowTemp}>{item.lowTemp}</Text>
              <Text style={styles.highTemp}>{item.highTemp}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        width:40,
        height:40
    },
    day: {
        marginTop: 5,
        fontSize: 20/WINSIZE.scale
    },
    lowTemp: {
        marginTop: 3,
        fontSize: 23/WINSIZE.scale
    },
    highTemp: {
        marginTop: 3,
        fontSize: 19/WINSIZE.scale
    }
});

export default TyleWebView;
