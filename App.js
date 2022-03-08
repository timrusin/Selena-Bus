import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MainMenu from "./src/screens/MainMenu";
import ColorsMenu from "./src/screens/ColorsMenu";
import NumbersMenu from "./src/screens/NumbersMenu";
import LettersMenu from "./src/screens/LettersMenu";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Main: MainMenu,
    Colors: ColorsMenu,
    Numbers: NumbersMenu,
    Letters: LettersMenu,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Selena's Bus",
    },
  }
  
);

export default createAppContainer(navigator);