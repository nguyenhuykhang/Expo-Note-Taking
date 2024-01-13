import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Text, SafeAreaView, StatusBar, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNote } from '../context/MyNoteProvider'
import Icon from 'react-native-vector-icons/AntDesign'
const DetailScreen = ({route, navigation}:any) => {

  const {notes, setNotes, getNotes}:any = useNote()
  const {item} = route.params

  const convertTime = (time:any) => {
    let date = new Date(time)
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    return `${month}/${day}/${year}`

  }
  return (
    <>
    <SafeAreaView>
        <StatusBar backgroundColor={'white'} barStyle='dark-content'></StatusBar> 
      </SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Header icon="close" title="Detail"/>
        </TouchableOpacity>
      <View style={{padding:15, marginTop:30}}>

            <View style={{backgroundColor:'pink', padding:20, borderRadius:10, marginTop:30}}>
              <Text style={{fontWeight:'bold', marginBottom:15}}>{item.title}</Text>
              <Text>{item.content}</Text>
              <Text>Time: {convertTime(item.time)}</Text>
            </View>

      </View>
      <TouchableOpacity style={styles.btn_add} onPress={() => navigation.navigate('Add')}>
        <Icon name="edit" size={30} color="white" />
      </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
  btn_add: {
    width:50, 
    height: 50,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"red",
    position: 'absolute',
    bottom: 20,
    right: 20

  }
})
export default DetailScreen
