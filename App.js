import React,{useState, useEffect} from 'react'
import { StyleSheet,Text,View } from 'react-native'

const App =  props =>{
  const [testing,settesting]=  useState(500)
  useEffect(()=>{
      console.log('component did mount')
    },[])

  useEffect(()=>{
     console.log('ini adalah did update')
  },[testing])
  
  useEffect(()=>{
    return () =>{
       settesting(100)
      console.log('ini adalah unmonting')
    }
  },[testing])


    return(
      <View style={{flex:1}}>
        <View style={styles.ViewStyle}>
            <Text style={styles.textStyle}>Albums</Text>
    <Text>{testing}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  ViewStyle:{
     backgroundColor:"#F8F8F8",
     justifyContent:'center',
     alignItems:'center',
     height:60,
     paddingTop:15,
     shadowColor:'#000',
     shadowOffset:{width:0,height:2},
     shadowOpacity:0.2   
  },
  textStyle:{
     fontSize:28 
  }
})

export default App