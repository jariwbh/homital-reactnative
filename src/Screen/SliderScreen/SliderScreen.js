import React from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import images from "../../Constants/images";
import theme from "../../Constants/theme";

const { image1, image2, image3 } = images;

// theme
const { COLORS, FONTS, SIZES } = theme;

const Slider = [
    {
        title: "Flexible Time",
        description: "Choose sample time and check-up time on your demand.",
        img: image1
    },
    {
        title: "Health Advic",
        description: "Chat and get health advice from experienced doctors.",
        img: image2
    },
    {
        title: "Home Check-Up",
        description: "Samples are taken at home.Provides fast and accurate results.",
        img: image3
    }
];

const SliderScreen = ({ navigation }) => {
    const [completed, setCompleted] = React.useState(false);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.height) === Slider.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    }, []);

    // Render

    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                {Slider.map((item, index) => (
                    <View
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}
                    >
                        <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: SIZES.height > 0 ? '10%' : '0%', marginRight: '3%' }}
                            onPress={() => { }}
                        >
                            <Text style={{ color: '#0C0B52', ...FONTS.h1 }}>Skip</Text>
                        </TouchableOpacity>

                        <View style={{ marginTop: SIZES.width > 0 ? '10%' : '0%' }}>
                            <Text style={{ ...FONTS.h1, color: '#0C0B52', textAlign: 'center', }} >{item.title} </Text>

                            <Text style={{
                                ...FONTS.body4,
                                textAlign: 'center',
                                marginTop: SIZES.base,
                                color: '#5A5987',
                            }}
                            >
                                {item.description}
                            </Text>
                        </View>
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    width: 200,
                                    height: 195,
                                    marginTop: SIZES.width > 0 ? '-30%' : '0%'
                                }}
                            />
                        </View>

                        {/* Button */}
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                                width: 120,
                                height: 50,
                                paddingLeft: 20,
                                justifyContent: 'center',
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 0,
                                backgroundColor: '#9191B1'

                            }}
                            onPress={() => { navigation.navigate('LoginScreen') }}
                        >
                            <Text style={{ ...FONTS.h1, color: COLORS.black }}>{completed ? "Let's Go" : "Next"}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return (
            <View style={styles.dotsContainer}>
                {Slider.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base, 17, SIZES.base],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot, { width: 20, height: 5, }]}

                        />
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
        </SafeAreaView>
    );
};


export default SliderScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    imageAndTextContainer: {
        width: SIZES.width,

    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: SIZES.height > 0 ? '10%' : '0%',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding / 2,
        marginBottom: SIZES.padding * 3,
        height: SIZES.padding,
    },
    dot: {

        borderRadius: 2,
        backgroundColor: '#EF716B',
        marginHorizontal: SIZES.radius / 2
    }
});
