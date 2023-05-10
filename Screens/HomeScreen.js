import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Viaja con nosotros
      </Text>
      <TouchableOpacity
        onPress={()=> navigation.navigate("LugaresTuristicos")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Nuestras ofertas en Lugares Turisticos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate("Tabs")}
        style={[styles.button, styles.buttonMargin]}
      >
        <Text style={styles.buttonText}>Registarse</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3d3d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#8a2be2',
    padding: 16,
    borderRadius: 8,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  buttonMargin: {
    marginTop: 30,
  },
});

export default HomeScreen;
