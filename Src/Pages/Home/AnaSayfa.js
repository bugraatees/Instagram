import React from 'react'
import {  SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, FlatList } from 'react-native'
import RESIMLER from '../../Images/RESIMLER'
import { SvgXml } from 'react-native-svg';


const hikayeler = [
  {source:require('../../Images/ben.jpg')},
  {source:require('../../Images/ben.jpg')},
  {source:require('../../Images/ben.jpg')},
  {source:require('../../Images/ben.jpg')},
  {source:require('../../Images/ben.jpg')},
  {source:require('../../Images/ben.jpg')},
  {source:require('../../Images/ben.jpg')},
]

const AnaSayfa = () => {
  return (
    <SafeAreaView style = {{flex:1, backgroundColor:'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor='gray' />
      <View style = {{margin:10, flexDirection:'row', justifyContent:'space-between' }}>
        <Text style={{fontSize:20, fontWeight:'700', fontStyle:'italic'}}>Instagram</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity>
            <SvgXml style={{}} width={'36'} height={'36'} xml={RESIMLER.kalpIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml style={{}} width={'36'} height={'36'} xml={RESIMLER.mesajIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style = {{margin:10}}>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={hikayeler}
        renderItem={({item}) =>
      <View>
        <TouchableOpacity>
          <Image style = {{width:90, height:90, borderRadius:35, marginLeft:5}} source={item.source}/>
        </TouchableOpacity>
      </View>}
        />
      </View>
    </SafeAreaView>
  )
}

export default AnaSayfa

const styles = StyleSheet.create({})