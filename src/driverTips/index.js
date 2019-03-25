import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { driverTips } from 'src/data';
import { Icon } from 'react-native-elements';

class DriverTips extends Component {

  showTips = (item) => {
    this.props.navigation.navigate('TipView', {tip: item})
  }

  renderDriverTips = ({item}) => {
    return (
      <TouchableOpacity style={styles.driverTipsWrapper} onPress={() => this.showTips(item)}>
        <Text style={styles.driverTipsTitle}>{item.title}</Text>
        <View style={styles.tipInfo}>
          <Icon type="font-awesome" name="eye" style={styles.optionIcon} color="rgba(0, 0, 0, 0.9)" size={12}/>
          <Text style={styles.label}>{item.read}</Text>
          <Icon type="font-awesome" name="thumbs-up" style={styles.optionIcon} color="rgba(0, 0, 0, 0.9)" size={12}/>
          <Text style={styles.label}>{item.like}</Text>
          <Icon type="font-awesome" name="thumbs-down" style={styles.optionIcon} color="rgba(0, 0, 0, 0.9)" size={12}/>
          <Text style={styles.label}>{item.dislike}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={driverTips}
          style={styles.driverTipsList}
          renderItem={this.renderDriverTips}
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

export default connect(mapStateToProps, mapDispatchToProps)(DriverTips)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  driverTipsList: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  driverTipsWrapper: {
    margin: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    padding: 3
  },
  driverTipsTitle: {
    color: '#000',
    fontSize: 13
  },
  tipInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
    marginBottom: 3
  },
  label: {
    margin: 3,
    marginLeft: 5,
    marginRight: 20,
    fontSize: 10
  }
})
