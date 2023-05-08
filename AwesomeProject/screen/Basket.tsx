import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const Basket = () => {
  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.card}>
            <View>
              <Image
                style={styles.imageStyle}
                source={{
                  uri: "https://i.ytimg.com/vi/FRaQVtJptfA/maxresdefault.jpg",
                }} />
            </View>
            <View style={{
              gap: 8
            }}>
              <Text style={{
                fontWeight: "600",
                fontSize: 20,
                color: "black"
              }}>2020 Apple iPad Air 10.9"</Text>
              <Text style={{
                fontWeight: "600",
                fontSize: 19,
                color: "#5956E9"
              }}>$ 579</Text>
              <View style={{
                flexDirection: "row",
                gap: 10
              }}>
                <Text style={{
                  color: "black",
                  fontWeight: "300",
                  fontSize: 16
                }}>Quantity</Text>
                <TouchableOpacity style={{
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
                }}>2</Text>
                <TouchableOpacity style={{
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
          <View style={styles.card}>
            <View>
              <Image
                style={styles.imageStyle}
                source={{
                  uri: "https://i.ytimg.com/vi/FRaQVtJptfA/maxresdefault.jpg",
                }} />
            </View>
            <View style={{
              gap: 8
            }}>
              <Text style={{
                fontWeight: "600",
                fontSize: 20,
                color: "black"
              }}>2020 Apple iPad Air 10.9"</Text>
              <Text style={{
                fontWeight: "600",
                fontSize: 19,
                color: "#5956E9"
              }}>$ 579</Text>
              <View style={{
                flexDirection: "row",
                gap: 10
              }}>
                <Text style={{
                  color: "black",
                  fontWeight: "300",
                  fontSize: 16
                }}>Quantity</Text>
                <TouchableOpacity style={{
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
                }}>2</Text>
                <TouchableOpacity style={{
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
          }}>$ 954</Text>
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
      </ScrollView >
    </>

  )
}

const styles = StyleSheet.create({
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
