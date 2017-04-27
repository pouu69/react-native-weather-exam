import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

let winSize = Dimensions.get('window');
let {width, height} = Dimensions.get('window');

class Main extends Component {
    constructor(props){
        super(props);
    }

    renderLoading = () => {
        if(this.props.dust.isFetchingDust){
            return (
                <View style={styles.loading}>
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            );
        }
        return null;
    }

    renderDust = () => {
        const { dust } = this.props;
        if(!dust || !dust.data) return null;

        return (
                <View style={styles.infoContainer}>
                    <View style={styles.infoImg}>
                        <Image style={styles.img}
                            source={this.getStatusDust(dust.data.status)} />
                    </View>
                    <View style={styles.infoContents}>
                        <Text style={styles.status}>
                            {dust.data.status}
                        </Text>
                        <Text style={styles.statusNum}>
                            현재 미세먼지 : {dust.data.statusNum}
                        </Text>
                    </View>
                </View>
        );
    }

    getStatusDust = (status) => {
        if(status === '좋음'){
            return require('./img/low.png');
        }else if(status === '보통'){
            return require('./img/middle.png');
        }else if(status === '나쁨'){
            return require('./img/top.png');
        }
    }

    render(){
        return(
            <View style={styles.container}>
                {this.renderLoading()}
                {this.renderDust()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#21AABD'
    },
    img: {
        width: 150,
        height: 150
    },
    infoContainer: {
        width: width, 
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoImg: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContents:{
        flex:.4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    status: {
        fontSize: 50/winSize.scale,
        color: '#fff'
    },
    statusNum: {
        fontSize: 30/winSize.scale,
        color: '#fff',
        marginTop:10
    },
    loading: {
      paddingTop: 100,
      alignItems: 'center'
    },
    loadingText: {
      fontSize: 32,
      fontStyle: 'italic'
    }
});

export default Main;
