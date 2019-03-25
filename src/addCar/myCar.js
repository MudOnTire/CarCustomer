import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList} from 'react-native'
import I18n from 'i18n'
import { NavigationEvents } from 'react-navigation';
import {connect} from 'react-redux'
import {
  getCar
} from 'src/redux/actions'
import _ from 'lodash';

class MyCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carList: []
    }

    this.props.navigation.setParams({
      addCar: this.addCar
    });

  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;

    return {
      headerRight: 
        <TouchableOpacity style={{width: 100}} onPress={params.addCar}>
          <Text style={{color: '#000', fontSize: 13, textAlign: 'right', margin: 10}}>{I18n.t('addACar')}</Text>
        </TouchableOpacity>,
    }
  }

  componentDidMount() {
    if(this.props.signedIn === false) {
      this.props.navigation.navigate('UserNamePwd')
    }
  }

  componentWillReceiveProps(nextProps) {
    if(_.get(nextProps.carList, 'length', -1) >= 0) {
      this.setState({carList: nextProps.carList})
    } else if(nextProps.signedIn === true) {
      const params = {userName: this.props.userName}
      this.props.getCar(params);
    }
  }

  addCar = () => {
    this.props.navigation.navigate('SelectBrand');
  }

  selectCar = (item) => {
    if(this.props.navigation.state.params.visitAccessories) {
      this.props.navigation.navigate('InquiryList', {car: item})
    }
  }

  renderCarItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.carItemWrapper} onPress={() => this.selectCar(item)}>
        <View style={styles.carInfo}>
          <Text style={styles.modelName}>{item.model}</Text>
          <Text style={styles.price}>{item.price + '万'}</Text>
          <Text style={styles.plateNumber}>{item.plate_num}</Text>
        </View>

        <Image source={{uri: item.brand_logo}} resizeMode='cover' style={styles.logo} />
      </TouchableOpacity>
    ) 
  }

  onFocusPage = () => {
    if(this.props.signedIn === true) {
      const params = {userName: this.props.userName}
      this.props.getCar(params);
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <NavigationEvents
          onWillFocus={this.onFocusPage}
        />

        <FlatList style={styles.carList}
          data={this.state.carList}
          renderItem={this.renderCarItem}
          extraData={this.state}
          keyExtractor={(item, index) => item + index}
        />

      </View>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    userName: state.user.userName,
    carList: state.user.carList,
    signedIn: state.user.signedIn
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCar: (params) => dispatch(getCar(params)),
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MyCar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButton: {
    width: '50%',
    height: 40,
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: 'rgba(170, 150, 130, 1)',
    backgroundColor: 'rgba(250, 230, 200, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  addText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 20
  },
  carList: {
    height: '90%',
    width: '95%',
    margin: '5%'
  },
  carItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10
  },
  logo: {
    width: 100,
    height: 100
  },
  modelName: {
    color: 'rgba(110, 0, 220, 1)',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5
  },
  price: {
    color: 'rgba(250, 50, 50, 1)',
    fontSize: 12,
    margin: 5
  },
  plateNumber: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    margin: 5
  }
})