import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Dimensions,
  StyleSheet,
  Pressable,
  FlatList,
  Animated,
} from "react-native";
import styles from "./styles";
import { BaseColor, Images } from "../../config";
import LinearGradient from "react-native-linear-gradient";
import { Button, Image, Loader, Text, TextInput } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AlertModal from "../../components/AlertModal";

const Dashboard = ({ navigation }) => {
  useEffect(() => {}, []);
  const [loading, setLoading] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [msgModal, setMsgModal] = useState("");


  useEffect(() => {
   
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <AlertModal
        showAlertModal={alertModal}
        setShowAlertModal={setAlertModal}
        message={msgModal}
      ></AlertModal>
      <View style={[styles.contain]}>
        <Image
          resizeMode="contain"
          style={{ width: 130 }}
          source={Images.PLLOGO}
        ></Image>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
            width: "44%",
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              width: 36,
              height: 36,
              borderRadius: 50,
              right: 6,
            }}
            source={Images.ic_avtar}
          ></Image>

          <View style={{ flex: 1 }}>
            <Text darkColor bold style={{}}>
              {'Mayank Patel'}
            </Text>
            <TextWithEllipsis text={'Mechanical'} />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={[BaseColor.whiteColor, BaseColor.whiteColor]}
        locations={[0, 1]}
        style={styles.mainContainer}
      >
        <StatusBar hidden />
        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              bold
              callout
              style={{
                marginBottom: 14,
                marginTop: 8,
                flex: 1,
                color: BaseColor.buttonGradient2,
              }}
            >
              {"Dashboard"}
            </Text>
            <Pressable onPress={toggleSidebar}>
              <Image source={Images.activityLog1} style={styles.cardImage} />
            </Pressable>
          </View>
         
        </KeyboardAwareScrollView>
      </LinearGradient>
    </>
  );
};

export default Dashboard;
