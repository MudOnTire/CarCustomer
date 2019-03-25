import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import I18n from 'i18n'
import { termsOfService, disclaimer } from 'src/data';

export default class AboutUs extends Component {

  showTermsOfService = () => {
    this.props.navigation.navigate('DocumentView', {data: termsOfService})
  }

  showDisclaimer = () => {
    this.props.navigation.navigate('DocumentView', {data: disclaimer})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appInfoWrapper}>
          <Image source={require('assets/icon/icon.png')} style={styles.image} resizeMode='cover' />

          <View style={styles.appNameVersion}>
            <Text style={styles.appName}>{I18n.t('appName')}</Text>
            <Text style={styles.appVersion}>1.0.0</Text>
          </View>
        </View>

        <View style={styles.termsDisclaimer}>
          <TouchableOpacity style={styles.termsOfService} onPress={this.showTermsOfService}>
            <Text style={styles.linkText}>服务条款</Text>
          </TouchableOpacity>

          <Text style={styles.separator}>|</Text>

          <TouchableOpacity style={styles.termsOfService} onPress={this.showDisclaimer}>
            <Text style={styles.linkText}>免责声明</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10
  },
  image: {
    width: 75,
    height: 75
  },
  appNameVersion: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10
  },
  appName: {
    color: '#000',
    fontSize: 14
  },
  appVersion: {
    color: '#555',
    fontSize: 12
  },
  linkText: {
    color: '#000',
    fontSize: 14
  },
  separator: {
    marginLeft: 5,
    marginRight: 5
  },
  termsDisclaimer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

