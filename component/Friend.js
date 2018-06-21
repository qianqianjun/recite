import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Button
} from 'react-native';



const Item=(props)=>{
    return(
        <View style={styles.item}>
            <Text style={styles.items}>
                {props.cn+"\n"+props.interpretation+"\n"+props.sentences}
            </Text>
        </View>
    )
}


export default Friends=(props)=>{
    let item1=props.interpretation.split("%");
    let item2=props.cn.split("%");
    let item3=props.sentences.split("%");
    let item=new Array();
    for(let i=0;i<item1.length;i++)
    {
        let temp={};

        temp.cn=item2[i];
        temp.interpretation=item1[i];
        temp.sentences=item3[i];
        temp.key=i.toString(),
        item.push(temp);
    }
    return (
        <View style={styles.friend}>
            <FlatList
                data={item}
                renderItem={({item}) =>
                <Item
                    cn={item.cn}
                    interpretation={item.interpretation}
                    sentences={item.sentences}
                />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    friend:{
        marginTop:15,
        height:Dimensions.get("window").height*0.5
    },
    items:{
        width:Dimensions.get("window").width*0.8,
        padding:10,
        lineHeight:25,
    },
    item:{
        justifyContent:'center',
        borderTopWidth:2,
        borderTopColor:'#dcdcdc',
    },
    voc:{
        fontSize:20,
        paddingTop:5,
        paddingBottom:5,
    },
    vocBody:{
        paddingLeft:20,
    },
    tips:{
        borderColor:'mediumspringgreen',
        borderWidth:1,
        marginLeft:10,
        fontSize:15,
        width:40,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:5,
    },
    word:{
        fontSize:40,
        fontWeight:'bold',
    },
    wordVector:{
        paddingLeft:10,
        paddingBottom:15,
        paddingTop:20,
    },
    DetailButton:{
        width:Dimensions.get("window").width,
        padding:3,
        justifyContent:'center',
        textAlign:'center',
        fontSize:25,
        backgroundColor:'mediumspringgreen',
        position:'absolute',
        bottom:0,
    },
    container:{
        backgroundColor:'#ffffff',
        height:Dimensions.get("window").height,
        flex:1,
    }
});
