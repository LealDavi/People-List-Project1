import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter } from './src/util';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage,
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const peopleName = navigation.state.params.people.name.first;
      

      return ({
        title: peopleName,
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        }
      });
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Pessoas',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottoWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,

      flexGrow: 1,
      textAlign: 'center',
    }
  } 
});

export default createAppContainer(AppNavigator)