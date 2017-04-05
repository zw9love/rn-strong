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

import Wine from '../data/Wine.json'

let Data = [
    {
        "src": require("../assets/img/1.jpg"),
        "money": "39",
        "name": "德国OETTINGER奥丁格大麦啤酒500ml*4罐/组"
    },
    {
        "src": require("../assets/img/2.jpg"),
        "money": "40",
        "name": "德拉克（Durlacher） 黑啤酒 330ml*6听"
    },
    {
        "src": require("../assets/img/3.jpg"),
        "money": "109",
        "name": "奥塔利金爵 啤酒500ml*12 匈牙利原装低度进口啤酒酒水饮品"
    },
    {
        "src": require("../assets/img/4.jpg"),
        "money": "158",
        "name": "德国啤酒 原装进口啤酒 flensburger/弗伦斯堡啤酒 土豪金啤 5L 桶装啤酒"
    },
    {
        "src": require("../assets/img/5.jpg"),
        "money": "66",
        "name": "青岛啤酒 经典 醇厚 啤酒500ml*12听/箱 国产 整箱"
    },
    {
        "src": require("../assets/img/6.jpg"),
        "money": "140",
        "name": "京姿 百威罐装330ml*24 啤酒"
    },
    {
        "src": require("../assets/img/7.jpg"),
        "money": "58",
        "name": "德国OETTINGER奥丁格自然浑浊型小麦啤酒500ml*4罐/组"
    },
    {
        "src": require("../assets/img/8.jpg"),
        "money": "695",
        "name": "Martell马爹利名士1000ML 进口洋酒 名仕干邑白兰地1L"
    },
    {
        "src": require("../assets/img/9.jpg"),
        "money": "108",
        "name": "奥美加银龙舌兰【OLMECA TEQUILA】38% 750ml"
    },
    {
        "src": require("../assets/img/10.jpg"),
        "money": "1386",
        "name": "人头马天醇XO特优香槟干邑白兰地700ml"
    },
    {
        "src": require("../assets/img/11.jpg"),
        "money": "1080",
        "name": "40°法国马爹利蓝带干邑白兰地700ml"
    },
    {
        "src": require("../assets/img/12.jpg"),
        "money": "598",
        "name": "沙皇伏特加塞珞700ml限量版"
    },
    {
        "src": require("../assets/img/13.jpg"),
        "money": "92",
        "name": "百加得黑朗姆酒 烈酒 750ml"
    },
    {
        "src": require("../assets/img/14.jpg"),
        "money": "99",
        "name": "Seagrams Gin 750ML 40度"
    },
    {
        "src": require("../assets/img/15.jpg"),
        "money": "1060",
        "name": "马爹利蓝带干邑白兰地 700ml"
    },
    {
        "src": require("../assets/img/16.jpg"),
        "money": "158",
        "name": "张裕解百纳干红葡萄酒双支礼盒 750ml*2"
    },
    {
        "src": require("../assets/img/17.jpg"),
        "money": "1230",
        "name": "爱之湾+兰贵人组合"
    },
    {
        "src": require("../assets/img/18.jpg"),
        "money": "138",
        "name": "菲卡珍藏莎当妮葡萄酒750ml"
    }
];

const Dimensions = require('Dimensions');

let {width} = Dimensions.get('window');


export default React.createClass({
    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        return{
            dataSource:ds.cloneWithRows(Data)
        }
    },
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        )
    },
    renderRow(rowData,sectionID,rowID,highlightRow){
        // console.log(rowData);
        //onPress={() => {Alert.alert('点击了')}}
        //require('../assets/img/2.jpg')
        let special = rowID == 0 ? {marginTop:15} : {};
        return(
            <TouchableOpacity style={[styles.container,special]} activeOpacity={0.3} >
                <Image source={rowData.src} style={styles.imgStyle}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.nameStyle}>{rowData.name}</Text>
                    <Text style={styles.moneyStyle}>￥{rowData.money}</Text>
                </View>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:20,
        paddingLeft:15,
        paddingRight:15
    },
    imgStyle:{
        width:80,
        height:80,
        marginRight:15
    },
    textContainer:{
        justifyContent: 'space-around',
        width:(width-125)
    },
    moneyStyle:{
        color:'red'
    },
    nameStyle:{
        color:'#333'
    }
})