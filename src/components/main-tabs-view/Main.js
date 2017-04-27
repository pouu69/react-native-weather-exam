import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

let { height, width } = Dimensions.get('window');

class Main extends Component{
    constructor(props){
        super(props);
    }

    handleSwitchTab = (idx) => {
        console.log(idx);
        this.props.actions.switchMainTab(idx);
    }

    render(){
        const { renderTab, tab } = this.props;

        return(
            <TabNavigator
                sceneStyle={styles.container}
                >
                <TabNavigator.Item
                    selected={tab === 0}
                    onPress={() => this.handleSwitchTab(0)}
                    renderIcon={() => <Image source={require('./img/home.png')} />}
                    renderSelectedIcon={() => <Image source={require('./img/home_filled.png')} />}
                >
                {renderTab(0)}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'yellow'
    }
});

export default Main;
