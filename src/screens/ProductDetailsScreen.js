import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions, ScrollView, Pressable } from 'react-native';

const ProductDetailsScreen = ({ product, onGoBack, onAddToCart }) => {
    const { width } = useWindowDimensions(); // Used to dynamically size images.

    return (
        <View style={styles.container}>
            {/* Product Images */}
            <ScrollView>
                <FlatList
                    data={product.images} // Displays product images in a horizontal scrollable list.
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={[styles.image, { width }]} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />

                {/* Product Information */}
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Add to Cart Button */}
            <Pressable onPress={() => onAddToCart(product)} style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </Pressable>

            {/* Back Button */}
            <Pressable onPress={onGoBack} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        aspectRatio: 1, // Keeps images square.
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: '500',
        color: 'gray',
    },
    description: {
        fontSize: 14,
        marginVertical: 10,
        lineHeight: 22,
    },
    addToCartButton: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 80,
        alignSelf: 'center',
        width: '90%',
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    backButton: {
        backgroundColor: 'gray',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: '90%',
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default ProductDetailsScreen;
