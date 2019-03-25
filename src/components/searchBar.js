
import React from "react";
import { Image, Text, View, Dimensions, Alert, StyleSheet, Button, Animated, TouchableOpacity, TextInput } from "react-native";

const serviceTypes = [
    {
        key: 1,
        image: require('./serviceIcons/2.png'),
        Text: 'Maintenance'
    },
    {
        key: 2,
        image: require('./serviceIcons/7.png'),
        Text: 'Decoration'
    },
    {
        key: 3,
        image: require('./serviceIcons/2.png'),
        Text: 'Wash'
    },
    {
        key: 4,
        image: require('./serviceIcons/4.png'),
        Text: 'Oil'
    },
    {
        key: 5,
        image: require('./serviceIcons/4.png'),
        Text: 'Battery'
    },
    {
        key: 6,
        image: require('./serviceIcons/6.png'),
        Text: 'Filter'
    },
    {
        key: 7,
        image: require('./serviceIcons/3.png'),
        Text: 'Wheel'
    },
    {
        key: 8,
        image: require('./serviceIcons/3.png'),
        Text: 'Tire'
    },
    {
        key: 9,
        image: require('./serviceIcons/6.png'),
        Text: 'Engine'
    },
    {
        key: 10,
        image: require('./serviceIcons/1.png'),
        Text: 'Steering Wheel'
    },
    {
        key: 11,
        image: require('./serviceIcons/5.png'),
        Text: 'Brake'
    },
    {
        key: 12,
        image: require('./serviceIcons/6.png'),
        Text: 'Transmission'
    }
]

const screenWidth = Dimensions.get( "window" ).width;
const serviceIconSize = screenWidth / 4;
const countInARow = 4;

export default class SearchBar extends React.Component {

    state = {
        typeFilter: [{
            Text: 'Maintenance',
            show: true
        }, {
            Text: 'Decoration',
            show: true
        }, {
            Text: 'Wash',
            show: true
        }, {
            Text: 'Oil',
            show: true
        }, {
            Text: 'Battery',
            show: true
        }, {
            Text: 'Filter',
            show: true
        }, {
            Text: 'Wheel',
            show: true
        }, {
            Text: 'Tire',
            show: true
        }, {
            Text: 'Engine',
            show: true
        }, {
            Text: 'Steering Wheel',
            show: true
        }, {
            Text: 'Brake',
            show: true
        }, {
            Text: 'Transmission',
            show: true
        }],
        searchText: ''
    }

    componentDidMount = () => {
        this.setState({
            searchText: this.props.getSearchText(),
            typeFilter: this.props.getTypeFilter()
        })
    }

    onServiceSelect(filter) {

        let newTypeFilter = this.state.typeFilter.map((item) => {
			if(item.Text == filter) {
				return {...item, show: !item.show}
			}
			else {
				return item
			}
        })
        
		this.setState({
			typeFilter: newTypeFilter
		})

        this.props.updateTypeFilter(filter);

    }

    handleChangeSearch = (text) => {
        this.setState({
            searchText: text
        });
    }

    handleSubmitSearch = () => {

        this.props.updateSearchText(this.state.searchText);
    }

    getFilterState = (serviceItem) => {
        const typeFilterItem = this.state.typeFilter.find((type) => type.Text == serviceItem.Text);
        return typeFilterItem.show;
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.searchContainer}>

                    <View>
                        <View style={styles.filterWrapper}>
                            <View style={styles.filterWrapperLine} >
                                {serviceTypes.map((item, index) => index < countInARow && (
                                    <TouchableOpacity onPress = {() => this.onServiceSelect(item.Text)} style={[styles.serviceTypeButton, this.getFilterState(item) ? {backgroundColor:'rgba(20, 60, 90, 0.2)'}: '' ]} key={item.key}>
                                        <Image source={item.image} style={styles.serviceIcon}/>
                                        <Text style={styles.serviceText}>{item.Text}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.filterWrapperLine} >
                                {serviceTypes.map((item, index) => index  >= countInARow && index < countInARow * 2 && (
                                    <TouchableOpacity onPress = {() => this.onServiceSelect(item.Text)} style={[styles.serviceTypeButton, this.getFilterState(item) ? {backgroundColor:'rgba(20, 60, 90, 0.2)'}: '' ]} key={item.key}>
                                        <Image source={item.image} style={styles.serviceIcon}/>
                                        <Text style={styles.serviceText}>{item.Text}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.filterWrapperLine} >
                                {serviceTypes.map((item, index) => index >= countInARow * 2 && index < countInARow * 3 && (
                                    <TouchableOpacity onPress = {() => this.onServiceSelect(item.Text)} style={[styles.serviceTypeButton, this.getFilterState(item) ? {backgroundColor:'rgba(20, 60, 90, 0.2)'}: '' ]} key={item.key}>
                                        <Image source={item.image} style={styles.serviceIcon}/>
                                        <Text style={styles.serviceText}>{item.Text}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={styles.searchInput}>
                            <TextInput 
                                style={styles.inputText}
                                placeholder={'I\'m looking for...'}
                                placeholderTextColor={'#555'}
                                underlineColorAndroid={'rgba(0, 0, 0, 0)'}
                                autoCorrect={false}
                                value={this.state.searchText}
                                onFocus={() => {}}
                                onChangeText={this.handleChangeSearch}
                                onSubmitEditing={this.handleSubmitSearch}
                            />
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    filterWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    serviceIcon: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }, 
    filterWrapperLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    serviceTypeButton: {
        flex: 0.33,
        width: serviceIconSize,
        height: serviceIconSize,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 5,
    },
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0)',	
		borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    	borderBottomWidth: 5,
    },
    searchContainer: {
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        width: '100%',
        overflow: 'hidden',
        paddingTop: 10,
    },
    arrowMinimizeIcon: {
        marginLeft: 12,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 3,
        height: 45,
        marginTop: 3,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    inputText: {
        fontSize: 15,
        color: '#000',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    serviceText: {
        fontSize: 13,
        paddingTop: 10,
        color: '#000'
    }
});