
import React from "react";
import { Image, FlatList, Text, View, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from "react-native";
import { Rating, Icon } from 'react-native-elements'
import ImageLoad from 'react-native-image-placeholder';
import {labelListData} from 'data'
import LinearGradient from 'react-native-linear-gradient';

const placeholderImage = require('assets/images/placeholder.jpg');

export default class ItemView extends React.Component {

		constructor(props) {
			super(props)

			const data = labelListData.filter((item) => {
				var selected = this.props.item.label.includes(item.id) > 0;

				return selected
			})

			this.state = {
				badgeList: data
			}
		}

		renderBadge = ({item}) => {
			return (
				<View style={styles.badgeWrapper}>
					<Icon type="font-awesome" name={item.icon} style={styles.optionIcon} color="rgba(240, 150, 100, 1)" size={12} reverse/>
				</View>
			)
		}

		renderPromotion = ({item}) => {
			return (
				<TouchableOpacity style={styles.promotionWrapper} onPress={() => this.showPromotion(item)}>
					<View style={styles.promHeader}>
						<Text style={styles.promTitle}>{item.title}</Text>
						<Text style={styles.promPrice}>{item.price + '元'}</Text>
					</View>

					<Text style={styles.promDescription}>{item.description}</Text>
				</TouchableOpacity>
			)
		}

		showPromotion = (item) => {
			this.props.showPromotion({...item, company: this.props.item.company})
		}

    render = () => {
        const item = this.props.item;

        return (
            <View style={styles.itemView} key={'service$' + item.id}>

							<TouchableOpacity activeOpacity={0.8} onPress = {this.props.showDetail}>
								<FlatList style={styles.badgeList}
									data={this.state.badgeList}
									renderItem={this.renderBadge}
									horizontal={true}
								/>

								<ImageLoad 
									source={{ uri: item.image }} 
									style={{ height: item.height }} 
									placeholderSource={placeholderImage}
									placeholderStyle={{width: '100%', height: '100%'}}
									isShowActivity={false}
								/>

								<View style={styles.itemInfo}>
									<View style={styles.commentInfo}>
										<Rating
											readonly
											type="star"
											fractions={5}
											startingValue={item.totalRating}
											style={styles.starRating}
											imageSize={10}
										/>

										<Text style={styles.commentCount}>
											{item.comments.length + ' 点评'}
										</Text>
									</View>

									<View>
										<Text style={styles.company}>{item.company}</Text>
									</View>

									<View>
										<Text style={styles.company}>{item.distance ? item.distance.toFixed(2) + 'km' : '计算...'}</Text>
									</View>

								</View>
							</TouchableOpacity>
							
							<FlatList style={styles.promotionList}
								data={item.promotion}
								renderItem={this.renderPromotion}
								keyExtractor={(item, index) => item.title + index}
							/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
	itemInfo: {
		margin: 5
	},
	starRating: {
		margin: 1
	},	
	itemView: {
		margin: 5,
		backgroundColor: "#fff",
		borderRadius: 10,
		overflow: "hidden",
		elevation: 5,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#000',
		shadowOpacity: 0.5,
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0)'
	},
	company: {
		fontSize: 12,
		margin: 1,
		color: 'rgba(0, 0, 0, 0.9)'
	},
	badgeWrapper: {
	},
	badgeList: {
		position: 'absolute',
		zIndex: 2,
		top: 0,
		right: 0,
	},
	gradient: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	salePromotion: {
		borderTopWidth: 0.5,
		borderColor: 'rgba(0, 0, 0, 1)',
		padding: 10
	},
	commentInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	commentCount: {
		color: '#000',
		fontSize: 12
	},
	promotionList: {
		marginLeft: 5,
		marginRight: 5
	},
	promotionWrapper: {
		marginTop: 3,
	},
	promHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	promTitle: {
		color: 'rgba(110, 0, 220, 1)',
		fontSize: 13
	},
	promPrice: {
		color: 'rgba(255, 50, 50, 1)',
		fontSize: 12
	},
	promDescription: {
		color: '#000',
		fontSize: 12,
		height: 30
	}
})