
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import {Icon, Container, Content, Header, Left, Body, Right, List, ListItem} from 'native-base'

const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <Header style={{backgroundColor: '#3a455c', height: 90}}>
        <Left style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon name='ios-person' style={{color: '#fff', fontSize: 40,}}/>
          <Text style={{marginLeft:5, fontSize: 22, color: '#fff'}}>Hello,
            <Text style={{fontSize: 22, color: '#fff', fontStyle: 'italic'}}> Rahmat</Text>
          </Text>
        </Left>
      </Header>

      <Content>
        <FlatList
          style={{borderTopWidth: 0.5, borderTopColor: 'grey'}}
          data={[
            'Home', 'Shop by Category', "Today's Deals"
          ]}
          renderItem={({item}) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )} 
        />

        <FlatList
          style={{borderTopWidth: 0.5, borderTopColor: 'grey'}}
          data={[
            'Your Wish List', 'Your Account', "Amazon Pay", "Prime", "Sell on Amazon"
          ]}
          renderItem={({item}) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )} 
        />

        <FlatList
          style={{borderTopWidth: 0.5, borderTopColor: 'grey'}}
          data={[
            'Settings', 'Customer Service'
          ]}
          renderItem={({item}) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )} 
        />
      </Content>
    </Container>
  )
}

const AppDrawernavigator = createDrawerNavigator ({
  Home: HomeScreen
}, {
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoure: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

const AmazonAppDrawer = createAppContainer(AppDrawernavigator)

export default class App extends Component {
  render() {
    return <AmazonAppDrawer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
