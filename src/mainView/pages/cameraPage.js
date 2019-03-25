import React from 'react'
import {View, Image, Text, Button, StyleSheet, Dimensions, Alert, TouchableOpacity} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {Icon} from 'react-native-elements'
import I18n from 'i18n'
import { RNCamera } from 'react-native-camera';

const screenWidth = Dimensions.get('window').width;

export default class CameraPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageSelected: false,
      image: null
    }

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
          <TouchableOpacity style={styles.takePhoto} onPress={this.takePhoto}>
            <View style={styles.takePhotoView} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  takePhoto = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  selectImage = () => {
    const options = {
      title: '选择图片',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
          
        if (response.didCancel) {
            
        } else if (response.error) {
            Alert.alert("Error", 'ImagePicker Error: ' + response.error);
        } else if (response.customButton) {
            console.warn('User tapped custom button: ', response.customButton);
        } else {
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        
            this.setState({
                imageSelected: true,
                image: { uri: 'data:image/jpeg;base64,' + response.data }
            });
        }
    });
  }


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
    zIndex: 2
  },
  buttonWrapper: {
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
  }
})