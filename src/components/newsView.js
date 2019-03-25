import React from "react";
import { Image, Text, View, Dimensions, RefreshControl, Alert, StyleSheet, TouchableOpacity, SectionList } from "react-native";

import { Icon } from "react-native-elements"
import { connect } from 'react-redux';
import urls from '../data/url'

const { width } = Dimensions.get( "window" );

class NewsView extends React.Component {

	static navigationOptions = {
		title: 'NewsView',
		header: null
    }
    
    newsData = [{
        id: 1,
        title: 'One',
        content: 'This is the content of first news.',
        created: '2018-12-25T10:35:00'
    }, {
        id: 2,
        title: 'Two',
        content: 'This is the content of second news.',
        created: '2018-12-25T02:35:00'
    }, {
        id: 3,
        title: 'three',
        content: 'This is the content of third news.',
        created: '2018-12-24T19:10:00'
    }, {
        id: 4,
        title: 'Four',
        content: 'This is the content of fourth news.',
        created: '2018-12-24T13:50:00'
    }, {
        id: 5,
        title: 'Five',
        content: 'This is the content of fifth news.',
        created: '2018-12-24T03:54:00'
    }, {
        id: 6,
        title: 'Six',
        content: 'This is the content of sixth news.',
        created: '2018-12-23T21:12:00'
    }, {
        id: 7,
        title: 'Seven',
        content: 'This is the content of seventh news.',
        created: '2018-12-23T16:45:00'
    }, {
        id: 8,
        title: 'Eight',
        content: 'This is the content of eighth news.',
        created: '2018-12-21T15:30:00'
    }, {
        id: 9,
        title: 'Nine',
        content: 'This is the content of nineth news.',
        created: '2018-12-21T10:15:00'
    }, {
        id: 10,
        title: 'Ten',
        content: 'This is the content of tenth news.',
        created: '2018-12-21T06:00:00'
    }];

    displayNews = []
	
	constructor( props ) {
        super( props );
        
        this.state = {
            loading: false,
        };
    }
    
	componentDidMount() {
        this.load();
    }
    
    classifyNews = () => {
        this.displayNews = [];

        let date = new Date(), today = new Date();
        let tempList = [];
        this.newsData.forEach((news) => {
            let created = new Date(news.created);

            if(date.getFullYear() != created.getFullYear() || date.getMonth() != created.getMonth() || date.getDate() != created.getDate()) {
                let title = date.getFullYear() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getDate(); 
                if(date.getFullYear() == today.getFullYear() && date.getMonth() == today.getMonth() && date.getDate() == today.getDate()) {
                    title = 'Today';
                }
                this.displayNews.push({
                    title: title,
                    data: tempList
                });
                tempList = [];
                date = new Date(news.created);
            }
            tempList.push({
                ...news,
                created: created.getFullYear() + '-' + parseInt(created.getMonth() + 1) + '-' + created.getDate() + ' ' + created.getHours() + ':' + created.getMinutes() + ':' + created.getSeconds()
            });
        })

        let title = date.getFullYear() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getDate(); 
        if(date.getFullYear() == today.getFullYear() && date.getMonth() == today.getMonth() && date.getDate() == today.getDate()) {
            title = 'Today';
        }
        this.displayNews.push({
            title: date.getFullYear() + ':' + parseInt(date.getMonth() + 1) + ':' + date.getDate(),
            data: tempList
        });

//        console.error(this.displayNews);
    }

	load = () => {

        const date = new Date();

        this.setState( { loading: true } );
        
		this.newsData = [];

		var params;
		params = {
            'dateRange': 5
        };
        		
		var formBody = [];
		for (var property in params) {
			var encodedKey = encodeURIComponent(property);
			var encodedValue = encodeURIComponent(params[property]);
			formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");
	
		fetch(
			urls.getNews,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				},
				body: formBody
			})
			.then((response) => {
				const news = JSON.parse(response._bodyText);
				news.forEach((item) => {
					const news = {
						...item,
						key: 'news' + item.id
					}

					this.newsData.push(news);
                })

                this.classifyNews();

				this.setState({
					loading: false
				});

			})
			.catch((error) => {
				this.setState({
					loading: false
				});

				Alert.alert('Connection problem', 'Check your internet status please...')
			})
			.then((response) => {
				console.log(JSON.stringify(response));
            });
	}

	render() {
		
		return (
			<View style={styles.container}>
                <SectionList
                    renderItem={({item, index, section}) => (
                        <View style={styles.newsItem}>
                            <Text style={styles.newsTitle}>
                                { item.title }
                            </Text>
                            <Text style={styles.newsContent}>
                                { item.content }
                            </Text>
                            <Text style={styles.newsCreated}>
                                { item.created }
                            </Text>
                        </View>
                    )}
                    renderSectionHeader={({section: {title}}) => (
                        <View style={styles.newsSection}>
                            <Text style={styles.date}>
                                { title }
                            </Text>
                        </View>
                    )}
                    sections={this.displayNews}
                    keyExtractor={(item, index) => item + index}
                    
					refreshControl = { <RefreshControl
						onRefresh={this.load}
						refreshing={this.state.loading}
						tintColor="#ff0000"
						colors={[ '#ff0000', '#00ff00', '#0000ff' ]}
						progressBackgroundColor="#ffffff" />
					}
					
                />
			</View>
		)
	}
}


const mapStateToProps = (state) => {
    return { currentUser: state.user }
};
  
export default connect(mapStateToProps)(NewsView);

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: "#fff"
	},
	newsSection: {
		borderBottomColor: 'rgba(0, 0, 0, 0.7)',
		borderBottomWidth: 1,
        height: 40,
		backgroundColor: '#fed',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	newsItem: {
		borderBottomColor: 'rgba(0, 0, 0, 0.7)',
		borderBottomWidth: 1,
		height: 80,
		backgroundColor: '#fff',
		flexDirection: 'column',
    },
    date: {
        fontSize: 20
    },
    newsTitle: {
        fontSize: 20
    },
    newsContent: {
        fontSize: 15
    },
    newsCreated: {

    }
})
