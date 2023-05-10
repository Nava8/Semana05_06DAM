import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const images = [
  { id: 1, uri: 'https://picsum.photos/id/1003/300/300' },
  { id: 2, uri: 'https://picsum.photos/id/1002/300/300' },
  { id: 3, uri: 'https://picsum.photos/id/1001/300/300' },
  { id: 4, uri: 'https://picsum.photos/id/1004/300/300' },
  { id: 5, uri: 'https://picsum.photos/id/1005/300/300' },
  { id: 6, uri: 'https://picsum.photos/id/1006/300/300' },
];

const GalleryPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: images[0].uri }} />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: images[1].uri }} />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: images[2].uri }} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: images[3].uri }} />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: images[4].uri }} />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: images[5].uri }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  imageContainer: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

export default GalleryPage;
