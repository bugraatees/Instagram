import React from 'react'
import { useState } from 'react'
import { SafeAreaView,StatusBar,StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'

const resimler = [
  {source:require('../../Images/resim2.jpg')},
  {source:require('../../Images/resim3.jpg')},
  {source:require('../../Images/resim4.jpg')},
  {source:require('../../Images/resim5.jpg')}
]

const Profile = () => {

  const [secilenTab, setSecilenTab] = useState(1)

  function profilRender (){
    return(
      <View>
        <View style = {{ flexDirection:'row', justifyContent:'space-evenly'}}>
          <Image style={{width:90, height:90, borderRadius:50}} source={require('../../Images/resim1.jpg')} />
        <View style = {{margin:10, flexDirection:'row'}}>
          <View style={{margin:5}}>
           <Text style = {{color : 'white', marginLeft:16}}>5 </Text>
           <Text style = {{color : 'white'}}>Gönderi</Text>
          </View>
          <View style={{margin:5}}>
           <Text style = {{color : 'white', marginLeft:10}}>138</Text>
           <Text style = {{color : 'white'}}>Takipçi</Text>
          </View>
          <View style={{margin:5}}>
           <Text style = {{color : 'white', marginLeft:20}}>138</Text>
           <Text style = {{color : 'white'}}>Takip Edilen</Text>      
          </View>
        </View>
        </View>
      <View style = {{margin:10}}>
          <Text style={{color:'white', marginLeft:30}}>Buğra Ateş</Text>
       </View>
       <View style={{alignSelf:'center',borderWidth:1, borderColor:'white', backgroundColor:'gray', width:'40%', borderRadius:50, padding:9}}>
        <TouchableOpacity style = {{}}>
          <Text style={{color:'white', alignSelf:'center'}}>Profili Düzenle</Text>
        </TouchableOpacity>
       </View>
      </View>

    )
  }

  function resimlerRender (){
    return(
      <View>
      <FlatList
      data={resimler}
      numColumns={2}
      renderItem={({item}) =>
    <View style={{margin:10}}>
      <Image style = {{width:180, height:200, borderRadius:35}} source={item.source}/> 
    </View>}
      />
    </View>
    )
  }

  return (
    <SafeAreaView style = {{flex:1, backgroundColor:'black'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor='black' /> 
      {profilRender()}
       <View style = {{margin:10, flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => setSecilenTab(1)} >
         <Text style={secilenTab == 1 ? styles.aktifTab : styles.pasifTab}>Resimler</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSecilenTab(2)}>
         <Text style={secilenTab == 2 ? styles.aktifTab : styles.pasifTab}>Etiketler</Text>
        </TouchableOpacity>
      </View>
      {resimlerRender()}
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  pasifTab: {
    color: 'white',
    marginHorizontal: 40,
    fontSize: 25
  },
  aktifTab: {
    color: 'white',
    fontSize: 25,
    marginHorizontal: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#191919'
  }
})