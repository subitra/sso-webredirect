import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  //client IDs from .env
  const redirectUri = AuthSession.makeRedirectUri({
    scheme: 'com.anonymous.myappv1',
    preferLocalhost: true  // also tried false
  });
  const config = {
    androidClientId: '<create android client id on the google console>',
    redirectUri
  };const [request, response, promptAsync] = Google.useAuthRequest(config);

  useEffect(() => {
    console.log("response: ", response);
    console.log(redirectUri);
  }, [response]);

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1}}>
      <Text >Test</Text>

      <Button
        title="Login with Google"
        onPress={() => promptAsync({ useProxy: false, showInRecents: true })}
      />
    </View>
  );

  
}
