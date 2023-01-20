import React from 'react'
import {  SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, FlatList } from 'react-native'
import RESIMLER from '../../Images/RESIMLER'
import { SvgXml } from 'react-native-svg';


const hikayeler = [
  {source:require('../../Images/resim2.jpg')},
  {source:require('../../Images/resim3.jpg')},
  {source:require('../../Images/resim4.jpg')},
  {source:require('../../Images/resim5.jpg')},
  {source:require('../../Images/ben.jpg')},
  {source:require('../../Images/ben.jpg')},
  {source:require('../../Images/ben.jpg')},
]

const isimler = [
 {isim : 'bugraatees'},
 {isim : 'berkesemiz'},
 {isim : 'ouzkaangunes'},
 {isim : 'erdemsarıipek'},
 {isim : 'tunahansmz'},
]

const AnaSayfa = () => {
  return (
    <SafeAreaView style = {{flex:1, backgroundColor:'black'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor='black' />
      <View style = {{margin:10, flexDirection:'row', justifyContent:'space-between' }}>
        <Text style={{fontSize:20, fontWeight:'700', fontStyle:'italic', color:'white'}}>Instagram</Text>
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
        <View style={{}}>
          <FlatList 
          horizontal={true}
          data={isimler}
          renderItem={({item})=>
        <View style = {{margin:5 }}>
          <Text style = {{color:'white', alignSelf:'center', marginLeft:8}}>{item.isim}</Text>
        </View>}
          />
        </View>
        <ScrollView>
          <View style={{margin:10, flexDirection:'row'}}>
            <Image style={{width:50, height:50 , borderRadius:50}} source={require('../../Images/gs.jpg')} />
            <Text style={{color:'red', alignSelf:'center', marginLeft:10, fontWeight:'700' }}>Galatasaray</Text>
          </View>
            <View>
              <Image style={{width:'100%', height:400, borderRadius:30}} source={require('../../Images/galatasaray.jpg')}/>
            </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default AnaSayfa

const styles = StyleSheet.create({})