import React from 'react'
import {View, Image, Text, Button, StyleSheet, Dimensions, Alert, TouchableOpacity} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {Icon} from 'react-native-elements'
import I18n from 'i18n'
import { RNCamera } from 'react-native-camera';

const screenWidth = Dimensions.get('window').width;

export default class SelectPhoto extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageSelected: false,
      image: null
    }

    this.camera = React.createRef();
  }

  static navigationOptions = {
		title: I18n.t('mainViewTab3'),
		header: null,
    tabBarIcon: ({focused, tintColor}) => {
      return (<Icon type="font-awesome" name="camera" color={tintColor}/>)
    }
  }

  render = () => {
    return (
      <View style={styles.cameraPageWrapper}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.fromStorage} onPress={this.getFile}>
            <Icon type="font-awesome" name="image" style={styles.storageIcon} color="rgba(112, 48, 160, 1)" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.takePhoto} onPress={this.takePhoto}>
            <View style={styles.takePhotoView} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  getFile = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
        fixOrientation: true
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if(response.didCancel || response.error) {
        return;
      }

      const data = { uri: 'data:image/jpeg;base64,' + response.data }

      this.props.navigation.state.params.takePhoto(data)
    });
  }

  takePhoto = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);

      this.props.navigation.state.params.takePhoto(data);
    }
  };

  uploadImage = () => {

  }
}

const styles = StyleSheet.create({
  cameraPageWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  noImageSelected: {
    textAlign: 'center',
  },
  imageWrapper: {
    width: screenWidth * 0.95,
    height: screenWidth * 0.95,
    margin: 25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  preview: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  buttonWrapper: {
    flex: 0,
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  takePhoto: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  takePhotoView: {
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(110, 0, 220, 0.5)',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)'
  },
  fromStorage: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})