import React from 'react'
import {View, StyleSheet} from 'react-native'
import {SearchBar, Icon} from 'react-native-elements'
import I18n from 'i18n'

export default class SearchTextInput extends React.Component {
  render() {
    return (
      <View style={{...styles.searchTextWrapper, ...this.props.style}}>
        <SearchBar
          lightTheme={true}
          round={true}
          searchIcon = {<Icon type="font-awesome" name="search" size={30} />}
          clearIcon={<Icon type="font-awesome" name="x"/>}
          placeholderTextColor = '#888'
          containerStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100%',
            borderTopWidth: 0,
            borderBottomWidth: 0
          }}
          inputStyle={{
            color: '#000',
            backgroundColor: '#fff',
            fontSize: 14,
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.5)'
          }}
          placeholder = {I18n.t('searchPlaceholder')}
          onChangeText={this.props.onChangeText}
          onSubmitEditing={this.props.onSearch}
          editable={this.props.editable}
          defaultValue={this.props.value}
          autoFocus={this.props.autoFocus}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchTextWrapper: {

  }
})
