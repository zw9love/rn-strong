/**
 * Created by Administrator on 2017/3/27.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Picker,
    ActivityIndicator,
    Modal,
    Button,
    Slider,
    StatusBar,
    TouchableHighlight
} from 'react-native';

export default React.createClass({
    getInitialState(){
        return{
            language:'java',
            animationType: 'none',
            modalVisible: false,
            transparent: false,
        }
    },
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    },
    onButtonPress(){
        console.log(this.refs.picker)
        this.setState({language: 'js'})
        // this.refs.picker.onValueChange('js')
    },
    render(){
        // var modalBackgroundStyle = {
        //     backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        // };
        // var innerContainerTransparentStyle = this.state.transparent
        //     ? {backgroundColor: '#fff', padding: 20}
        //     : null;
        return(
            <View>
                <View>
                {/*StatusBar状态栏组件*/}
                    <StatusBar
                        animated={true}
                        hidden={false}
                        backgroundColor='yellow'
                        //translucent={true}
                        //barStyle='light-content'
                        showHideTransition={'fade'}
                        //networkActivityIndicatorVisible={true}
                    />
                </View>
                {/*Picker下拉框组件*/}
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}
                    mode='dropdown'
                    prompt="我勒个去"
                    style={styles.pickerWrap}
                    ref='picker'
                >
                    <Picker.Item label="Java" value="java" itemStyle={styles.pickerWrapCell}/>
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                {/*ActivityIndicator刷新组件*/}
                <ActivityIndicator
                    animating={true}
                    style={styles.activityIndicator}
                    size="large"
                    color='skyblue'
                />
                {/*Button系统按钮组件*/}
                <Button
                    onPress={this.onButtonPress}
                    title="Press Purple"
                    color="#841584"
                    accessibilityLabel="Learn more about purple"
                />
                {/*Slider滑块组件*/}
                <Slider
                    disabled={false}
                    maximumTrackTintColor="#FF6100"
                    value={0.5}
                    //step={0.1}
                    trackImage={require('../assets/img/1.jpg')}
                />

                {/*啥玩意Modal*/}
                <Modal
                    animationType={"none"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View>
                        <View style={styles.modalWrap}>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={() => {
                                 this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>
                <TouchableHighlight onPress={() => {
                  this.setModalVisible(true)
                }}>
                    <Text style={{textAlign:'center'}}>Show Modal</Text>
                </TouchableHighlight>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    pickerWrap:{
        // backgroundColor:'red',
        // height:100
    },
    pickerWrapCell:{
        backgroundColor:'skyblue',
    },
    activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        height:80,
        backgroundColor:'yellow',
        // display:'none'
    },
    modalWrap: {
        alignItems: 'center',
        padding: 20,
        // backgroundColor:'yellow'
    },
    modalWrapInner: {
        borderRadius: 10,
        alignItems: 'center',
    },
    modalButton: {
        marginTop: 10,
    }
})