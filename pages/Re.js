
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import Main from './Main';
import Frineds from '../component/Friend'
import Hint from '../component/Hint'


const transform=(props)=>{
    var items=props.split("%");
    var s="";
    for(let i=0;i<items.length;i++){
        s+=items[i];
        if(i!=items.length-1)
            s+=","
    }
    return s;
}

const transform1=(props)=>{
    var items=props.split("%");
    var s="";
    for(let i=0;i<items.length&&i<2;i++){
        s+=i+1+"."
        s+=items[i];
        s+="\n"
    }
    return s;
}

deleteOne=(arr,index)=>{
    arr.splice(index,1);
    return arr;
}

const wordss=   
     [
        {
            "word":"PleaseWait",      
            "id":1,
            "vocabulary":"",
            "interpretation":"Please Wait",
            "cn":"",
            "sentences":"The INTERNET is connecting",
        },
    ]

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const webApi='192.168.43.86  192.168.0.113  www.buctsnc.club ?total=${this.all}&&from=${50-allTheWords}'
    
export default class Re extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:0,
            words:wordss,
            SHOW:'\n',
            finish:'none',
            isDone:'flex',
            over:'flex',
        }
    }
    all=this.props.navigation.state.params.total;

    componentDidMount()
    {
        fetch(`http://www.buctsnc.club/react/public/index.php/index/getword?total=${this.all}&&from=${50-allTheWords}`)
            .then((response) => response.text())
            .then((responseText)=>{
                const json=JSON.parse(responseText);
                this.setState({
                    words:json,
                })
            }).catch((error)=>{
            alert(error);
        });
    }

    render() {
        const {number,words,SHOW,finish,isDone,over}=this.state
        const {navigate,state}=this.props.navigation
    return (
        <View style={{
                    backgroundColor:'white',
                    width:width,
                    height:height,
                    marginTop:5,
                    alignItems:'center',
                    flexDirection:'column',
                }}
        >
            <View
                style={{
                    alignItems:'center',
                    height:height*0.7,
                }}
            >
                <View
                    style={{flexDirection:'row'          //单词和词性

                    }}
                >
                    <Text style={{
                        display:over,
                        fontSize:50,
                        fontWeight:'bold',
                        color:'black',
                        marginLeft:10,
                        }}
                    >
                        {words[number].word}
                    </Text>
                    <Text
                        style={{
                            display:over,
                            fontSize:20,
                            marginLeft:30,
                            marginTop:30,
                        }}
                    >
                        {transform(words[number].vocabulary)}
                    </Text>
                </View>
        
                <View style={{
                              width:width-20,
                              display:isDone,
                    }}>
                    <Text
                        style={{
                            fontSize:20,
                            fontStyle:'italic',
                            marginTop:30,
                            marginVertical:20,
                            textAlign:'left',
                        }}
                    
                    >
                        {SHOW}
                    </Text>
                </View>
            
            </View>
     

            <View
                style={{
                    alignItems:'center',
                    display:over,
                }}
            >
                <TouchableOpacity 
                    onPress={()=>{
                                                  
                            if(allTheWords===1){
                                //alert("11111111111hahah");
                                this.setState({
                                    SHOW:'Congratulations! All The Work Is Done!'+'\n'+'\n',
                                    finish:'flex',
                                    over:'none',
                    
                                })
                            }
                            else{
                                this.state.words[this.state.number].id= this.state.words[this.state.number].id - 1;
                                if(this.state.words[this.state.number].id===0 && this.all>1){
                                    //alert("hrhrhr");
                                    this.all=this.all-1;
                                    this.setState({
                                    words:deleteOne(this.state.words,this.state.number),
                                    SHOW:'\n',
                                    number:0,    
                                    })
                                    allTheWords=allTheWords-1;
                                }
                                else if(this.state.words[this.state.number].id===0){  
                                    //alert("hahah");
                                    this.setState({
                                        words:deleteOne(this.state.words,this.state.number),
                                        SHOW:'Congratulations! Your Work Is Done!'+'\n'+'\n',
                                        finish:'flex',
                                        over:'none',
                                    })
                                    allTheWords=allTheWords-1;    
                                }
                                else if(words[number].id>0){
                                        //alert("231Shahah");
                                        this.setState({
                                            number:((this.state.number+1)%this.all),
                                            SHOW:'\n',
                                        })
                                }
                            }

                    }}
                >
                    <Text style={[styles.moveButton,{ display:isDone,}]}
                    >
                        I Know It
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{
                        if(words[number].id===1){
                            this.setState({
                                SHOW:"examples:"+'\n'+transform1(words[number].sentences),
                                isDone:'flex',
                            })
                            words[number].id=words[number].id+1;
                        }
                        else if(words[number].id===2){
                            this.setState({
                                SHOW:   "examples:"+'\n'+transform1(words[number].sentences)+'\n'
                                        +"translation:"+'\n'+transform1(words[number].interpretation),
                                idDone:'flex',
                            })
                            words[number].id=words[number].id+1;
                        }
                        else if(words[number].id>2){
                            navigate('Detail',{
                                word:words[number].word,
                                vocabulary:words[number].vocabulary,
                                interpretation:words[number].interpretation,
                                sentences:words[number].sentences,
                                cn:words[number].cn,
                            })
                        }
                    
                    }}
                >
                    <Text style={[styles.moveButton,{ display:isDone,}]}>
                        I Don't Know
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                display:finish,
                width:width/2,
                }}>    
                <Button
                      onPress={()=>{
                        navigate('Main',{
                        })
                    }}
                    title="Back"
                    color="#841584"
                />
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    moveButton:{
    
        borderWidth:1,
        fontSize:20,
        width:width,
        height:35,  
        textAlign:'center',
        borderRadius:30,
        
    }
});
