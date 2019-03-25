import React from 'react'
import {Text} from 'react-native'
import I18n from 'i18n'
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeContainer from 'src/mainView/homeContainer'
import UserPublish from 'src/userPublish'
import CameraPage from 'src/mainView/pages/cameraPage'
import CarOwnerVoice from 'src/carOwnerVoice'
import ProfileContainer from 'src/profile'

const TabNavigator = createMaterialBottomTabNavigator(
  {
    home: {screen: HomeContainer},
    carOwnerVoice: {screen: CarOwnerVoice},
    userPublish: {screen: UserPublish},
    profile: {screen: ProfileContainer}
  },
  { 
    activeColor: 'rgba(110, 0, 220, 1)',
    inactiveColor: 'rgba(0, 0, 0, 1)',
    animationEnabled: true,
    barStyle: { 
      backgroundColor: 'rgba(255, 255, 255, 1)'
    },
  }
);

const MainView = createAppContainer(TabNavigator);

MainView.navigationOptions={
  header: null
}

export default MainView;
