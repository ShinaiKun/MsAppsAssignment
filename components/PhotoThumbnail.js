import React from 'react'
import { Image } from 'react-native'
import Styles from '../Styles'

const PhotoThumbnail = ({ url }) => {
     return <Image source={{ uri: url }} style={Styles.thumbnail} />
}

export default PhotoThumbnail;