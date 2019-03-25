import React from 'react'
import {Alert, View, Text, Image, ScrollView, StyleSheet, Dimensions, FlatList, TouchableOpacity, SafeAreaView, AsyncStorage, RefreshControl} from 'react-native'
import { NavigationEvents } from 'react-navigation';
import {Icon} from "react-native-elements"
import Carousel from 'react-native-snap-carousel';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import AlphabetListView from 'react-native-alphabetlistview';
import I18n from 'i18n'
import {connect} from 'react-redux'
import {
    changeCity, 
    changeSearchText, 
    getBannerData,
    changeCategory
  } from 'src/redux/actions'

import SearchTextInput from 'src/components/searchTextInput'
import VideoPlayer from 'src/videoPlayer'
import ServiceView from 'src/serviceView'

import { mainCategory, subCategory } from 'data'

const CityData = require('data/city.json')

const storeIcon = require('assets/images/store.png')

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
//const iconSize = (screenWidth - 20) / 5 / 4 + 3;
const iconSize = 25;

class MainView extends React.Component {

  constructor(props) {
    super(props);

    this.bannerPlayer = [];
    this._carousel = React.createRef();
    this.serviceView = React.createRef();
    this.state = {
      city: '上海市',
      entries: [
        {
          key: 0,
          video: require('assets/videos/banner1.mp4')
        },
        {
          key: 1,
          video: require('assets/videos/banner2.mp4')
        },
        {
          key: 2,
          video: require('assets/videos/banner3.mp4')
        }
      ],
      playingAd: 0,
      isPlayingAd: true,
      searchText: '',
      loading: true,
      isCitySelecting: false
    }

    this.cityList = [];
    var alphaList = [];
    for(var i = 0; i < 26; i ++) {
      alphaList[i] = [];
    }
    for(i = 0; i < CityData.length; i ++) {
      for(var j = 0; j < CityData[i].city.length; j ++) {
        var index = CityData[i].city[j].name.charCodeAt(0) - 'a'.charCodeAt(0);
        CityData[i].city[j].name = CityData[i].city[j].name.slice(1, CityData[i].city[j].name.length);
        alphaList[index].push(CityData[i].city[j].name);
      }
    }
    for(i = 0; i < 26; i ++) {
      var character = String.fromCharCode('A'.charCodeAt(0) + i);
      this.cityList[i] = {
        character: character,
        cityList: alphaList[i]
      };
    }
  }

  static navigationOptions = {
		title: '',
		header: null
  }

  loadBanner = () => {
		var params = {};

    setTimeout(() => {
      if(this.state.loading === true) {
				this.stopLoading();
      }
    }, 5000);

		this.props.getServiceData(params);
  }

  componentDidMount = () => {
    this.setState({city: this.props.city})

    if(this.state.entries.length === 0) {
      this.loadBanner();
    }
  }

  _renderBannerItem = ({item}) => {
    this.bannerPlayer[item.key] = React.createRef();
    return (
        <VideoPlayer
          source={item.video}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.video}
          ref={ref => this.bannerPlayer[item.key] = ref}
          disableBack
          repeat={true}
          paused={true}
          onEnd={this.onEndAd}
        />
    )
  }

  onEndAd = async() => {
    const nextAd = (this.state.playingAd + 1) % this.bannerPlayer.length;
    this._carousel.snapToItem(nextAd);
    await this.setState({playingAd: nextAd});
    this.playPauseAds();
  }

  playPauseAds = () => {
    this.onBlurPage();
//    this.bannerPlayer[this.state.playingAd].methods.togglePlayPause();
  }

  onChangeAds = async(slideIndex) => {
    await this.setState({playingAd: slideIndex});
    this.playPauseAds();
  }

  onBlurPage = () => {
    this.serviceView.setVisible(false)
    for(let i = 0; i < this.bannerPlayer.length; i ++) {
      if(this.bannerPlayer[i].state.paused === false) {
        this.bannerPlayer[i].methods.togglePlayPause();
      }
    }
  }

  onFocusPage = () => {
    this.props.changeSearchText('')
    this.props.changeCategory('')
    this.serviceView.setVisible(true)
    for(let i = 0; i < this.bannerPlayer.length; i ++) {
      if(i === this.state.playingAd) {
//        this.bannerPlayer[i].methods.togglePlayPause();
      }
    }
  }

  onChangeText = (text) => {
    this.setState({
      searchText: text
    })
  }

  gotoSearchPage = () => {
    this.props.navigation.navigate('SearchPage');
  }

  setLoadingState = (loading) => {
    //console.warn(loading)
    this.setState({loading: loading})
  }

  changeCity = (city) => {
    this.toggleCitySelect();
    this.setState({city: city});
    this.props.changeCity(city)
    this.serviceView.load()
  }

  toggleCitySelect = () => {
    this.setState({
      isCitySelecting: !this.state.isCitySelecting
    })
  }

	showPromotion = (item) => {
		this.props.navigation.navigate('PromotionView', {item})
	}
  
  render = () => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
        <View style={styles.homePageWrapper}>

          <NavigationEvents
            onWillBlur={this.onBlurPage}
            onWillFocus={this.onFocusPage}
          />

          <LinearGradient
            locations={[0, 0.8]}
            colors={[
              'rgba(240, 240, 255, 1)',
              'rgba(240, 230, 240, 1)'
            ]}
            style={styles.gradient}
          />

          <View style={styles.searchBox}>
            <TouchableOpacity onPress={this.toggleCitySelect} activeOpacity={0.8}>
              <Text style={styles.citySelectText}>{this.state.city + ' ▾'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.gotoSearchPage} activeOpacity={0.8}>
              <SearchTextInput style={styles.searchTextInput} editable={false} />
            </TouchableOpacity>
          </View>
            
          <ScrollView style={styles.homePanelScrollView}
            refreshControl = { <RefreshControl
              onRefresh={this.serviceView.load}
              refreshing={false}
              colors={[ 'rgba(255, 255, 255, 1)' ]}
              progressBackgroundColor="rgba(0, 0, 0, 0.5)" />
            }
					>

            <View style={styles.videoWrapper}>
              <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderBannerItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout={'default'}
                onSnapToItem={this.onChangeAds}
              />

            </View>

            <View style={styles.optionPanel}>
              <TouchableOpacity style={styles.optionWrapper} onPress={this.showDislikes}>
                <Icon type="font-awesome" name="volume-up" style={styles.optionIcon} color="rgba(112, 48, 160, 1)" size={iconSize - 5}/>
                <Text style={styles.optionText}>{I18n.t('carOwnerDislike')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionWrapper} onPress={this.showLikes}>
                <Text style={styles.optionText}>{I18n.t('carOwnerLike')}</Text>
                <Icon type="font-awesome" name="thumbs-up" style={styles.optionIcon} color="rgba(112, 48, 160, 1)" size={iconSize - 5} />
              </TouchableOpacity>
            </View>


            <View style={styles.mainCategoryPanel}>
              <FlatList data={mainCategory} 
                numColumns={5}
                renderItem={this.renderMainCategory} 
                horizontal={false}
                key="mainCategoryList"
              />
            </View>
{/*
            <View style={styles.optionPanel}>
              <TouchableOpacity style={styles.optionWrapper} onPress={this.addCar}>
                <Icon type="font-awesome" name="heart" style={styles.optionIcon} color="rgba(112, 48, 160, 1)" size={iconSize - 5}/>
                <Text style={styles.optionText}>{I18n.t('addACar')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionWrapper}>
                <Text style={styles.optionText}>{I18n.t('memberBenefits')}</Text>
                <Icon type="font-awesome" name="group" style={styles.optionIcon} color="rgba(112, 48, 160, 1)" size={iconSize - 5} />
              </TouchableOpacity>
            </View>

            <View style={styles.subCategoryPanel}>
              <FlatList data={subCategory} 
                renderItem={this.renderSubCategory} 
                horizontal={true}
                key="subCategoryList"
              />
            </View>
*/}
            <View style={styles.serviceViewWrapper}>
              <ServiceView 
                style={styles.storeRankingList} 
                onRef={ref => (this.serviceView = ref)} 
                showServiceDetail={(item) => this.showServiceDetail(item)}
                showPromotion={this.showPromotion}
                setLoadingState = {this.setLoadingState}
                typeFilter = ""
                isCategoryView = {false}
              />
            </View>

          </ScrollView>
        
          <Modal isVisible={this.state.isCitySelecting}>
            <View style={styles.citySelectModal}>
              <TouchableOpacity onPress={this.toggleCitySelect}>
                <Text style={styles.closeModal}>X</Text>
              </TouchableOpacity>


              <View style={styles.modalContent}>
                <FlatList data={this.cityList}
                  renderItem={this.renderCityGroup}
                  style={styles.cityList}
                  keyExtractor={(item, index) => item + index}
                />
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    )
  }

  showDislikes = () => {
    this.props.navigation.navigate('carOwnerVoice', {like: false})
  }

  showLikes = () => {
    this.props.navigation.navigate('carOwnerVoice', {like: true})
  }

  addCar = () => {
    if(this.props.signedIn === true) {
      this.props.navigation.navigate('MyCar');
    } else {
      this.props.navigation.navigate('UserNamePwd');
    }
  }

  renderCity = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.changeCity(item)} key={item} style={styles.cityWrapper}>
        <Text style={styles.cityName}>{item}</Text>
      </TouchableOpacity>
    )
  }

  renderCityGroup = ({item}) => {
    if(item.cityList.length === 0) {
      return ;
    }
    return (
      <View style={styles.cityGroup}>
        <Text style={styles.character}>{item.character}</Text>

        <FlatList data={item.cityList}
          renderItem={this.renderCity}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    )
  }

	updateData = () => {
		this.serviceView.updateData();
	}
  
	showServiceDetail = (item) => {
    const updateMainData = this.updateData;
    this.props.navigation.navigate('DetailView', { item, updateMainData });
  }

  renderMainCategory = ({item}) => {
    return (
      <TouchableOpacity style={styles.mainCategoryWrapper} key={item.key} onPress={() => this.onPressMainCategory(item)} >
        <Image source={item.icon} style={styles.mainCategoryIcon}/>
        <Text style={styles.mainCategoryText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  onPressMainCategory = (item) => {
    switch (item.key) 
    {
      case 'mc1':
        this.props.navigation.navigate('carOwnerVoice');
        break;
      case 'mc2':
        this.props.navigation.navigate('IndustryNews', {onMainCategory: this.onPressMainCategory});
        break;
      case 'mc3':
        if(this.props.signedIn === false) {
          this.props.navigation.navigate('UserNamePwd');
        } else {
          this.props.navigation.navigate('MyCar', {visitAccessories: true});
        }
        break;
      case 'mc4':
        this.props.navigation.navigate('TechnicianConsultation');
        break;
      case 'mc5':
        this.props.navigation.navigate('DriverTips');
        break;
      case 'mc6':
        this.props.navigation.navigate('CategoryView', {category: I18n.t('maintenance')});
        break;
      case 'mc7':
        this.props.navigation.navigate('CategoryView', {category: I18n.t('beautyCarWash')});
        break;
      case 'mc8':
        this.props.navigation.navigate('CategoryView', {category: I18n.t('modificationUpgrade')});
        break;
      case 'mc9':
        this.props.navigation.navigate('CategoryView', {category: I18n.t('motorizedCar')});
        break;
      case 'mc10':
        this.props.navigation.navigate('ExpertInterview');
        break;
      case 'sc2':
        this.props.navigation.navigate('PromotionView');
        break;
      default:
        break;
    }
  }

  renderSubCategory = ({item}) => {
    return (
      <TouchableOpacity style={styles.subCategoryWrapper} key={item.key} onPress={() => this.onPressMainCategory(item)}>
        <Image source={item.icon} style={styles.subCategoryIcon}/>
        <Text style={styles.subCategoryText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  renderRecommendItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.recommendItemWrapper} key={item.key}>
        <Image source={storeIcon} />
        <Text style={styles.recommendItemText}>{I18n.t('storeInformation')}</Text>
      </TouchableOpacity>
    )
  }

  renderRecommendTabPanel = () => {
    return (
      <View style={styles.recommendTabPanelWrapper}>
        <FlatList data={this.recommendData} 
          renderItem={this.renderRecommendItem} 
          style={styles.recommendItemList}
        />
      </View>
    )
  }
  
  onBuffer = () => {
  }

  videoError = () => {
  }
}

const mapStateToProps = (state) => {
	return {
    city: state.service.city,
    bannerData: state.extra.bannerData,
    userName: state.user.userName,
    signedIn: state.user.signedIn,
    carList: state.user.carList
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (params) => dispatch(changeCity(params)),
    changeCategory: (params) => dispatch(changeCategory(params)),
    changeSearchText: (params) => dispatch(changeSearchText(params)),
    getBannerData: (params) => dispatch(getBannerData(params)),
    setUserLocation: (params) => dispatch(setUserLocation(params))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MainView);

const styles=StyleSheet.create({
  homePageWrapper: {
    flex: 1,
  },
  video: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  tabPanel: {
    flex: 1
  },
  homePanelScrollView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  optionPanel: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 35,
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    paddingLeft: 30,
    paddingRight: 30
  },
  optionText: {
    color: 'rgba(110, 0, 220, 1)',
    fontSize: iconSize / 1.8,
    margin: 5,
    width: screenWidth / 2 - 60,
    textAlign: 'center',
  },
  optionIcon: {
    margin: 5,
    textShadowColor:'rgba(112, 48, 160, 1)',
    textShadowOffset:{width: 0, height: 0},
    textShadowRadius:20,
  },
  mainCategoryPanel: {
    flex: 0.3,
    padding: 5
  },
  mainCategoryWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    width: (screenWidth - 10) / 5 - 20,
  },
  mainCategoryIcon: {
    width: iconSize,
    height: iconSize,
    marginBottom: 10
  },
  mainCategoryText: {
    width: (screenWidth - 10) / 5,
    height: 20,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontSize: 12 > (screenWidth - 10) / 25 ? (screenWidth - 10) / 25 : 12
  },
  videoWrapper: {
    height: 200
  },
  banner: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(240, 180, 10, 1)'
  },
  bannerText: {
    color: 'rgba(112, 48, 160, 1)',
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginTop: 10,
    marginBottom: 10
  },
  subCategoryPanel: {
    padding: 5
  },
  subCategoryWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    width: (screenWidth - 10) / 5 - 20,
  },
  subCategoryIcon: {
    width: iconSize,
    height: iconSize,
    marginBottom: 10
  },
  subCategoryText: {
    width: (screenWidth - 10) / 5,
    height: 20,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontSize: 12 > (screenWidth - 10) / 25 ? (screenWidth - 10) / 25 : 12
  },
  recommendTabContainer: {
    flex: 0.4
  },
  recommendTab: {
    flex: 0.5
  },
  recommendTabPanel: {
    flex: 1,
  },
  recommendTabPanelWrapper: {
    flex: 1,
  },
  recommendItemList: {
    flex: 1,
  },
  recommendItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    marginBottom: 10
  },
  recommendItemText: {
    textAlign: 'left',
    marginLeft: 25
  },
  storeRankingList: {
    height: 100
  },
  serviceViewWrapper: {
  },
  searchBox: {
    padding: 5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  optionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  citySelectText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    width: 60,
    margin: 10,
  },
  citySelectModal: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 2
  },
  closeModal: {
    padding: 12,
    paddingBottom: 3,
    fontSize: 15,
    color: '#000',
    width: screenWidth,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  cityWrapper: {
    margin: 5,
    marginLeft: 10
  },
  cityName: {
    fontSize: 12,
    color: '#000'
  },
  modalContent: {
    height: screenHeight - 100
  },
  cityList: {
    flex: 1,
    height: '100%'
  },
  searchTextInput: {
    width: screenWidth - 70,
  },
  character: {
    color: '#000',
    fontSize: 14,
    backgroundColor: '#ddd',
    textAlign: 'center'
  }
})