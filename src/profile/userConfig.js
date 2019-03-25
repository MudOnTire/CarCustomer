import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'

import {configListData} from 'data'

class UserConfig extends Component {

  constructor(props) {
    super(props);
  }

  onConfigItem = (item) => {
    switch(item.id) {
      case 2:
        this.props.navigation.navigate('AccountAndSecurity')
        break;
      case 4:
        this.props.navigation.navigate('AboutUs')
        break;
    }
  }

  renderConfigItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.configItemWrapper} onPress={() => this.onConfigItem(item)}>
        <Text style={styles.configText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.configList} 
          data={configListData}
          renderItem={this.renderConfigItem}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConfig)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  configList: {
    width: '95%',
    margin: '2.5%'
  },
  configItemWrapper: {
    marginLeft: '2.5%',
    marginRight: '2.5%',
    width: '95%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  configText: {
    color: '#000',
    fontSize: 14,
    margin: 5,
    marginTop: 10,
    marginBottom: 10
  }
})
