import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import QueryString from 'query-string';
import Alipay from '@0x5e/react-native-alipay';
import { connect } from 'react-redux'
import _ from 'lodash'
import {promotionData} from 'data'

import I18n from 'i18n'

class PromotionView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      promotion: _.get(this.props.navigation.state.params, 'item', promotionData)
    }
  }

  makeid = (length) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  buy = async () => {
    try {
      const year = new Date().getFullYear();
      var month = new Date().getMonth();
      var date = new Date().getDate();
      var hour = new Date().getHours();
      var min = new Date().getMinutes();
      var  sec = new Date().getSeconds();

      month = month < 10 ? '0' + month : month;
      date = date < 10 ? '0' + date : date;
      hour = hour < 10 ? '0' + hour : hour;
      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;
      const timestamp = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;

      const out_trade_no = this.makeid(20) + year + month + date + hour + min + sec;

      let params = {
        app_id: '2019030663456262',
        method: 'alipay.open.auth.sdk.code.get', 
        apiname: 'com.alipay.account.auth',
        app_name: "mc",
        product_id: 'APP_FAST_LOGIN',
        scope: 'kuaijie',
        target_id: out_trade_no,
        auth_type: 'AUTHACCOUNT',
        pid: '2088431644064785',
        biz_type: 'openservice',
        /*
        charset: 'utf8',
        notify_url: 'http://47.75.138.128/api/notify',
        timestamp: timestamp,
        version: '1.0',
        biz_content: {
          subject: this.state.promotion.title,
          out_trade_no: out_trade_no,
          total_amount: this.state.promotion.price,
          product_code: "QUICK_MSECURITY_PAY",
          timeout_express: "90m",
          seller_id: '2088431644064785'
        }
        */
      };
      
      let privateKey = '-----BEGIN RSA PRIVATE KEY-----\n' + 'MIIEpAIBAAKCAQEAz6sv1BJYPiHRDa0hTfLGkaj0F8mV5q38pMB/MAjSkWUYyxG8dvPiyO+n5dGaxt9L4KYtBhawK6MEtD44fJ8ybOvgCyC1Edp7L3xrHx92AMh9/BPCtY4b81ijznYZGefqsj61NQyjIjvkmXu2ZaPcKA6LnT7y/wHs/w71LyTAhhTQcCNVGQEocpiwaDLA8rwEKHhWfgfgqK+G2p0Jr487iLapXmaoqPax6CLWeZoHAN2xnYSX8eokA4yNfVVfCsHgLe/Lf83k9rvonLFv7SYXFYmVumekknG839+jYa+OehCkzIZKD3iUkNoRXBPDKFqRJP+44t5vGkVMKDqyQ6XvmQIDAQABAoIBAQDBozjcwSJBBR0+aGH2odqf9W9tQs2gpDlAkjHGY2OcqSzeJTKbpDuh6z2eILz2lT3WQn0XAU7R0ZbQTngzU+ocADEPjzbnZ9aXZ6cnBRnuDwTSaMaUrebIGK3dFOfA7Sw9ehVTWu4+PKSirOVdjtX5D98FB65jM7N9/L+IbveJzO3XWNyrk5N3vK87hq0qEmjiPqX+mgZkUi2lFbJlQDQoTKjxvzxKZZgw+zGvlkpAhM2z2WA2cajmWK4UdmYm7QdgPAlyQ6JBRh8ke3tMZudo8XNsox90M8ZHq+iVDhxH5fH9R9gyTyuLJbMs1LqUYfgEJydPt5R+kvlwGa2f6LS1AoGBAPWptAWi9IKrO+sgEBNLnWqLJUDYgXbW/XYX4/frEw10Zjb7GRrxIVkykuJacuq90X2zQrYeKBGoXphLA5EI8Ogoqw0euILeEAgYFqQkZtRyHFPIzSKhZZ12zzA/EO66ExSUaxGdQnyajryfgRiSTYAjHGCZWkB9hjurvg5sDVBDAoGBANhoNSN7DwbhNqlJ1jA5VYIwliYmr/7oi6ND9q7Ddu7w91uGibCdsFhADGeVBoCHIpSs4FgKL2e2OddDjVO1mcua7nJeVLOJFoQ2you9V9mNUzDNESI/7O6LmGf4mDEwB9geOdZuEQ2RODSuu2nPzB+MNjOqWMbKMYKUbYjnJkDzAoGBAO4WVt7Pm+G4Sw4JuQq6UgocaTJ7op2mp2d4p/xy27hCg33txdsSr5tfJHQz7QQMi6gjwBf5CiRy5Zr7uK0r2S9nmr/QckqDJU5y6h6TGQX0wfeBuS5C9dSyfQLpXGPB+xQK8+nSW8mfkY7Fl7xUrr/tR2dnuMyf2yShwkT/+7c5AoGAfiHOxw1Uptfhei41Dwp70lPrT/VAozx7Fv/n6di3m3ELW2dBHZXrUKSUFlN/5K3e8/UHFYlqM/K8J8GRv/aa21dEH5jnmXUPkKQ2zdfgOkbq9AiyMdo8iJUIkaENY63xBIApidfBTL0Vm280gOnCuaiJdveUotj6nndQmHjRjQ0CgYBBrFOAfCHLBqNJUDskHIlrMcKbiVDGWs92a7ZCxooI/dGirAz1VZ3eMsPBC46ssPXKFFP+vSaPl1YUPRta9Z2NIMIaPoow+qXvYytjFfOJYKeNuEfz7VEULqINNaupbLNZ2/68W2PPJLBHrWrYiPoHw/YrfTlsC5Me9rR8k9Ii0g==' + '\n-----END RSA PRIVATE KEY-----';
      let signedQuery = await Alipay.sign(params, privateKey);

      let response = await Alipay.authWithInfo(signedQuery);

      let { resultStatus, result, memo } = response;
      if(resultStatus === 10000) {
        let { success, result_code, auth_code, user_id } = QueryString.parse(result);
      } else {
        Alert.alert(memo);
      }

    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {promotion} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{I18n.t('title')}</Text>
        <Text style={styles.title}>{promotion.title}</Text>

        <Text style={styles.label}>{I18n.t('company')}</Text>
        <Text style={styles.company}>{promotion.company}</Text>

        <Text style={styles.label}>{I18n.t('description')}</Text>
        <Text style={styles.description}>{promotion.description}</Text>

        <Text style={styles.label}>
          {I18n.t('price') + ' : '}
          <Text style={styles.price}>{promotion.price + '元'}</Text>
        </Text>
        

        <TouchableOpacity style={styles.buyButton} onPress={this.buy}>
          <Text style={styles.buyText}>Buy</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  userName: state.user.userName
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PromotionView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  label: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    margin: 5,
  },
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  company: {
    color: 'rgba(110, 0, 220, 1)',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  description: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    marginLeft: 15,
  },
  price: {
    color: 'rgba(255, 50, 50, 1)',
    fontSize: 12,
    marginLeft: 15,
  },
  buyButton: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'rgba(250, 200, 150, 1)',
    borderColor: 'rgba(200, 150, 100, 1)',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    margin: 10
  },
  buyText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 13,
  }
})
