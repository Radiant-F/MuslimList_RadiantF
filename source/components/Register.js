import React, {Component} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Picker,
  ViewPropTypes,
  ScrollView,
} from 'react-native';
import styles from './styleRegister';
import fb from '../assets/fb.png';
import google from '../assets/google.png';
import flag from '../assets/indoflag.png';
import eyeOpened from '../assets/eyeOpened.png';
import back from '../assets/back.png';
import styleLogin from './styleLogin';

export class Register extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <View style={styles.subView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Image source={back} style={styles.backImg} />
            </TouchableOpacity>
            <Text style={styles.mainText}>Registration</Text>
            <Text style={styles.textSignIn}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.subTextSignIn}>Sign In</Text>
            </TouchableOpacity>
            <Text>Email</Text>
            <View style={styles.viewEmail}>
              <View style={styles.subViewEmail}>
                <TextInput placeholder="email@example.com"></TextInput>
              </View>
            </View>
            <View style={styles.mainViewNumber}>
              <Text>Mobile Number</Text>
              <View style={styles.viewNumber}>
                <View style={styles.subViewNumber}>
                  <View style={styles.subSubViewNumber}>
                    <Image source={flag} style={styles.flag} />
                    <Text> +62</Text>
                  </View>
                </View>
                <View style={styles.subViewNumber}>
                  <View style={styles.subSubViewNumber2}>
                    <TextInput placeholder="081234"></TextInput>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.mainViewPass}>
              <Text>Password</Text>
              <View style={styles.viewPass}>
                <View style={styles.subViewPass}>
                  <TextInput
                    placeholder="your_Password"
                    secureTextEntry={true}
                    style={styles.textInput}></TextInput>
                  <Image source={eyeOpened} style={styles.eye} />
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <View style={styles.viewSignUp}>
                <Text style={styles.textSignUp}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.textSocial}>
              ---------------- Log in with social account ----------------
            </Text>
            <View style={styles.mainViewSocial}>
              <TouchableOpacity>
                <View style={styles.viewSocial}>
                  <View style={styles.subViewSocial}>
                    <Image source={fb} style={styles.fb} />
                    <Text> Facebook</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.viewSocial2}>
                  <View style={styles.subViewSocial2}>
                    <Image source={google} style={styles.google} />
                    <Text> Google</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.viewTerms}>
              <Text style={styles.textTerms}>
                By clicking sign up you are agreeing to the{' '}
                <TouchableOpacity>
                  <Text style={{color: 'blue', fontWeight: 'bold'}}>
                    Term of Use
                  </Text>
                </TouchableOpacity>
                |
                <TouchableOpacity>
                  <Text style={{color: 'blue', fontWeight: 'bold'}}>
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Register;
