import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProductDetail = ({ route }: any) => {

    const [detail, setDetail] = useState<any>()
    // const [info, setInfo] = useState<any>()
    // const [favorite, setFavorite] = useState<any>()
    const { id } = route.params
    
    useEffect(() => {
        axios.get(`https://645402c7e9ac46cedf35a20e.mockapi.io/phones/${id}`)
            .then(resp => {
                setDetail(resp.data)
            })
    }, [])


    // useEffect(() => {
    //     AsyncStorage.getItem("info")
    //         .then(resp => {
    //             let infos = JSON.parse(resp ?? "[]");
    //             setInfo(infos)
    //         })

    // }, [])

    // const addFavorite = ({ item }: any) => {
    //     AsyncStorage.setItem("favorite", JSON.stringify([...favorite, item]))
    // }

    

    return (
        <SafeAreaView>
            <View style={styles.contanier}>
                <Image
                    style={styles.imageView}
                    source={{
                        uri: detail?.image,
                    }}
                />
                <Text style={styles.title}>{detail?.productTitle}</Text>
                <Text style={{
                    color: "black", fontSize: 20,
                    fontWeight: "700"
                }}>Colors</Text>
                <View style={{
                    width: 110,
                    height: 40,
                    borderWidth: 1,
                    borderColor: "gray",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 10,
                    marginTop: 10,
                    borderRadius: 15
                }}>
                    <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: detail?.color.toLowerCase(),
                        borderRadius: 600
                    }} ></View>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "700",
                        color: "#373737"
                    }}>{detail?.color}</Text>
                </View>
                <Text style={styles.subtitle} >{detail?.subtitle}</Text>
                <Text style={styles.about}>{detail?.about}</Text>
                <View style={styles.priceMainView}>
                    <Text style={{
                        fontSize: 17,
                        color: "black"
                    }}>Price</Text>
                    <Text style={{
                        fontWeight: "700",
                        fontSize: 19,
                        color: "#5956E9"
                    }}>$ {detail?.price}</Text>
                </View>
            </View>
            <TouchableOpacity >
                <View style={styles.basketView}>
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                    }}>Add to basket</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    contanier: {
        marginHorizontal: 20,
        marginTop: 20,
    },

    imageView: {
        width: 350,
        height: 300,
        borderRadius: 10
    },

    title: {
        fontSize: 28,
        color: "black",
        fontWeight: "600",
        marginTop: 15
    },

    subtitle: {
        color: "black",
        fontSize: 17,
        fontWeight: "700",
        marginTop: 10
    },

    about: {
        fontWeight: "400",
        fontSize: 15,
        color: "gray",
        marginTop: 5
    },

    priceMainView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },

    basketView: {
        borderWidth: 1,
        borderColor: "#5956E9",
        marginHorizontal: 20,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        backgroundColor: "#5956E9",
        borderRadius: 10
    }
})

export default ProductDetail
