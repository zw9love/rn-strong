import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

export default React.createClass({
    render(){
        return(
            <View style={styles.loginContainer}>
                <Image source={require('../assets/img/1.jpg')} style={styles.loginImg} />
                <View style={styles.textView}>
                    <TextInput
                        style={[styles.Input,{borderColor:'#aaa',borderBottomWidth:1}]}
                        placeholder='请输入用户名'
                        textAlign="center"
                        clearButtonMode='always'
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.Input}
                        placeholder='请输入密码'
                        textAlign="center"
                        secureTextEntry={true}
                        clearButtonMode='always'
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.btn}>
                    <Text style={{color:'#fff',fontSize:20}}>登录</Text>
                </View>
                <View style={styles.info}>
                    <Text style={{color:'skyblue'}}>无法登录</Text>
                    <Text style={{color:'skyblue'}}>新用户</Text>
                </View>
                <View style={styles.other}>
                    <Text>其他方式登录：</Text>
                    <Image source={require('../assets/img/2.jpg')} style={styles.otherImg}></Image>
                    <Image source={require('../assets/img/3.jpg')} style={styles.otherImg}></Image>
                    <Image source={require('../assets/img/4.jpg')} style={styles.otherImg}></Image>
                </View>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#eee'
    },
    loginImg:{
        width:80,
        height:80,
        borderRadius:40,
        marginTop:50
    },
    textView:{
        backgroundColor:'#fff',
        marginTop:50,
        borderWidth:1,
        borderColor:'#aaa',
    },
    Input:{
        width:'100%',
        height:40,
    },
    btn:{
        height:40,
        backgroundColor:'skyblue',
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        borderRadius:10,
    },
    info:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    other:{
        flexDirection:'row',
        alignItems: 'center',
        position:'absolute',
        left:20,
        bottom:20
    },
    otherImg:{
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:10
    }
})