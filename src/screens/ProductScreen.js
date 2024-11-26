import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductScreen = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: item.image }}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ProductScreen;
