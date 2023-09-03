import React, { Component } from "react";
import { StyleSheet, Text, View , Image, SafeAreaView, Platform, Switch} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      name: "",
      light_theme:true,
      isEnabled:false,
    };
  }
  toggleSwitch(){
    const previous_state=this.state.isEnabled;
    const theme=!this.state.isEnabled?"dark" : "light"
    var updates = {};

    
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  
  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droid}/>
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image source={require("../assets/logo.png")}></Image>
            </View>

              <View style={styles.appTitleTextContainer}>
              <Text>Story Telling App</Text>
              </View>
          </View>
          <View style={styles.screentContainer}>
            <View style={styles.profileImagetContainer}>
              <Image source={require("../assets/profile_img.png")} style={styles.profileImage}></Image>
               <Text style={styles.nameText}>{this.state.name}</Text>
            </View>
            <View style={styles.themeContainer}>
              <Text style={styles.themeText}>Dark Theme</Text>
              <Switch 
              style={{ transform: [{scaleX:1.3},{scaleY:1.3}]}}
              trackColor= {{ false: "#767577", true: "white" }}
              thumbColor={this.state.isEnabled? "#ee8249" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => this.toggleSwitch()}
             value={this.state.isEnabled}
              />
              </View>
              
              </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  droid:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  profileImage: {
    width:RFValue(140),
    height:RFValue(140),
    borderRadius:RFValue(140),
  },
  screenContainer: {
    flex:0.85,

  },
  profileImagetContainer:{
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  themeContainer:{
    flex: 0.2,
    flexDirection:"row",
    justifyContent: "center",
    marginTop: RFValue(20),
  },
  themeText:{
    color: "white",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    marginTop: RFValue(10)
  },
  nameText:{
    color: "white",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    marginTop: RFValue(10)
  },
});
