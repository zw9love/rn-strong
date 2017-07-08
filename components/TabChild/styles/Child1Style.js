/**
 * Created by Administrator on 2017/7/8.
 */
import {StyleSheet,StatusBar,Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    shadow: {
        backgroundColor: '#FF6100',
        height: StatusBar.currentHeight
    },
    header: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FF6100',
    },
    headerTxt: {
        fontSize: 14,
        color: '#fff'
    },
    headerInfo: {
        color: '#fff',
        fontSize: 12,
        marginLeft: 5
    },
    headerSearchImg: {
        width: 20,
        height: 20,
        marginLeft: 15
    },
    headerInputWrap: {
        flexDirection: 'row',
        height: 30,
        width: width - 120,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 15,
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#fff',
        // borderRadius: 15
    },
    headerImg: {
        width: 24,
        height: 24
    },
    carouselContainer: {
        height: 180,
    },
    carouselCell: {
        height: 160,
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
        // alignItems: 'flex-start',
        // alignItems: 'center',
    },
    circel: {
        // backgroundColor:'#ccc',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 5
    },
    circelContainer: {
        width: width,
        position: 'absolute',
        left: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        backgroundColor: '#fff'
    },
    carouselCellWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: width / 5,
        // backgroundColor:'red'
    },
    carouselCellImg: {
        width: 30,
        height: 30
    },
    carouselCellTxt: {
        fontSize: 12,
        color: '#333',
        marginTop: 5
    },
    storeContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    storeLeft: {
        width: width / 2,
        height: 120,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderRightColor: '#e8e8e8',
        borderBottomColor: '#e8e8e8'
    },
    storeLeftImg: {
        width: 100,
        height: 30,
        marginTop: 5
    },
    storeLeftInfo: {
        fontSize: 16,
        color: '#888'
    },
    storeLeftPrice: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    priceLeft: {
        color: '#21C0AF'
    },
    priceRight: {
        color: '#FF6100',
        backgroundColor: 'yellow'
    },
    storeRight: {
        width: width / 2,
        height: 120,
        // backgroundColor:'yellow',
    },
    scrollView: {
        marginBottom: 60 + StatusBar.currentHeight,
        // alignItems: 'center',
        // backgroundColor:'red'
    },
    bigAdver: {
        marginTop: 20
    },
    adverContainer: {
        flexDirection: 'row',
    },
    adverLeft: {
        borderRightWidth: 1,
        borderRightColor: '#e8e8e8',
        width: width / 2,
    },
    adverRight: {
        width: width / 2,
    },
    shopContainer: {
        marginTop: 20
    },
    hotContainer: {
        marginTop: 20
    },
    hotWrap: {
        padding: 5,
        backgroundColor: '#fff',
    },
    hotWrapTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    hotWrapBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    likeContainer: {
        marginTop: 20,
    },
    lookAllWrap: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: width * 0.1 / 2,
        height: 40,
        width: width * 0.9,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lookAllTxt: {
        color: '#FF6100',
        fontSize: 16
    },
    backTopWrap: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 20,
        bottom: 95,
        backgroundColor: '#FF6100',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backImage: {
        width: 17,
        height: 13
    }
});