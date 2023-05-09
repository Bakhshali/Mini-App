import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const Splash = ({ navigation }: any) => {


    return (
        <View style={{ flex: 1, backgroundColor: "#6350FF" }}>
            <Text style={styles.title}>Find your Gadget</Text>
            <View style={{alignItems:"center",marginTop:20}}>
                <Image
                    style={styles.image}
                    source={require('../../AwesomeProject/src/assets/images.png')}
                />
                <Image
                    style={styles.blurImage}
                    source={require('../../AwesomeProject/src/assets/blur.png')}
                />
            </View>
            <TouchableOpacity style={{
                backgroundColor:"white",marginHorizontal:40,
                padding:20,
                borderRadius:10,
                marginTop:40

            }} onPress={() => navigation.navigate("HomeStack")}>
                <Text style={{
                    color:"#5956E9",
                    fontSize:20,
                    fontWeight:"500",
                    textAlign:"center",
                    
                }}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: "700",
        marginHorizontal: 50,
        marginTop:20,
        color: "white"
    },

    image: {
        width: 300,
        height: 350
    },

    blurImage:{
        position:"absolute",
        bottom:-60
    }
})

export default Splash