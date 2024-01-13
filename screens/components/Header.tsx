import React from "react"
import { Text, View } from "react-native"
import  Icon  from "react-native-vector-icons/Ionicons"
type HeaderProps = {
  icon: string,
  title:string
}
const Header = ({icon, title}: HeaderProps) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', padding:15, backgroundColor:'gray'}}>
      <Icon name={icon} size={30} color="#ffff" />
      <Text style={{fontWeight:'bold', textTransform:'uppercase', color:'#fff', marginVertical:10}}>{title}</Text>
    </View>
  )
}

export default Header
