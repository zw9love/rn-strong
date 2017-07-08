/**
 * Created by Administrator on 2017/3/23.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ListView
} from 'react-native';

const Dimensions = require('Dimensions');
let {width, scale, PixelRatio} = Dimensions.get('window');

import ShopListCell from '../components/ShopListCell'
import Title from '../components/Title'
import Mock from 'mockjs'

export default React.createClass({
    getInitialState(){
        return {
            data: this.props.data,
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    },
    componentDidMount(){
        this.setState({dataSource: this.state.dataSource.cloneWithRows(this.getData())})
    },
    getRandom(n, m){
        return Math.ceil(Math.random() * 10000) % (m - n + 1) + n
    },
    getData(){
        let arr = this.props.pickArr
        // console.log(arr)
        let getRandom = this.getRandom
        let data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|50': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'url': '',
                'title': '@ctitle(2,10)',
                'info': '@csentence(1, 30)',
                'price': '@integer(999, 99999)',
                'money': '@integer(1, 999)',
                'distance': '@float(1, 9999,0,2)'
            }]
        }).list

        data.map((val, i) => {
            val.url = arr[getRandom(0, 16)]
        })

        return data
    },
    render(){
        return (
            <View style={styles.container}>
                {/*导航*/}
                <Title data={{name:'首页',info:'轻松购物'}} navigator={this.props.navigator}/>
                <ScrollView>
                    <View style={styles.main}>
                        <View>
                            <Image source={require('../../../assets/img/banner.png')} style={styles.bannerStyle}/>
                        </View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderShopListCell}
                        />
                        {/*<View style={styles.shopListWrap}>*/}
                        {/*{this.renderShopListCell()}*/}
                        {/*</View>*/}
                        {/*<Text style={styles.text}>我是show详情页，以下是传过来的数据</Text>*/}
                        {/*{this.renderData()}*/}
                    </View>
                </ScrollView>
            </View>
        )
    },
    renderShopListCell(data){
        // let data = this.getData();
        // let arr = [];
        // data.map((msg, i) => {
        //     arr.push(
        //         <ShopListCell navigator={this.props.navigator} data={msg} key={i}/>
        //     )
        // })
        //
        // return arr;

        return (
            <ShopListCell
                navigator={this.props.navigator}
                data={data}
            />
        )
    },
    renderData(){
        let data = this.props;
        // console.log(data);
        let arr = [];
        for (let i in data) {
            if (typeof data[i] == 'object' || i == 'src') continue;
            arr.push(
                <Text key={i} style={styles.text}>{i}:{data[i]}</Text>
            )
        }
        return arr;
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    text: {
        color: '#fff',
        fontSize: 18
    },
    main: {
        flex: 1,
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    bannerStyle: {
        width: width,
        height: width / 2
    }
});