import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Button
} from 'react-native';
import Friends from '../component/Friend'

const Head=(props)=>{
    return (
        <View style={styles.wordVector}>
            <Text style={styles.word}>{props.value}</Text>
        </View>);
};
const Tip=(props)=>{
    return(
        <View>
            <Text style={styles.tips}>{props.value}</Text>
        </View>
    )
};
const Field=(props)=>{
        let arr=props.info.split("%");
        let value="";
        for(let i=0;i<arr.length;i++)
            value+=arr[i]+" ";
        return(
            <View style={styles.vocBody}>
                <Text style={styles.voc}>{value}</Text>
            </View>
        )
};

export default class Detail extends Component {
  render() {
    const {state,navigate}=this.props.navigation
    const {word,interpretation,sentences,vocabulary,cn}=state.params;
    let voc=vocabulary.split("%");
    let value="";
    for(let i=0;i<voc.length;i++)
        value+=voc[i]+"\n";
    return (
        <View style={styles.container}>
            <Head value={word}/>
            <Tip value={"词性"}/>
            <Field info={vocabulary}/>
            <Tip value={"释义"}/>
            <Friends interpretation={interpretation} cn={cn} sentences={sentences} />
            <Text
                onPress={()=>{
                    navigate('Re',{
                    })
                }}
                style={styles.DetailButton}>Back</Text>
        </View>
    );
  }
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
