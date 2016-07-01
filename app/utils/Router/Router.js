'use strict';

import { Platform } from 'react-native';

var myNavigator;
class Router {
  constructor(_navigator) {
    console.log('Router constructor navigator');
    myNavigator = _navigator;
  }

  static push(route) {
    myNavigator.push(route);
  }

  static pop() {
    myNavigator.pop();
  }

  static replace(route) {
    myNavigator.replace(route);
  }

  static popToTop() {
    myNavigator.popToTop();
  }

  static popToRoute(route) {
    myNavigator.popToRoute(route);
  }

  static popToComponent(component) {
    let routesStack = this.getRouteStack();
    for (var i = routesStack.length-1; i >= 0; i--) {
      let route = routesStack[i];
      if (route.component == component) {
        myNavigator.popToRoute(route);
        break;
      }
    }
  }

  static resetTo(route) {
    myNavigator.resetTo(route);
  }

  static getRouteStack() {
    if (Platform.OS == 'ios') {
      return myNavigator.state.routeStack;
    } else {
      return myNavigator.getCurrentRoutes();
    }
  }

};
module.exports = Router;