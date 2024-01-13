import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Text, SafeAreaView, StatusBar, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNote } from '../context/MyNoteProvider'
const HomeScreen = ({navigation}:any) => {
  // const [data, setData] = useState([])
  
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('data')
  //     if (value !== null) {
  //       // value previously stored
  //     }
  //   } catch (error) {
      
  //   }
  // }
  
  // useEffect(() => {
  //   getData()

  // }, [])

  const {notes, setNotes, getNotes}:any = useNote()
  const deleteItem = async (item:any) => {
    let newData = notes.filter((e:any) => e.time !== item.time)
    await AsyncStorage.setItem('data', JSON.stringify(newData))
    getNotes()
  }

  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={'white'} barStyle='dark-content'></StatusBar> 
      </SafeAreaView>
      <Header icon="menu" title="My Note"/>
      <View style={{padding:15, marginTop:30}}>
        <FlatList
          data ={notes}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>
              <View style={{backgroundColor:'pink', padding:20, borderRadius:10, marginTop:30}}>
                <Text style={{fontWeight:'bold', marginBottom:15}}>{item.title}</Text>
                <Text>{item.content}</Text>

                <TouchableOpacity style={{flexDirection:'row-reverse'}} onPress={() => deleteItem(item)}>
                  <Icon name="delete" size={30}/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
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
export default HomeScreen
