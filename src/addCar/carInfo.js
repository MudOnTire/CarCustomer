import React from 'react'
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import DatePicker from 'react-native-datepicker'

import {connect} from 'react-redux'
import {
  addCar  
} from 'src/redux/actions'

const screenWidth = Dimensions.get('window').width

class CarInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      didRun: '',
      licenseNumber: '',
      engineNumber: '',
      brandName: this.props.navigation.state.params.brandName,
      seriesName: this.props.navigation.state.params.seriesName,
    }

    this.model = this.props.navigation.state.params.model;
  }

  changeDidRun = (text) => {
    this.setState({didRun: text})
  }

  changeLicenseNumber = (text) => {
    this.setState({licenseNumber: text})
  }

  changeEngineNumber = (text) => {
    this.setState({engineNumber: text})
  }

  submitData = () => {
    const params = {
      userName: this.props.userName,
      licenseNumber: this.state.licenseNumber,
      engineNumber: this.state.engineNumber,
      model: this.model.model,
      buyDate: this.state.date,
      didRun: this.state.didRun,
      brandName: this.state.brandName,
      seriesName: this.state.seriesName
    }

    this.props.addCar(params)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.carList.length > 0) {
      this.props.navigation.navigate('MyCar')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modelInfo}>
          <Text style={styles.modelName}>{this.model.model}</Text>
          <Text style={styles.modelPrice}>{this.model.price + '万'}</Text>
        </View>

        <View style={styles.carInfo}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>购买时间</Text>
            <DatePicker
              style={{width: 200}}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="1980-01-01"
              maxDate="2099-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>公里数</Text>
            <TextInput 
              style={styles.input} 
              value={this.state.didRun}
              onChangeText={this.changeDidRun}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>车牌号码</Text>
            <TextInput 
              style={styles.input} 
              value={this.state.licenseNumber}
              onChangeText={this.changeLicenseNumber}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>发动机号</Text>
            <TextInput 
              style={styles.input} 
              value={this.state.engineNumber}
              onChangeText={this.changeEngineNumber}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submit} onPress={this.submitData}>
          <Text style={styles.submitText}>保存</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    userName: state.user.userName,
    carList: state.user.carList
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (params) => dispatch(addCar(params)),
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CarInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  modelInfo: {
  },
  modelName: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5
  },
  modelPrice: {
    color: '#555',
    fontSize: 13,
    margin: 5
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5
  },
  label: {
    color: '#000'
  },
  input: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    width: screenWidth / 2,
    paddingVertical: 3
  },
  submitText: {
    color: '#fff',
  },
  submit: {
    width: '95%',
    margin: '2.5%',
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: 'rgba(110, 0, 220, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  }
})
