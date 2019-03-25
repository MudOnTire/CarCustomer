import React from 'react'
import {ImageBackground, View, Text, AsyncStorage, StyleSheet, Image, Dimensions, PermissionsAndroid} from 'react-native'
import I18n from '../i18n'

import {connect} from 'react-redux'
import {
    changeCity, 
    setUserLocation,
    getUIWords,
    signInUserSuccess
  } from 'src/redux/actions'

import { Geolocation } from 'react-native-baidu-map'

const logo = require('assets/icon/icon.png')
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class Splash extends React.Component {
  
  static navigationOptions = {
		title: 'Splash',
		header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      uiWordLoaded: false,
      appName: I18n.t('appName'),
      appDescription: I18n.t('appDescription')
    }

    this.props.getUIWords();
  }

  componentDidMount = async () => {
    this.requestLocationPermission();

    try {
      var userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);
      if(userInfo) {
        if(userInfo.signedIn === true) {
          this.props.signInUser(userInfo)
        }
      }
      
    } catch (error) {

    }

    setTimeout(this.startApp, 3000)
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.uiWords.length > 0 && this.state.uiWordLoaded === false) {
      const nameIndex = nextProps.uiWords[0].type === 'serviceAppTitle' ? 0 : 1;
      this.setState({
        uiWordLoaded: true,
        appName: nextProps.uiWords[nameIndex].text,
        appDescription: nextProps.uiWords[1 - nameIndex].text
      })
      setTimeout(this.startApp, 2000)
    }
  }

  startApp = () => {
    this.props.navigation.replace('MainView');
  }
  
  requestLocationPermission = async() => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: '车主点评',
          message:
            '车主点评想要访问您的位置',
          buttonNegative: '禁止',
          buttonPositive: '允许',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        Geolocation.getCurrentPosition()
        .then((data) => {
          if(data.city) {
            this.currentPosition = data;
            this.props.setUserLocation(data);
            this.props.changeCity(data.city)
          }
        })
      } else {
      }
    } catch (err) {
    }
  }

  render = () => {
    return (
        <View style={styles.container}>
          <View style={styles.infoWrapper}>
            <View style={styles.logo_name}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.appName}>{this.state.appName}</Text>
            </View>
            <Text style={styles.appDescription}>{this.state.appDescription}</Text>
          </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
	return {
    city: state.service.city,
    userName: state.user.userName,
    uiWords: state.extra.uiWords
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (params) => dispatch(changeCity(params)),
    setUserLocation: (params) => dispatch(setUserLocation(params)),
    getUIWords: () => dispatch(getUIWords()),
    signInUser: (params) => dispatch(signInUserSuccess(params))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Splash);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  logo_name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  description_review: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logo: {
    width: screenWidth / 5,
    height: screenWidth / 5
  },
  appName: {
    fontSize: 15,
    margin: 10,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: 'bold'
  },
  appDescription: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 1)',
    borderTopWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    padding: 5
  },
  appReview: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 1)',
    margin: 10,
    textAlign: 'center'
  }
})