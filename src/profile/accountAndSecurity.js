import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { signOut } from 'src/redux/actions';

import I18n from 'i18n'

class AccountAndSecurity extends React.Component {

  constructor(props) {
    super(props);

  }

  onCellNumberChange = () => {

  }

  onChangePassword = () => {

  }

  onSignOut = () => {
    this.props.signOut();
    this.props.navigation.navigate('UserProfile')
  }

  render() {
    const len = this.props.userNumber.length;
    const number = len > 0 ? this.props.userNumber.substring(0, 3) + '****' + this.props.userNumber.substring(len - 5, len - 1) : '';
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemWrapper} onPress={this.onCellNumberChange}>
          <Text style={styles.itemText}>{I18n.t('cellPhone')}</Text>
          <Text style={styles.itemText}>{number}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemWrapper} onPress={this.onItem} onPress={this.onChangePassword}>
          <Text style={styles.itemText}>{I18n.t('password')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemWrapper} onPress={this.onSignOut}>
          <Text style={styles.itemText}>{I18n.t('signout')}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    userName: state.user.userName,
    signedIn: state.user.signedIn,
    userNumber: state.user.userNumber
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePasswordRequest: (params) => dispatch(changePasswordRequest(params)),
    signOut: () => dispatch(signOut())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AccountAndSecurity)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemWrapper: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: '95%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemText: {
    color: '#000',
    fontSize: 14,
    margin: 5,
    marginTop: 10,
    marginBottom: 10
  }
})
