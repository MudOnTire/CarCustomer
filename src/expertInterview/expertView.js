import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import Video from 'react-native-video';
import {Icon} from 'react-native-elements'

const screenWidth = Dimensions.get('window').width

export default class ExpertView extends Component {

	static navigationOptions = {
		title: '',
	}

  render() {
    const item = this.props.navigation.state.params.item;

    return (
      <View style={styles.container}>
        <Video source={{uri: item.video}} style={styles.expertVideo} repeat={true} />

        <Text style={styles.expertName}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.likeDislikes}>
          <View style={styles.vote}>
            <Icon type="font-awesome" name="thumbs-up" style={styles.icon} color="rgba(0, 0, 0, 1)" size={20} />
            <Text style={styles.likeText}>{item.vote_up}</Text>
          </View>

          <View style={styles.vote}>
            <Icon type="font-awesome" name="thumbs-down" style={styles.icon} color="rgba(0, 0, 0, 1)" size={20} />
            <Text style={styles.disLikeText}>{item.vote_down}</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  expertVideo: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.9,
    margin: '5%'
  },
  expertName: {
    color: 'rgba(110, 0, 220, 1)',
    fontSize: 15,
    margin: 10
  },
  description: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    margin: 10,
  },
  likeDislikes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10
  },
  vote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  likeText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 15,
    margin: 10
  },
  disLikeText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 15,
    margin: 10
  }
})
