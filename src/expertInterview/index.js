import React from "react";
import { Alert, Text, View, Dimensions, RefreshControl, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Masonry from 'src/components/masonry';
import Spinner from 'react-native-loading-spinner-overlay';
import {Icon} from 'react-native-elements'
import I18n from 'i18n'

import { connect } from 'react-redux';
import {
  getExpertData,
  clearExpertState
} from 'src/redux/actions'

import ExpertItem from './expertItem'

const { width } = Dimensions.get( "window" );
const columnWidth = ( width - 20 ) / 2 - 10;

class ExpertInterview extends React.Component {

	static navigationOptions = {
		title: '',
	}

	constructor( props ) {
		super( props );

		this.state = {
			withHeight: false,
			dataChanged: false,
			loading: false,
			showSearchBar: false,
			searchText: ''
		};
	}
	
	componentDidMount() {
		if(this.props.freshData === false) {
			this.load();
		} else {
			this.initMasonry(this.props.serviceData);
		}
	}
	
	componentWillUnmount() {
	}

	initMasonry = async (expertData) => {
		let data = [];

		expertData.forEach((item) => {

			const serviceInfo = {
				...item,
				key: 'expert' + item.id,
        height: columnWidth,
        type: 'expert'
			}

			data.push(serviceInfo);

		})
		
		await this.refs.serviceList.clear();

		await this.refs.serviceList.addItems( data );

		this.stopLoading();
	}

	componentWillReceiveProps(nextProps) {
    if(nextProps.freshData === true) {
			this.initMasonry(nextProps.expertData);

			this.props.clearExpertState();
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
	}

	load = () => {
    this.setState( { loading: true } );
    
		var params;
		params = {};

    setTimeout(() => {
      if(this.state.loading === true) {
				this.stopLoading();
      }
    }, 5000);

		this.props.getExpertData(params);
		
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
    this.props.navigation.navigate('ExpertView', {item: item})
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
      
				<Masonry onMomentumScrollEnd={this.onScrollEnd.bind( this )}
					style={styles.masonry}
					columns={2} ref="serviceList"
					containerStyle={{ padding: 5 }}
					
					renderItem = { item => 
						<ExpertItem key={item.key} item={item} showDetail={() => this.showDetail(item)} />
					}

					refreshControl = { <RefreshControl
						onRefresh={this.load}
						refreshing={this.state.loading}
						colors={[ 'rgba(255, 255, 255, 1)' ]}
						progressBackgroundColor="rgba(0, 0, 0, 0.5)" />
					}
				>
				</Masonry>

			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
    expertData: state.expert.expertData,
    error: state.expert.error,
    freshData: state.expert.freshData
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getExpertData: (params) => dispatch(getExpertData(params)),
    clearExpertState: (params) => dispatch(clearExpertState(params))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ExpertInterview);

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	searchBar: {	
		position: 'absolute',
		zIndex: 0,
		top: 0,
		right: 0,
		left: 0
	},
	showSearchBar: {
		position: 'relative',
		zIndex: 100,
		elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.5,
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
})

