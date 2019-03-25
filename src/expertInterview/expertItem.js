
import React from "react";
import { Image, FlatList, Text, View, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from "react-native";
import { Rating, Icon } from 'react-native-elements'
import ImageLoad from 'react-native-image-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

export default class ExpertItem extends React.Component {

		constructor(props) {
      super(props)
      
      this.state = {
        paused: false
      }
		}

		showDetail = () => {
      this.setState({paused: true})
      this.props.showDetail()
		}

    render = () => {
      const item = this.props.item;

      return (
        <TouchableOpacity activeOpacity={0.8} onPress = {this.showDetail} key={item.key} style={styles.itemView}>
          <Video source={{uri: item.video}} style={styles.expertVideo} repeat={true}/>
          <Text style={styles.expertName}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      )
    }
}

const styles = StyleSheet.create({
	itemView: {
		margin: 5,
		backgroundColor: "#fff",
		borderRadius: 10,
		overflow: "hidden",
		elevation: 5,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#000',
		shadowOpacity: 0.5,
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0)'
	},
  expertVideo: {
    width: '100%',
    height: 200,
  },
  expertName: {
    color: 'rgba(110, 0, 220, 1)',
    fontSize: 15,
    margin: 5
  },
  description: {
    color: '#000',
    fontSize: 12,
    margin: 5,
    height: 20
  }
})