import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import MainScreen from './screens/MainScreen.js'
import MovieInfo from './screens/MovieInfo.js'
import {fetchFilms} from './api.js'

const AppNavigator = createStackNavigator({
  Main: MainScreen,
  Movie: MovieInfo
  },
  {initialRouteName: "Main"}
  );

export default class App extends React.Component {
  state = {
    films: null,
    query: 'Testing'
  }
  componentDidMount() {
    this.getFilms()
  }
  getFilms = async () => {
    const results = await fetchFilms()
    this.setState({films: results})
    console.log(this.state.films)
  }
  render() {
    return (
      <AppNavigator screenProps = {{films: this.state.films, query: this.state.query}}/>
);
  }
}