import React from 'react'
import {Alert, KeyboardAvoidingView, Dimensions, ScrollView, View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Rating, Icon } from 'react-native-elements'

import {labelListData} from 'data'
import I18n from 'i18n'

import {connect} from 'react-redux'
import {
  saveServiceData, 
  changeLabel
} from 'src/redux/actions'

import { Geolocation } from 'react-native-baidu-map'

const screenWidth = Dimensions.get('window').width

class DetailView extends React.Component {
  constructor(props) {
    super(props);

    this.item = this.props.navigation.state.params.item;

    this.state = {
      labelInfo: [],
      myRating: this.item.myRating,
      comment: '',
      saveEnabled: false,
    }

    this.props.navigation.setParams({
      addComment: this.addComment
    });

  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;

    return {
      headerRight: 
				<TouchableOpacity 
					onPress={params.addComment}
				>
          <Text style={{color: '#000', fontSize: 13, textAlign: 'right', margin: 10}}>{I18n.t('addComment')}</Text>
        </TouchableOpacity>,
    }
  }

  componentDidMount = () => {
    const data = labelListData.map((item) => {
      var selected = this.item.label.includes(item.id) > 0;

      return {
        ...item,
        selected: selected
      }
    })

    this.setState({labelInfo : data})
  }

  showImage = (item) => {
    this.props.navigation.navigate('ImageView', {image: {uri: item}})
  }

  renderCommentImage = ({item}) => {
    return (
      <TouchableOpacity style={styles.imageWrapper} onPress={() => this.showImage(item)}>
        <Image style={styles.commentImage} source={{uri: item}} resizeMode='cover' />
      </TouchableOpacity>
    )
  }

  renderComment = ({item}) => {
    
    return (
      <View style={styles.commentWrapper}>
        <View style={styles.commentHeader}>
          <Text style={styles.distributer}>{item.distributer}</Text>
          <Rating
            readonly
            type="star"
            fractions={5}
            startingValue={item.rating}
            style={styles.starRating}
            imageSize={8}
          />
        </View>

        <FlatList horizontal={true}
          style={styles.commentImageList}
          data={item.image}
          renderItem={this.renderCommentImage}
          keyExtractor={(item, index) => item + index}
        />
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    )
  }

  toggleLabel = (label) => {
    const newLabelState = this.state.labelInfo.map((item) => {
      if(item.id === label.id) {
        return {...item, selected: !item.selected};
      } else {
        return item;
      }
    })

    const params = {
      userName: this.props.userName,
      serviceName: this.item.company,
      index: label.id,
      selected: !label.selected
    }

    this.props.changeLabel(params)

    this.setState({labelInfo : newLabelState})
  }

  renderLabel = ({item}) => {
    return (
      <TouchableOpacity style={{...styles.labelWrapper, backgroundColor: item.selected ? "rgba(255, 230, 200, 1)" : 'rgba(255, 255, 255, 1)'}} onPress={() => this.toggleLabel(item)}>
        <Icon type="font-awesome" name={item.icon} style={styles.optionIcon} color="rgba(240, 150, 100, 1)" size={15}/>
        <Text style={styles.labelText}>{item.label}</Text>
      </TouchableOpacity>
    )
  }

  saveComment = () => {
    const data = {
      userName: this.props.userName,
      serviceName: this.item.company,
      rating: this.state.myRating,
      comment: this.state.comment
    }
    this.props.saveServiceData(data)
  }

  ratingCompleted = (rating) => {
    this.setState({
      myRating: rating,
      saveEnabled: rating > 0 && this.state.comment.length > 0
    })
  }

  changeComment = (text) => {
    this.setState({
      comment: text,
      saveEnabled: text.length > 0 && this.state.myRating > 0
    })
  }

  showMap = () => {
    this.props.navigation.navigate('ServiceMapView', {item: this.item}) 
  }

  addComment = () => {
    this.props.navigation.navigate('EditComment', {company: this.item.company})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={{uri: this.item.image}} style={styles.itemImage} resizeMode='cover' />

        <View style={styles.itemInfo}>
          <Text style={styles.itemCompany}>{this.item.company}</Text>

          <Rating
            type="star"
            readonly
            fractions={0}
            startingValue={this.item.totalRating < 0 ? 0 : this.item.totalRating}
            style={styles.itemTotalRating}
            imageSize={18}
          />

          <View style={styles.addressWrapper}>
            <TouchableOpacity style={styles.showMap} onPress={this.showMap}>
              <Text style={styles.itemAddress}>{this.item.address}</Text>
              <Text style={styles.itemAddress}>{this.item.distance > 0 ? this.item.distance.toFixed(2) + 'km' : '计算...'}</Text>
            </TouchableOpacity>
          </View>

        </View>
        {/*
        <TouchableOpacity style={styles.addCommentButton} onPress={this.addComment}>
          <Text style={styles.addCommentText}>{I18n.t('addComment')}</Text>
        </TouchableOpacity>
        */}
        <FlatList data={this.item.comments}
          renderItem={this.renderComment}
          style={styles.commentList}
          keyExtractor={(item, index) => item + index}
        />

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    serviceData: state.service.serviceData,
    userName: state.user.userName,
    city: state.service.city,
    userLocation: state.user.location
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveServiceData: (params) => dispatch(saveServiceData(params)),
    changeLabel: (params) => dispatch(changeLabel(params))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DetailView);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemImage: {
    flex: 1,
    width: screenWidth,
    height: screenWidth,
    resizeMode: 'contain',
  },
  itemCompany: {
    fontSize: 15,
    color: '#000',
    margin: 5
  },
  itemAddress: {
    fontSize: 13,
    color: '#000',
    margin: 3
  },
  itemTotalRating: {
    margin: 3
  },
  itemInfo: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    margin: 5
  },
  newComment: {
    margin: 3,
    marginTop: 10,
  },
  newCommentText: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    margin: 5
  },
  itemMyRating: {
    margin: 5
  },
  labelList: {
    margin: 10
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(240, 150, 100, 1)',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 7
  },
  labelText: {
    color: '#000',
    marginLeft: 5
  },
  saveButton: {
    marginLeft: 15,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(240, 150, 100, 1)',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveText: {
    color: '#000',
    fontSize: 12
  },
  ratingSave: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  commentWrapper: {
    margin: 5,
    padding: 5,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)'
  },
  distributer: {
    color: 'rgba(110, 0, 220, 1)',
    fontSize: 12,
    marginBottom: 3,
  },
  comment: {
    color: '#000',
    fontSize: 12
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  commentImageList: {
    margin: 5,
  },
  commentImage: {
    width: 100,
    height: 100,
    margin: 5
  },
  addCommentButton: {
    margin: 5
  },
  addCommentText: {
    color: '#000',
    fontSize: 13
  }
})