import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MainMenu from "./src/screens/MainMenu";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Main: MainMenu,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Selena's Bus",
    },
  }
  
);

export default createAppContainer(navigator);
