import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ToCoToCo({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{ width: '100%', height: '100%' }} source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/banner.png')}></Image>
      </View>
      <View style={styles.box1}>
        <View style={styles.view1}>
          <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 10 }}>Dành Cho Bạn</Text>
          <AntDesign
            name='down'
            size={17}
            style={{ marginLeft: 120, marginTop: 12 }}
          />
        </View>
        <View style={styles.view2}>
          <AntDesign style={{ marginTop: 10, marginLeft: 20 }} name='search1' size={17} />
          <Button title='Tìm' color="black" onPress={() => navigation.navigate("TrungTamHoTro")} />
        </View>
      </View>

      <View style={styles.box2}>
        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View >
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/chantrauhoanggia.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa Chân Trâu Hoàng Gia</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>
            </View>

            <View>
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/baanhem.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa 3 Anh Em</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View >
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/okinawa.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa Đen Okinawa</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>

            </View>

            <View>
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/sugartiger.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa Chân Trâu Đường Hổ</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View >
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/panda.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa Panda</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>

            </View>

            <View>
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/happy.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa Hạnh Phúc</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View >
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/chantrauhoanggia.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa Chân Trâu Hoàng Gia</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>
            </View>

            <View>
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/baanhem.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa 3 Anh Em</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View >
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/okinawa.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa Đen Okinawa</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>

            </View>

            <View>
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/sugartiger.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa Chân Trâu Đường Hổ</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View >
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/panda.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa Panda</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>

            </View>

            <View>
              <Image
                style={styles.image}
                source={require('../UngdungdatdoanLoZi/assets/ToCoToCo/happy.png')}
              />
              <Text style={{ marginTop: 5 }}>Trà Sữa Hạnh Phúc</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>41.400</Text>
                <Text style={styles.gia}>46.000</Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="tago"
                  size={17}
                  color='red'
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 3,
  },

  box1: {
    flex: 0.7,
    backgroundColor: "white",
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  view1: {
    width: 280,
    height: 40,
    backgroundColor: '#f2f2f2',
    marginTop: 5,
    borderRadius: 20,
    flexDirection: 'row',
  },

  view2: {
    marginTop: 5,
    flexDirection: 'row',
    width: 100,
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
  },

  box2: {
    flex: 9,

  },

  image: {
    marginTop: 10,
    width: 190,
    height: 190,
    borderRadius: 15,
  },

  gia: {
    textDecorationLine: 'line-through',
    color: 'gray',
    marginLeft: 5,
  }
});