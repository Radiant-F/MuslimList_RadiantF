import React from 'react';
import {
  View,
  Text,
  ViewPropTypes,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styleDrawer';
import bg from '../assets/bg.jpg';
import bg2 from '../assets/bg2.jpg';
import bgDrawer from '../assets/bgDrawer.jpg';
import derp from '../assets/derp.jpg';

function DrawerContent() {
  return (
    <View>
      <ImageBackground source={bg2} style={styles.imgBg} blurRadius={5}>
        <Image source={bgDrawer} style={styles.drawerBG} />
        <Image source={derp} style={styles.derp} />
        <View style={styles.subView}>
          <View style={styles.subSubView}>
            <Text style={styles.textName}>Muhammad Radiant Fadilah</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default DrawerContent;
