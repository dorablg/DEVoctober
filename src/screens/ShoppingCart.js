import { FlatList, View, StyleSheet } from 'react-native';
import CartListItem from '../components/CartListItem';
import cart from '../data/cart';

const ShoppingCart = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                keyExtractor={(item) => item.product.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ShoppingCart;
