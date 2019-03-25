import React from 'react'
import {ScrollView, View, StyleSheet, Image, Text, TouchableOpacity, FlatList, Dimensions, TextInput} from 'react-native'
import {SearchBar, Icon} from 'react-native-elements'
import Accordion from 'react-native-collapsible/Accordion';
import SearchTextInput from 'src/components/searchTextInput'

const inquiryStatic = require('assets/images/inquiry/inquiryStatic.png')
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default class InquiryView extends React.Component {

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: <SearchTextInput style={{width: screenWidth - 40}} />
    }
  }

  constructor(props) {
    super(props);

    this.categoryList = this.props.navigation.state.params.categoryList;

    this.state = {
      activeSections: [],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({onChangeText: this.onChangeText})
  }

  onChangeText = (text) => {
  }

  _renderHeader = item => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.name}</Text>
      </View>
    );
  };

  _renderContent = item => {
    return (
      <View style={styles.content}>
        <FlatList style={styles.subCategoryList}
          data={item.subCategories}
          renderItem={this.renderSubCategory}
        />
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={styles.container}>
        
        <ScrollView contentContainerStyle={styles.inquiryWrapper}>
          <Accordion
            sections={this.categoryList}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            style={styles.inquiryList}
          />
        </ScrollView>

        <View style={styles.inquiryDetails}>
          <Image source={inquiryStatic} style={styles.inquiryImage} />
          <Text style={styles.inquiryValue}>4.5元</Text>
        </View>
      </View>
    )
  }

  renderSubCategory = ({item}) => {
    return (
      <TouchableOpacity style={styles.subCategoryWrapper} key={item.key}>
        <Text style={styles.subCategory}>
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 2
  },
  inquiryWrapper: {
    width: screenWidth / 3,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  inquiryList: {
    flex: 1,
    width: '100%'
  },
  inquiryDetails: {
    width: screenWidth * 2 / 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100%'
  },
  categoryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
    marginTop: 15,
    marginBottom: 15
  },
  mainCategoryWrapper: {
    backgroundColor: 'rgba(112, 0, 220, 0.8)',
    width: '25%',
    height: 100,
    flex: 0.5,
    margin: 3,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  mainCategory: {
    fontSize: 20,
    margin: 3,
    textAlign: 'center',
    color: '#000',
  },
  subCategoryList: {
  },
  subCategoryWrapper: {
    margin: 3,
    paddingLeft: 15,
  },
  subCategory: {
    fontSize: 15,
    margin: 3,
    textAlign: 'left',
    color: '#000'
  },
  headerText: {
    fontSize: 18,
    color: '#000',
    margin: 5,
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  inquiryImage: {
    margin: 10,
    height: screenHeight * 0.7,
    width: screenWidth * 2 / 3 - 20,
    resizeMode: 'cover'
  },
  inquiryValue: {
    fontSize: 15,
    color: '#000',
    marginLeft: 10,
    marginTop: 20
  }
})
