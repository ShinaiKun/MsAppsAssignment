import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  thumbnail: {
    width: undefined,
    height: Dimensions.get('window').width / 4,
    resizeMode: 'cover',
    flex: 1,
    aspectRatio: 1,
    borderColor: '#000',
    borderWidth: 1,
  },
  photoFeedView: {
    backgroundColor: '#d3d3d3'
  },
  title: {
    fontSize: 24
  },
  viewPhoto: {
    width: Dimensions.get('window').width,
    height: undefined,
    aspectRatio: 1,
    margin: 0
  }
});

export default Styles;