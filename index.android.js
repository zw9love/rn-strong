/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  StatusBar
  // ToastAndroid,
  // BackAndroid,
  // Platform
} from 'react-native';
//修改gradle/wrapper/gradle-wrapper.properties)中的distributionUrl
//distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip
import Girl from './components/Girl'
import Login from './components/Login'
import Carousel from './components/Carousel'
import Wine from './components/Wine'
import NineLattice from './components/NineLattice'
import StickyHeader from './components/StickyHeader'
import TabNav from './components/TabNav'
import Demo from './components/Demo'
import FirstCome from './components/FirstCome'
import ScrollViewDemo from './components/ScrollViewDemo'
import Purchase from './components/Purchase'
import AnimateDemo from './components/AnimateDemo'

// let changeData = require('./data/Address.json');
// let sortData = require('./data/AddressSort.json');
//
// for(var i in sortData){
//     for(var j in changeData){
//         if(changeData[j]['pinyin'].charAt(0)==sortData[i]['title']){
//             sortData[i]['city'].push(changeData.splice(j,1)[0]);
//         }
//     }
// }

export default class test extends Component {
  constructor(props) {
      super(props);
      this.state = {
         nav:null
      }
  }
  // componentDidMount(){
  //     //这里判不判断都行
  //     if (Platform.OS === 'android') {
  //          BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
  //     }
  // }
  // componentWillUnmount(){
  //     BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
  // }
  // onBackAndroid = () => {
  //     if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
  //         //最近2秒内按过back键，可以退出应用。
  //         return false;
  //     }
  //     console.log(this.props)
  //     this.lastBackPressed = Date.now();
  //     ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
  //     return true;
  // }
  render() {
    return (
        //不能把View换成ScrollView!!! 不然TabNavigator组件没效果
      <View style={styles.container}>
        {/*<Girl />*/}
        {/*<Login />*/}
        {/*<Carousel />*/}
        {/*<Wine />*/}
        {/*<NineLattice />*/}
        {/*<StickyHeader />*/}
          {/*StatusBar组件*/}
          {/*<StatusBar
              animated={true}
              hidden={false}
              backgroundColor={'#FF6100'}
              translucent={true}
              //barStyle='light-content'
              showHideTransition={'fade'}
              //networkActivityIndicatorVisible={true}
          />*/}
        <Navigator
            initialRoute={{name: 'firstcome', component: FirstCome}}
            renderScene={(route, navigator) =>{
                                let Component =  route.component;
                                return <Component {...route.passProps} navigator={navigator}/>
                            }}
            //configureScene={
              //                  (route, routeStack) => Navigator.SceneConfigs.FloatFromBottom
                //            }
        />
        {/*<TabNav />*/}
        {/*<Demo />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e8e8e8',
    // flexDirection:'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});

AppRegistry.registerComponent('test', () => test);
