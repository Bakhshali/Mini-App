import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useIsFocused } from '@react-navigation/native';
import SvgDelete from '../src/components/icons/Delete'
import SvgX22 from '../src/components/icons/X22'


const Favorite = ({navigation}:any) => {
  const [favorite, setFavorite] = useState<any>([])
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      getFavorite()
    }
  }, [isFocused])

  const getFavorite = async () => {
    let favorite: any = await AsyncStorage.getItem("favorite")
    setFavorite(JSON.parse(favorite))
  }

  const removeWishlist = async (id: any) => {
    let atTheMomentList: any = favorite.filter((c: any) => c.product.id != id)
    await AsyncStorage.setItem("favorite", JSON.stringify(atTheMomentList))
    setFavorite([...atTheMomentList])

  }

  const RenderItem = ({ item }: any) => {
    return <>
      <View style={styles.mainStyle} >
        <View style={styles.cardStyle} >
          <Image
            style={styles.imageStyle}
            source={{
              uri: item.product.image,
            }}
          />
          <SvgX22 style={{
            width: 15,
            height: 15,
            position: "absolute",
            top: 10,
            right: 10,
          }} onPress={() => removeWishlist(item.product.id)} />
          <Text style={styles.titleStyle}>{item.product.name}</Text>
          <Text style={styles.priceStyle}>From $ {item.product.price}</Text>
        </View>
      </View>
    </>

  }


  return (
    <>
      {
        favorite.length == 0 &&
        <SafeAreaView>
          <Image style={styles.favImg}
            source={require("../../AwesomeProject/src/assets/favorite.png")}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={{
              fontSize: 30,
              color: "black",
              fontWeight: "500"
            }}>No favorites yet</Text>
            <Text style={{
              width: 200,
              textAlign: "center",
              fontWeight: "300",
              color: "gray",
              fontSize: 15,
              marginTop: 10
            }}>Hit the orange button down
              below to Create an order</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{
              backgroundColor:"#58C0EA",
              width:220,
              height:50,
              alignItems:"center",
              justifyContent:"center",
              borderRadius:10,
              marginTop:25

            }}>
              <Text style={{
                color:"white",
                fontSize:18,
                fontWeight:"500"
              }}>
                Start ordering
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      }
      {
        favorite &&
        <FlatList
          data={favorite}
          renderItem={RenderItem}
        />
      }
    </>

  )
}

const styles = StyleSheet.create({
  favImg: {
    width: 350,
    height: 350,
    marginTop: 30
  },
  imageStyle: {
    width: 100,
    height: 130,
    marginTop: 10,
    borderRadius: 10
  },

  mainStyle: {
    flex: 1,
  },

  cardStyle: {
    width: 170,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,

    borderRadius: 15,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },

  titleStyle: {
    fontSize: 22,
    fontWeight: "600",
    color: "black",
    marginTop: 5,
    width: 100,
    textAlign: "center"
  },

  priceStyle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#5956E9",
    marginTop: 5,
    paddingBottom: 15
  }
})



export default Favorite


{/* <View style={styles.mainStyle} >
        <View style={styles.cardStyle} >
          <Image
            style={styles.imageStyle}
            source={{
              uri: "https://i.ytimg.com/vi/FRaQVtJptfA/maxresdefault.jpg",
            }}
          />
          <Text style={styles.titleStyle}>Apple iPhone</Text>
          <Text style={styles.priceStyle}>From $ 450</Text>
        </View>
        <View style={styles.cardStyle} >
          <Image
            style={styles.imageStyle}
            source={{
              uri: "https://i.ytimg.com/vi/FRaQVtJptfA/maxresdefault.jpg",
            }}
          />
          <Text style={styles.titleStyle}>Apple iPhone</Text>
          <Text style={styles.priceStyle}>From $ 450</Text>
        </View>
      </View> */}