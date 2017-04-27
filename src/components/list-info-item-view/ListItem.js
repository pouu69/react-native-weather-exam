import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

const WINSIZE = Dimensions.get('window');
const {width, height} = Dimensions.get('window');

class ListItem extends Component {
    constructor(props){
        super(props);
    }

    setSkyStatus = (status) => {
        if(!status) return;
        if(status.indexOf('맑음') > -1){
            return require('./img/sun.png');
        }else if(status.indexOf('구름조금') > -1){
            return require('./img/little-cloud.png');
        }else if(status.indexOf('구름많음') > -1){
            return require('./img/many-cloud.png');
        }else if(status.indexOf('흐림') > -1){
            return require('./img/cloud.png');
        }else{
            return require('./img/rainny.png');
        }
    }


    handleItemClk = (e) => {
        const { id } = this.props.item;
        this.props.onPress(id);
    }

    render(){
        const item = this.props.item;

        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.touchItem}
                     onPress={this.handleItemClk}
                >
                    <Image style={styles.img} source={this.setSkyStatus(item.sky)} />
                    <Text style={styles.day}>{item.day}</Text>
                    <Text style={styles.sky}>{item.sky}</Text>
                    <Text style={styles.temp}>{item.lowTemp}~{item.highTemp}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginRight: 6,
        marginLeft:6
    },
    touchItem: {
        alignItems: 'center'
    },
    img: {
        width:37,
        height:37
    },
    sky: {
        marginTop: 3,
        fontSize: 16/WINSIZE.scale
    },
    day: {
        marginTop: 5,
        fontSize: 16/WINSIZE.scale
    },
    temp: {
        marginTop: 4,
        fontSize: 16/WINSIZE.scale
    }
});

export default ListItem;
