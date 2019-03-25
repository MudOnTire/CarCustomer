import React from "react";
import { Alert, Text, View, Dimensions, RefreshControl, StyleSheet, TouchableOpacity, SectionList } from "react-native";
import Masonry from 'src/components/masonry';
import Spinner from 'react-native-loading-spinner-overlay';
import I18n from 'i18n'

import { connect } from 'react-redux';
import {getServiceData} from 'src/redux/actions'

import ItemView from 'src/serviceView/itemView'

const { width } = Dimensions.get( "window" );
const columnWidth = ( width - 20 ) / 2 - 10;

class SearchComment extends React.Component {

	static navigationOptions = {
		title: I18n.t('searchComment')
	}

	constructor( props ) {
		super( props );

		this.state = {
			withHeight: false,
			dataChanged: false,
			loading: false,
			showSearchBar: false,
			searchText: '',
		};
	}
	
	componentDidMount() {
		if(this.props.currentCategory != '') {
			this.load();
		} else {
			this.initMasonry(this.props.serviceData);
		}
	}
	
	initMasonry = async (serviceData) => {
		let data = [];

		serviceData.forEach((item) => {
			const serviceInfo = {
				...item,
				key: 'service' + item.id,
				height: columnWidth * item.height / item.width
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
		} else if(nextProps.serviceData && nextProps.currentCategory === '') {

			let same = true;
			if(nextProps.serviceData.length != this.props.serviceData.length) {
				same = false;
			} else {
				for(var i = 0; i < this.props.serviceData.length; i ++) {
					if(nextProps.serviceData[i].id != this.props.serviceData[i].id) {
						same = false;
						break;
					}
				}
			}

			if(same === false) {
				this.initMasonry(nextProps.serviceData);
			} else {
				this.stopLoading();
			}
			
		}
	}

	stopLoading = () => {
		if(this.state.loading === true) {
			this.setState({loading: false})
		}
	}

	isLoading = () => {
		return this.state.loading;
	}

	setSearchText = async (text) => {
		await this.setState({searchText: text});
//		this.load();
	}

	load = (typeFilter = null) => {
		this.setState( { loading: true } );
		data = [];

		var params;
		params = {
			'userName': 'User',//this.props.currentUser.name,
			'userType': 'client',//this.props.currentUser.type,
			'typeFilter': "",
			'searchText': null
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
    this.props.navigation.navigate('DetailView', { item });
  }

	updateData = (item) => {
		this.load();

		this.setState({
			dataChanged: !this.state.dataChanged
		})
	}

	render() {
		
		return (
			<View style={styles.container}>
{/*
				<Spinner
					visible={this.state.loading}
					textStyle={{color: '#FFF'}}
				/>
*/}
				<Masonry onMomentumScrollEnd={this.onScrollEnd.bind( this )}
					style={styles.masonry}
					columns={2} ref="serviceList"
					containerStyle={{ padding: 5 }}
					
					renderItem = { item => 
						<ItemView key={item.key} item={item} showDetail={() => this.showDetail(item)} />
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
		currentCategory: state.service.currentCategory
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getServiceData: (params) => dispatch(getServiceData(params))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchComment);

const styles = StyleSheet.create({
	container: {
    flex: 1, 
    backgroundColor: 'rgba(240, 230, 240, 1)'
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
		flex: 1, 
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
	}
})

