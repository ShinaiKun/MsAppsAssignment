import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import Styles from '../Styles'
import * as config from '../config.json'

const PhotoFeed = ({ navigation }) => {

     const [photos, setPhotos] = useState([])
     const [page, setPage] = useState(1)
     const [isLoading, setIsLoading] = useState(true)

     const getPhotos = async () => {
          try {
               console.log(`Pulling from api with ${config.per_page} per page, page number is ${page}. ApiKey: ${config.api_key}\n`) // Stayed for debug purposes
               const request = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&extras=url_s&api_key=${config.api_key}&page=${page}&format=json&nojsoncallback=1&per_page=${config.per_page}`)
               const jsonData = await request.json()
               return jsonData.photos.photo
          }
          catch (e) {
               console.log("Error while getting photos from API: \n" + e)
          }
     }

     const handleLoadInitial = async () => {
          try {
               const initial = await getPhotos()
               setPhotos(initial)
               setIsLoading(false)
          }
          catch (e) {
               console.log("Error while loading initial photos: \n" + e)
          }
     }

     const handleLoadMore = async () => {
          try {
               setPage(currentPage => currentPage + 1)
               const newPhotos = await getPhotos()
               setPhotos(currentPhotos => [...currentPhotos, ...newPhotos]) // Push to existing array
               setIsLoading(false)
          }
          catch (e) {
               console.log("Error while loading extra photos: " + e)
          }
          
     }

     const footerComponent = () => {
          return isLoading ? <ActivityIndicator animating size="large" color="#000" /> : null
     }

     const renderThumbnail = ({ item }) => {
          return (
               <TouchableOpacity style={{flex: 1, flexDirection: 'column'}} onPress={() => {
                    navigation.navigate("View Photo", { url: item.url_s })
               }
               }>
                    <Image source={{ uri: item.url_s }} key={item.id} style={Styles.thumbnail} />
               </TouchableOpacity>
          )
     }


     useEffect(() => {
          handleLoadInitial()
     }, [])

     return (
          <SafeAreaView>
               <FlatList
                    data={photos}
                    numColumns={4}
                    // contentContainerStyle={Styles.container}
                    keyExtractor={(item, index) => item.id+index}
                    renderItem={renderThumbnail}
                    contentContainerStyle={{ justifyContent: 'center', alignContent: 'center' }}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.5}
                    initialNumToRender={config.per_page}
                    ListFooterComponent={footerComponent}
                    extraData={photos}
               />
          </SafeAreaView>
     )
}

export default PhotoFeed;