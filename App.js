import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import store from './store/index'

import StartQuiz from './screens/StartQuiz';
import QuestionList from './screens/QuestionList';
import FinalScore from './screens/FinalScore';

const MainNavigator = createStackNavigator({
  start: { 
    screen: StartQuiz,
    navigationOptions: { title: 'Start Quiz' }
  },
  list: { 
    screen: QuestionList,
    navigationOptions: { title: 'Select your Answer', headerLeft: null }
  },
  results: { 
    screen: FinalScore,
    navigationOptions: { title: 'Your Score', headerLeft: null }
  }
})

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store= {store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
