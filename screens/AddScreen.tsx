import React, { useState } from 'react'
import Header from './components/Header'
import { Text, SafeAreaView, StatusBar, TouchableOpacity, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNote } from '../context/MyNoteProvider'
const AddScreen = ({navigation}:any) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {notes, setNotes, getNotes}:any = useNote()

    const save = async () => {
        let formData = {
            title,
            content,
            time: Date.now()
        }
        const pushNotes = [...notes, formData]
        setNotes(pushNotes)
        await AsyncStorage.setItem('data', JSON.stringify(pushNotes))
        navigation.navigate('Home')
    }
  return (
    <>
        <SafeAreaView>
            <StatusBar backgroundColor={'white'} barStyle='dark-content'></StatusBar> 
        </SafeAreaView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Header icon="close" title="Add New"/>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={{padding:30}}>
                <View>
                    <TextInput placeholder='Title' style={styles.title_input} onChangeText={(value) => setTitle(value)}/>
                </View>
                <View style={{marginTop:30, height:500, borderRadius:10, borderWidth:1}}>
                    <TextInput placeholder='Content here' multiline={true}  onChangeText={(value) => setContent(value)}/>
                </View>
                <TouchableOpacity 
                    style={{width:'100%', backgroundColor:'red', padding:15, marginTop:30, borderRadius:10}}
                    onPress={() => save()}
                >
                    <Text style={{color:'white', textAlign:'center'}}>Save</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    </>
  )
}
const styles = StyleSheet.create({
    title_input: {
        borderWidth: 1,
        borderRadius:10,
        height:50
    },

})
export default AddScreen
