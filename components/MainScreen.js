import React, { Component } from 'react'
import {Animation} from 'react-native';
import {createBottomTabNavigator, TabNavigator} from 'react-navigation';
import { Icon, Content, Left, Body, Title } from 'native-base';

import HomeTab from './TabsScreenns/HomeTabScreen';
import SearchTab from './TabsScreenns/SearchTabScreen';
import AddMediaTab from './TabsScreenns/AddMediaTabScreen';
import LikesTab from './TabsScreenns/LikeTabsScreen';
import ProfileTab from './TabsScreenns/ProfileTabScreen';


export class MainScreen extends Component {

  render() {
    return (
      <Content>
        <Header>
          <Left />
          <Body>
            <Title>Instagram</Title>
          </Body>
        </Header>
      </Content>
    )
  }
}

export default createBottomTabNavigator({

  HomeTab: {
    screen: HomeTab,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <Icon name = 'md-home' size ={5} />
      )
    }
  },
  SearchTab:{
    screen:SearchTab,
    navigationOptions:{
      tabBarLabel:'Search',
      tabBarIcon: ({tintColor}) => (
        <Icon name = 'md-search' size ={5} />
      )
    }
  },
  AddMediaTab:{
    screen:AddMediaTab,
    navigationOptions:{
      tabBarLabel:'',
      tabBarIcon: ({tintColor}) => (
        <Icon name = 'md-add-circle' size ={5} />
      )
    }
  },
  LikesTab:{
    screen:LikesTab,
    navigationOptions:{
      tabBarLabel:'Favorites',
      tabBarIcon: ({tintColor}) => (
        <Icon name = 'md-heart' size ={5} />
      )
    }
  },
  ProfileTab:{
    screen:ProfileTab,
    navigationOptions:{
      tabBarLabel:'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon name = 'md-person' size ={5} />
      )
    }
  },
})
