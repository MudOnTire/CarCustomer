import React from 'react'
import {ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, Dimensions} from 'react-native'
import I18n from 'i18n'

const registerWith1 = require('assets/images/register/wechat.png')
const registerWith2 = require('assets/images/register/weibo.png')
const registerWith3 = require('assets/images/register/zhifubao.png')
const manualRegister = require('assets/images/register/manualRegister.png')
const balloon = require('assets/images/balloon.png')

const screenWidth = Dimensions.get('window').width

export default class AutoRegister extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
		title: '',
		header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.balloon} source={balloon} resizeMode='stretch'>
          <Text style={styles.comment}>
            {I18n.t('notRegisteredComment')}
          </Text>
        </ImageBackground>

        <View style={styles.registerWith}>
          <TouchableOpacity style={styles.registerWithWrapper}>
            <Image source={registerWith1} style={styles.registerWithIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerWithWrapper}>
            <Image source={registerWith2} style={styles.registerWithIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerWithWrapper}>
            <Image source={registerWith3} style={styles.registerWithIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerWithWrapper} onPress={this.manualRegister}>
            <Image source={manualRegister} style={styles.registerWithIcon} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  manualRegister = () => {
    this.props.navigation.navigate('ManualRegister');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  registerWith: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  balloon: {
    flex: 0.7,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  registerWithIcon: {
    width: (screenWidth - 20) / 4 - 10,
    height: (screenWidth - 20) / 4 - 10
  },
  comment: {
    fontSize: 30,
    width: screenWidth / 1.8,
    color: '#000'
  }
})