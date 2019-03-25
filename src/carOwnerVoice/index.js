import React from 'react'
import {View, Image, Text, StyleSheet, FlatList, ScrollView, TextInput, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native'
import I18n from 'i18n'
import { Rating, Icon, SearchBar } from 'react-native-elements'
import SearchTextInput from 'src/components/searchTextInput'
import { NavigationEvents } from 'react-navigation';
import {connect} from 'react-redux'

import {carOwnerVoice} from 'data'
import { getCommentData, clearCommentState } from 'src/redux/actions';

const screenWidth = Dimensions.get('window').width;
var _ = require('lodash');

class CarOwnerVoice extends React.Component {
  constructor(props) {
    super(props);

    var likes = _.get(this.props.navigation.state.params, 'like', false);
    this.state = {
      isLike: likes
    }

    this.load();
  }

  static navigationOptions = {
		title: I18n.t('mainViewTab2'),
		header: null,
    tabBarIcon: ({focused, tintColor}) => {
      return (<Icon type="font-awesome" name="comments" color={tintColor}/>)
    }
  }

  load = () => {
    const params = {
      userName: this.props.userName,
      type: this.state.isLike ? 1 : 2
    }
    this.props.getCommentData(params)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.freshData === true) {
      this.setState({commentData: nextProps.commentData});
      this.props.clearCommentState();
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  onFocus = () => {
    var likes = _.get(this.props.navigation.state.params, 'like', false);
    this.setState({isLike: likes})
    this.load();
  }

  showLikes = async () => {
    await this.setState({isLike: true, commentData: []})
    this.load();
  }

  showDislikes = async () => {
    await this.setState({isLike: false, commentData: []})
    this.load();
  }

  render() {
    return (

      <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
        <NavigationEvents
          onWillFocus={this.onFocus}
        />

        <ScrollView style={styles.container}>

          <View style={styles.searchBox}>
            <TouchableOpacity onPress={this.goBack}>
              <Text style={styles.backButton}>←</Text>
            </TouchableOpacity>
            
            <SearchTextInput 
              style={{width: screenWidth - 100}} 
            />
            <TouchableOpacity style={{width: 50}}>
              <Text style={{color: '#000', fontSize: 13, textAlign: 'right', margin: 10}}>{I18n.t('search')}</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.panel}>
            <TouchableOpacity 
              style={styles.tagWrapper}
              onPress={this.showDislikes}
            >
              <View style={{...styles.borderWrapper, borderBottomColor: !this.state.isLike ? 'rgba(110, 0, 220, 1)' : 'rgba(255, 255, 255, 0)'}}>
                <Text style={styles.carOwnerDislikeText}>{I18n.t('carOwnerDislike')}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.tagWrapper}
              onPress={this.showLikes}
            >
              <View style={{...styles.borderWrapper, borderBottomColor: this.state.isLike ? 'rgba(110, 0, 220, 1)' : 'rgba(255, 255, 255, 0)'}}>
                <Text style={styles.carOwnerLikeText}>{I18n.t('carOwnerLike')}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.voiceList}>
            <Image 
              source={this.state.isLike ? require('assets/images/carOwnerVoice/goodCarService.jpg') : require('assets/images/carOwnerVoice/badCarService.jpg')} 
              style={styles.bannerImage} 
              resizeMode="cover"  
            />
            <FlatList style={styles.voiceList}
              data={this.state.commentData}
              extraData={this.state.commentData}
              keyExtractor={(item, index) => item + index}
              renderItem={this.renderVoiceItem}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderVoiceItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.voiceItemWrapper}>
        <Image source={{uri: item.image[0]}} resizeMode="cover" style={styles.voiceItemLogo}/>
        <View style={styles.voiceItemInfo}>
          <Text style={styles.voiceItemAuthor}>{item.serviceName}</Text>
          <Text style={styles.voiceItemAuthor}>{item.userName}</Text>
          <Rating
							readonly
							type="star"
							fractions={5}
							startingValue={item.rating}
							style={styles.starRating}
							imageSize={13}
						/>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    userName: state.user.userName,
    commentData: state.comment.commentData,
    freshData: state.comment.freshData,
    error: state.comment.error
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCommentData: (params) => dispatch(getCommentData(params)),
    clearCommentState: () => dispatch(clearCommentState())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CarOwnerVoice);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  panel: {
    width: screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  bannerImage: {
    width: screenWidth,
    height: screenWidth / 2,
  },
  voiceItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    margin: 3,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  voiceItemLogo: {
    width: 50,
    height: 50,
    margin: 5,
  },
  voiceItemInfo: {
    marginLeft: 10,
  },
  voiceItemAuthor: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.9)'
  },
  voiceItemComment: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.8)'
  },
  borderWrapper: {
    paddingBottom: -5,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.5)'
  },
  carOwnerDislikeText: {
    fontSize: 13,
    color: 'rgba(50, 50, 50, 1)',
  },
  carOwnerLikeText: {
    fontSize: 13,
    color: 'rgba(255, 0, 0, 1)',
  },
  tagWrapper: {
    width: screenWidth / 2,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: -10,
  },
  searchBox: {
    padding: 5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  backButton: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 20,
    marginLeft: 10
  },
  starRating: {
    marginTop: 5,
    marginBottom: 5
  }
})
