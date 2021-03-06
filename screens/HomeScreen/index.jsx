import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getImages } from "../../api/pexels";
import CardImage from "../../components/CardImage";

const HomeScreen = () => {
  const [images, setImages] = useState([]);

  const loadImages = async () => {
    const res = await getImages();
    setImages(res)
  };
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item }) => <CardImage image={item} widthImage={2.1} heightImage={220} />}
        numColumns="2"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{alignItems:"center", marginTop: -30}
})

export default HomeScreen;
