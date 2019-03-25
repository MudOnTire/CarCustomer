import React from 'react'
import {Dimensions, TouchableOpacity} from 'react-native'
import I18n from 'i18n'
import { connect } from 'react-redux';
import {changeSearchText} from 'src/redux/actions'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import {SearchBar, Icon} from 'react-native-elements'
import SearchTextInput from 'src/components/searchTextInput'

import SearchAll from 'src/serviceView/searchView/searchAll'
import SearchComment from 'src/serviceView/searchView/searchComment'

const screenWidth = Dimensions.get('window').width

const TabNavigator = createMaterialTopTabNavigator(
  {
    SearchAll: SearchAll,
    SearchComment: SearchComment,
  },
  { 
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'rgba(110, 0, 220, 1)',
      inactiveTintColor: 'rgba(0, 0, 0, 1)',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        height: 40
      },
      style: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
      }
    },
  }
);

export default class SearchView extends React.Component {
  static router = TabNavigator.router;

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
  
    return {
      headerRight: (<TouchableOpacity onPress={params.goToSearchPage}>
        <SearchTextInput 
          style={{width: screenWidth - 40}} 
          editable={false} 
          value={params.searchText}
        />
      </TouchableOpacity>),
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      searchText: this.props.navigation.state.params.searchText
    }

    this.searchBar = React.createRef();
  }

  render() {
    const { navigation } = this.props;

    return <TabNavigator navigation={navigation} />;
  }

  goToSearchPage = () => {
    this.props.navigation.replace('SearchPage')
  }

  componentDidMount = () => {

    this.props.navigation.setParams({
      goToSearchPage: this.goToSearchPage,
      searchText: this.props.navigation.state.params.searchText
    });
  
  }

}

