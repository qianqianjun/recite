/**
 * Created by Gaoqian on 2018/6/12.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';
const Tip=(props)=>{
    return(
        <View>
            <Text style={{  borderColor:'#6dcd7c',
                            borderWidth:1,
                            fontSize:15,
                            width:40,
                            paddingTop:5,
                            paddingBottom:5,
                            paddingLeft:5,
        }}>
            {props.value}</Text>
        </View>
    )
};
export default Hints=(props)=>{
    if(props.SHOW==='\n')
        return null;
    let type=props.SHOW[0];
    if(type==="1")
    {
        let item1=props.SHOW[1].split("%");
        let item="";
        for(let i=0;i<item1.length;i++)
        {
            item+=(i+1).toString()+"."+" "+item1[i]+"\n";
            if(i>3)
                break;
        }
        return(
            <View
            style={{
                display:props.isDone
            }}
            >
                <Tip value="例句"/>
                <Text style={styles.info}>{item}</Text>
            </View>
        )
    }
    else
    {
        let item1=props.SHOW[1].split("%");
        let item2=props.SHOW[2].split("%");
        let itemi="";
        let items="";
        for(let i=0;i<item1.length;i++)
        {
            items+=(i+1).toString()+"."+" "+item1[i]+"\n";
            itemi+=(i+1).toString()+"."+" "+item2[i]+"\n";
            if(i>3)
                break;
        }
        return(
            <View
                style={{
                    display:props.isDone
                }}
            
            >
                <Tip value="例句"/>
                <Text style={styles.info}>{items}</Text>
                <Tip value="释义"/>
                <Text style={styles.info}>{itemi}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    friend:{
        marginTop:15,
    },
    info:{
        lineHeight:30,
        fontSize:15,
        paddingLeft:10,
    },
    items:{
        padding:10,
        lineHeight:25,
    },
    item:{
        justifyContent:'center',
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
        borderColor:'#6dcd7c',
        borderWidth:1,
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
    container:{
        backgroundColor:'#ffffff',
        height:Dimensions.get("window").height,
        flex:1,
    }
});

