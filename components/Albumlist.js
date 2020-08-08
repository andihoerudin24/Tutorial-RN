import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

const Albumlist = (props) => {
  const [data, setData] = useState();

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
      {!data ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        data.map((album) => <Text key={album.title}>{album.title}</Text>)
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
