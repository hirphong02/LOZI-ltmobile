import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
    Button,
    Alert,
    Linking
} from 'react-native';
import React, { useState } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';


export default function TrungTamHoTro({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={{ width: '100%', height: "78%" }}>
                    <Image style={{ width: '100%', height: "100%" }} source={require('../UngdungdatdoanLoZi/assets/bunbohue.webp')} ></Image>
                </View>
                <View style={{ width: '95%', height: '8%', alignSelf: 'center', margin: 10 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', margin: 5 }}>Bún Bò Huế - Đầy Đủ</Text>
                    <Text style={{ fontSize: 15, color: 'black', margin: 5 }}>50.000$</Text>
                </View>
                <View style={{ width: '91%', height: '7%', alignSelf: 'center', backgroundColor: 'red', borderRadius: 15, marginTop: 10 }}>
                    <Button title='CHỌN MUA' color='white'
                        onPress={() => Alert.alert('Sẽ Lựa Chọn Oftion Của Sản Phẩm')}
                    />
                </View>
            </View>

            <View style={styles.box2}>
                <View style={{ width: '95%', height: '20%', alignSelf: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black', margin: 5 }}>Thông Tin Sản Phẩm</Text>
                </View>
                <View style={{ width: '95%', height: '74%', alignSelf: 'center' }}>
                    <ScrollView>
                        <Text style={{ fontSize: 15, color: 'black', margin: 5, textAlign: 'left' }}>  Bún bò là một trong những đặc sản của xứ Huế, mặc dù món bún này phổ biến trên cả ba miền ở Việt Nam và cả người Việt tại hải ngoại. Tại Huế, món này được gọi đơn giản là "bún bò" hoặc gọi cụ thể hơn là "bún bò thịt bò". Các địa phương khác gọi là "bún bò Huế", "bún bò gốc Huế" để chỉ xuất xứ của món ăn này.</Text>
                        <Text style={{ fontSize: 15, color: 'black', margin: 5, textAlign: 'left' }}>  Bún bò là một trong những đặc sản của xứ Huế, mặc dù món bún này phổ biến trên cả ba miền ở Việt Nam và cả người Việt tại hải ngoại. Tại Huế, món này được gọi đơn giản là "bún bò" hoặc gọi cụ thể hơn là "bún bò thịt bò". Các địa phương khác gọi là "bún bò Huế", "bún bò gốc Huế" để chỉ xuất xứ của món ăn này.</Text>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.box3}>
                <View style={{ width: '95%', height: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space', }}>
                    <View style={{ width: 40, height: '100%', marginLeft: 10 }}>
                        <Fontisto
                            name='facebook'
                            size={30}
                            color="#007bc8"
                            style={{ margin: 5 }}
                            onPress={() => {
                                Linking.openURL('https://facebook.com');
                            }}
                        />
                    </View>
                    <View style={{ width: 40, height: '100%', marginLeft: 70 }}>
                        <Fontisto
                            name='messenger'
                            size={30}
                            color="#00bfff"
                            style={{ margin: 5 }}
                            onPress={() => {
                                Linking.openURL('https://messenger.com');
                            }}
                        />
                    </View>
                    <View style={{ width: 40, height: '100%', marginLeft: 70 }}>
                        <Fontisto
                            name='link'
                            size={30}
                            color="black"
                            style={{ margin: 5 }}
                        />
                    </View>
                    <View style={{ width: 40, height: '100%', marginLeft: 70 }}>
                        <FontAwesome5
                            name='sms'
                            size={30}
                            color="gray"
                            style={{ margin: 5 }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.box4}>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%',
        backgroundColor: '#F0F0F0'
    },

    box1: {
        width: '100%',
        height: '60%',
        backgroundColor: 'white'
    },

    box2: {
        width: '100%',
        backgroundColor: 'white',
        height: '18%',
        marginTop: 10,
        alignSelf: 'center'
    },

    box3: {
        width: '100%',
        height: '5%',
        backgroundColor: 'white',
        marginTop: 10
    },

    box4: {
        width: '100%',
        height: '20%',
        backgroundColor: 'white',
        marginTop: 10
    }
});


