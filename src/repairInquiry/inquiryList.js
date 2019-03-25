import React from 'react'
import {StyleSheet, View, ScrollView, Image, Text, FlatList, TouchableOpacity, Dimensions, TextInput} from 'react-native'
import I18n from 'i18n'
import {SearchBar, Icon} from 'react-native-elements'
import SearchTextInput from 'src/components/searchTextInput'

import {industryNewsCategory, InquiryListData, maintenanceCategoryListData, modificationCategoryListData, beautyCarWashCategoryListData} from 'data'

const screenWidth = Dimensions.get('window').width
const iconSize = 25;

export default class InquiryList extends React.Component {

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <SearchTextInput 
              style={{width: screenWidth - 100}} 
              onChangeText={params.onChangeText}
              onSearch={params.onSearch}
            />
            <TouchableOpacity style={{width: 50}} onPress={params.onSearch}>
              <Text style={{color: '#000', fontSize: 13, textAlign: 'right', margin: 10}}>{I18n.t('search')}</Text>
            </TouchableOpacity>
          </View>
    }
  }

  onChangeText = (text) => {
    console.warn(text);
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setParams({onChangeText: this.onChangeText})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.categoryListWrapper}>
          <FlatList style={styles.categoryList}
            horizontal={true}
            data={industryNewsCategory}
            renderItem={this.renderCategory} />
        </View>

        <FlatList style={styles.InquiryList} 
          data={InquiryListData}
          renderItem={this.renderInquiry} />
      </ScrollView>
    )
  }

  renderCategory = ({item}) => {
    return (
      <TouchableOpacity style={styles.categoryWrapper} onPress={() => this.showInquiry(item)}>
        <Image source={item.icon} style={styles.categoryIcon} />
        <Text style={styles.categoryText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  showInquiry = (item) => {
    switch(item.key) {
      case 'ic1':
        this.props.navigation.navigate('InquiryView', {item: item, categoryList: maintenanceCategoryListData});
        break;
      case 'ic2':
        this.props.navigation.navigate('InquiryView', {item: item, categoryList: beautyCarWashCategoryListData});
        break;
      case 'ic3':
        this.props.navigation.navigate('InquiryView', {item: item, categoryList: modificationCategoryListData});
        break;
      default:
        break;
    }
  }

  renderInquiry = ({item}) => {
    return (
      <TouchableOpacity style={styles.inquiryWrappper}>
        <View style={styles.inquiryImageWrapper}>
          <Image source={item.image} style={styles.inquiryImage} />
        </View>

        <View style={styles.inquiryContent}>

          <Text style={styles.inquiryTitle}>{item.title}</Text>

          <View style={styles.inquiryInfo}>

            <View style={styles.inquiryPrices}>
              <Text style={styles.inquiryPrice}>{'¥' + item.price}</Text>
              <Text style={styles.inquiryOldPrice}>{'¥' + item.oldPrice}</Text>
            </View>

            <View style={styles.inquiryRating}>
              <Text style={styles.inquirySold}>{I18n.t('recentSold') + ' ' + item.recentSold}</Text>
              <Text style={styles.inquiryPopularity}>{I18n.t('popularity') + ' ' + item.popularity}</Text>
            </View>

          </View>
        </View>
      </TouchableOpacity>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(240, 230, 230, 1)',
  },
  categoryListWrapper: {
    elevation: 5,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },
  categoryList: {
  },
  categoryWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 20,
    width: (screenWidth - 10) / 4 - 20,
  },
  categoryIcon: {
    width: iconSize,
    height: iconSize,
    marginBottom: 10
  },
  categoryText: {
    width: (screenWidth - 20) / 4,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 20,
    fontSize: 12 > (screenWidth - 10) / 25 ? (screenWidth - 10) / 25 : 12
  },
  inquiryWrappper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: screenWidth,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  inquiryContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: screenWidth / 4 * 3 - 20,
    marginLeft: 10
  },
  inquiryTitle: {
    fontSize: 20
  },
  inquiryPrices: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inquiryRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inquiryPrice: {
    color: '#ff0000',
    fontSize: 20,
    marginRight: 10
  },
  inquiryOldPrice: {
    fontSize: 19,
    textDecorationLine: 'line-through',
    marginLeft: 10
  },
  inquiryImageWrapper: {
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },
  inquiryImage: {
    width: screenWidth / 4,
    height: screenWidth / 4 - 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    marginRight: 5,
  },
  inquiryInfo: {
    width: '100%'
  },
})
