import React from 'react'
import {FlatList, View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, Alert} from 'react-native'
import { Rating, Icon, SearchBar } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay'
import I18n from 'i18n'
import { NavigationEvents } from 'react-navigation';
import SearchTextInput from 'src/components/searchTextInput'

import { connect } from 'react-redux';
import {
  getServiceData,
  gotServiceData
} from 'src/redux/actions'

import ImageLoad from 'react-native-image-placeholder';
import FilterBar from 'src/serviceView/searchView/filterBar'

const placeholderImage = require('assets/images/placeholder.jpg');
const screenWidth = Dimensions.get('window').width;

class ServiceSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listData: [],
      searchText: '',
      loading: false
    }

    this.props.navigation.setParams({
      onSearch: this.onSearch,
      onChangeText: this.onChangeText
    });

  }

  onSearch = () => {
    this.load();
  }

  onChangeText = (text) => {
    this.setState({searchText: text})
  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;

    return {
      title: '',
      tabBarIcon: ({focused, tintColor}) => {
        return (<Icon type="font-awesome" name="th-large" color={tintColor}/>)
      },
      headerRight: (
          <View
            style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
          >
            <SearchTextInput 
              style={{width: screenWidth - 100}} 
              onChangeText={params.onChangeText}
              onSearch={params.onSearch}
            />
            <TouchableOpacity style={{width: 50}} onPress={params.onSearch}>
              <Text style={{color: '#000', fontSize: 13, textAlign: 'right', margin: 10}}>{I18n.t('search')}</Text>
            </TouchableOpacity>
          </View>
        )
    }
  }

	componentDidMount() {
    this.load();
  }
  
  initListData = (serviceData) => {

    let data = [];
			
    serviceData.forEach((item) => {
      const serviceInfo = {
        ...item,
        key: 'service' + item.id
      }

      data.push(serviceInfo);
    })
    
    this.setState({
      listData: data,
      loading: false
    });

    this.props.gotServiceData();

  }

	componentWillReceiveProps(nextProps) {
    if(nextProps.errorOccured === true) {
      if(this.state.loading === true) {
        this.setState({
          loading: false
        })
      }
		} else if(nextProps.freshData === true) {

      this.setState({searchText: nextProps.searchText})
      this.initListData(nextProps.serviceData);

    }
	}

	load = () => {
		this.setState( { loading: true } );
		data = [];

		var params;
		params = {
			'userName': 'User',//this.props.currentUser.name,
			'userType': 'client',//this.props.currentUser.type,
			'typeFilter': '',
      'searchText': '',
      'label': [],
    };
    
    setTimeout(() => {
      if(this.state.loading === true) {
        this.setState({loading: false})
      }
    }, 5000);

		this.props.getServiceData(params);
		
  }
  
  selectCompany = (item) => {
    this.props.navigation.state.params.companySelected(item)
  }

  rendercategoryServiceItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.categoryServiceWrapper} onPress={() => this.selectCompany(item)} key={item.key}>
        
        <ImageLoad 
          source={{ uri: item.image }} 
          style={styles.categoryServiceImage} 
          placeholderSource={placeholderImage}
          placeholderStyle={{width: '100%', height: '100%'}}
          isShowActivity={false}
        />

        <View style={styles.categoryServiceInfo}>
          <Text style={styles.categoryServiceName}> {item.company} </Text>

          <View style={styles.categoryServiceComments}>
            <Rating
              readonly
              type="star"
              fractions={5}
              startingValue={item.totalRating}
              style={styles.starRating}
              ratingBackgroundColor='rgba(0, 0, 0, 0)'
              imageSize={20}
              type='custom'
            />

            <Text style={styles.categoryServiceNComments}>
              {item.comments.length + '条'}
            </Text>
          </View>

          <View style={styles.categoryServiceArea}>
            <Text style={styles.categoryServiceCity}>{item.address}</Text>
            <Text style={styles.categoryServiceDistance}>{item.distance ? item.distance : 1.5 + 'km'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  removeSpin = () => {
    this.setState({loading: false})
  }

  render() {
    return (
      <View style={styles.container}>

        <NavigationEvents
          onWillBlur={this.removeSpin}
        />

				<Spinner
					visible={this.state.loading}
				/>

        <FilterBar 
          style={styles.filterBar}
        />

        <FlatList style={styles.categoryServiceList}
          data={this.state.listData}
          renderItem={this.rendercategoryServiceItem}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    serviceData: state.service.serviceData,
    searchText: state.service.searchText,
		freshData: state.service.freshData
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getServiceData: (params) => dispatch(getServiceData(params)),
    gotServiceData: () => dispatch(gotServiceData())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ServiceSelect);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  starRating: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  categoryServiceList: {
    flex: 1,
    width: '100%',
    margin: 5,
    marginTop: 30
  },
  categoryServiceInfo: {
    flex: 0.8,
    height: screenWidth * 0.3 - 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  categoryServiceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    margin: 5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: screenWidth * 0.3
  },
  categoryServiceImage: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.3 - 20
  },
  categoryServiceComments: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 5
  },
  categoryServiceArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    width: screenWidth * 0.7 - 30,
  },
  categoryServiceNComments: {
    marginLeft: 5,
    color: '#000',
    fontSize: 17
  },
  categoryServiceName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    width: screenWidth * 0.7,
  },
  categoryServiceCity: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 1)',
    width: screenWidth * 0.7 - 60
  },
  filterBar: {
    height: 20,
    position: 'absolute',
    zIndex: 2,
    left: 0,
    top: 0,
    right: 0
  }
})
