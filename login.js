import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground, TextInput, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';



export default function Login({ navigation }) {
  const [data, setData] = React.useState({
    username: 'phong',
    password: '1',
    secureTextEntry: false,
  });
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  return (
    <View>
      <ImageBackground style={{ height: '100%', width: '100%' }}
        source={require('../UngdungdatdoanLoZi/assets/login.jpg')}>

        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ height: '100%', height: '100%', }}>

            {/* Email passwword */}
            <View style={styles.em_pw}>
              {/* Email */}
              <View style={styles.em}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', }}>Email           : </Text>
                <TextInput placeholder='YourEmail' placeholderTextColor="#A9A9A9" style={styles.text_input_em} />
              </View>
              {/* Password */}
              <View style={styles.pw}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Password  : </Text>
                <TextInput style={styles.text_input_pw}
                  placeholder='YourPassWord'
                  placeholderTextColor="#A9A9A9"
                  secureTextEntry={true} />

                <TouchableOpacity style={{ height: '100%', width: 30, position: 'absolute', right: 0, }}
                  onPress={updateSecureTextEntry}>
                  {data.secureTextEntry ?
                    <Feather
                      name="eye-off"
                      color="black"
                      style={{ marginLeft: 10 }}
                      size={20}
                    />
                    :
                    <Feather
                      name="eye"
                      color="white"
                      style={{ marginLeft: 10 }}
                      size={20}
                    />
                  }
                </TouchableOpacity>

              </View>
            </View>


            {/* button login */}
            <View style={styles.bt}>

              {/* Đăng nhập */}
              <TouchableOpacity
                style={styles.bt_login}
                onPress={() => { navigation.navigate('Home') }}>
                <Text style={styles.text_bt}>Đăng nhập</Text>
              </TouchableOpacity>

              {/* Đăng kí */}
              <TouchableOpacity style={styles.bt_sigup} onPress={() => { navigation.navigate('SigUp') }}>
                <Text style={styles.text_bt}>Đăng ký</Text>
              </TouchableOpacity>

            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  em_pw: {
    width: '100%',
    height: '12%',
    marginTop: '85%',
    alignItems: 'center',
  },

  em: {
    width: '70%',
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  pw: {
    width: '70%',
    height: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },

  text_input_em: {
    color: 'black',
    height: '45%',
    width: '70%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    textAlign: 'left',
  },

  text_input_pw: {
    color: 'black',
    height: '45%',
    width: '70%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    textAlign: 'left',
    paddingRight: 40
  },

  bt: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text_bt: {
    color: 'black',
    fontSize: 15
  },

  bt_login: {
    width: '50%',
    height: '30%',
    borderRadius: 80,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  bt_sigup: {
    width: '50%',
    height: '30%',
    borderRadius: 80,
    borderWidth: 1,

    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
});