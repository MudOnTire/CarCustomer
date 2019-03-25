import React from 'react'
import {TextInput, Image, View, FlatList, Dimensions, StyleSheet, TouchableOpacity, Text, ScrollView, Button, Alert} from 'react-native'
import I18n from 'i18n'
import { Rating, Icon } from 'react-native-elements'

import { connect } from 'react-redux';
import {
	saveServiceData,
	gotServiceData
} from 'src/redux/actions'
import { NavigationEvents } from 'react-navigation';
import _ from 'lodash'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class EditComment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			comment: '',
			photoList: [{data: 'add'}],
			companyName: _.get(this.props.navigation.state.params, 'company', ''),
			location: '',
			rating: 5,
			photoUriList: []
		}

    this.props.navigation.setParams({
      publish: this.publish
    });

	}

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;

    return {
      headerRight: 
				<TouchableOpacity style={{width: 75, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(250, 150, 100, 0)', borderRadius: 5, margin: 5, height: 30}} 
					onPress={params.publish}
				>
          <Text style={{color: '#000', fontSize: 13, textAlign: 'right', margin: 10}}>{I18n.t('publish')}</Text>
        </TouchableOpacity>,
    }
  }

	changeComment = (text) => {
		this.setState({comment: text})
	}

	changeCompany = (text) => {
		this.setState({companyName: text})
	}

	changeLocation = (text) => {
		this.setState({location: text})
	}

	takePhoto = (data) => {
		this.props.navigation.pop();
		const newPhoto = {data: data, uri: data.uri};
		const newList = this.state.photoList;
		newList.splice(0, 0, newPhoto);
		this.setState({photoList: newList})
	}

	addPhoto = () => {
		this.props.navigation.navigate('SelectPhoto', {takePhoto: this.takePhoto})
	}

	showPhoto = (item) => {

	}

	companySelected = (item) => {
		this.props.navigation.pop();
		this.setState({companyName: item.company})
	}

	selectCompany = () => {
		this.props.navigation.navigate('ServiceSelect', {companySelected: this.companySelected})
	}

	removePhoto = (photo) => {
		Alert.alert(
			'车主点评',
			I18n.t('removePhoto'),
			[
				{
					text: I18n.t('no'),
					style: 'cancel',
				},
				{text: I18n.t('yes'), onPress: () => {
					var newPhotoList = this.state.photoList.filter((item) => item.uri != photo.uri);
					this.setState({photoList: newPhotoList})
				}},
			],
			{cancelable: false},
		);
	}

	renderPhoto = ({item}) => {
		if(item.data === 'add') {
			return (
				<TouchableOpacity style={styles.addButton} onPress={this.addPhoto}>
					<Text style={styles.addText}>+</Text>
				</TouchableOpacity>
			)
		}

		return (
			<TouchableOpacity style={styles.photoWrapper} onPress={() => this.showPhoto(item)} onLongPress={() => this.removePhoto(item)}>
				<Image source={item.data} style={styles.photo} resizeMode="cover" />
			</TouchableOpacity>
		)
	}

	publish = () => {
		var params = new FormData();
		
		params.append('userName', this.props.userName);
		params.append('serviceName', this.state.companyName)
		params.append('comment', this.state.comment)
		params.append('rating', this.state.rating)
		params.append('location', this.state.location)

		var id = 1;
		this.state.photoList.map((item) => {
			if(item.data != 'add') {
				params.append('photos', {  
					uri: item.uri,
					name: id + '.jpg',
					type: 'image/jpg'
				});		
				id ++;		
			}
		})

		this.props.saveServiceData(params);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.service.company != '' && nextProps.service.company == this.state.companyName) {
			this.setState({
				companyName: '',
				comment: '',
				rating: 5,
				location: '',
				photoList: [{data: 'add'}]
			});

			this.props.gotServiceData();
			this.props.navigation.navigate('home')
		}
	}

	ratingCompleted = (rating) => {
		this.setState({rating: rating})
	}

	onFocusPage = () => {
		if(this.props.signedIn === false) {
			this.props.navigation.navigate('UserNamePwd')
		}

		this.setState({
			companyName: _.get(this.props.navigation.state.params, 'company', ''),
		})
	}

	render() {
		return (
			<View style={styles.container}>

				<NavigationEvents
          onWillFocus={this.onFocusPage}
        />

				<ScrollView style={styles.scrollView}>
					<View style={styles.editWrapper}>
						<TextInput style={styles.commentInput}
							value={this.state.comment}
							multiline = {true}
							onChangeText={this.changeComment}
							placeholder="在这里输入你的评论..."
						/>

						<View style={styles.listWrapper}>
							<FlatList data={this.state.photoList}
								renderItem={this.renderPhoto}
								horizontal={true}
								extraData={this.state}
								keyExtractor={(item, index) => item + index}
							/>
						</View>

						<View style={styles.infoInput}>
							<TouchableOpacity style={styles.companySelect} onPress={this.selectCompany}>
								<TextInput style={styles.companyName}
									value={this.state.companyName}
									onChangeText={this.changeCompany}
									placeholder= '在此输入您的公司名称...'
									editable={false}
								/>
							</TouchableOpacity>
{/*
							<TextInput style={styles.location}
								value={this.state.location}
								onChangeText={this.changeLocation}
								placeholder='在这里输入公司的位置'
							/>
*/}							
							<Rating
								type="star"
								fractions={0}
								startingValue={this.state.rating}
								style={styles.rating}
								imageSize={18}
								onFinishRating={this.ratingCompleted}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		userName: state.user.userName,
		signedIn: state.user.signedIn,
		service: state.service.service
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
		saveServiceData: (params) => dispatch(saveServiceData(params)),
		gotServiceData: () => dispatch(gotServiceData())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(EditComment);

const styles = StyleSheet.create({
	container: {
		width: screenWidth,
		height: screenHeight - 300,
		flex: 1
	},
	editWrapper: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	scrollView: {
		width: screenWidth,
		height: screenHeight - 300,
		flex:1,
		marginTop: 25
	},
	infoInput: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '95%'
	},
	addButton: {
		height: 70,
		width: 70,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
		borderRadius: 3,
		borderWidth: 1,
		borderStyle: 'dashed',
		borderColor: 'rgba(0, 0, 0, 1)',
		backgroundColor: 'rgba(0, 0, 0, 0)'
	},
	addText: {
		fontSize: 50,
		fontWeight: '100',
		color: '#000'
	},
	commentInput: {
		textAlignVertical: "top",
		borderWidth: 0,
		borderColor: 'rgba(0, 0, 0, 1)',
		borderRadius: 5,
		width: '95%',
		margin: '2.5%',
		height: 100
	},
	companyName: {
		width: '100%',
		paddingVertical: 3,
		color: '#000'
	},
	companySelect: {
		borderWidth: 0.3,
		borderColor: 'rgba(0, 0, 0, 1)',
		borderRadius: 5,
		margin: '2.5%',
		width: '95%',
		paddingVertical: 0,
		height:35
	},
	location: {
		borderWidth: 0.3,
		borderColor: 'rgba(0, 0, 0, 1)',
		borderRadius: 5,
		margin: '2.5%',
		width: '95%',		
		paddingVertical: 3,
		color: '#000'
	},
	photo: {
		height: 70,
		width: 70,
		borderRadius: 3
	},
	photoWrapper: {
		height: 80,
		width: 80,
		margin: 10,
		borderRadius: 3
	},
	listWrapper: {
		margin: '2.5%',
		height: 100,
		width: '95%'
	},
	rating: {
		margin: '2.5%',
		height: 30
	},
	submitButton: {
		width: '40%'
	}
})