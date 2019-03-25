
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Icon} from "react-native-elements"

import HomePage from 'src/mainView/pages/homePage'
import IndustryNews from 'src/industryNews'
import NewsView from 'src/industryNews/newsView'
import DetailView from 'src/serviceView/detailView'
import InquiryList from 'src/repairInquiry/inquiryList'
import InquiryView from 'src/repairInquiry/inquiryView'
import TechnicianConsultation from 'src/technicianConsultation/index'
import ExpertInterview from 'src/expertInterview'
import CategoryView from 'src/serviceView/categoryView'
import SearchView from 'src/serviceView/searchView/'
import SearchPage from 'src/serviceView/searchView/searchPage'
import ServiceMapView from "src/serviceView/mapView"
import SalesPromotion from 'src/salesPromotion'
import AddCar from 'src/addCar'
import PromotionView from 'src/salesPromotion/promotionView'
import ExpertView from 'src/expertInterview/expertView'

import I18n from 'i18n'
import SelectBrand from "src/addCar/selectBrand";
import SelectSeries from "src/addCar/selectSeries";
import SelectModel from "src/addCar/selectModel";
import MyCar from "src/addCar/myCar";
import CarInfo from "src/addCar/carInfo";
import TechnicianView from "src/technicianConsultation/technicianView";
import DriverTips from "src/driverTips";
import TipView from "src/driverTips/tipView";
import ImageView from "src/components/imageView";

const HomeNavigator = createStackNavigator(
		{
			HomePage: HomePage,
			IndustryNews: IndustryNews,
			NewsView: NewsView,
			DetailView: DetailView,
			ServiceMapView: ServiceMapView,
			InquiryList: InquiryList,
			InquiryView: InquiryView,
			TechnicianConsultation: TechnicianConsultation,
			TechnicianView: TechnicianView,
			ExpertInterview: ExpertInterview,
			ExpertView: ExpertView,
			CategoryView: CategoryView,
			SearchView: SearchView,
			SearchPage: SearchPage,
			SalesPromotion: SalesPromotion,
			PromotionView: PromotionView,
			SelectBrand: SelectBrand,
			SelectSeries: SelectSeries,
			SelectModel: SelectModel,
			MyCar: MyCar,
			CarInfo: CarInfo,
			DriverTips: DriverTips,
			TipView: TipView,
			ImageView: ImageView
		},
		{
			initialRouteName: 'HomePage',
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

const HomeContainer = createAppContainer(HomeNavigator);

HomeContainer.navigationOptions = {
	title: I18n.t('mainViewTab1'),
	header: null,
	tabBarIcon: ({focused, tintColor}) => {
		return (<Icon type="font-awesome" name="home" color={tintColor}/>)
	}
}

export default HomeContainer
