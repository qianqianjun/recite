import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


export default SayHi=()=>(

    <View style={{backgroundColor:'white',                       
        width:width,
        alignItems:'center',
        borderBottomColor:'gainsboro',
        borderBottomWidth:1,
        height:height/5-40,
        marginTop:5,
        }}
    >
        <Text style={{
            fontSize:40,
            fontWeight:'bold',
            color:'lightsalmon',
            
        }}>
            Hi, 
        </Text>
        <Text style={{
            fontSize:15,
            color:'darkgray',                                  //打招呼的
        }}>
            make a little progress every day
        </Text>
    </View>


)

