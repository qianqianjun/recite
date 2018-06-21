import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';



export default Remain=()=>(

    <View
        style={{alignItems:'center',
                marginTop:40,
            }}
    > 
        <Text
            style={{
            fontSize:25,
            color:'lightsalmon',
            fontWeight:'bold',
            textDecorationLine:'underline'
            }}
        >
            {allTheWords} 
        </Text>

        <Text
            style={{
            fontSize:15,
            color:'darkgray'
            }}
        >
            Number Of The Remaining Rords 
        </Text>
    </View>

)




