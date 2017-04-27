const routes = [{
    id: 1,
    refView: 'HomeView',
    sidemenu: {
        sideMenuButtonText: 'Home',
        iconType: 'Ionicons',
        iconName: 'ios-home-outline',
        iconSize: 22
    },
    navbar: {
        navBarTitle: 'Home',
        navBarLeftIconName: 'ios-menu',
        navBarLeftIconSize: 32
    }
}, {
    id: 2,
    refView: 'AppState',
    sidemenu: {
        sideMenuButtonText: 'App State',
        iconType: 'Ionicons',
        iconName: 'ios-albums-outline',
        iconSize: 22
    },
    navbar: {
        navBarTitle: 'App State',
        navBarLeftIconName: 'ios-menu',
        navBarLeftIconSize: 32
    }
}];

class AppRouteClass {
    getRouteFromRouteId(routeId){
        return routes.find(route => route.id === routeId);
    }

    getAllRoutes(){
        return [...routes];
    }
}

const AppRoutes = new AppRouteClass();

export default AppRoutes;
