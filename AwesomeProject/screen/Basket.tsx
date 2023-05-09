import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler'
import SvgDelete from '../src/components/icons/Delete';


const Basket = ({ navigation }: any) => {


  const [basket, setBasket] = useState<any>([])
  const isFocused = useIsFocused()



  useEffect(() => {
    if (isFocused) {
      getBasket()
    }
  }, [isFocused])

  const getBasket = async () => {
    let basket: any = await AsyncStorage.getItem("basket")
    setBasket(JSON.parse(basket))
  }

  const totalPrice = () => {
    let total = 0
    if (basket.length > 0) {
      basket.forEach((element: any) => {
        total += element.product.price * element.count
      });
    }
    return total
  }

  const increaseCount = async (id: any) => {
    let item: any = basket.find((c: any) => c.product.id == id)
    item.count++
    await AsyncStorage.setItem("basket", JSON.stringify(basket))
    setBasket([...basket])
  }

  const DeleteProduct = async (id: any) => {
    let item: any = basket.filter((c: any) => c.product.id != id)
    await AsyncStorage.setItem("basket", JSON.stringify(item))
    setBasket([...item])
  }

  const decreaseCount = async (id: any) => {
    let item: any = basket.find((c: any) => c.product.id == id)
    if (item.count > 1) {
      item.count--
    }
    setBasket([...basket])
  }

  return (
    <>
      {
        basket.length == 0 &&
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white", height: 650 }}>
          <Image style={styles.buyImage}
            source={require("../../AwesomeProject/src/assets/buysome.png")}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.buttonBuying}>
            <Text style={styles.buttonBasket}>
              Buying something
            </Text>
          </TouchableOpacity>
        </View>
      }
      {
        basket &&
        <FlatList
          data={basket}
          renderItem={({ item }: any) => (
            <ScrollView>
              <View>
                <View style={styles.card}>
                  <View>
                    <Image
                      style={styles.imageStyle}
                      source={{
                        uri: item.product.image,
                      }} />
                  </View>
                  <View style={{
                    gap: 8
                  }}>
                    <View style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}>
                      <Text style={{
                        fontWeight: "600",
                        fontSize: 20,
                        color: "black"
                      }}>{item.product.name}</Text>
                      <TouchableOpacity  onPress={() => DeleteProduct(item.product.id)}>
                        <SvgDelete style={{
                          width:20,
                          height:20,
                          marginTop:5
                        }} />
                      </TouchableOpacity>
                    </View>
                    <Text style={{
                      fontWeight: "600",
                      fontSize: 19,
                      color: "#5956E9"
                    }}>$ {item.product.price * item.count}</Text>
                    <View style={{
                      flexDirection: "row",
                      gap: 10
                    }}>
                      <Text style={{
                        color: "black",
                        fontWeight: "300",
                        fontSize: 16
                      }}>Quantity</Text>
                      <TouchableOpacity onPress={() => decreaseCount(item.product.id)} style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "#7DCCEC",
                        borderRadius: 5,
                        alignItems: "center"
                      }}>
                        <Text style={{
                          color: "white",
                        }}>-</Text>

                      </TouchableOpacity>
                      <Text style={{
                        color: "black",
                        fontWeight: "500",
                      }}>{item.count}</Text>
                      <TouchableOpacity onPress={() => increaseCount(item.product.id)} style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "#7DCCEC",
                        borderRadius: 5
                      }}>
                        <Text style={{
                          color: "white",
                          textAlign: "center"
                        }}>+</Text>

                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

            </ScrollView >
          )} />
      }
      {
        basket.length >= 1 &&
        <View style={{paddingBottom:10}}>
          <ScrollView>
            <View style={{
              flex: 3,
              justifyContent: "space-between",
              flexDirection: "row",
              padding: 20
            }}>
              <Text style={{
                fontWeight: "300",
                fontSize: 20,
                color: "black"
              }}>Total</Text>
              <Text style={{
                color: "#5956E9",
                fontWeight: "500",
                fontSize: 20
              }}>$ {totalPrice()}</Text>
            </View>
            <View style={{
              backgroundColor: "#5956E9",
              padding: 20,
              justifyContent: "center",
              marginHorizontal: 15,
              borderRadius: 10
            }}>
              <TouchableOpacity>
                <Text style={{
                  textAlign: "center",
                  fontWeight: "500",
                  color: "white",
                  fontSize: 23,
                }}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      }

    </>
  )
}

const styles = StyleSheet.create({
  buttonBuying: {
    backgroundColor: "#58C0EA",
    borderRadius: 10,
    marginTop: 50,
    width: 280,
    height: 55,
    justifyContent: "center",
    alignItems: "center"
  },
  buyImage: {
    width: 300,
    height: 300,
  },
  buttonBasket: {
    fontSize: 23,
    fontWeight: "500",
    color: "white"
  },
  imageStyle: {
    width: 80,
    height: 105,
    borderRadius: 3
  },
  card: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    gap: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white"

  }
})

export default Basket