import React from 'react'
import {FlatList, View, Text, StyleSheet, Dimensions, TouchableOpacity, AsyncStorage} from 'react-native'
import I18n from 'i18n'
import SearchTextInput from 'src/components/searchTextInput'

import { connect } from 'react-redux';
import {
  changeSearchText,
} from 'src/redux/actions'

const screenWidth = Dimensions.get('window').width;

class CategoryView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listData: [],
      searchText: this.props.searchText
    }

    this.props.navigation.setParams({
      onSearch: this.onSearch,
      onChangeText: this.onChangeText,
      containerStyle: styles.searchBar,
      inputStyle: styles.searchTextInput,
      searchText: this.state.searchText
    });

  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;

    return {
      headerRight: <View
          style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
        >
        <SearchTextInput 
          style={{width: screenWidth - 100}} 
          onChangeText={params.onChangeText}
          onSearch={params.onSearch}
          autoFocus={true}
          value={params.searchText}
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

  getHistory = async () => {
    try {
      var history = await AsyncStorage.getItem('searchHistory');
      this.setState({listData: JSON.parse(history)})
      return history;
    } catch(error) {
      return [];
    }
  }

  saveHistory = async (text) => {
    if(text === "") {
      return;
    }
    try {
      var history = await AsyncStorage.getItem('searchHistory');
      history = JSON.parse(history);
      if(history) {
        var existing = false;
        for(var i = 0; i < history.length; i ++) {
          if(history[i] === text) {
            existing = true;
          }
        }
        if(!existing) {
          history.push(text);
          if(history.length > 10) {
            history.shift();
          }
        }
      } else {
        history = [text];
      }
      await AsyncStorage.setItem('searchHistory', JSON.stringify(history))
    } catch (error) {

    }
  }

  onSearch = () => {
    this.props.changeSearchText(this.state.searchText)
    this.saveHistory(this.state.searchText)
    this.props.navigation.replace('SearchView', {searchText: this.state.searchText})
  }

	componentDidMount() {
    this.getHistory();
  }

  search = (item) => {
    this.props.changeSearchText(item)
    this.props.navigation.replace('SearchView', {searchText: item})
  }

  renderHistory = ({item}) => {
    return (
      <TouchableOpacity style={styles.historyWrapper} onPress={() => this.search(item)}>
        <Text style={styles.historyText}>{item}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.historyList}
          data={this.state.listData}
          renderItem={this.renderHistory}
          keyExtractor={(item, index) => item + index}
          extraData={this.state}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    searchText: state.service.searchText,
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchText: (params) => dispatch(changeSearchText(params))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  historyWrapper: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  historyText: {
    color: '#000'
  },
  historyList: {

  },
  searchBar: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: screenWidth * 0.7,
  },
  searchTextInput: {
    color: '#000',
    backgroundColor: '#fff'
  }
})
