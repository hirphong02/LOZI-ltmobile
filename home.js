import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';
import React, { useState } from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({ navigation }) {
    const image = [
        'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/309235057_3445874295641595_7384477740763521827_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=4mRDw3RQqX4AX_WRb7L&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCXbJxeDzdgDQPqHCakvpWfUvEkme8AFcTSLspPSZrnmQ&oe=638E4987',
        'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/299897734_3410721169156908_4196470454034666596_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=GT9HE3FPYbcAX_HcOzu&_nc_ht=scontent.fhan17-1.fna&oh=00_AfD4jIYxy-m_Qg5NL4sNuDrwgqOYU44inAPhbgXcqw2XzA&oe=638E6969',
        'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/311346494_3459820127580345_5979514423727140021_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=5ICZ_VtNqOcAX98yCRS&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBHel8e1_wzjF54HMcyK0YzTnPMvavf-Cjj2Ehh9K08mw&oe=638CE397',
        'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/313909830_3477749105787447_8555302536940900274_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=adg9bOjLu7cAX8EiS4P&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBp-FWtsIqe53J-Q6HJzXTNbsqmmidGl2ogTtk54_H2_Q&oe=638CFA69',
        'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/300907429_3416258501936508_2704400905256474251_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=S-M8V_HOMwsAX_tOcRq&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBKiCc__gO23mBk5pZ46nHCwAQ4LgXu7mVSJHDe_nGvig&oe=638EAC6C'
    ]

    const [imgActive, setimgActive] = useState();

    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }
    const data = [
        {
            id: '0',
            image: 'https://trivietphat.net/wp-content/uploads/2021/09/cach-lam-gia-vi-nau-bun-bo-hue.jpg',
            price: '50.000$',
            name: 'Bún Bò Huế - Đầy đủ',
            buy: 'Chọn Mua'
        },

        {
            id: '1',
            image: 'https://bizweb.dktcdn.net/100/442/328/products/bun-cha-ha-noi.jpg?v=1644892472637',
            price: '35.000$',
            name: 'Bún Chả',
            buy: 'Chọn Mua'
        },

        {
            id: '2',
            image: 'https://cdn.daynauan.info.vn/wp-content/uploads/2021/11/bun-dau-mam-tom.jpg',
            price: '30.000$',
            name: 'Bún Đậu',
            buy: 'Chọn Mua'
        },

        {
            id: '3',
            image: 'https://dogifood.vn/Images/product/2108011040-com-dui-ga-sot-nam.webp',
            price: '35.000$',
            name: 'Cơm Gà Sốt',
            buy: 'Chọn Mua'
        },

        {
            id: '4',
            image: 'https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630563211.jpg',
            price: '40.000$',
            name: 'Cơm Tấm',
            buy: 'Chọn Mua'

        },
    ]
    const [selectedId] = useState(null);
    const renderItem = ({ item }) => {
        return <View
            style={{ width: 100, alignItems: 'center', margin: 10 }}
        >
            <Image
                style={{
                    width: 100,
                    height: 150,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    alignItems: 'center'
                }}
                source={{
                    uri: item.image

                }}
            />
            <Text style={{ color: 'black', textAlign: 'center', margin: 5 }}>{item.price}</Text>
            <View
                style={{
                    width: 90,
                    height: 22,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    margin: 5

                }}>
                <Text style={{ fontSize: 15, fontWeight: 'normal', textAlign: 'center' }}>{item.buy}</Text>
            </View>
            <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', margin: 5 }}
                onPress={() => navigation.navigate("SanPham")}>{item.name}
            </Text>
        </View>

    };

    onchange = (nativeEvent) => {

    }

    return (

        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../UngdungdatdoanLoZi/assets/header_home.jpg')}></Image>
            </View>
            <View style={styles.body}>
                <View style={styles.header_body}>
                    <View style={styles.header_body_imglogo}>
                        <Image
                            style={{ width: "65%", height: "50%", marginLeft: 10 }}
                            source={require('../UngdungdatdoanLoZi/assets/loship.png')}>
                        </Image>
                    </View>
                    <View style={styles.header_body_menu}>
                        <Feather
                            name="menu"
                            color="black"
                            size={25}

                        />
                        <Fontisto
                            name='bell'
                            color="black"
                            size={25}
                            style={{ marginLeft: 30 }}
                        />
                        <Feather
                            name="user"
                            color="black"
                            size={25}
                            style={{ marginLeft: 30 }}
                            onPress={() => { navigation.navigate('TrungTamHoTro') }}
                        />
                    </View>
                </View>
                <ScrollView>
                    <View style={{ flex: 9 }}>
                        <View style={styles.search_box}>
                            <FontAwesome
                                name='search'
                                size={15}
                                style={{ marginLeft: 10 }}
                            />
                            <TextInput style={{ flex: 1, fontSize: 15, marginLeft: 10 }} placeholder="Tìm Kiếm ..." placeholderTextColor={'grey'} />
                        </View>

                        <View style={styles.model}>
                            <View style={styles.model_con}>
                                <View style={styles.model_con_line1}>
                                    <View style={{ alignItems: 'center' }}>
                                        <MaterialCommunityIcons
                                            name='silverware-fork-knife'
                                            size={40}
                                            color="red"
                                        />
                                        <Text style={{ fontSize: 13 }}>Giao Đồ Ăn</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Fontisto
                                            name='motorcycle'
                                            size={35}
                                            color="orange"
                                        />
                                        <Text style={{ fontSize: 13 }}>Đặt Xe</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <MaterialCommunityIcons
                                            name='tea'
                                            size={35}
                                            color="#DAA520"
                                            onPress={() => { navigation.navigate('ToCoToCo') }}
                                        />
                                        <Text style={{ fontSize: 13 }}>ToCoToCo</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <MaterialIcons
                                            name='local-shipping'
                                            size={35}
                                            color="#CD853F"
                                        />
                                        <Text style={{ fontSize: 13 }}>Giao Hàng</Text>
                                    </View>
                                </View>

                                <View style={styles.model_con_line2}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Entypo
                                            name='tablet-mobile-combo'
                                            size={35}
                                            color="black"
                                        />
                                        <Text style={{ fontSize: 13 }}>Thiết bị Động </Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <MaterialCommunityIcons
                                            name='washing-machine'
                                            size={35}
                                            color="#00BFFF"
                                        />
                                        <Text style={{ fontSize: 13 }}>Giặt Ủi</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <FontAwesome5
                                            name='briefcase-medical'
                                            size={35}
                                            color="#32CD32"
                                        />
                                        <Text style={{ fontSize: 13 }}>Mua Thuốc</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Ionicons
                                            name='md-logo-octocat'
                                            size={35}
                                            color="red"
                                        />
                                        <Text style={{ fontSize: 13 }}>Shopping</Text>
                                    </View>
                                </View>

                                <View style={styles.model_con_line3}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Entypo
                                            name='baidu'
                                            size={35}
                                            color="#A52A2A"
                                        />
                                        <Text style={{ fontSize: 13 }}>Chăm Sóc Thú Cưng</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Entypo
                                            name='flower'
                                            size={35}
                                            color="orange"
                                        />
                                        <Text style={{ fontSize: 13 }}>Giao Hoa</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.game}>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={styles.header_text}>CHƠI GAME NHẬN QUÀ</Text>
                                <FontAwesome5
                                    name='fire'
                                    color='orange'
                                    size={20}
                                    style={{ marginLeft: 10 }}
                                />
                                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 15, marginTop: 2, marginLeft: 40 }}>Xem Tất Cả</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space' }}>
                                <View style={{ margin: 10, width: 80, alignItems: 'center' }}>
                                    <MaterialCommunityIcons
                                        name='treasure-chest'
                                        size={35}
                                        color="#D2691E"
                                    />
                                    <Text style={{ textAlign: 'center' }}>Điểm Danh Mỗi Ngày</Text>
                                </View>

                                <View style={{ margin: 10, width: 80, alignItems: 'center' }}>
                                    <FontAwesome
                                        name='bar-chart-o'
                                        size={35}
                                        color="#D2691E"
                                    />
                                    <Text style={{ textAlign: 'center' }}>Nhiệm Vụ</Text>
                                </View>
                            </View>

                        </View>

                        <View style={styles.khamphamonmoi}>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={styles.header_text}>KHÁM PHÁ MÓN MỚI</Text>

                                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 15, marginTop: 2, marginLeft: 85 }}>Xem Tất Cả</Text>
                            </View>
                            <View>
                                <FlatList
                                    horizontal
                                    data={data}
                                    renderItem={renderItem}
                                    keyExtractor={(item) => item.id}
                                    extraData={selectedId}
                                />
                            </View>

                        </View>

                        <View style={styles.khuyenmai}>
                            <View style={styles.slide}>
                                <ScrollView
                                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                                    showsHorizontalScrollIndicator={false}
                                    pagingEnabled //hiển thị từng hình
                                    horizontal // hiển thị theo chiều ngang
                                    style={styles.slide}
                                >
                                    {
                                        image.map((e, index) =>
                                            <Image
                                                key={e}
                                                resizeMode='stretch'
                                                style={styles.slide}
                                                source={{ uri: e }}
                                            />
                                        )
                                    }
                                </ScrollView>
                                <View style={styles.slidedot}>
                                    {
                                        image.map((e, index) =>
                                            <Text
                                                key={e}
                                                style={imgActive == index ? styles.dotActive : styles.dot}
                                            >●</Text>
                                        )
                                    }
                                </View>
                            </View>
                        </View>
                        <View style={styles.khamphamonmoi}>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={styles.header_text}>THƯƠNG HIỆU QUEN THUỘC</Text>

                                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 15, marginTop: 2, marginLeft: 10 }}>Xem Tất Cả</Text>
                            </View>
                            <View>
                                <FlatList
                                    horizontal
                                    data={data}
                                    renderItem={renderItem}
                                    keyExtractor={(item) => item.id}
                                    extraData={selectedId}
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

    header: {
        flex: 0.25,
    },

    body: {
        flex: 0.9,
        backgroundColor: 'blue '

    },

    header_body: {
        padding: 10,
        flexDirection: 'row',
        height: 50
    },

    header_body_imglogo: {
        width: "65%",
        height: 65
    },

    header_body_menu: {
        width: "20%",
        flexDirection: 'row',
    },

    search_box: {
        width: "95%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        borderRadius: 20,
        backgroundColor: '#DCDCDC',
        marginLeft: 10,

    },

    model: {
        width: "100%",
        height: "20%",

    },

    model_con: {
        width: "95%",
        height: "92%",
        backgroundColor: '#DCDCDC',
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10
    },

    model_con_line1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5
    },

    model_con_line2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },

    model_con_line3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },

    game: {
        width: "95%",
        height: "10%",
        backgroundColor: '#DCDCDC',
        marginLeft: 10,
        borderRadius: 10
    },

    khamphamonmoi: {
        width: "95%",
        height: "25%",
        backgroundColor: '#DCDCDC',
        marginLeft: 10,
        borderRadius: 10,
        marginTop: 10
    },

    khuyenmai: {
        width: "95%",
        height: "18%",
        backgroundColor: '#DCDCDC',
        marginLeft: 10,
        borderRadius: 10,
        marginTop: 10
    },

    header_text: {
        fontWeight: 'bold',
        fontSize: '20',
        marginLeft: 10
    },

    slide: {
        width: 400,
        height: 225,
        borderRadius: 10
    },

    slidedot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },

    dotActive: {
        margin: 3,
        color: 'red'
    },

    dot: {
        margin: 3,
        color: 'white'
    }

}
)