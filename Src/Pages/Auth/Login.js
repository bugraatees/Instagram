import React from 'react'
import { SafeAreaView,StatusBar,StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'

const Login = () => {

  function giriyapRender(){
    return(
      <View style = {{justifyContent:'center', flex:1}}>
          <Text style = {{color:'white', fontSize:30, fontStyle:'italic', alignSelf:'center', marginBottom:40}}>INSTAGRAM</Text>
        <View style = {{ margin:10, alignItems:'center'}}>
          <TextInput placeholder='Telefon numarası, kullanıcı adı veya e-posta' placeholderTextColor={'white'} style={{borderWidth:1, borderColor:'white', padding:8, backgroundColor:'#999999', borderRadius:10, marginBottom:10, width:'90%', alignSelf:'center'}} />
          <TextInput placeholder='Şifre' placeholderTextColor={'white'} keyboardType='numeric' style={{borderWidth:1, borderColor:'white', padding:8, backgroundColor:'#999999', borderRadius:10, width:'90%', alignSelf:'center', marginBottom:5}} />
          <TouchableOpacity style = {{marginBottom:30}}>
            <Text style={{color:'#0000ff', alignSelf:'flex-end', marginRight:20}}>Şifreni mi unuttun?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth:1, marginBottom:30, borderColor:'#0000ff', width:'90%', padding:12, backgroundColor:'#0000ff', borderRadius:15}}>
            <Text style = {{color:'w.hite', alignSelf:'center'}}>Giriş Yap</Text>
          </TouchableOpacity>
            <Text style={{color:'white', marginBottom:30}}>YA DA</Text>
            <View style = {{flexDirection:'row'}}>
              <Image style={{width:50, height:40}} source={require('../../Images/facebook.jpg')} />
              <Text style = {{color:'#0000ff', alignSelf:'center', marginLeft:10}}>Facebook ile Giriş Yap</Text>
            </View>
        </View>
      </View>
    )
  }

  function kaydolRender(){
    return(
      <View style={{justifyContent:'flex-end', alignItems:'center'}}>
       <View style={{flexDirection:'row'}}>
         <Text style={{color:'gray'}}>Hesabın yok mu?</Text>
         <TouchableOpacity>
          <Text style = {{color:'#0000ff'}}>Kaydol</Text>
         </TouchableOpacity> 
       </View>
      </View>
    )
  }

  return (
    <SafeAreaView style = {{backgroundColor:'black', flex:1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor='black' />
      {giriyapRender()}
      {kaydolRender()}  
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})