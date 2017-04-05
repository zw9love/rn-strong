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

//但是遗憾的是，在Android平台上不支持吸顶效果
export default React.createClass({
    getInitialState(){
        let getSectionData = function (dataBlob, sectionID) {
            return dataBlob[sectionID];
        }

        let getRowData = function (dataBlob, sectionID, rowID) {
            return dataBlob[sectionID + ':' + rowID];
        }
        return {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            }),
            data: [
                {
                    "cars": [
                        {
                            "icon": require("../assets/img/1.jpg"),
                            "name": "AC Schnitzer"
                        },
                        {
                            "icon": require("../assets/img/2.jpg"),
                            "name": "阿尔法·罗密欧"
                        },
                        {
                            "icon": require("../assets/img/3.jpg"),
                            "name": "奥迪"
                        },
                        {
                            "icon": require("../assets/img/4.jpg"),
                            "name": "阿斯顿·马丁"
                        }
                    ],
                    "title": "A"
                },
                {
                    "cars": [
                        {
                            "icon": require("../assets/img/5.jpg"),
                            "name": "巴博斯"
                        },
                        {
                            "icon": require("../assets/img/6.jpg"),
                            "name": "宝骏"
                        },
                        {
                            "icon": require("../assets/img/7.jpg"),
                            "name": "宝马"
                        },
                        {
                            "icon": require("../assets/img/8.jpg"),
                            "name": "保时捷"
                        },
                        {
                            "icon": require("../assets/img/9.jpg"),
                            "name": "北京汽车"
                        },
                        {
                            "icon": require("../assets/img/10.jpg"),
                            "name": "北汽幻速"
                        },
                        {
                            "icon": require("../assets/img/11.jpg"),
                            "name": "北汽威旺"
                        },
                        {
                            "icon": require("../assets/img/12.jpg"),
                            "name": "北汽制造"
                        },
                        {
                            "icon": require("../assets/img/13.jpg"),
                            "name": "奔驰"
                        },
                        {
                            "icon": require("../assets/img/14.jpg"),
                            "name": "奔腾"
                        },
                        {
                            "icon": require("../assets/img/15.jpg"),
                            "name": "本田"
                        },
                        {
                            "icon": require("../assets/img/16.jpg"),
                            "name": "标致"
                        },
                        {
                            "icon": require("../assets/img/17.jpg"),
                            "name": "别克"
                        },
                        {
                            "icon": require("../assets/img/18.jpg"),
                            "name": "宾利"
                        }
                    ],
                    "title": "B"
                },
                {
                    "cars": [
                        {
                            "icon": require("../assets/img/1.jpg"),
                            "name": "昌河"
                        }
                    ],
                    "title": "C"
                },
                {
                    "cars": [
                        {
                            "icon": require("../assets/img/2.jpg"),
                            "name": "道奇"
                        },
                        {
                            "icon": require("../assets/img/3.jpg"),
                            "name": "大通"
                        },
                        {
                            "icon": require("../assets/img/4.jpg"),
                            "name": "大众"
                        },
                        {
                            "icon": require("../assets/img/5.jpg"),
                            "name": "东风"
                        },
                        {
                            "icon": require("../assets/img/6.jpg"),
                            "name": "东风风度"
                        },
                        {
                            "icon": require("../assets/img/7.jpg"),
                            "name": "东风风神"
                        },
                        {
                            "icon": require("../assets/img/8.jpg"),
                            "name": "东风风行"
                        },
                        {
                            "icon": require("../assets/img/9.jpg"),
                            "name": "东风小康"
                        },
                        {
                            "icon": require("../assets/img/10.jpg"),
                            "name": "东南"
                        },
                        {
                            "icon": require("../assets/img/11.jpg"),
                            "name": "DS"
                        }
                    ],
                    "title": "D"
                },
                {
                    "cars": [
                        {
                            "icon": require("../assets/img/12.jpg"),
                            "name": "法拉利"
                        },
                        {
                            "icon": require("../assets/img/13.jpg"),
                            "name": "飞驰商务车"
                        },
                        {
                            "icon": require("../assets/img/14.jpg"),
                            "name": "菲斯克"
                        },
                        {
                            "icon": require("../assets/img/15.jpg"),
                            "name": "菲亚特"
                        },
                        {
                            "icon": require("../assets/img/16.jpg"),
                            "name": "丰田"
                        },
                        {
                            "icon": require("../assets/img/17.jpg"),
                            "name": "福迪"
                        },
                        {
                            "icon": require("../assets/img/18.jpg"),
                            "name": "福迪"
                        }
                    ],
                    "title": "F"
                },
                {
                    "cars": [
                        {
                            "icon": require("../assets/img/1.jpg"),
                            "name": "GMC"
                        },
                        {
                            "icon": require("../assets/img/2.jpg"),
                            "name": "光冈"
                        },
                        {
                            "icon": require("../assets/img/3.jpg"),
                            "name": "广汽"
                        },
                        {
                            "icon": require("../assets/img/4.jpg"),
                            "name": "广汽吉奥"
                        },
                        {
                            "icon": require("../assets/img/5.jpg"),
                            "name": "广汽日野"
                        },
                        {
                            "icon": require("../assets/img/6.jpg"),
                            "name": "观致汽车"
                        }
                    ],
                    "title": "G"
                },
            ]
        }
    },
    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
                contentContainerStyle={styles.container}
            />
        )
    },
    renderRow(data){
        return(
            <TouchableOpacity activeOpacity={0.3} onPress={()=>{this.mypress(data.name)}}>
                <View style={styles.rowStyle}>
                    <Image source={data.icon} style={styles.imageStyle}></Image>
                    <Text style={styles.textStyle}>{data.name}</Text>
                </View>
            </TouchableOpacity>
        )
    },
    renderSectionHeader(data,id){
        return(
            <TouchableOpacity style={styles.sectionStyle}>
                <Text style={{color:'#333',fontSize:20}}>{data}</Text>
            </TouchableOpacity>
        )
    },
    mypress(name){
        alert(name);
    },
    componentDidMount(){
        let data = this.state.data;
        let dataBlob = {}, sectionIDs = [], rowIDs = [], arr = [];
        for (let i = 0; i < data.length; i++) {
            sectionIDs.push(i);
            dataBlob[i] = data[i].title;
            rowIDs[i] = [];
            arr = data[i].cars;
            for (let j = 0; j < arr.length; j++) {
                rowIDs[i].push(j);
                dataBlob[i + ':' + j] = arr[j]
            }
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        })
    }
})

const styles = StyleSheet.create({
    imageStyle:{
        width:80,
        height:80,
        borderRadius:40,
        // marginLeft:10,
    },
    sectionStyle:{
        height:40,
        justifyContent: 'center',
        paddingLeft:10,
        backgroundColor:'#e8e8e8'
    },
    rowStyle:{
        flexDirection:'row',
        alignItems: 'center',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1,
        padding:10
    },
    textStyle:{
        marginLeft:10,
        color:'#333',
        fontSize:16
    }
})