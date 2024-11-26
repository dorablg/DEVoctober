import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,FlatList} from 'react-native';
import products from './src/data/products'; 
import ProductScreen from './src/screen/ProductScreen';
import ShoppingCart from './src/screen/ShoppingCart';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
export default function App() {
  return (
    <View style={styles.container}>
    <ShoppingCart/>
 <StatusBar style='auto'/>
 </View>
 );
}
   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  }
);
