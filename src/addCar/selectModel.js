import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions} from 'react-native'
import I18n from 'i18n'

import {connect} from 'react-redux'
import {
    getCarCategory
} from 'src/redux/actions'
import SearchTextInput from 'src/components/searchTextInput';

const screenWidth = Dimensions.get('window').width

class SelectModel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      brandName: this.props.navigation.state.params.brandName,
      seriesName: this.props.navigation.state.params.seriesName,
      modelList: []
    }
    this.props.navigation.setParams({
      onChangeText: this.onChangeText, 
      onSearch: this.onSearch
    });
  }

  onChangeText = (text) => {
  }

  onSearch = () => {
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

  load = () => {
    const params = {
      brandName: this.state.brandName,
      seriesName: this.state.seriesName
    }

    this.props.getCarCategory(params)
  }

  componentDidMount() {
    this.load();
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.carCategoryList.length > 0 && nextProps.brandName === this.state.brandName && nextProps.seriesName === this.state.seriesName) {
      this.setState({
        loaded: true,
        modelList: nextProps.carCategoryList
      })
    }
  }

  renderModel = ({item}) => {
    return (
      <TouchableOpacity style={styles.modelWrapper} onPress={() => this.selectModel(item)}>
        <Image 
          source={{uri: item.brand_logo}} 
          style={styles.modelLogo}
        />
        
        <View style={styles.modelInfo}>
          <Text style={styles.modelName}>{item.model}</Text>
          <Text style={styles.modelPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  selectModel = (item) => {
    this.props.navigation.navigate('CarInfo', {model: item, brandName: this.state.brandName, seriesName: this.state.seriesName})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.brandWrapper}>
          <Text style={styles.brandName}>{this.props.brandName + ' / ' + this.props.seriesName}</Text>
        </View>
        <FlatList style={styles.modelList}
          data={this.state.modelList}
          renderItem={this.renderModel}
          extraData={this.state}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    userName: state.user.userName,
    brandName: state.user.brandName,
    seriesName: state.user.seriesName,
    carCategoryList: state.user.carCategoryList
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCarCategory: (params) => dispatch(getCarCategory(params)),
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SelectModel);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  modelList: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
  modelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  modelInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10
  },
  modelName: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 15,
  },
  modelPrice: {
    color: 'rgba(0, 0, 0, 0.9)',
    fontSize: 15
  },
  modelLogo: {
    width: 80,
    height: 80
  },
  brandWrapper: {
    width: '100%',
    marginBottom: 3,
    backgroundColor: '#aaa'
  },
  brandName: {
    color: '#000',
    fontSize: 13,
    margin: 5
  }
})