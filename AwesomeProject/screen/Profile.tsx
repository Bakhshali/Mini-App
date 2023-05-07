import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{
      marginTop: 50,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: "https://instagram.fgyd20-1.fna.fbcdn.net/v/t51.2885-19/344370080_623739573104325_3301379702842213452_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fgyd20-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=R-SThgW2UdYAX8nC7F9&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAb5z62MUG2K9MK4iCI6Ixit65J_p07lhnhuM1xc2mebw&oe=645C74AE&_nc_sid=8fd12b"
        }}
      />
      <Text style={{ fontSize: 20, color: "black", fontWeight: "600", marginTop: 10 }}>N.Bakshali</Text>
      <Text style={{
        fontSize: 18,
        width:220,
        marginTop:10,
        textAlign:"center",
      }}>
        Address: 43 NewYork City M13 4GR America,USA
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 80
  }
})
export default Profile