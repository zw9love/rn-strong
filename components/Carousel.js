import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import TimerMixin from 'react-timer-mixin'

const Dimensions = require('Dimensions');

let {width, height, scale} = Dimensions.get('window');

export default React.createClass({
    mixins: [TimerMixin],
    componentDidMount(){
        this.autoPlay();
    },
    autoPlay(){
        this.clearInterval(this.timer);
        this.timer=this.setInterval(function(){
            //更新小圆点
            let n = this.state.index + 1;
            if(n === this.state.ImageArr.length) n = 0;
            this.setState({index:n})
            //获取点击小圆点所应该到达的水平位移值
            let currentX = n * width;
            //拿到dom然后设置偏移值
            this.refs.scrollView.scrollResponderScrollTo({x:currentX, y:0, animated:true});
        },3000)
    },
    getInitialState(){
        return {
            ImageArr: [
                {src: require('../assets/img/carousel1.jpg')},
                {src: require('../assets/img/carousel2.jpg')},
                {src: require('../assets/img/carousel3.jpg')},
                {src: require('../assets/img/carousel4.jpg')},
                {src: require('../assets/img/carousel5.jpg')},
                {src: require('../assets/img/carousel6.jpg')},
            ],
            index:0
        }
    },
    beginDrag(){
        this.clearInterval(this.timer);
    },
    endDrag(){
        this.autoPlay();
    },
    render(){
        return (
            <View style={styles.Container}>
                {/*scrollEnabled={false}*/}
                {/*alwaysBounceHorizontal={true}*/}
                <ScrollView
                    style={styles.scollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={this.changeIndex}
                    onScrollBeginDrag={this.beginDrag}
                    onScrollEndDrag  ={this.endDrag}
                    ref="scrollView"
                >
                    {
                        this.state.ImageArr.map(function (msg, i) {
                            return (
                                <Image key={i} source={msg.src} style={styles.imgStyle}></Image>
                            )
                        })
                    }
                </ScrollView>
                <View style={styles.shadowContainer}></View>
                <View style={styles.circleContainer}>
                    {this.circleRender()}
                </View>
            </View>
        )
    },
    circleRender(){
        let len = this.state.ImageArr.length;
        let arr = [];
        let special = null;
        for (let i = 0; i < len; i++) {
            special = ( i === this.state.index) ?  {backgroundColor:'orange'} : {}
            arr.push(
                <TouchableOpacity
                    style={[styles.circleStyle,special]}
                    key={i}
                    activeOpacity={0.7}
                    onPress={() => this.myPress(i)}
                >
                </TouchableOpacity>
            )
        }
        return arr;
    },
    changeIndex(e){
        //水平的偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        //求出当前的page
        let currentIndex = parseInt(offsetX / width);
        //更新小圆点
        this.setState({index:currentIndex})
    },
    myPress(n){
        this.clearInterval(this.timer);
        //更新小圆点
        this.setState({index:n});
        //获取点击小圆点所应该到达的水平位移值
        let currentX = n * width;
        //拿到dom然后设置偏移值
        this.refs.scrollView.scrollResponderScrollTo({x:currentX, y:0, animated:true});
        this.autoPlay();
    }
})

const styles = StyleSheet.create({
    Container: {
        // backgroundColor: '#ccc'
    },
    scollViewStyle: {
        // backgroundColor: 'red'
    },
    shadowContainer:{
        width: width,
        height: 40,
        backgroundColor: '#000',
        position: 'absolute',
        left: 0,
        bottom: 0,
        opacity: 0.4,
    },
    circleContainer: {
        width: width,
        height: 40,
        position: 'absolute',
        left: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:10
    },
    imgStyle: {
        width: width,
        height: 180,
        resizeMode:Image.resizeMode.stretch,
    },
    circleStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginLeft: 5
    }
})