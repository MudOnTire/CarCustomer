import React from 'react'
import {Alert, View, ScrollView, Image, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity} from 'react-native'

import I18n from 'i18n'

import {connect} from 'react-redux'
import {
  getVerifyCode,
  signInUser,
  clearError,
  clearVerifyCode
} from 'src/redux/actions'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const mark = require('assets/icon/icon.png')

class SmsVerification extends React.Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      avatarChanged: false,
      verificationCode: '',
      region: '中国',
      regionPrefix: '+86',
      phoneNumber: '',
      correctCode: ''
    }
  }

  changeCode = (text) => {
    this.setState({
      verificationCode: text
    })
  }

  changeNumber = (text) => {
    this.setState({
      phoneNumber: text
    })
  }

  changeMethod = () => {
    this.props.navigation.replace('UserNamePwd')
  }

  createAccount = () => {
    this.props.navigation.replace('SignUp')
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.signedIn === true) {
      this.props.navigation.goBack();
    } else if(nextProps.gotVerifyCode === true) {
      this.setState({correctCode: nextProps.verifyCode})
      this.props.clearVerifyCode();
    } else if(nextProps.gotError === true) {
      Alert.alert(I18n.t('error'), nextProps.error)
      this.props.clearError();
    }
  }

  signIn = () => {
    const params = {
      phoneNumber: this.state.phoneNumber,
      verificationCode: this.state.verificationCode,
      userType: 'client',
      loginType: 2
    }

    this.props.signInUser(params)
  }

  render = () => {
    const isOkay = this.state.verificationCode.length > 0 && this.state.phoneNumber.length > 0;
    return (
      <View style={styles.manualRegisterWrapper}>

          <View style={styles.profileInfoWrapper}>
            <TouchableOpacity style={styles.regionSelect} onPress={this.regionSelect}>
              <Text style={styles.region}>
                {this.state.region + this.state.regionPrefix + '▾'}
              </Text>
            </TouchableOpacity>

            <TextInput 
              style={styles.phoneNumber} 
              placeholder={I18n.t('enterPhoneNumber')} 
              value={this.state.phoneNumber}
              onChangeText={this.changeNumber}
            />
          </View>

          <View style={styles.profileInfoWrapper}>
            <TextInput 
              style={styles.verificationCode} 
              placeholder={I18n.t('enterVerificationCode')} 
              value={this.state.verificationCode}
              onChangeText={this.changeCode}
            />

            <TouchableOpacity
              style={styles.getVerificationCode}
              onPress={this.getVerificationCode}
              activeOpacity={0.8} 
              >
              <Text style={styles.getVerificationCodeText}>
                {I18n.t('getVerificationCode')}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.changeMethodWrapper} onPress={this.changeMethod}>
            <Text style={styles.changeMethod}>{I18n.t('changeMethod')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.changeMethodWrapper} onPress={this.createAccount}>
            <Text style={styles.signUp}>{I18n.t('createAnAccount')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.loginButton, backgroundColor: !isOkay ? 'rgba(110, 0, 220, 0.5)' : 'rgba(110, 0, 220, 1)'}}
            onPress={this.signIn}
            activeOpacity={0.8}
            disabled={!isOkay}
            >
            <Text style={styles.nextText}>
              {I18n.t('login')}
            </Text>
          </TouchableOpacity>

      </View>
    )
  }

  getVerificationCode = () => {
    const params = {
      phoneNumber: this.state.phoneNumber
    }
    this.props.getVerifyCode(params)
  }
}

const mapStateToProps = (state) => {
	return {
    verifyCode: state.user.verifyCode,
    error: state.user.error,
    gotVerifyCode: state.user.gotVerifyCode,
    gotError: state.user.gotError,
    signedIn: state.user.signedIn
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVerifyCode: (params) => dispatch(getVerifyCode(params)),
    signInUser: (params) => dispatch(signInUser(params)),
    clearError: () => dispatch(clearError()),
    clearVerifyCode: () => dispatch(clearVerifyCode())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SmsVerification);

const styles = StyleSheet.create({
  manualRegisterWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50
  },
  label: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 20,
    fontWeight: 'bold',
    width: '95%',
    margin: '2.5%',
    marginTop: 20,
    textAlign: 'left'
  },
  profileInfoWrapper: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  phoneNumber: {
    flex: 0.8,
    marginLeft: 5,
    paddingVertical: 3
  },
  regionSelect: {
    flex: 0.2,
  },
  loginButton: {
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    marginTop: 15,
  },
  nextText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 15,
  },
  verificationCode: {
    paddingVertical: 3,
    flex: 0.7
  },
  getVerificationCode: {
    flex: 0.3,
    backgroundColor: 'rgba(230, 230, 230, 1)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25
  },
  getVerificationCodeText: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center'
  },
  changeMethod: {
    color: 'rgba(110, 0, 220, 1)'
  },
  changeMethodWrapper: {
    margin: 10
  },
  signUp: {
    color: 'rgba(255, 50, 50, 1)'
  }
})