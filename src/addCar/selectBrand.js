import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList} from 'react-native'
import I18n from 'i18n'

import {connect} from 'react-redux'
import {
    getCarCategory
  } from 'src/redux/actions'
import SearchTextInput from 'src/components/searchTextInput';
import { characterList } from 'src/data';

const screenWidth = Dimensions.get('window').width

class SelectBrand extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      brandList: []
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
      brandName: '',
      seriesName: ''
    }

    this.props.getCarCategory(params)
  }

  componentDidMount() {
    this.load();
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.carCategoryList.length > 0 && nextProps.brandName === '' && nextProps.seriesName === '') {
      this.setState({
        loaded: true,
        brandList: nextProps.carCategoryList
      })
    }
  }

  renderBrand = ({item}) => {
    return (
      <TouchableOpacity style={styles.brandWrapper} onPress={() => this.selectBrand(item)}>
        <Image source={{uri: item.brand_logo}} resizeMode='cover' style={styles.logo} />
        <Text style={styles.brandName}>{item.sub_brand}</Text>
      </TouchableOpacity>
    )
  }

  selectBrand = (item) => {
    this.props.navigation.navigate('SelectSeries', {brandName: item.sub_brand})
  }

  renderCharacter = ({item}) => {
    return (
      <TouchableOpacity style={styles.characterWrapper}>
        <Text style={styles.character}>{item}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.characterList}
          data={characterList}
          renderItem={this.renderCharacter}
          keyExtractor={(item, index) => item + index}
        />
        <FlatList style={styles.brandList}
          data={this.state.brandList}
          renderItem={this.renderBrand}
          extraData={this.state}
          keyExtractor={(item, index) => item.sub_brand + index}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(SelectBrand);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  brandList: {
    width: '100%',
    height: '100%',
    padding: 5,
    backgroundColor: '#fff'
  },
  brandWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: 70,
  },
  brandName: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 15,
    margin: 10
  },
  arrow: {
    color: 'rgba(180, 180, 180, 1)',
    fontSize: 12
  },
  logo: {
    width: 50,
    height: 50,
    margin: 10
  },
  character: {
    color: '#000',
    fontSize: 14,
  },
  characterList: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 25,
    zIndex: 2
  }
})