import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './src/screens/splash';
import Entry from './Entry'

const Switch = createSwitchNavigator({
    Splash: SplashScreen,
    Entry: Entry
});

const Container = createAppContainer(Switch);
export default Container





