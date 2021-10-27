import React from 'react'
import { Image, View } from 'react-native'
import Styles from '../Styles'

const ViewPhoto = ({ route }) => {
     return (
          <View style={Styles.container}>
               <Image source={{ uri: route.params.url }} style={Styles.viewPhoto} />
          </View>
     )
}

export default ViewPhoto;