/**
 * Created by Administrator on 2017/3/27.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

import ClassicShow from '../pages/ClassicShow'


let {width} = Dimensions.get('window');

export default React.createClass({
    jump(){
        if(!this.props.navigator) return;
        this.props.navigator.push({
            component:ClassicShow,
            // passProps:{}  //传递过去的参数
            passProps:this.props.data
        })
    },
    render(){
        return(
            <TouchableOpacity onPress={this.jump}>
                <View style={styles.container}>
                    <View style={styles.topWrap}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.info}>{this.props.data.info}</Text>
                    </View>
                    <View style={styles.bottomWrap}>
                        <Image source={this.props.data.url} style={styles.image}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    container:{
        width:(width-25)/4,
        height:110,
        backgroundColor:'#F7F7F7',
    },
    topWrap:{
        height:55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize:12,
        color:'#333'
    },
    info:{
        fontSize:10,
        color:'#aaa'
    },
    image:{
        width:'100%',
        height:45
    }
})