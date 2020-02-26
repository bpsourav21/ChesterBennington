import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import {
    AdMobBanner
  } from 'react-native-admob';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
   
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <WebView
                        source={{uri: 'https://mixed.revcontents.com/07-gg/'}}
                    />
                </View>
                <View style={{alignItems:"center"}}>
                    <AdMobBanner
                        adSize="banner"
                        testDevices={["emulator-5554"]}
                        adUnitID="ca-app-pub-8685059381375467/9701476809"
                        onAdFailedToLoad={error => console.log(error)}
                        onAdClosed= {() => console.log ("I am close")}
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    welcome: {
        fontFamily: 'Roboto',
        fontSize: 34,
        textAlign: 'center',
        color: "#00804A",
        fontWeight: "bold"
    },
    button: {
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20
    }
});
// ======================== REDUX CONNECTORS ========================
// const mapStateToProps = (state) => {
//     return {
//     };
// };
// export default connect(mapStateToProps)(Home); 
export default Home;