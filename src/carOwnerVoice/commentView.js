import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'

export class CommentView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> prop </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentView)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

