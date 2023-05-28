
import { StyleSheet, Text, View, Button, ImageBackground, SafeAreaView, } from 'react-native';


export default function Hello({ navigation }) {

  return (
    <View>
      <ImageBackground
        style={styles.logo}
        source={require('../UngdungdatdoanLoZi/assets/datlaship.jpg')}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 25 }}>LẬP TRÌNH MOBILE - ỨNG DỤNG ĐẶT ĐỒ ĂN LOZI</Text>
            <Text style={{ color: 'white', fontSize: 17, textAlign: 'center' }}>Vũ Hải Phong - Nguyễn Văn Thể</Text>

          </View>
          <View style={styles.mid}>
            <View style={styles.bt_tiep}>
              <Button title="Tiếp Tục" color="black"
                onPress={() => navigation.navigate("Login")}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>

    </View>
  );

};

const styles = StyleSheet.create({

  logo: {
    height: '100%',
    width: '100%',
  },

  header: {
    flex: 0.1,
  },

  mid: {
    flex: 0.6,
  },

  bt_tiep: {
    backgroundColor: "white",
    marginLeft: 140,
    borderRadius: 40,
    marginTop: 40,
    width: 140,
    height: 40,
    marginTop: 350,
  }

});