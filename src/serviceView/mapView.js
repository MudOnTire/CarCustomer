import React from 'react'
import {View, StyleSheet, Alert, Text} from 'react-native'
import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map'
import {connect} from 'react-redux'

class ServiceMapView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 115,
      longitude: 40,
    }

    this.currentPosition = this.props.userLocation;
    this.address = {latitude: this.props.navigation.state.params.item.latitude,
      longitude: this.props.navigation.state.params.item.longitude};
  }

  render() {
    const { Marker, Polyline } = Overlay;
    const line = [{ longitude: this.address.longitude, latitude: this.address.latitude }, 
      { longitude: this.currentPosition.longitude, latitude: this.currentPosition.latitude }];
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
          zoom={18}
          trafficEnabled={true}
          zoomControlsVisible={true}
          center={{ longitude: this.address.longitude, latitude: this.address.latitude }}
        >
        
          <Marker location={{ longitude: this.address.longitude, latitude: this.address.latitude }} />
          <Marker location={{ longitude: this.currentPosition.longitude, latitude: this.currentPosition.latitude }} />

          <Polyline points={line} 
          />
        </MapView>
      </View>

    )
  }
}


const mapStateToProps = (state) => {
	return {
    userName: state.user.userName,
    city: state.service.city,
    userLocation: state.user.location
	}
};

export default connect(mapStateToProps)(ServiceMapView);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapView: {
    width: '100%',
    height: '100%'
  }
})