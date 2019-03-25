import React from "react";
import { View, Dimensions, RefreshControl, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import Masonry from 'src/components/masonry';
import Carousel from 'react-native-snap-carousel'
import I18n from 'i18n'

import { connect } from 'react-redux';
import { 
	getTechnicianData, 
	clearTechnicianState 
} from 'src/redux/actions'

import TechnicianItem from "./technicianItem";
import { technicianBanner } from "src/data";
import SearchTextInput from "src/components/searchTextInput";

const screenWidth = Dimensions.get( "window" ).width;
const columnWidth = ( screenWidth - 20 ) / 2 - 10;

class TechnicianConsultation extends React.Component {

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

    this.props.navigation.setParams({
      onChangeText: this.onChangeText, 
      onSearch: this.onSearch
    });
	}

	onChangeText = (text) => {
	}

	onSearch = () => {
	}

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;

    return {
      headerRight: 
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <SearchTextInput 
            style={{width: screenWidth - 100}} 
            onChangeText={params.onChangeText}
            onSearch={params.onSearch}
          />
          <TouchableOpacity style={{width: 50}} onPress={params.onSearch}>
            <Text style={{color: '#000', fontSize: 13, textAlign: 'right', margin: 10}}>{I18n.t('search')}</Text>
          </TouchableOpacity>
        </View>,
    }
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

	initMasonry = async (technicianData) => {
		let data = [];

		technicianData.forEach((item) => {

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
			this.initMasonry(nextProps.technicianData);

			this.props.clearTechnicianState();
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

		this.props.getTechnicianData(params);
		
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
    this.props.navigation.navigate('TechnicianView', {item: item})
	}

	updateData = (item) => {
		this.load();

		this.setState({
			dataChanged: !this.state.dataChanged
		})
	}

	renderBanner = ({item}) => {
		return (
			<View style={styles.bannerWrapper}>
				<Image source={item.image} style={styles.bannerImage} resizeMode='cover' />
			</View>
		)
	}

	render() {
		return (
			<ScrollView style={styles.container}>

				<Carousel data={technicianBanner}
					renderItem={this.renderBanner}
					sliderWidth={screenWidth}
					itemWidth={screenWidth}
					loop={true}
					autoplay={true}
				/>

				<Masonry onMomentumScrollEnd={this.onScrollEnd.bind( this )}
					style={styles.masonry}
					columns={2} ref="serviceList"
					containerStyle={{ padding: 5 }}
					
					renderItem = { item => 
						<TechnicianItem key={item.key} item={item} showDetail={() => this.showDetail(item)} />
					}

					refreshControl = { <RefreshControl
						onRefresh={this.load}
						refreshing={this.state.loading}
						colors={[ 'rgba(255, 255, 255, 1)' ]}
						progressBackgroundColor="rgba(0, 0, 0, 0.5)" />
					}
				>
				</Masonry>

			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		technicianData: state.technician.technicianData,
    error: state.technician.error,
    freshData: state.technician.freshData
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTechnicianData: (params) => dispatch(getTechnicianData(params)),
    clearTechnicianState: (params) => dispatch(clearTechnicianState(params))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TechnicianConsultation);

const styles = StyleSheet.create({
	container: {
		flex: 1, 
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
	bannerImage: {
		width: '100%',
		height: 200
	}
})

