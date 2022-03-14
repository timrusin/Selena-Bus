import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MainMenu from "./src/screens/menus/MainMenu";
import ColorsMenu from "./src/screens/menus/ColorsMenu";
import NumbersMenu from "./src/screens/menus/NumbersMenu";
import LettersMenu from "./src/screens/menus/LettersMenu";
import TouchColors from "./src/screens/TouchColors";
import TouchNumbers from "./src/screens/TouchNumbers";
import TouchLetters from "./src/screens/TouchLetters";
import QuizColors from "./src/screens/QuizColors";
import QuizNumbers from "./src/screens/QuizNumbers";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Main: MainMenu,
    Colors: ColorsMenu,
    Numbers: NumbersMenu,
    Letters: LettersMenu,
    TouchColors: TouchColors,
    TouchNumbers: TouchNumbers,
    TouchLetters: TouchLetters,
    QuizColors: QuizColors,
    QuizNumbers: QuizNumbers,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Selena's Bus",
    },
  }


  
);

export default createAppContainer(navigator);
