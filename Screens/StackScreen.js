import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares Turisticos</Text>
      <View style={styles.productContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmxCscR0-mD70EdOvHXV60xsTrzjzkTK4wIM6CFzPTQ&s' }}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Machu Picchu</Text>
          <Text style={styles.productDescription}>
          fue construido alrededor de 1450, durante la época incaica y fue un importante centro urbano y religioso. Se conoce que fue habitado por una población de entre 300 y 1000 habitantes, los cuales se dedicaban la mayoría a la agricultura          </Text>
          <Text style={styles.productPrice}>$599.99</Text>
        </View>
      </View>
      <View style={styles.productContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2743970.jpg?w=1600&h=1649' }}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>piramides de egipto</Text>
          <Text style={styles.productDescription}>
          Las pirámides de Egipto son, de todos los vestigios legados por los egipcios de la Antigüedad, los más portentosos y emblemáticos reconocidos.          </Text>
          <Text style={styles.productPrice}>$499.99</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    width: 700
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StackScreen;
