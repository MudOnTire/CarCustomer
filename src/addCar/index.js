
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Icon} from "react-native-elements"

import SelectBrand from 'src/addCar/selectBrand'
import SelectSeries from 'src/addCar/selectSeries'
import SelectModel from 'src/addCar/selectModel'
import MyCar from 'src/addCar/myCar'
import CarInfo from 'src/addCar/carInfo'

import I18n from 'i18n'

const HomeNavigator = createStackNavigator(
		{
      SelectBrand: SelectBrand,
      SelectSeries: SelectSeries,
      SelectModel: SelectModel,
			MyCar: MyCar,
			CarInfo: CarInfo
		},
		{
			initialRouteName: 'MyCar',
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

const AddCar = createAppContainer(HomeNavigator);

AddCar.navigationOptions = {
	title: '',
	header: null,
}

export default AddCar
