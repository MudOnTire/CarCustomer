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

class SelectSeries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      brandName: this.props.navigation.state.params.brandName,
      seriesList: []
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
      seriesName: ''
    }

    this.props.getCarCategory(params)
  }

  componentDidMount() {
    this.load();
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.carCategoryList.length > 0 && nextProps.brandName === this.state.brandName && nextProps.seriesName === '') {
      this.setState({
        loaded: true,
        seriesList: nextProps.carCategoryList
      })
    }
  }

  renderSeries = ({item}) => {
    return (
      <TouchableOpacity style={styles.seriesWrapper} onPress={() => this.selectSeries(item)}>
        <Image source={{uri: item.brand_logo}} style={styles.logo} resizeMode='cover' />
        <Text style={styles.seriesName}>{item.series}</Text>
      </TouchableOpacity>
    )
  }

  selectSeries = (item) => {
    this.props.navigation.navigate('SelectModel', {brandName: this.state.brandName, seriesName: item.series})
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
        <View style={styles.brandWrapper}>
          <Text style={styles.brandName}>{this.props.brandName}</Text>
        </View>

        <FlatList style={styles.characterList}
          data={characterList}
          renderItem={this.renderCharacter}
          keyExtractor={(item, index) => item + index}
        />

        <FlatList style={styles.seriesList}
          data={this.state.seriesList}
          renderItem={this.renderSeries}
          extraData={this.state}
          keyExtractor={(item, index) => item.series + index}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(SelectSeries);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  seriesList: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
  seriesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    height: 70,
  },
  seriesName: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 15,
    margin: 10
  },
  arrow: {
    color: 'rgba(180, 180, 180, 1)',
    fontSize: 12
  },
  logo: {
    height: 50,
    width: 50,
    margin: 10
  },
  brandWrapper: {
    backgroundColor: '#aaa',
    width: '100%',
    marginBottom: 3
  },
  brandName: {
    color: '#000',
    fontSize: 13,
    margin: 5
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