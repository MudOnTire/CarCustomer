import React, { Component } from 'react'
import { Text, Dimensions, View, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import I18n from 'i18n'
import {Icon} from "react-native-elements"

import {connect} from 'react-redux'
import {
  getVerifyCode,
} from 'src/redux/actions'

import {appInfoList, userConcerns, featureList} from 'data'
import LinearGradient from 'react-native-linear-gradient';

const emptyImg = require('assets/images/placeholder.jpg')
const screenWidth = Dimensions.get('window').width;

class UserProfile extends Component {

  static navigationOptions = {
    header: null,
    title: ''
  }

  signIn = () => {
    this.props.navigation.navigate('SmsVerification')
  }

  showUserInfo = () => {
    if(this.props.signedIn === false) {
      this.signIn();
    }
  }

  openAppInfo = (item) => {
    switch(item.id) {
      case 3:
        this.props.navigation.navigate('AgreementStatement')
        break;
      default:
        break;
    }
  }

  renderAppInfo = ({item}) => {
    return (
      <TouchableOpacity style={styles.appInfoWrapper} onPress={() => this.openAppInfo(item)}>
        <Text style={styles.appInfoText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  renderUserConcern = ({item}) => {
    return (
      <TouchableOpacity style={styles.gridItem}>
        <Image source={item.image} style={styles.itemImage} resizeMode='cover' />
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  renderFeature = ({item}) => {
    return (
      <TouchableOpacity style={styles.featureItem}>
        <Icon type="font-awesome" name={item.icon} style={styles.featureIcon} color="rgba(0, 0, 0, 1)" size={20}/>
        <Text style={styles.featureText}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  showUserConfig = () => {
    this.props.navigation.navigate('UserConfig')
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        
        <LinearGradient
          locations={[0, 0.2, 0.4, 1]}
          colors={[
            '#FFF',
            'rgba(130, 137, 160, 1)',
            '#FFF',
            '#FFF'
          ]}
          style={styles.gradient}
        />

        <View style={styles.userSettings}>
          <TouchableOpacity onPress={this.showUserConfig} style={styles.optionButton}>
            <Icon type="font-awesome" name="gear" style={styles.optionIcon} color="rgba(0, 0, 0, 1)" size={20}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Icon type="font-awesome" name="envelope" style={styles.optionIcon} color="rgba(0, 0, 0, 1)" size={20}/>
          </TouchableOpacity>
        </View>

        <View style={styles.profileWrapper}>

          <View style={styles.userInfoWrapper}>
            <TouchableOpacity style={styles.userLogoWrapper} onPress={this.showUserInfo}>
              <Image source={emptyImg} style={styles.userLogo} resizeMode='cover' />
            </TouchableOpacity>

            <View style={styles.userInfo}>
              <TouchableOpacity style={styles.userNameWrapper} onPress={this.showUserInfo}>
                <Text style={styles.userName}>{this.props.userName != '' ? this.props.userName : "点击登录"}</Text>
              </TouchableOpacity>

              <Text style={styles.profileLabel}>{I18n.t('profileNotSet')}</Text>
              <Text style={styles.profileLabel}>{I18n.t('fan') + ' 1 ' + I18n.t('follow') + ' 0 '}</Text>

            </View>

          </View>

          <TouchableOpacity style={styles.personalInfoWrapper}>
            <Text style={styles.personalInfoText}>{I18n.t('personalPage')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.upgradeNotify}>
            <Text style={styles.upgradeText}>{I18n.t('upgradeNotify')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userConcernlistWrapper}>
          <FlatList horizontal={true}
            style={styles.userConcernList}
            data={userConcerns}
            renderItem={this.renderUserConcern}
            keyExtractor={(item, index) => item + index}
          />
        </View>

        <View style={styles.featureListWrapper}>
          <FlatList
            numColumns={4}
            style={styles.featureList}
            data={featureList}
            renderItem={this.renderFeature}
            keyExtractor={(item, index) => item + index}
          />
        </View>

        <View style={styles.appInfoListWrapper}>
          <FlatList style={styles.appInfoList} 
            data={appInfoList}
            renderItem={this.renderAppInfo}
            keyExtractor={(item, index) => item + index}
          />
        </View>

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    userName: state.user.userName,
    signedIn: state.user.signedIn
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVerifyCode: (params) => dispatch(getVerifyCode(params)),
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 3,
    borderColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 0.5,
  },
  profileWrapper: {
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'rgba(0, 0, 0, 1)',
    width: '85%',
    backgroundColor: 'rgba(25, 28, 25, 1)',
    margin: '5%',
    marginLeft: '7.5%',
    marginRight: '7.5%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 5,
  },
  userConcerns: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '95%',
    margin: '2.5%'
  },
  gridRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    height: 90
  },
  gridItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: screenWidth / 5
  },
  userLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  itemImage: {
    width: 30,
    height: 30
  },
  itemText: {
    color: '#000',
    fontSize: 12,
    marginTop: 5,
  },
  appInfoText: {
    color: '#000',
    fontSize: 14,
    margin: '2.5%',
    width: '95%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5
  },
  appInfoList: {
    width: '100%',
    height: '100%'
  },
  userSettings: {
    height: 50,
    width: '95%',
    margin: '2.5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  optionIcon: {
  },
  optionButton: {
    margin: 10
  },
  userConcernList: {
    height: '100%',
  },
  userConcernlistWrapper: {
    height: 90,
    width: '100%',
  },
  userInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 10,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  userName: {
    color: '#fff',
    fontSize: 13,
    margin: 3,
  },
  profileLabel: {
    color: 'rgba(180, 180, 180, 1)',
    fontSize: 11,
    margin: 3,
    marginTop: 7
  },
  userLogoWrapper: {
    margin: 5
  },
  upgradeNotify: {
    backgroundColor: 'rgba(36, 36, 31, 1)',
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5
  },
  upgradeText: {
    color: '#aaa',
    fontSize: 11,
    margin: 5,
  },
  appInfoListWrapper: {
    width: '100%',
    height: 300
  },
  featureItem: {
    width: (screenWidth - 20) / 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10
  },
  featureText: {
    color: '#000',
    fontSize: 12,
    marginTop: 5
  },
  featureListWrapper: {
    backgroundColor: 'rgba(250, 250, 250, 1)',
    borderRadius: 10,
    margin: 10
  },
  personalInfoWrapper: {
    backgroundColor: 'rgba(255, 100, 50, 1)',
    position: 'absolute',
    zIndex: 2,
    top: 15,
    right: -2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  personalInfoText: {
    color: '#FFF',
    fontSize: 11,
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 'bold'
  }
})