import {useState} from 'react';
import {Text, View, StyleSheet, FlatList,StatusBar} from 'react-native';
import {NFTData} from "../constants/dummy";
import NFTCard from "../components/NFTCard";

const Home=()=>{
  return (
      <>
      <View>
          <StatusBar setBarStyle={{display:'none'}} animated={true}/>

          <View>
            <FlatList data={NFTData} renderItem={({item})=><NFTCard Data={item}/>}/>
        </View>

{/*      <View*/}
{/*    style={{*/}
{/*        position: "absolute",*/}
{/*            top: 0,*/}
{/*            bottom: 0,*/}
{/*            right: 0,*/}
{/*            left: 0,*/}
{/*            zIndex: -1,*/}
{/*    }}*/}
{/*>*/}
{/*<View*/}
{/*    style={{ height: 300, backgroundColor: 'green' }} />*/}
{/*    <View style={{ flex: 1, backgroundColor: 'white' }} />*/}
{/*    </View>*/}
</View>
      <View style={{
        position:'absolute',
            zIndex:-1,
            top:0,
            right:0,
            left:0,
            bottom:0
    }}>
    <View style={{backgroundColor:'black',height:300}}/>
    <View style={{backgroundColor:'blue',flex:1}}/>
    </View>
    </>
  )
};
export default Home
