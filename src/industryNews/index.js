import React from 'react'
import {Text, View, ScrollView, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native'
import I18n from 'i18n'
import {mainCategory, industryNewsCategory, industryNews} from 'data'

const bannerImage = require('assets/images/industryNews/industryNewsBanner.png')
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const iconSize = (screenWidth - 20) / 5 / 3;

export default class IndustryNews extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.industryNewsScrollView}>
          <FlatList style={styles.mainCategoryList}
            horizontal={true}
            data={mainCategory}
            renderItem={this.renderMainCategoryItem} />

          <Image source={bannerImage} style={styles.bannerImage} />

          <FlatList style={styles.industryNewsCategoryList}
            horizontal={true}
            data={industryNewsCategory}
            renderItem={this.renderIndustryNewsCategoryItem} />

          <FlatList style={styles.industryNewsList}
            data={industryNews}
            renderItem={this.renderIndustryNewsItem} />
        </ScrollView>
      </View>
    )
  }

  renderMainCategoryItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.mainCategoryWrapper} onPress={() => this.props.navigation.state.params.onMainCategory(item)}>
        <Image source={item.icon} style={styles.mainCategoryIcon} />
        <Text style={styles.mainCategoryText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  renderIndustryNewsCategoryItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.industryNewsCategoryWrapper}>
        <Image source={item.icon} style={styles.industryNewsCategoryIcon} />
        <Text style={styles.industryNewsCategoryText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  showNews = (item) => {
    this.props.navigation.navigate("NewsView", {news: item});
  }

  renderIndustryNewsItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.industryNewsWrapper} onPress={() => this.showNews(item)}>
        <Text style={styles.industryNewsTitle}>{item.title}</Text>
        <View style={styles.industryNewsImageList}>
          <Image source={item.images[0]} style={styles.industryNewsImage} />
          <Image source={item.images[1]} style={styles.industryNewsImage} />
          <Image source={item.images[2]} style={styles.industryNewsImage} />
        </View>

        <View style={styles.newsAuthorRating}>
          <Text style={styles.newsInfoText}>❤️ : {item.rating} </Text>
          <Text style={styles.newsInfoText}>✏️ : {item.author} </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  industryNewsScrollView: {
    backgroundColor: 'rgba(240, 230, 230, 1)',
  },
  bannerImage: {
    width: screenWidth,
  },
  mainCategoryWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    width: (screenWidth - 10) / 5 - 20,
  },
  mainCategoryIcon: {
    width: iconSize,
    height: iconSize,
    marginBottom: 10
  },
  mainCategoryText: {
    width: (screenWidth - 10) / 5,
    height: 20,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontSize: 12 > (screenWidth - 10) / 25 ? (screenWidth - 10) / 25 : 12
  },
  mainCategoryList: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 1)',
  },
  industryNewsCategoryWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    width: (screenWidth - 10) / 4 - 20,
  },
  industryNewsCategoryIcon: {
    width: iconSize,
    height: iconSize,
    marginBottom: 10
  },
  industryNewsCategoryText: {
    width: (screenWidth - 10) / 4,
    height: 20,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontSize: 12 > (screenWidth - 10) / 25 ? (screenWidth - 10) / 25 : 12
  },
  industryNewsImageList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  industryNewsWrapper: {
    margin: 5,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  industryNewsImage: {
    width: (screenWidth - 10) / 3 - 2,
    height: ((screenWidth - 10) / 3 - 2) * 2 / 3,
    margin: 1
  },
  industryNewsTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: 'rgba(0, 0, 0, 1)'
  },
  newsInfoText: {
    marginTop: 10,
    margin: 10,
    color: 'rgba(0, 0, 0, 1)'
  },
  industryNewsCategoryList: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  industryNewsList: {
    marginTop: 10
  },
  newsAuthorRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
})