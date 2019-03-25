import React from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native'
import I18n from 'i18n'
import SearchTextInput from 'src/components/searchTextInput'

import { NavigationEvents } from 'react-navigation';

import { connect } from 'react-redux';
import {
  changeSearchText,
} from 'src/redux/actions'
import ServiceView from 'src/serviceView'
const screenWidth = Dimensions.get('window').width;

class CategoryView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listData: [],
      searchText: ''
    }

    this.serviceView = React.createRef();
  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;

    return {
      headerRight: 
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <SearchTextInput 
            style={{width: screenWidth - 100}} 
            onChangeText={params.onChangeText}
            onSearch={params.onSearch}
          />
          <TouchableOpacity style={{width: 50}} onPress={params.onSearch}>
            <Text style={{color: '#000', fontSize: 13, textAlign: 'right', margin: 10}}>{I18n.t('search')}</Text>
          </TouchableOpacity>
        </View>,
    }
  }

  onChangeText = (text) => {
    this.setState({
      searchText: text
    })
  }

  onSearch = () => {
    this.props.changeSearchText(this.state.searchText);
    this.serviceView.load();
  }
  
	componentDidMount() {

    this.props.navigation.setParams({
      onChangeText: this.onChangeText, 
      onSearch: this.onSearch
    });

  }
  
  showDetail = (item) => {
    this.props.navigation.navigate('DetailView', { item });
  }

  setLoadingState = (loading) => {
    this.setState({loading: loading})
  }

	showPromotion = (item) => {
		this.props.navigation.navigate('PromotionView', {item})
  }
  
  componentWillUnmount() {
    
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <NavigationEvents
          onWillBlur={this.removeSpin}
        />
        
        <ServiceView 
          style={styles.storeRankingList} 
          onRef={ref => (this.serviceView = ref)} 
          showServiceDetail={(item) => this.showDetail(item)}
          setLoadingState = {this.setLoadingState}
          typeFilter = {this.props.navigation.state.params.category}
          showPromotion = {this.showPromotion}
          isCategoryView = {true}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    serviceData: state.service.serviceData,
    currentCategory: state.service.currentCategory,
    errorOccured: state.service.errorOccured,
    freshData: state.service.freshData
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchText: (params) => dispatch(changeSearchText(params)),
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(240, 240, 255, 1)',
  },
  storeRankingList: {
    flex: 1
  }
})
