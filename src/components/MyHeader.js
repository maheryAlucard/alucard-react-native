import React, { Component } from "react";
import mainData from "../apis/DataContent";
import { StyleSheet, View, Text, Image } from "react-native";
import { ToastContainer, toast } from "react-toastify";
const toastData = mainData.toastData;

export default class MyHeader extends Component {
  componentDidMount() {}
  render() {
    return (
      <View style={Styles.maincontainer}>
        <ToastContainer />
        <View style={Styles.headerLogo}>
          <Image source={{ uri: "../" }} style={{ width: 40, height: 40 }} />
        </View>
        <View>
          <Text style={Styles.headerText}>This is my header</Text>
        </View>
        <View style={Styles.headerMenu}></View>
      </View>
    );
  }
}

var Styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  },
  headerLogo: {},
  headerMenu: {}
});
