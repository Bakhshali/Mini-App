import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native-gesture-handler'

const Favorite = () => {

  const RenderItem = ({ item }: any) => {
    return <>
      <View style={styles.mainStyle} >
        <View style={styles.cardStyle} >
          <Image
            style={styles.imageStyle}
            source={{
              uri: item.image,
            }}
          />
          <Text style={styles.titleStyle}>{item.name}</Text>
          <Text style={styles.priceStyle}>From $ {item.price}</Text>
        </View>
      </View>
    </>
  }

  const [favorite, setdata] = useState<any>([])

  useFocusEffect(() => {
    AsyncStorage.getItem("favorite").then((res) => {
      let favor = JSON.parse(res ?? "[]")
      setdata(favor)
    })
  })
  
  return (
    <FlatList
      data={favorite}
      renderItem={RenderItem}
    />
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 117,
    height: 156,
    marginTop: 10
  },

  mainStyle: {
    flex: 1
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
    flex: 1
  },

  titleStyle: {
    fontSize: 25,
    fontWeight: "600",
    color: "black",
    marginTop: 5,
    width: 100,
    textAlign: "center"
  },

  priceStyle: {
    fontWeight: "700",
    fontSize: 18,
    color: "#5956E9",
    marginTop: 5,
    paddingBottom: 15
  }
})



export default Favorite

function useFocusEffect(arg0: () => void) {
  throw new Error('Function not implemented.')
}
