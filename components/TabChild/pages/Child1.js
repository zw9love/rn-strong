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
    TextInput,
    RefreshControl,
    StatusBar,
    ListView,
    Dimensions
} from 'react-native';
import TimerMixin from 'react-timer-mixin'
import {styles} from '../styles/Child1Style'

import Advertisement from '../components/Advertisement'
import Effect from '../components/Effect'
import ShopMainCell from '../components/ShopMainCell'
import HotWrapTopCell from '../components/HotWrapTopCell'
import HotWrapBottomCell from '../components/HotWrapBottomCell'
import LoveCell from '../components/LoveCell'
import CameraDemo from './CameraDemo'
import IndexSearch from './IndexSearch'
import Address from './Address'
import Message from './Message'
import WebPage from './WebPage'
import ClassicShow from './ClassicShow'
import Mock from 'mockjs'

let {width, height} = Dimensions.get('window');

export default React.createClass({
    mixins: [TimerMixin],
    render(){
        return (
            <View style={styles.container}>
                {/*StatusBar组件*/}
                <StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor={'#FF6100'}
                    translucent={true}
                    //barStyle='light-content'
                    showHideTransition={'fade'}
                    //networkActivityIndicatorVisible={true}
                />
                <View style={styles.shadow}></View>
                {/*头部*/}
                <View style={styles.header}>
                    {/*<Text>Height: {StatusBar.currentHeight}</Text>*/}
                    <TouchableOpacity onPress={this.jumpAddress}>
                        <Text style={styles.headerTxt}>{this.state.city}∨</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerInputWrap} onPress={this.jumpSeach}>
                        <Image source={require('../../../assets/img/icon_homepage_search.png')}
                               style={styles.headerSearchImg}/>
                        <Text style={styles.headerInfo}>输入商家、种类、商圈</Text>
                        {/*<TextInput*/}
                        {/*style={styles.headerInput}*/}
                        {/*underlineColorAndroid='transparent'*/}
                        {/*placeholder='输入商家、种类、商圈'*/}
                        {/*placeholderTextColor="#ccc"*/}
                        {/*/>*/}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.jumpScan}>
                        <Image source={require('../../../assets/img/icon_homepage_scan.png')} style={styles.headerImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.jumpMessage}>
                        <Image source={require('../../../assets/img/icon_homepage_message.png')}
                               style={styles.headerImg}/>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={styles.scrollView}
                    scrollsToTop={true}
                    ref="scrollView"
                    onScroll={this.viewScroll}
                    scrollEventThrottle={0}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.myRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#fff']}
                        progressBackgroundColor="#FF6100"
                      />
                    }
                >
                    {/*轮播*/}
                    <View style={styles.carouselContainer}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            onMomentumScrollEnd={this.changeIndex}
                        >
                            {this.renderCarousel()}
                        </ScrollView>
                        <View style={styles.circelContainer}>
                            {this.renderCircle()}
                        </View>
                    </View>
                    {/*名店这里*/}
                    <View style={styles.storeContainer}>
                        {/*名店左边*/}
                        <TouchableOpacity style={styles.storeLeft} onPress={this.jumpStore}>
                            <Image source={require('../../../assets/img/mdqg.png')} style={styles.storeLeftImg}/>
                            <Image source={require('../../../assets/img/yyms.png')} style={styles.storeLeftImg}/>
                            <Text style={styles.storeLeftInfo}>探路组碳烤鱼</Text>
                            <View style={styles.storeLeftPrice}>
                                <Text style={styles.priceLeft}>￥9.5</Text>
                                <Text style={styles.priceRight}>再减3</Text>
                            </View>
                        </TouchableOpacity>
                        {/*名店右边*/}
                        <View style={styles.storeRight}>
                            <Advertisement data={{title:'天天特价',info:'优惠不打烊',style:{color:'#FF6100'},
                            pickArr:this.state.pickArr,src:require('../../../assets/img/tttj.png')}} navigator={this.props.navigator}/>
                            <Advertisement data={{title:'一元吃',info:'一元吃美食',style:{color:'red'},
                            pickArr:this.state.pickArr,src:require('../../../assets/img/yyms.png')}} navigator={this.props.navigator}/>
                        </View>
                    </View>
                    {/*单独广告这里*/}
                    <View style={styles.bigAdver}>
                        <Advertisement data={{title:'最高立减25',info:'报名威哥 新学员专享',style:{color:'#FB7F66'},
                            pickArr:this.state.pickArr,src:require('../../../assets/img/nsj.png')}} navigator={this.props.navigator}/>
                    </View>
                    {/*4个广告这里*/}
                    <View style={styles.adverContainer}>
                        <View style={styles.adverLeft}>
                            <Advertisement data={{title:'千万红包限时抢',info:'5折起美食畅吃',style:{color:'#FF6100'},
                            pickArr:this.state.pickArr}} navigator={this.props.navigator}/>
                            <Advertisement data={{title:'鲜花1折起',info:'撩妹更easy',style:{color:'#41A041'},
                            pickArr:this.state.pickArr}} navigator={this.props.navigator}/>
                        </View>
                        {/*名店右边*/}
                        <View style={styles.adverRight}>
                            <Advertisement data={{title:'踏青好去处',info:'优惠游周边',style:{color:'#FFC0CB'},
                            pickArr:this.state.pickArr}} navigator={this.props.navigator}/>
                            <Advertisement data={{title:'踏青季特惠',info:'春游装备1元购',style:{color:'#800280'},
                            pickArr:this.state.pickArr}} navigator={this.props.navigator}/>
                        </View>
                    </View>
                    {/*购物中心*/}
                    <View style={styles.shopContainer}>
                        <Effect
                            data={{title:'购物中心',text:'全部4家',icon:require('../../../assets/img/gwzx.png'),goComponent:ClassicShow}}
                            navigator={this.props.navigator}/>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={false}
                        >
                            {this.renderShopMainCell()}
                        </ScrollView>
                    </View>
                    {/*热门频道*/}
                    <View style={styles.hotContainer}>
                        <Effect
                            data={{title:'热门频道',text:'查看全部',icon:require('../../../assets/img/rm.png'),goComponent:ClassicShow}}
                            navigator={this.props.navigator}/>

                        <View style={styles.hotWrap}>
                            <View style={styles.hotWrapTop}>
                                {this.renderHotTop()}
                            </View>
                            <View style={styles.hotWrapBottom}>
                                {this.renderHotBottom()}
                            </View>
                        </View>
                    </View>
                    {/*猜你喜欢*/}
                    <View style={styles.likeContainer}>
                        <Effect
                            data={{title:'猜你喜欢',icon:require('../../../assets/img/cnxh.png'),goComponent:ClassicShow}}
                            navigator={this.props.navigator}/>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderLove}
                        />
                        {/*{this.renderLove()}*/}
                    </View>
                    {/*查看全部*/}
                    {
                        this.state.showButton ? (
                                <TouchableOpacity onPress={this.lookMore}>
                                    <View style={styles.lookAllWrap}>
                                        <Text style={styles.lookAllTxt}>查看全部商品</Text>
                                    </View>
                                </TouchableOpacity>
                            ) : null
                    }
                </ScrollView>
                {/*回到顶部*/}
                {
                    this.state.backTopActive ? (
                            <TouchableOpacity style={styles.backTopWrap} activeOpacity={0.6} onPress={this.backTop}>
                                <Image source={require('../../../assets/img/back_top.png')} style={styles.backImage}/>
                            </TouchableOpacity>
                        )
                        : null
                }

            </View>
        )
    },
    setCity(name){
        this.setState({city: name})
    },
    setData(data){
        this.setState({tempData: data})
    },
    jumpStore(){
        this.props.navigator.push({
            component: WebPage,
            // passProps:{}  //传递过去的参数
            passProps: {title: '名店抢购', url: 'http://i.meituan.com/topic/huilife?cevent=imt%2Fhomepage%2Fhomeguide3'}
        })
    },
    jumpMessage(){
        this.props.navigator.push({
            component: Message,
            // passProps:{}  //传递过去的参数
            //passProps:{setCity:this.setCity,setData:this.setData,tempData:this.state.tempData}
        })
    },
    jumpAddress(){
        this.props.navigator.push({
            component: Address,
            // passProps:{}  //传递过去的参数
            passProps: {setCity: this.setCity, setData: this.setData, tempData: this.state.tempData}
        })
    },
    jumpSeach(){
        this.props.navigator.push({
            component: IndexSearch
        })
    },
    jumpScan(){
        this.props.navigator.push({
            component: CameraDemo
        })
    },
    jumpClassicShow(title){
        this.props.navigator.push({
            component: ClassicShow,
            passProps: {title: title}
        })
    },
    backTop(){
        this.refs.scrollView.scrollTo({x: 0, y: 0, animated: true})
        //this.refs.scrollView.scrollToEnd({animated: true})
    },
    viewScroll(e){
        let offsetY = e.nativeEvent.contentOffset.y;
        //优化一下
        if (offsetY < 50 && (this.state.judgeArr[0] == this.state.backTopActive)) {
            return;
        } else if (offsetY >= 50 && (this.state.judgeArr[1] == this.state.backTopActive)) {
            return;
        } else {
            this.setState({backTopActive: !this.state.backTopActive})
        }
        //offsetY <= 50 ? this.setState({backTopActive:false}) : this.setState({backTopActive:true})
    },
    myRefresh(){
        this.setState({isRefreshing: true});
        this.setTimeout(() => {
            this.setState({isRefreshing: false});
        }, 3000)
    },
    lookMore(){
        if (this.lock) return;
        this.lock = true;
        this.setState({isRefreshing: true});
        this.setTimeout(() => {
            this.setState({
                isRefreshing: false,
                showButton: false,
                data: this.state.data.concat(this.getData())
            });
        }, 3000)
    },
    renderLove(data){
        return (
            <LoveCell
                data={data}
                navigator={this.props.navigator}
                changeNav={this.props.changeNav}
            />
        )
    },
    Waterfall(){
        // if (this.waterFalllock) return
        // this.setState({data: this.state.data.concat(this.getData())})
    },
    renderHotTop(){
        let data = [
            {url: require('../../../assets/img/hot_play.png'), title: '演出赛事', info: '精彩不容错过'},
            {url: require('../../../assets/img/hot_car.png'), title: '汽车服务', info: '汽车打蜡特惠'}
        ];
        let arr = [];
        data.map((msg, i) => {
            arr.push(<HotWrapTopCell key={i} data={msg} navigator={this.props.navigator}/>)
        })
        return arr;
    },
    renderHotBottom(){
        let data = [
            {url: require('../../../assets/img/hot_air.png'), title: '订机票', info: '一折票马上抢'},
            {url: require('../../../assets/img/hot_water.png'), title: '温泉', info: '品质暖冬专享'},
            {url: require('../../../assets/img/hot_eat.png'), title: '火锅', info: '冬日必吃美食'},
            {url: require('../../../assets/img/hot_wash.png'), title: '亲自游玩', info: '宝贝儿去哪了'},
        ]
        let arr = [];
        data.map((msg, i) => {
            arr.push(<HotWrapBottomCell key={i} data={msg} navigator={this.props.navigator}/>)
        })
        return arr;
    },
    renderShopMainCell(){
        let data = [
            {url: require('../../../assets/img/kd.png'), info: '22家优惠', name: '凯德广场-云尚'},
            {url: require('../../../assets/img/lyl.png'), info: '111家优惠', name: '来又来广场'},
            {url: require('../../../assets/img/wd.png'), info: '66家优惠', name: '白云万达广场'},
            {url: require('../../../assets/img/zjgc.png'), info: '88家优惠', name: '强哥威哥1广场'},
            {url: require('../../../assets/img/kd.png'), info: '88家优惠', name: '强哥威哥2广场'},
            {url: require('../../../assets/img/lyl.png'), info: '88家优惠', name: '强哥威哥3广场'},
        ];
        let arr = [];
        data.map(function (msg, i) {
            arr.push(<ShopMainCell key={i} data={msg}/>)
        })

        return arr;
    },
    renderCircle(){
        let arr = [];
        let specialStyle = {};
        for (let i = 0; i < 2; i++) {
            specialStyle = this.state.index == i ? {backgroundColor: '#FF6100'} : {backgroundColor: '#ccc'};
            arr.push(
                <View key={i} style={[styles.circel,specialStyle]}></View>
            )
        }
        return arr;
    },
    renderCarousel(){
        let data = [
            [
                {src: require('../../../assets/img/zlam.png'), name: '足疗按摩'},
                {src: require('../../../assets/img/gw.png'), name: '购物'},
                {src: require('../../../assets/img/jrxd.png'), name: '今日新单'},
                {src: require('../../../assets/img/xckc.png'), name: '小吃快餐'},
                {src: require('../../../assets/img/shfw.png'), name: '生活服务'},
                {src: require('../../../assets/img/tdyp.png'), name: '甜点饮品'},
                {src: require('../../../assets/img/mj.png'), name: '美甲'},
                {src: require('../../../assets/img/jdmp.png'), name: '景点门票'},
                {src: require('../../../assets/img/ly.png'), name: '旅游'},
                {src: require('../../../assets/img/qbfl.png'), name: '全部分类'},
            ],
            [
                {src: require('../../../assets/img/zlam.png'), name: '足疗按摩'},
                {src: require('../../../assets/img/gw.png'), name: '购物'},
                {src: require('../../../assets/img/jrxd.png'), name: '今日新单'},
                {src: require('../../../assets/img/xckc.png'), name: '小吃快餐'},
                {src: require('../../../assets/img/shfw.png'), name: '生活服务'},
            ]
        ]
        let arr = [];
        let self = this;
        for (let i = 0; i < data.length; i++) {
            arr.push(
                <View style={styles.carouselCell} key={i}>
                    {
                        data[i].map(function (msg, index) {
                            return (
                                <TouchableOpacity key={index} style={styles.carouselCellWrap}
                                                  onPress={()=>{self.jumpClassicShow(msg.name)}}>
                                    <Image source={msg.src} style={styles.carouselCellImg}></Image>
                                    <Text style={styles.carouselCellTxt}>{msg.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            )
        }
        return arr;
    },
    getRandom(n, m){
        return Math.ceil(Math.random() * 10000) % (m - n + 1) + n
    },
    getData(){
        this.waterFalllock = true
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

        this.waterFalllock = false

        return data
    },
    getInitialState(){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds,
            tempData: null,
            city: '北京',
            index: 0,
            isRefreshing: false,
            showButton: true,
            backTopActive: false,
            judgeArr: [false, true],
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
            ],
            data: []
        }
    },
    componentDidMount(){
        //设定标识符为false
        this.lock = false;
        this.waterFalllock = false;
        this.setState({dataSource: this.state.dataSource.cloneWithRows(this.getData())})
        // fetch('http://www.z1995.com/data.json').then((response) => response.json())
        // .then((responseJson) => {
        //     // console.log(responseJson)
        //     return responseJson.movies;
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
    },
    changeIndex(e){
        //水平的偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        //求出当前的page
        let currentIndex = parseInt(offsetX / width);
        //更新小圆点
        this.setState({index: currentIndex})
    }
})

