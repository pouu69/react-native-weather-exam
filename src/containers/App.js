import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Navigator,
    Platform,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/Ionicons';

import { AppRoutes } from '../common/config';
import HomeView from './HomeView';
import AppState from './AppState';
import DetailWeatherView from './DetailWeatherView';
import { Button } from '../components/button-view';
import { SideMenuContent } from '../components/side-menu-view';

const WINSIZE = Dimensions.get('window');
const SCREEN_WIDTH = Dimensions.get('window').width;
const OPEN_SIDE_MENU_OFFSET = SCREEN_WIDTH * 0.6;
const DEFAULT_ROUTE = { id: 1, refView: 'HomeView' };
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

StatusBar.setBarStyle('light-content', true);

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

class App extends Component{
    state = {
        sideMenuOpened: false,
        disableGestures: false
    };

    disableGestures = (param) => {
    this.setState({
            disableGestures: param
        });
    }

    configureScene = (route, routeStack) => {
        if(route.type == 'Modal') {
        	return Navigator.SceneConfigs.HorizontalSwipeJump;
        }
    }

    renderScene = (route, navigator) => {
        const _route = AppRoutes.getRouteFromRouteId(route.id);
        if(!_route){
            return (
                <DetailWeatherView
                    ref="DetailWeatherView"
                    navigator={navigator}
                    navigate={this.navigate}
                    disableGestures={this.disableGestures}
                    {...route.passProps}
                />
            );
        }
        switch(route.id){
            case 1:
                return(
                    <HomeView
                        ref={_route.refView}
                        navigator={navigator}
                        navigate={this.navigate}
                    />
                );
            case 2:
                return(
                    <AppState
                        ref={_route.refView}
                        navigator={navigator}
                        navigate={this.navigate}
                    />
                );
            default:
                return(
                    <HomeView
                        ref={_route.refView}
                        navigator={navigator}
                        navigate={this.navigate}
                    />
                );
        }
    }

    renderRouteMapper(){
        const routes = AppRoutes.getAllRoutes();

        return {
            Title: (route, navigator, index, navState) => {
                return null;
                // const currentRotueId = navState.routeStack[index].id;
                // return(
                //     <Text style={styles.titleNavText}>
                //         {routes[currentRotueId-1].navbar.navBarTitle}
                //     </Text>
                // )
            },
            LeftButton: (route, navigator, index, navState) => {
                const currentRotueId = navState.routeStack[index].id;
                if(!routes[currentRotueId-1]){
                    return null;
                }
                return (
                    <Button
                        style={styles.leftNavButton}
                        onPress={this.toggleSideMenu}>
                        <Icon
                            name={routes[currentRotueId-1].navbar.navBarLeftIconName}
                            size={40}
                            color="#333333"
                        />
                    </Button>
                );
            },
            RightButton: (route, navigator, index, navState) => {
                return null;
            }
        };
    }

    navigate = (route) => {
        const routeStack = [...this.refs.navigator.getCurrentRoutes()];
        const previousRouteId = routeStack[routeStack.length - 1].id;

        if(route.id !== previousRouteId){
            this.refs.navigator.replace(route);
        }

        if(this.state.sideMenuOpened){
            this.closeSideMenu();
        }
    }

    updateSideMenuState = (isOpened) => {
        this.setState({
            sideMenuOpened: isOpened
        });
    }

    toggleSideMenu = () => {
        this.setState({
            sideMenuOpened: !this.state.sideMenuOpened
        });
    }

    openSideMenu = () => {
        this.setState({
            sideMenuOpened: false
        });
    }

    closeSideMenu = () => {
        if(this.state.sideMenuOpened){
            this.setState({
                sideMenuOpened: false
            });
        }
    }

    render(){
        const { sideMenuOpened, disableGestures } = this.state;

        return(
            <SideMenu
              menu={<SideMenuContent
                      backGndColor="#ECECEC"
                      navigate={this.navigate}
                    />}
              isOpen={sideMenuOpened}
              onChange={this.updateSideMenuState}
              bounceBackOnOverdraw={true}
              openMenuOffset={OPEN_SIDE_MENU_OFFSET}
              disableGestures={disableGestures}
              >
              <Navigator
                ref="navigator"
                initialRoute={ DEFAULT_ROUTE }
                sceneStyle={ styles.navigator }
                renderScene={this.renderScene}
                configureScene={this.configureScene}
                navigationBar={
                  <Navigator.NavigationBar
                    routeMapper={this.renderRouteMapper()}
                    style={styles.navBar}
                  />
                }
              />
            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    navigator: {
        flex:1,
        backgroundColor: '#fff'
    },
    navBar: {
        flex:1
    },
    leftNavButton : {
        marginLeft: 10
    }
});

export default App;
