
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import FadeInView from '../component/FadeIn';
import Remain from '../component/Remain';
import SayHi from '../component/SayHi';


const howManyShouldResite = 2;                      //若无输入，背单词的默认数   
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Main extends Component {
  static navigationOptions={
    title:'HomePage',
    headerTintColor:'saddlebrown',
  }

  total=1;
  //=howManyShouldResite;  

  render() {

    const {navigate} =this.props.navigation
    
    return (
    <View style={styles.main}>

      
      <Image                                                             
        source={require('../resources/b32.jpg')}
        style={{width:width,height:height/8}}                       //顶部图片 
        >
      </Image>    
    
        <SayHi/>

        <View style={{
                      alignItems:'center',
                      backgroundColor:'white',
                      width:width,
                      height:height/2+70,
                    }}
        >   
        
        <FadeInView>
          <Text style={{
                fontSize:40,
                marginTop:20,
                color:'lightsalmon',
                fontWeight:'200',
                lineHeight:50,
                textShadowColor:'lightgray',
                textShadowOffset:{width:5,height:5},
                textShadowRadius:5,
                fontWeight:'bold',
          }}>
            Start Now
          </Text>
        </FadeInView>

          <TextInput
            onChangeText={(value)=>{
              this.total=value
            }}
            onSubmitEditing={()=>{
              navigate('Re',{total:this.total})
            }}
            placeholder="Input the number of words you want to recite"
            blurOnSubmit={false}
            returnKeyType="done"
            style={{
              height:60,
              width:width-80,
              marginBottom:50
            }}
          />      
          <Remain/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:'flex-start',
      alignItems:'center',
    },
});
