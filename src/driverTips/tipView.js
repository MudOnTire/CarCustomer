import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions,  ScrollView, Image } from 'react-native'
import { connect } from 'react-redux'

const screenWidth = Dimensions.get('window').width;

class TipView extends Component {
  constructor(props) {
    super(props)

    this.tip = this.props.navigation.state.params.tip;
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}> {this.tip.title} </Text>
        <Image source={this.tip.image} style={styles.image} resizeMode='contain' />
        <Text style={styles.content}> {this.tip.content} </Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TipView)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: '#000',
    fontSize: 14,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    margin: 10
  },
  content: {
    color: '#000',
    fontSize: 12,
    margin: 10
  },
  image: {
    width: '100%',
    height: 200
  }
})

