import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    ImageBackground} from 'react-native';
import QcActionButton from 'components/QcActionButton'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('assets/images/read_child_bg.jpg');

class FirstRunScreen extends React.Component {

    onTeacherFlow = () => {
        this.props.navigation.navigate('TeacherScreensNavigator');
    }

    render(){
        const { navigation } = this.props;
        return (
          <View style={styles.container}>
                <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
                    <Text>بسم الله الرحمان الرحيم</Text>
                    <QcActionButton
                        navigation={navigation}
                        text="I am a teacher"
                        onPress={this.onTeacherFlow} />
                </ImageBackground>
            </View>  
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bgImage: {
      flex: 1,
      top: 0,
      left: 0,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default FirstRunScreen;