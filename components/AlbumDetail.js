import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AlbumDetail = (props) => {
  return (
    <View>
      <View>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
