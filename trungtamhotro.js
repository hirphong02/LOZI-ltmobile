import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function TrungTamHoTro({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../UngdungdatdoanLoZi/assets/chienbinhloship.jpg')}></Image>
            </View>
            <View style={styles.box2}>
                <ScrollView>
                    <View style={styles.view1}>
                        <Image
                            style={styles.image}
                            source={require('../UngdungdatdoanLoZi/assets/trungtamhotro/messeger.png')}
                        />
                        <Text style={{ marginLeft: 30, marginTop: 15, fontSize: 15, fontWeight: 'bold' }}>Góp Ý</Text>
                        <AntDesign
                            name='right'
                            size={17}
                            style={{ marginLeft: 220, marginTop: 15 }}
                        />
                    </View>

                    <View style={styles.view1}>
                        <Image
                            style={styles.image}
                            source={require('../UngdungdatdoanLoZi/assets/trungtamhotro/hotline.png')}
                        />
                        <Text style={{ marginLeft: 30, marginTop: 15, fontSize: 15, fontWeight: 'bold' }}>Liên Hệ</Text>
                        <AntDesign
                            name='right'
                            size={17}
                            style={{ marginLeft: 210, marginTop: 15 }}
                        />
                    </View>

                    <View style={styles.view1}>
                        <Image
                            style={styles.image}
                            source={require('../UngdungdatdoanLoZi/assets/trungtamhotro/fb.png')}
                        />
                        <Text style={{ marginLeft: 30, marginTop: 15, fontSize: 15, fontWeight: 'bold' }} onPress={() => {
                            Linking.openURL('https://www.facebook.com/vu.phongcr');
                        }}>Fanpage</Text>
                        <AntDesign
                            name='right'
                            size={17}
                            style={{ marginLeft: 202, marginTop: 15 }}
                        />
                    </View>

                    <View style={styles.view1}>
                        <Image
                            style={styles.image}
                            source={require('../UngdungdatdoanLoZi/assets/trungtamhotro/ms.png')}
                        />
                        <Text style={{ marginLeft: 30, marginTop: 15, fontSize: 15, fontWeight: 'bold' }}>Messenger</Text>
                        <AntDesign
                            name='right'
                            size={17}
                            style={{ marginLeft: 184, marginTop: 15 }}
                        />
                    </View>

                    <View style={styles.view1}>
                        <Image
                            style={styles.image}
                            source={require('../UngdungdatdoanLoZi/assets/trungtamhotro/error.png')}
                        />
                        <Text style={{ marginLeft: 30, marginTop: 15, fontSize: 15, fontWeight: 'bold' }}>Báo Lỗi</Text>
                        <AntDesign
                            name='right'
                            size={17}
                            style={{ marginLeft: 210, marginTop: 15 }}
                        />
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

    box1: {
        width: '100%',
        height: '30%'
    },

    box2: {
        flex: 9
    },

    view1: {
        width: 390,
        height: 50,
        backgroundColor: "white",
        marginTop: 20,
        flexDirection: 'row',
        borderRadius: 20,
        marginLeft: 10,
    },

    image: {
        height: 35,
        width: 35,
        marginLeft: 20,
        marginTop: 8,
    }
});


