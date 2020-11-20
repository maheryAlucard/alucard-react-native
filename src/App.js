import React, { Component } from "react";
//import { RootSiblingParent } from 'react-native-root-siblings';
import { StyleSheet, View } from "react-native";
import MyHeader from "./components/MyHeader";
import "./styles.css";

export default class App extends Component {
  constructor(state) {
    super(state);
    this.state = {
      theme: ""
    };
  }
  render() {
    return (
      <View style={Styles.container}>
        <MyHeader />
      </View>
    );
  }
}

var Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#42b5e3",
    padding: 10
  }
});
