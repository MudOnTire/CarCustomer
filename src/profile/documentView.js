import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default class DocumentView extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.document}> {this.props.navigation.state.params.data} </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  document: {
    color: '#000',
    fontSize: 14,
    margin: 10
  }
})

