
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import I18n from 'i18n'
import {Icon} from 'react-native-elements'

import AutoRegister from './autoRegister'
import SmsVerification from './smsVerification'
import UserNamePwd from './userNamePwd'
import SignUp from './signUp'
import UserProfile from './userProfile'
import UserConfig from "./userConfig";
import AccountAndSecurity from "./accountAndSecurity";
import AgreementStatement from "src/profile/agreementStatement";
import DocumentView from "src/profile/documentView";
import AboutUs from "src/profile/aboutUs";

const ProfileNavigator = createStackNavigator({
    AutoRegister: AutoRegister,
		SmsVerification: SmsVerification,
		UserNamePwd: UserNamePwd,
		SignUp: SignUp,
		UserProfile: UserProfile,
		UserConfig: UserConfig,
		AccountAndSecurity: AccountAndSecurity,
		AgreementStatement: AgreementStatement,
		DocumentView: DocumentView,
		AboutUs: AboutUs
	},
	{
		initialRouteName: 'UserProfile'
	});

const ProfileContainer = createAppContainer(ProfileNavigator);

ProfileContainer.navigationOptions = {
	title: I18n.t('mainViewTab5'),
	header: null,
	tabBarIcon: ({focused, tintColor}) => {
		return (<Icon type="font-awesome" name="user" color={tintColor}/>)
	}
}

export default ProfileContainer
