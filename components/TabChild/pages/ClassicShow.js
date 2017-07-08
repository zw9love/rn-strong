/**
 * Created by Administrator on 2017/4/2.
 */
import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ActivityIndicator,
    StatusBar,
    ListView
} from 'react-native';
import TimerMixin from 'react-timer-mixin'
import Mock from 'mockjs'
let {width, height} = Dimensions.get('window');

import Title from '../components/Title'
import LoveCell from '../components/LoveCell'

export default React.createClass({
    mixins: [TimerMixin],
    getInitialState(){
        return {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            refresh: true,
            pickArr: [
                require("../../../assets/img/eat1.png"),
                require("../../../assets/img/eat2.png"),
                require("../../../assets/img/eat3.png"),
                require("../../../assets/img/eat4.png"),
                require("../../../assets/img/eat5.png"),
                require("../../../assets/img/eat6.png"),
                require("../../../assets/img/eat7.png"),
                require("../../../assets/img/eat8.png"),
                require("../../../assets/img/eat9.png"),
                require("../../../assets/img/eat10.png"),
                require("../../../assets/img/eat11.png"),
                require("../../../assets/img/eat12.png"),
                require("../../../assets/img/eat13.png"),
                require("../../../assets/img/eat14.png"),
                require("../../../assets/img/eat15.png"),
                require("../../../assets/img/eat16.png"),
                require("../../../assets/img/eat17.png")
            ]
        }
    },
    render(){
        return (
            <View style={styles.container}>
                <Title data={{name:this.props.title}} navigator={this.props.navigator}/>
                <ScrollView>
                    {
                        this.state.refresh ?
                            (<View style={styles.refreshTxtWrap}>
                                <ActivityIndicator
                                    animating={true}
                                    style={styles.activityIndicator}
                                    size="large"
                                    color='#FF6100'
                                />
                                <Text style={styles.refreshTxt}>正在获取数据，请等待</Text>
                            </View>)
                            : (
                                <ListView
                                    dataSource={this.state.dataSource}
                                    renderRow={this.renderLove}
                                />
                            )
                    }

                </ScrollView>
            </View>
        )
    },
    componentDidMount(){
        this.setTimeout(() => {
            this.setState({dataSource: this.state.dataSource.cloneWithRows(this.getData()), refresh: false});
        }, 1500)
    },
    //当下级页面navigator.pop()回来的时候，重新调用了render方法
    renderLove(data){
        return (
            <LoveCell data={data} navigator={this.props.navigator}/>
        )
    },
    getRandom(n, m){
        //12 - 20
        return Math.ceil(Math.random() * 10000) % (m - n + 1) + n;
    },
    getData(){
        let arr = this.state.pickArr
        let getRandom = this.getRandom
        let data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|50': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'url': '',
                'title': '@ctitle(2,8)',
                'info': '@integer(1, 9999)元代金券一张，可叠加',
                'price': '@integer(1, 999)',
                'index': '@integer(1, 999)',
                'sellNum': '@integer(1, 9999)'
            }]
        }).list

        data.map((val, i) => {
            val.url = arr[getRandom(0, 16)]
        })

        return data
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    refreshTxtWrap: {
        // flex: 1,
        width: width,
        height: (height - 60 - StatusBar.currentHeight),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    refreshTxt: {
        color: '#FF6100',
        fontSize: 16,
        marginTop: 10
    },
    refreshBtn: {
        color: '#fff',
        fontSize: 16,
        marginTop: 10
    }
})