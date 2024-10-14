import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductData } from "../data/ProductData";
import PrimeLogo from '../assets/prime-logo.png'
import { getRating } from "../utils/helpers";

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
      <Text style={styles.title}>Result</Text>
      <Text style={styles.tagline}>Price and other details may vary based on product aside and color</Text>
      
      {
        ProductData.map((item) => (
            <View key={item.id} style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image source={item.image} style={styles.productImg} />
            </View>

            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.productName}</Text>
            

            <View style={styles.roww}>
            <Text style={styles.rating}>{item.rating}</Text>
            {getRating(item.rating)}
            <Text style={styles.ratingCount}>{item.ratingCount}</Text>
            </View>

            <View style={styles.roww}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.crossout}>{item.crossOutText}</Text>
            </View>

            <Text style={styles.cashback}>Up to 5% cashback with Amazon Pay Credit card</Text>

            <Image style={styles.logo} source={PrimeLogo} />
            <Text style={styles.cashback}>Free Delivey by {item.deliveryBy}</Text>
            </View>
            </View>
        ))
      }

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container:{
    padding:10
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    color:'#000'
  },
  tagline:{
    fontsize:11,
    color:'gray'
  },
  productSection:{
    borderWidth:1,
    borderColor:'#ddd',
    flexDirection:'row',
    marginVertical:15
  },
  productImgSection:{
    width:'40%',
    backgroundColor:'#ddd',
    justifyContent:'center',
  },
  productImg:{
    width:'100%',
    height:150,
    resizeMode:'contain'
  },
  productDetailSection:{
    width:'50%',
    padding:10
  },
  sponsored:{
    fontSize:11,
    color:'#000'
  },
  productName:{
    fontSize:12,
    color:'#000',
    lineHeight:18
  },
  roww:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:5
  },
  rating:{
    fontsize:10,
    color:'#017185',
    marginRight:5
  },
  ratingCount:{
    fontsize:10,
    color:'#017185',
  },
  price:{
    fontsize:16,
    fontWeight:'bold',
    color:'#000',
    marginRight:5
  },
  crossout:{
    fontSize:10,
    color:'gray',
    textDecorationLine:'line-through'
  },
  cashback:{
    fontsize:9,
    marginVertical:3
  },
  logo:{
    height:16,
    width:42,
    marginVertical:3
  },
  row:{},
});
