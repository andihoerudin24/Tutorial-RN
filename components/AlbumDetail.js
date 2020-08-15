import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../Card/Card";
import CardSection from "../Card/CardSection";

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbailContainer}>
          <Image
            style={styles.thubmnail}
            source={{ uri: props.album.thumbnail_image }}
          />  
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTextStyle}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
         style={styles.imageStyle}
         source={{uri:props.album.image}} 
        />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
    imageStyle:{
      height:300,
      flex:1,
      width:null
    },
    headerTextStyle:{
       fontSize:18   
    },
    headerContainer:{
     flexDirection:'column',
     justifyContent:'space-around' 
  }, 
  thubmnail: {
    height: 50,
    width: 50,
  },
  thumbailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default AlbumDetail;
