import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert,
    TouchableOpacity
} from 'react-native';

let Data = [
    {src:require('../assets/img/1.jpg'),name:'1号'},
    {src:require('../assets/img/2.jpg'),name:'2号'},
    {src:require('../assets/img/3.jpg'),name:'3号'},
    {src:require('../assets/img/4.jpg'),name:'4号'},
    {src:require('../assets/img/5.jpg'),name:'5号'},
    {src:require('../assets/img/6.jpg'),name:'6号'},
    {src:require('../assets/img/7.jpg'),name:'7号'},
    {src:require('../assets/img/8.jpg'),name:'8号'},
    {src:require('../assets/img/9.jpg'),name:'9号'},
];

const Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

let margin=width/12;

export default React.createClass({
    render(){
        return(
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    contentContainerStyle={styles.container}
                />
        )
    },
    getInitialState(){
        let ds=new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        return{
            dataSource:ds.cloneWithRows(Data)
        }
    },
    renderRow(data){
        return (
            <TouchableOpacity style={styles.wrapper}>
                <Image source={data.src} style={styles.imgStyle}></Image>
                <Text style={styles.textStyle}>骚牌{data.name}</Text>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems: 'flex-start',
        // backgroundColor:'yellow'
    },
    wrapper:{
        alignItems: 'center',
        marginTop:20,
        marginLeft:margin,
        marginRight:margin
    },
    imgStyle:{
        width:width/6,
        height:width/6
    },
    textStyle:{
        color:'#333',
        marginTop:10
    }
})