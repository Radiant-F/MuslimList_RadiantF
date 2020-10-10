import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    backgroundColor: 'black',
  },
  imgBg: {
    width: '100%',
    height: '100%',
  },
  subView: {
    flex: 1,
  },
  subSubView: {
    backgroundColor: '#00000063',
    top: -50,
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  drawerBG: {
    width: '100%',
    height: '20%',
    borderColor: 'white',
    borderWidth: 3,
  },
  derp: {
    width: 90,
    height: 90,
    top: -50,
    alignSelf: 'center',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
  },
});
