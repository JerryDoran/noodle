import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import './global.css';

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-Light': require('../assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('../assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-SemiBold': require('../assets/fonts/Quicksand-SemiBold.ttf'),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  // const [fonts] = useFonts(map:{
  //   "Quicksand-Bold": require(id:"../assets/fonts/Quicksand-Bold.ttf"),
  //   "Quicksand-Light": require(id:"../assets/fonts/Quicksand-Light.ttf"),
  //   "Quicksand-Medium": require(id:"../assets/fonts/Quicksand-Medium.ttf"),
  //   "Quicksand-Regular": require(id:"../assets/fonts/Quicksand-Regular.ttf"),
  //   "Quicksand-SemiBold": require(id:"../assets/fonts/Quicksand-SemiBold.ttf"),
  // });
  return <Stack screenOptions={{ headerShown: false }} />;
}
