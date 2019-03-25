import React from "react";
import { Alert, Text, View, Dimensions, RefreshControl, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Masonry from 'src/components/masonry';
import Spinner from 'react-native-loading-spinner-overlay';
import {Icon} from 'react-native-elements'
import I18n from 'i18n'

import { connect } from 'react-redux';
import {
	getServiceData,
	gotServiceData
} from 'src/redux/actions'
import {orderByList, labelListData} from 'data'

import ItemView from 'src/serviceView/itemView'

const { width } = Dimensions.get( "window" );
const columnWidth = ( width - 20 ) / 2 - 10;

class ServiceView extends React.Component {

	static navigationOptions = {
		title: '',
		header: null
	}

	constructor( props ) {
		super( props );

		const data = labelListData.map((item) => {
			return {...item, selected: false}
		})

		this.state = {
			withHeight: false,
			dataChanged: false,
			loading: false,
			showSearchBar: false,
			searchText: '',
			labelInfo: data,
			orderBy: orderByList,
			visible: true,
			typeFilter: this.props.typeFilter
		};
	}

	setVisible = (visible) => {
		this.setState({visible: visible})
	}
	
  toggleLabel = async (label) => {
    const newLabelState = this.state.labelInfo.map((item) => {
      if(item.id === label.id) {
        return {...item, selected: !item.selected};
      } else {
        return item;
      }
    })

		await this.setState({labelInfo : newLabelState})
		this.load();
	}
	
	componentDidMount() {
		if(this.props.freshData === false) {
			this.load();
		} else {
			this.initMasonry(this.props.serviceData);
		}
		this.props.onRef(this)
	}
	
	componentWillUnmount() {
		this.props.onRef(undefined)
	}

	initMasonry = async (serviceData) => {
		let data = [];

		serviceData.forEach((item) => {

			const serviceInfo = {
				...item,
				key: 'service' + item.id,
				height: columnWidth * item.height / item.width,
				type: 'service'
			}

			data.push(serviceInfo);

		})
		
		await this.refs.serviceList.clear();

		await this.refs.serviceList.addItems( data );

		this.stopLoading();
	}

	componentWillReceiveProps(nextProps) {
		
		if(nextProps.errorOccured === true) {
			if(this.state.loading === true) {
				
				this.stopLoading();
			}
		} else if(nextProps.freshData === true) {
			this.initMasonry(nextProps.serviceData);

			this.props.gotServiceData();			
		} else if(this.state.visible === true && nextProps.currentCategory != this.state.typeFilter && this.state.loading === false) {
			this.load();
		}
	}

	stopLoading = () => {
		if(this.state.loading === true) {
			this.setState({loading: false})
			this.props.setLoadingState(false)
		}
	}

	isLoading = () => {
		return this.state.loading;
	}

	setSearchText = async (text) => {
		await this.setState({searchText: text});
//		this.load();
	}

	load = () => {
		this.setState( { loading: true } );
		this.props.setLoadingState(true);
		data = [];

		var labelFilter = this.state.labelInfo.filter((item) => item.selected === true)
		labelFilter = labelFilter.map((item) => {
			return item.id
		})
		const orderBy = this.state.orderBy.filter((item) => {
			return item.selected;
		})
 
		var params;
		params = {
			'userName': '',//this.props.currentUser.name,
			'userType': 'client',//this.props.currentUser.type,
			'typeFilter': this.state.typeFilter,
			'label': labelFilter,
			'orderBy': orderBy[0].value,
		};

    setTimeout(() => {
      if(this.state.loading === true) {
				this.stopLoading();
      }
    }, 5000);

		this.props.getServiceData(params);
		
	}

	onScrollEnd( event ) {
		const scrollHeight = Math.floor( event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height );
		const height = Math.floor( event.nativeEvent.contentSize.height );
		if ( scrollHeight >= height ) {
		//	this.load();
		}
	}

	onScrollBegin(event) {
		return false;
	}

	showDetail = (item) => {
		this.props.showServiceDetail(item);
	}

	updateData = (item) => {
		this.load();

		this.setState({
			dataChanged: !this.state.dataChanged
		})
	}

	renderLabel = ({item}) => {
    return (
      <TouchableOpacity style={{...styles.labelWrapper, backgroundColor: item.selected ? "rgba(255, 230, 200, 1)" : 'rgba(255, 255, 255, 1)'}} onPress={() => this.toggleLabel(item)}>
        <Icon type="font-awesome" name={item.icon} style={styles.optionIcon} color="rgba(240, 150, 100, 1)" size={15}/>
        <Text style={styles.labelText}>{item.label}</Text>
      </TouchableOpacity>
    )
	}

	selectOrderBy = async (orderBy) => {
		const newOrderByState = this.state.orderBy.map((item) => {
      if(item.value === orderBy.value) {
        return {...item, selected: true};
      } else {
        return {...item, selected: false};
      }
		})
		
		switch(orderBy.value) {
			case 1:
			case 2:
				await this.setState({orderBy : newOrderByState, typeFilter: ''});
				break;
			case 3:
			case 4:
			case 5:
				await this.setState({typeFilter : orderBy.title, orderBy: 1});
				break;
		}

		await this.setState({orderBy : newOrderByState})
		this.load();
	}

	renderOrderBy = ({item}) => {
    return (
      <TouchableOpacity style={styles.orderByWrapper} onPress={() => this.selectOrderBy(item)}>
				<View style={{...styles.labelTextWrapper, borderColor: item.selected ? "rgba(150, 150, 250, 1)" : 'rgba(255, 255, 255, 0)'}}>
        	<Text style={styles.labelText}>{item.title}</Text>
				</View>
      </TouchableOpacity>
    )
	}

	showPromotion = (item) => {
		this.props.showPromotion(item)
	}

	render() {
		return (
			<View style={styles.container}>
{/*
				<FlatList data={this.state.labelInfo}
          renderItem={this.renderLabel}
          style={styles.labelList} 
          horizontal={true}
        />

				<Spinner
					visible={this.state.loading}
					textStyle={{color: '#FFF'}}
				/>
*/}
				{!this.props.isCategoryView && 
					<FlatList data={this.state.orderBy}
						renderItem={this.renderOrderBy}
						style={styles.orderByList}
						horizontal={true}
						keyExtractor={(item, index) => item.title + index}
					/>
				}

				<Masonry onMomentumScrollEnd={this.onScrollEnd.bind( this )}
					style={styles.masonry}
					columns={2} ref="serviceList"
					containerStyle={{ padding: 5 }}
					
					renderItem = { item => 
						<ItemView key={item.key} item={item} showDetail={() => this.showDetail(item)} showPromotion={this.showPromotion} />
					}

					refreshControl = { <RefreshControl
						onRefresh={this.load}
						refreshing={this.state.loading}
						colors={[ 'rgba(255, 255, 255, 1)' ]}
						progressBackgroundColor="rgba(0, 0, 0, 0.5)" />
					}
				>
				</Masonry>

				{/*this.state.loading && <View style={styles.loadingView}>
					<Text style={styles.loadingText}>Loading...</Text>
				</View>*/}
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		serviceData: state.service.serviceData,
		errorOccured: state.service.errorOccured,
		currentCategory: state.service.currentCategory,
		freshData: state.service.freshData,
		city: state.service.city,
		userLocation: state.user.location
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
		getServiceData: (params) => dispatch(getServiceData(params)),
		gotServiceData: () => dispatch(gotServiceData())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ServiceView);

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	masonryContainer: {
		position: 'absolute',
		zIndex: 1,
		top: 0,
		bottom: 0,
		right: 0,
		left: 0
	},
	searchBar: {	
		position: 'absolute',
		zIndex: 0,
		top: 0,
		right: 0,
		left: 0
	},
	draggable: {
		position: 'absolute',
		zIndex: 100,
	},
	showSearchBar: {
		position: 'relative',
		zIndex: 100,
		elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.5,
	},
	headerWrapper: {
		position: 'absolute',
		zIndex: 2,
		top: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	masonry: {
		flex: 0.9, 
		height: '90%',
		width: '100%'
	},
	loadingView: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "rgba(0,0,0,0.3)"
	},
	loadingText: {
		backgroundColor: "#fff",
		paddingVertical: 10,
		marginBottom: 10,
		paddingHorizontal: 30,
		borderRadius: 10
	},
  labelList: {
		margin: 10,
		height: 30
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(240, 150, 100, 1)',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
		paddingBottom: 7,
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 1,
  },
  labelText: {
    color: '#000',
		fontSize: 13,
		marginBottom: -5,
	},
	labelTextWrapper: {
    borderBottomWidth: 5,
		borderColor: 'rgba(0, 0, 0, 0.2)',
		paddingLeft: 1,
		paddingRight: 1
	},
	orderByList: {
		flex: 0.1,
		height: 20,
		backgroundColor: 'rgba(0, 0, 0, 0)'
	},
	orderByWrapper: {
		height: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		marginLeft: 10,
		marginRight: 10
	}
})

