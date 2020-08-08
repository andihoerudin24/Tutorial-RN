import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import AlbmuDetail from './AlbumDetail'
const Albumlist = (props) => {
  const [album, setData] = useState();

  useEffect(() => {
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
      .then((response) => response.json())
      .then((data) => () => {
        return data;
      })
      .then((data1) => setData(data1));
  }, []);
  return (
    <View>
      {!album ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        album.map((album) => <AlbmuDetail key={album.title} album={album} /> )
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    centered:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default Albumlist;
