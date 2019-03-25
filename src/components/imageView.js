import React, { Component } from 'react'
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class ImageView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageWrapper}>
          <Image source={this.props.navigation.state.params.image} style={styles.image} resizeMode='cover' />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#aaa'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
