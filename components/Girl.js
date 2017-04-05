import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default React.createClass({
    getInitialState(){
        return{
            data:[
                {src:require('../assets/img/1.jpg'),name:'骚货1'},
                {src:require('../assets/img/2.jpg'),name:'骚货2'},
                {src:require('../assets/img/3.jpg'),name:'骚货3'},
                {src:require('../assets/img/4.jpg'),name:'骚货4'},
                {src:require('../assets/img/5.jpg'),name:'骚货5'},
                {src:require('../assets/img/6.jpg'),name:'骚货6'},
            ]

        }
    },
    render(){
        return(
            <View style={styles.Container}>
                {this.imgRender()}
                {/*方法1{*/}
                    {/*this.state.data.map(function(msg,i){*/}
                        {/*return (*/}
                            {/*<View key={i} style={styles.imgContain}>*/}
                                {/*<Image source={msg.src} style={styles.imgStyle}></Image>*/}
                                {/*<Text style={styles.textStyle}>{msg.name}</Text>*/}
                            {/*</View>*/}
                        {/*)*/}
                    {/*})*/}
                {/*}*/}
            </View>

        )
    },
    //方法2
    imgRender(){
        let data=this.state.data;
        let len=data.length;
        let arr=[];
        for(let i = 0 ; i < len ; i++ ){
            arr.push(
                <View key={i} style={styles.imgContain}>
                    <Image source={data[i].src} style={styles.imgStyle}></Image>
                    <Text style={styles.textStyle}>{data[i].name}</Text>
                </View>
            )
        }

        return arr;
    }
})

const styles = StyleSheet.create({
    Container:{
       flexDirection:'row',
       flexWrap:'wrap',
       justifyContent: 'space-around',
       // backgroundColor:'skyblue',
       width:'100%'
    },
    imgContain:{
        width:100,
        // backgroundColor:'yellowgreen',
        alignItems: 'center',
        height:150,
        marginTop:20,
        marginBottom:20,
        backgroundColor:'#ccc'
    },
    imgStyle:{
        width:80,
        height:120,
        resizeMode:Image.resizeMode.cover,
        marginTop:10
    },
    textStyle:{
        // height:20,
        // width:100,
        // display:'block'
        // lineHeight:30
    }
})