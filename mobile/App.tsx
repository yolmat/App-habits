import './src/lib/dayjs'

import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

import { ThemeProvider } from "styled-components";
import theme from "./src/Global/Styles/theme";

import { Loading } from './src/components/load';
import { Home } from "./src/screens/home";

export default function App() {
  const [fontsLoads] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoads) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar
          barStyle="light-content"
        />
        <Home />
      </>
    </ThemeProvider>
  );
}
