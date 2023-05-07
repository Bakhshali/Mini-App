import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import SvgSearch from '../src/components/icons/Search'

const Home = ({ navigation }: any) => {

  const [phones, setProduct] = useState([])
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get("https://645402c7e9ac46cedf35a20e.mockapi.io/phones")
      .then((resp => {
        setProduct(resp.data)
      }))
  }, [])

  const goToDetail = (id: any) => {
    navigation.navigate("ProductDetail", { id: id })
  }

  const RenderItem = ({ item }: any) => {
    return <SafeAreaView>
      <View style={{ backgroundColor: "#efefef", height: 320, marginTop: 20 }} >
        <TouchableOpacity onPress={() => goToDetail(item.id)}>
          <View style={styles.productStyle}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: item.image,
              }}
            />
            <View style={{ marginTop: 140 }}>
              <Text style={styles.textStyle}>{item.name}</Text>
              <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "400", color: "#868686", textAlign: "center" }} >Series {item.series} . {item.color}</Text>
              <Text style={{ marginTop: 15, fontSize: 17, fontWeight: "700", color: "#5956E9", textAlign: "center" }}>$ {item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  }

  return (
    <View>
      <View>
        {/* <SvgSearch style={styles.iconStyle} width={30} height={30} /> */}
        <TextInput style={styles.inputStyle} placeholder='Search'
          value={text}
          onChangeText={setText}
          placeholderTextColor="gray"
        ></TextInput>
      </View>
      <View style={styles.titleStyle}>
        <Text style={styles.textTitleStyle}>Order online collect in store</Text>
      </View>
      <View style={styles.categoryStyle}>
        <Text style={{ color: "#5956E9", fontSize: 20, fontWeight: "600" }}>Wearable</Text>
        <Text style={styles.categoryText}>Laptops</Text>
        <Text style={styles.categoryText}>Phones</Text>
        <Text style={styles.categoryText}>Drones</Text>
      </View>
      <View style={styles.line}></View>
      <FlatList
        horizontal
        data={phones}
        renderItem={RenderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  productStyle: {
    marginHorizontal: 20,
    backgroundColor: "white",
    width: 230,
    alignItems: "center",
    borderRadius: 30,
    marginTop: 50,
    paddingBottom: 30
  },

  line: {
    width: 88,
    height: 3,
    backgroundColor: "#5956E9",
    marginHorizontal: 20,
    marginTop: 5,
    borderRadius: 20
  },

  categoryStyle: {
    marginHorizontal: 20,
    flexDirection: "row",
    gap: 20,
    marginTop: 40
  },

  categoryText: {
    color: "gray",
    fontSize: 20
  },

  titleStyle: {
    marginHorizontal: 20,
    marginTop: 30,
    width: 300,
  },

  textTitleStyle: {
    color: "black",
    fontSize: 40,
    fontFamily: "Poppins",
    fontWeight: "900"
  },

  inputStyle: {
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 20,
    borderColor: "gray",
    height: 60

  },

  imageStyle: {
    height: 160,
    width: 160,
    borderRadius: 600,
    position: "absolute",
    top: -40
  },

  textStyle: {
    fontSize: 22,
    fontWeight: "600",
    color: "black",
    textAlign:"center"

  },

  iconStyle: {
    position: "absolute",

  }
})

export default Home