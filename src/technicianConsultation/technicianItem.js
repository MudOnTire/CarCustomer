
import React from "react";
import { Image, FlatList, Text, View, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from "react-native";
import { Rating, Icon } from 'react-native-elements'
import ImageLoad from 'react-native-image-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

export default class TechnicianItem extends React.Component {

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
          <Video source={{uri: item.video}} style={styles.expertVideo} repeat={true} muted={true} maxBitRate={2000000} rate={0.5}/>

          <Text style={styles.expertTitle}>{item.title}</Text>

          <View style={styles.infoWrapper}>
            <Text style={styles.expertName}>{item.name}</Text>
            <Icon type="font-awesome" name="thumbs-up" style={styles.optionIcon} color="#111" size={12}/>
            <Text style={styles.like}>{item.vote_up}</Text>
          </View>

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
    height: 300,
  },
  expertName: {
    color: '#111',
    fontSize: 12,
    margin: 5,
    width: '50%'
  },
  description: {
    color: '#000',
    fontSize: 12,
    margin: 5,
    height: 20
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  expertTitle: {
    color: '#000',
    fontSize: 14,
    margin: 5
  },
  like: {
    color: '#000',
    fontSize: 12,
    marginLeft: 5
  }
})