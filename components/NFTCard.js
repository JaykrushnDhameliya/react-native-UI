import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import assets from "../constants/assets";
const NFTCard=({Data})=>{
    return(
        <>
            <View style={{backgroundColor:'white',borderRadius: 15,marginBottom:30,margin:20,paddingBottom:30

            }}>
            <View style={{
                width: "100%",
                height: 240,
            }}>
                <Image source={Data.image} style={{width:'100%',height:'100%',borderTopLeftRadius:15,borderTopRightRadius:15}}/>
                <View style={{position:'absolute',bottom:40,left:10,}}>
                <Text style={{position:'absolute',width:200,height:500,marginHorizontal:10,}}>{[assets.person01,assets.person02,assets.person03].map((item)=>(
                <Image source={item} style={{backgroundColor:'white',width:50,height:50,margin:44}}/>
                ))}</Text>
                </View>
                <Ionicons style={{backgroundColor:'white',borderRadius:50,position:'absolute',right:10,top:10,padding:3}} size={26} color='red' name='heart'/>
            </View>
            </View>
            </>
    )
};
export default NFTCard
