import {
  StackNavigator,
} from 'react-navigation';
import Detail from './Detail'
import Re from './Re'
//import { Header } from 'react-native-elements';


const App = StackNavigator({
  Re: { screen: Re },
  Detail: { screen: Detail },
  },
  {
    headerMode:'none',
  }
);

export default App;