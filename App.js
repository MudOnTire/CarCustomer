
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';
import ConfigureStore from 'src/redux/configureStore'

import Splash from 'src/splash'
import MainView from 'src/mainView'

const AppNavigator = createStackNavigator({
		Splash: Splash,
		MainView: MainView,
	},
	{
		initialRouteName: 'Splash'
	});

const AppContainer = createAppContainer(AppNavigator);

const store = ConfigureStore();

export default class App extends React.Component {
	render() {
		return (
			<Provider store={ store }>
				<AppContainer />
			</Provider>
		)
	}
}
