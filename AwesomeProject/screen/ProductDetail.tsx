import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SvgHeart from '../src/components/icons/Heart'
import { Title } from 'react-native-paper'

const ProductDetail = ({ route }: any) => {

    const [detail, setDetail] = useState<any>()
    const { id } = route.params

    useEffect(() => {
        axios.get(`https://645402c7e9ac46cedf35a20e.mockapi.io/phones/${id}`)
            .then(resp => {
                setDetail(resp.data)
            })
    }, [])

    const addFavorite = async () => {
        let favorites: any = await AsyncStorage.getItem("favorite")

        if (!favorites) {
            favorites = []
            let newItems = {
                product: detail
            }
            favorites.push(newItems)

            await AsyncStorage.setItem("favorite", JSON.stringify(favorites))
        }
        else {
            let parseFavorite = JSON.parse(favorites)
            let wishlistItem = parseFavorite.find((c: any) => c.product.id == detail.id)
            if (wishlistItem) {
                await AsyncStorage.setItem("favorite", JSON.stringify(parseFavorite));
            }
            else {
                let wishlistItem = {
                    product: detail,
                }
                parseFavorite.push(wishlistItem);
                console.log(parseFavorite);

                await AsyncStorage.setItem('favorite', JSON.stringify(parseFavorite));
            }

        }





    }

    const AddToBasket = async () => {
        let basket: any = await AsyncStorage.getItem("basket");

        if (!basket) {
            basket = []
            let basketItem = {
                product: detail,
                count: 1
            }
            basket.push(basketItem)
            await AsyncStorage.setItem("basket", JSON.stringify(basket))
        }
        else {
            let parseBasket = JSON.parse(basket)
            let basketItem = parseBasket.find((c: any) => c.product.id == detail.id)

            if (basketItem) {
                basketItem.count++
                await AsyncStorage.setItem("basket", JSON.stringify(parseBasket));
            }
            else {
                let basketItem = {
                    product: detail,
                    count: 1
                }
                parseBasket.push(basketItem);
                await AsyncStorage.setItem('basket', JSON.stringify(parseBasket));
            }
        }
    }



    return (
        <SafeAreaView>

            <View style={styles.contanier}>
                <View style={{ position: "absolute", top: 18, right: 13, zIndex:1}}><TouchableOpacity>
                    <SvgHeart width={32} height={32} style={{ stroke: "#200E32", fill: "none",width:24,heigth:24 }} onPress={addFavorite} />
                </TouchableOpacity></View>
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
            <TouchableOpacity onPress={AddToBasket} >
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
        width: 320,
        height: 300,
        borderRadius: 5,
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
        marginTop: 20,
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
