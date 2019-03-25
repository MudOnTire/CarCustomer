import React from 'react'
import {Alert, View, ScrollView, Image, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity} from 'react-native'

import I18n from 'i18n'

import {connect} from 'react-redux'
import {
  getVerifyCode,
  signUpUser,
  clearVerifyCode,
  clearError
} from 'src/redux/actions'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const mark = require('assets/icon/icon.png')

class SignUp extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      verificationCode: '',
      region: '中国',
      regionPrefix: '+86',
      phoneNumber: '',
      userName: '',
      password: '',
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

  changeUserName = (text) => {
    this.setState({
      userName: text
    })
  }

  changePassword = (text) => {
    this.setState({
      password: text
    })
  }

  signIn = () => {
    this.props.navigation.replace('SmsVerification')
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.signedIn === true) {
      this.props.navigation.goBack();
    } else if(nextProps.gotVerifyCode === true) {
      this.setState({correctCode: nextProps.verifyCode})
      this.props.clearVerifyCode();
    } else if(nextProps.gotError === true && nextProps.error) {
      Alert.alert(I18n.t('error'), nextProps.error)
      this.props.clearError();
    }
  }

  signUp = () => {
    const params = {
      userName: this.state.userName,
      phoneNumber: this.state.phoneNumber,
      verificationCode: this.state.verificationCode,
      password: this.state.password
    }

    this.props.signUpUser(params)
  }

  render = () => {
    const isOkay = this.state.verificationCode.length > 0 && this.state.phoneNumber.length > 0 && this.state.userName.length > 0 && this.state.password.length > 0;
    return (
      <View style={styles.manualRegisterWrapper}>

          <View style={styles.profileInfoWrapper}>
            <TouchableOpacity style={styles.regionSelect} onPress={this.regionSelect}>
              <Text style={styles.region}>
                {this.state.region + this.state.regionPrefix + '▾'}
              </Text>
            </TouchableOpacity>

            <TextInput 
              style={styles.textInput} 
              placeholder={I18n.t('enterPhoneNumber')} 
              value={this.state.phoneNumber}
              onChangeText={this.changeNumber}
            />
          </View>

          <View style={styles.profileInfoWrapper}>
            <TextInput 
              style={styles.textInput} 
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

          <View style={styles.profileInfoWrapper}>
            <TextInput 
              style={styles.textInput} 
              placeholder={I18n.t('userNamePlaceholder')} 
              value={this.state.userName}
              onChangeText={this.changeUserName}
            />
          </View>

          <View style={styles.profileInfoWrapper}>
            <TextInput 
              style={styles.textInput} 
              placeholder={I18n.t('enterPassword')} 
              value={this.state.password}
              onChangeText={this.changePassword}
            />
          </View>

          <TouchableOpacity style={styles.changeMethodWrapper} onPress={this.signIn}>
            <Text style={styles.signUp}>{I18n.t('alreadyHaveAccount')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.loginButton, backgroundColor: !isOkay ? 'rgba(110, 0, 220, 0.5)' : 'rgba(110, 0, 220, 1)'}}
            onPress={this.signUp}
            activeOpacity={0.8}
            disabled={!isOkay}
            >
            <Text style={styles.nextText}>
              {I18n.t('signUp')}
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
    signUpUser: (params) => dispatch(signUpUser(params)),
    clearVerifyCode: () => dispatch(clearVerifyCode()),
    clearError: () => dispatch(clearError())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)'
  },
  textInput: {
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