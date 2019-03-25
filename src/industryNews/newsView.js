import React from 'react'
import {StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Dimensions, FlatList} from 'react-native'
import I18n from 'i18n'
import {industryNews} from 'data'

const screenWidth = Dimensions.get('window').width;

export default class NewsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: this.props.navigation.state.params.news
    }
  }

  showRelatedNews = (item) => {
    this.refs._scrollView.scrollTo({x: 5, y: 5, animated: true});

    this.setState({
      news: item
    })
  }

  renderRelatedNews = ({item}) => {
    return (
      <TouchableOpacity style={styles.relatedNewsWrapper} onPress={() => this.showRelatedNews(item)}>
        <Text style={styles.relatedNewsHeadline}>{item.title}</Text>
        <View style={styles.imageList}>
          <Image source={item.images[0]} style={styles.newsImage} />
          <Image source={item.images[1]} style={styles.newsImage} />
          <Image source={item.images[2]} style={styles.newsImage} />
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer} ref='_scrollView'>
          <Text style={styles.newsHeadline}>
            {this.state.news.title}
          </Text>

          <View style={styles.newsInfo}>
            <Text style={styles.newsAuthor}>
              {I18n.t('author') + ': ' + this.state.news.author}
            </Text>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.newsRating}>
                {"＋ ❤️ : " + this.state.news.rating}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.imageList}>
              <Image source={this.state.news.images[0]} style={styles.newsImage} />
              <Image source={this.state.news.images[1]} style={styles.newsImage} />
              <Image source={this.state.news.images[2]} style={styles.newsImage} />
            </View>
            
            <Text style={styles.contentText}>
              {this.state.news.content}
            </Text>
          </View>

          <View style={styles.relatedNews}>
            <Text style={styles.relatedNewsTag}>
              {I18n.t('relatedNews') + ' : '}
            </Text>
            <FlatList style={styles.relatedNewsList} 
              data={industryNews}
              renderItem={this.renderRelatedNews}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flex: 1
  },
  newsHeadline: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
    color: 'rgba(112, 48, 160, 1)',
    textShadowColor:'rgba(168, 72, 240, 1)',
    textShadowOffset:{width: 0, height: 0},
    textShadowRadius:20,
  },
  newsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10
  },
  followButton: {
    opacity: 1,
    backgroundColor: 'rgba(112, 48, 160, 1)'
  },
  newsRating: {
    margin: 5,
    fontSize: 15,
    color: '#ffffff'
  },
  newsAuthor: {
    fontSize: 15,
    color: 'rgba(240, 45, 45, 1)'
  },
  content: {
    padding: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 1)'
  },
  imageList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  newsImage: {
    width: (screenWidth - 20) / 3 - 2,
    height: ((screenWidth - 20) / 3 - 2) * 2 / 3,
    margin: 1
  },
  contentText: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 1)',
    marginTop: 5
  },
  relatedNewsWrapper: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  relatedNewsHeadline: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 1)',
  },
  relatedNewsTag: {
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(45, 45, 240, 1)',
    textShadowColor:'rgba(90, 90, 240, 1)',
    textShadowOffset:{width: 0, height: 0},
    textShadowRadius:20,
  }
})