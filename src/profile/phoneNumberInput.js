import React from 'react'
import {Button, View, ScrollView, Image, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity} from 'react-native'

import I18n from 'i18n'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const mark = require('assets/icon/icon.png')

export default class PhoneNumberInput extends React.Component {

  static navigationOptions = {
  }

  constructor(props) {
    super(props);

    this.state = {
      avatarChanged: false,
      region: '中国',
      regionPrefix: '+86',
      phoneNumber: ''
    }

    this.avatar = require('assets/images/avatar.png');
    this.nextButton = React.createRef();
  }

  changeNumber = (text) => {
    this.setState({
      phoneNumber: text
    })
  }

  render = () => {
    return (
      <View style={styles.manualRegisterWrapper}>

          <Text style={styles.label}>
            {I18n.t('phoneNumberLoginRegister')}
          </Text>

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

          <TouchableOpacity style={{...styles.nextButton, backgroundColor: this.state.phoneNumber.length === 0 ? 'rgba(110, 0, 220, 0.5)' : 'rgba(110, 0, 220, 1)'}}
            onPress={this.gotoNext}
            activeOpacity={0.8}
            disabled={this.state.phoneNumber.length === 0}
            ref={ref => this.nextButton = ref}
            >
            <Text style={styles.nextText}>
              {I18n.t('next')}
            </Text>
          </TouchableOpacity>

      </View>
    )
  }

  gotoNext = () => {
    this.props.navigation.navigate('SmsVerification', {phoneNumber: this.state.regionPrefix + ' ' + this.state.phoneNumber})
  }
}

const styles = StyleSheet.create({
  manualRegisterWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
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
  avatarWrapper: {
    margin: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: (screenWidth - 60) / 2.5,
    height: (screenWidth - 60) / 2.5,
    borderRadius: 200,
    marginBottom: 30
  },
  phoneNumber: {
    flex: 0.8,
    marginLeft: 5,
    paddingVertical: 3
  },
  regionSelect: {
    flex: 0.2,
  },
  nextButton: {
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
  }
})