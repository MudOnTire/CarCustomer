import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { 
  lawItemList, 
  termsOfService, 
  legalNotices, 
  intellectualPropertyStatement,
  privacyPolicy,
  priceDescription,
  noticeOfInfringementComplaint,
  informationReleaseClaimRules,
  businessInformationReleaseManagementSpecifications,
  merchantSettlementAgreement,
  merchantServiceAgreement,
  groupPurchaseUserServiceTerm,
  platformUserServiceAgreement,
  reviewRules,
  networkDisputeMediationProcessingSpecification
} from 'src/data';

class AgreementStatement extends Component {

  showDocument = (item) => {
    switch(item.id) {
      case 1:
        this.props.navigation.navigate('DocumentView', {data: legalNotices});
        break;
      case 2:
        this.props.navigation.navigate('DocumentView', {data: termsOfService});
        break;
      case 3:
        this.props.navigation.navigate('DocumentView', {data: intellectualPropertyStatement});
        break;
      case 4:
        this.props.navigation.navigate('DocumentView', {data: privacyPolicy});
        break;
      case 5:
        this.props.navigation.navigate('DocumentView', {data: priceDescription});
        break;
      case 6:
        this.props.navigation.navigate('DocumentView', {data: noticeOfInfringementComplaint});
        break;
      case 7:
        this.props.navigation.navigate('DocumentView', {data: informationReleaseClaimRules});
        break;
      case 8:
        this.props.navigation.navigate('DocumentView', {data: businessInformationReleaseManagementSpecifications});
        break;
      case 9:
        this.props.navigation.navigate('DocumentView', {data: merchantSettlementAgreement});
        break;
      case 10:
        this.props.navigation.navigate('DocumentView', {data: merchantServiceAgreement});
        break;
      case 11:
        this.props.navigation.navigate('DocumentView', {data: groupPurchaseUserServiceTerm});
        break;
      case 12:
        this.props.navigation.navigate('DocumentView', {data: platformUserServiceAgreement});
        break;
      case 13:
        this.props.navigation.navigate('DocumentView', {data: reviewRules});
        break;
      case 14:
        this.props.navigation.navigate('DocumentView', {data: networkDisputeMediationProcessingSpecification});
        break;
    }
  }
  renderLawItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.lawItemWrapper} onPress={() => this.showDocument(item)}>
        <Text style={styles.title}>{item.text}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.lawList}
          data={lawItemList}
          renderItem={this.renderLawItem}
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

export default connect(mapStateToProps, mapDispatchToProps)(AgreementStatement)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lawItemWrapper: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    color: '#000',
    fontSize: 14,
    marginTop: 12,
    marginBottom: 12
  }
})
