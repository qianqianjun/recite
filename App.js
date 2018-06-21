import {
  StackNavigator,
  RootStack,
} from 'react-navigation';
import Main from './pages/Main'
import Words from './pages/Words'

global.allTheWords=50;


const App = StackNavigator({
  Main: { screen: Main },
  Words: { screen: Words },
  },
  {
    navigationOptions:{
      title:'BackToHomePage',
      headerTintColor:'saddlebrown',
    }
  }
);


console.ignoredYellowBox = ['Warning: isMounted'];
export default App;