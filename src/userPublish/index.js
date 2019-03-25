
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Icon} from "react-native-elements"

import EditComment from 'src/userPublish/editComment'
import SelectPhoto from 'src/userPublish/selectPhoto'
import ServiceSelect from 'src/userPublish/serviceSelect'

import I18n from 'i18n'

const UserPublishNavigator = createStackNavigator(
		{
			SelectPhoto: SelectPhoto,
			EditComment: EditComment,
			ServiceSelect: ServiceSelect
		},
		{
			initialRouteName: 'EditComment',
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor: 'rgba(255, 255, 255, 1)',
					height: 50,
					tintColor: '#000'
				},
				headerTintColor: '#000'
			}
		},
	);

const UserPublish = createAppContainer(UserPublishNavigator);

UserPublish.navigationOptions = {
	title: I18n.t('mainViewTab3'),
  header: null,
  tabBarIcon: ({focused, tintColor}) => {
    return (<Icon type="font-awesome" name="camera" color={tintColor}/>)
  }
}

export default UserPublish
