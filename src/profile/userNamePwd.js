import React from 'react'
import {Alert, View, ScrollView, Image, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity} from 'react-native'

import I18n from 'i18n'

import {connect} from 'react-redux'
import {
  signInUser,
  clearError
} from 'src/redux/actions'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const mark = require('assets/icon/icon.png')

class UserNamePwd extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: ''
    }
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

  changeMethod = () => {
    this.props.navigation.replace('SmsVerification')
  }

  createAccount = () => {
    this.props.navigation.replace('SignUp')
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.signedIn === true) {
      this.props.navigation.goBack();
    } else if(nextProps.gotError === true) {
      Alert.alert(I18n.t('error'), nextProps.error)
      this.props.clearError();
    }
  }

  signIn = () => {
    const params = {
      userName: this.state.userName,
      password: this.state.password,
      userType: 'client',
      loginType: 1
    }
    
    this.props.signInUser(params)
  }

  render = () => {
    const isOkay = this.state.userName.length > 0 && this.state.password.length > 0;
    return (
      <View style={styles.manualRegisterWrapper}>

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
}

const mapStateToProps = (state) => {
	return {
    signedIn: state.user.signedIn,
    error: state.user.error,
    gotError: state.user.gotError
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInUser: (params) => dispatch(signInUser(params)),
    clearError: () => dispatch(clearError())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(UserNamePwd);

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
  textInput: {
    flex: 1,
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