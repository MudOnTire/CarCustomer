import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, Dimensions, TouchableWithoutFeedback} from 'react-native'
import I18n from 'i18n'
import {connect} from 'react-redux'

import {filterListData} from 'data'

const CityData = require('data/city.json')
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class FilterBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filterPanelOpened: 0,
      mainCategorySelected: 0,
      subCategorySelected: -1,
      mainCategoryShowing: 0,
      subCategoryShowing: -1,
    }

    var cityData = {};
    for(var c = 0; c < CityData.length; c ++) {
      var item = CityData[c];
      for(var i = 0; i < item.city.length; i ++) {
        if(item.city[i].name.includes(this.props.city) > 0) {
          cityData = item.city[i];
          break;
        }
      }
    }

    this.filterListData = [
      {
        filter: I18n.t('allDistricts'),
        id: 1,
        subFilters: [
          {
            mainCategory: '附近',
            id: 1,
            subCategories: [
              {
                id: 1,
                name: '附近（职能范围）',
              },
              {
                id: 2,
                name: '500来',
              },
              {
                id: 3,
                name: '1000来',
              },
              {
                id: 4,
                name: '2000来',
              },
              {
                id: 5,
                name: '5000来',
              }
            ]
          }
        ]
      },
      {
        filter: I18n.t('filter'),
        id: 2,
        subFilters: [
          {
            mainCategory: '大东区',
            id: 1,
            subCategories: [
              {
                id: 1,
                name: '全部大东区',
              },
              {
                id: 2,
                name: '东中街',
              },
              {
                id: 3,
                name: '小北',
              },
              {
                id: 4,
                name: '东站',
              }
            ]
          },
        ]
      }
    ];

    for(i = 0; i < cityData.area.length; i ++) {
      this.filterListData[0].subFilters.push({
        mainCategory: cityData.area[i],
        id: i + 2,
        subCategories: [
          {
            id: 1,
            name: '全部' + cityData.area[i]
          }
        ]
      })
    }
  }

  openFilterPanel = (item) => {
    opened = this.state.filterPanelOpened === item.id;
    if(opened) {
      this.setState({
        filterPanelOpened: -item.id,
        mainCategorySelected: 0,
        subCategorySelected: -1
      })
    } else {
      if(this.state.filterPanelOpened != -item.id) {
        this.setState({
          mainCategorySelected: 0,
          subCategorySelected: -1
        })
      } else {
        this.setState({
          mainCategorySelected: this.state.mainCategoryShowing,
          subCategorySelected: this.state.subCategoryShowing
        })
      }
      this.setState({
        filterPanelOpened: item.id
      })
    }
  }

  renderFilter = ({item}) => {
    const selected = this.state.filterPanelOpened === item.id
    return (
      <TouchableOpacity 
        style={selected ? {...styles.filterItemWrapper, borderBottomWidth: 2, borderColor: 'rgba(110, 0, 220, 1)'} : styles.filterItemWrapper} 
        onPress={() => this.openFilterPanel(item)}
      >
        <Text 
          style={selected ? {...styles.filterText, color: 'rgba(110, 0, 220, 1)'} : styles.filterText}
        >
          {item.filter + '   ▾'}
        </Text>
      </TouchableOpacity>
    )
  }

  changeCategory = (item) => {
    this.setState({
      mainCategorySelected: item.id - 1,
      subCategorySelected: -1
    })
  }

  renderMainCategory = ({item}) => {
    const selected = this.state.mainCategorySelected >= 0 ? item.id - 1 === this.state.mainCategorySelected : item.id - 1 === this.state.mainCategoryShowing;
    return (
      <TouchableOpacity 
        style={selected ? {...styles.mainCategoryWrapper, borderLeftWidth: 5, borderColor: 'rgba(110, 0, 220, 1)', backgroundColor: 'rgba(240, 240, 240, 1)'} : styles.mainCategoryWrapper} 
        onPress={() => this.changeCategory(item)}>
        <Text 
          style={selected ? {...styles.mainCategoryText, color: 'rgba(110, 0, 220, 1)'} : styles.mainCategoryText}
        >
          {item.mainCategory}
        </Text>
      </TouchableOpacity>
    )
  }

  changeSubCategory = (item) => {
    this.setState({
      mainCategoryShowing: this.state.mainCategorySelected,
      subCategoryShowing: item.id - 1,
      subCategorySelected: item.id - 1,
      filterPanelOpened: -this.state.filterPanelOpened
    });
  }

  hideFilterPanel = () => {
    this.setState({
      filterPanelOpened: -this.state.filterPanelOpened
    });
  }
  
  renderSubCategory = ({item}) => {
    const selected = this.state.mainCategorySelected >= 0 ? item.id - 1 === this.state.subCategorySelected : item.id - 1 === this.state.subCategoryShowing;
    return (
      <TouchableOpacity style={styles.subCategoryWrapper} onPress={() => this.changeSubCategory(item)}>
        <Text 
          style={selected ? {...styles.subCategoryText, color: 'rgba(110, 0, 220, 1)'} : styles.subCategoryText}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.filterList}
          data={this.filterListData}
          renderItem={this.renderFilter}
          horizontal={true}
          extraData={this.state}
          keyExtractor={(item, index) => item + index}
        />
        {this.state.filterPanelOpened > 0 &&
          <View style={styles.filterPanelWrapper}>
            <View style={styles.filterPanel}>
              <FlatList style={styles.mainCategoryList}
                data={this.filterListData[this.state.filterPanelOpened - 1].subFilters}   
                renderItem={this.renderMainCategory}
                extraData={this.state}
                keyExtractor={(item, index) => item + index}
              />
              <FlatList style={styles.subCategoryList}
                data={this.filterListData[this.state.filterPanelOpened - 1].subFilters[this.state.mainCategorySelected].subCategories}
                renderItem={this.renderSubCategory}
                extraData={this.state}
                keyExtractor={(item, index) => item + index}
              />
            </View>
            <TouchableWithoutFeedback onPress={this.hideFilterPanel}
              style={styles.blankPos}
            >
              <View style={styles.blankView} />
            </TouchableWithoutFeedback>
          </View>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    city: state.service.city,
    userName: state.user.userName
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (params) => dispatch(changeCity(params)),
    changeSearchText: (params) => dispatch(changeSearchText(params)),
    getBannerData: (params) => dispatch(getBannerData(params))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 2,
    elevation: 5
  },
  filterItemWrapper: {
    padding: 10,
    width: screenWidth / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  filterList: {
    backgroundColor: '#fff'
  },
  filterText: {
    color: '#000'
  },
  filterPanel: {
    flexDirection: 'row',
    height: screenWidth / 1.5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  blankView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  filterPanelWrapper: {
    height: screenHeight,
  },
  mainCategoryList: {
    flex: 0.3,
    width: screenWidth * 0.3,
    height: '100%',
    backgroundColor: '#fff'
  },
  subCategoryList: {
    flex: 0.7,
    width: screenWidth * 0.7,
    height: '100%',
    backgroundColor: 'rgba(240, 240, 240, 1)'
  },
  mainCategoryText: {
    color: '#000',
    fontSize: 12
  },
  subCategoryText: {
    color: '#000',
    fontSize: 12,
    width: '70%'
  },
  subCategoryWrapper: {
    padding: 10,
    paddingLeft: 15
  },
  mainCategoryWrapper: {
    padding: 10,
    paddingLeft: 15
  }
})