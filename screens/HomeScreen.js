import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar, Image } from 'react-native';
import {Container, Content, Header, Left, Right, Icon, Title, Body, Button, Item, Input, Card, CardItem} from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import RecommendedCardItem from './components/RecommendedCardItem'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  toggleDrawer = () => {
    this.props.navigation.toggleDrawer()
  }

  render() {
    return (
      <Container>
         <Header style={{backgroundColor: '#3a455c', height: 89, borderBottomColor: '#757575'}}>
          <Left style={{flexDirection: 'row'}}>
            <Button transparent>
              <Icon onPress={this.toggleDrawer} name='menu' style={{color: '#fff'}}/>
            </Button>
            <Button transparent>
              <FAIcon name='amazon' style={{fontSize: 32, color: '#fff'}}/>
            </Button>
          </Left>

          <Right> 
            <Button transparent>
              <Icon name='md-cart' style={{color: '#fff'}}/>
            </Button>
          </Right>
        </Header>

        <View style={{position: 'absolute', left: 0, right: 0, top: 90, height: 70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5}}>
          <TouchableOpacity>
            <View style={{width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10}}>
              <Text style={{fontSize: 12}}>Shop By</Text>
              <Text style={{fontWeight: 'bold'}}>Category</Text>
            </View>
          </TouchableOpacity>

          <View style={{ flex: 1, height: "100%", marginLeft: 5, justifyContent: 'center' }}>
              <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4, justifyContent: 'center'}}>
                  <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }} />
                  <Input placeholder="Search" />
              </Item>
          </View>
        </View>

        <Content style={{backgroundColor: '#d5d5d6', marginTop: 70}}>
          <View style={{height: 50, backgroundColor: '#fff', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between'}}>
            <Text> Hello, Kazi Rahamatullah</Text>
            <View style={{flexDirection: 'row'}}>
              <Text> Your Account </Text>
              <Icon name='ios-arrow-forward' style={{fontSize: 18, paddingLeft: 5,}}/>
            </View>
          </View>

          <Swiper style={{height: 100}}
            autoplay={true}
          >
            <View style={{flex: 1}}>
              <Image source={require('../assets/swiper_2.jpg')} style={{flex: 1,height: null, width: null, resizeMode: 'contain'}}/>
            </View>
            <View style={{flex: 1}}>
              <Image source={require('../assets/swiper_3.jpg')} style={{flex: 1,height: null, width: null, resizeMode: 'contain'}}/>
            </View>
            <View style={{flex: 1}}>
              <Image source={require('../assets/swiper_2.jpg')} style={{flex: 1,height: null, width: null, resizeMode: 'contain'}}/>
            </View>
          </Swiper>

          <Card style={{marginLeft: 5, marginRight: 5}}>
            <CardItem header style={{borderBottomWidth: 1, borderBottomColor: '#dee0e2'}}>
              <Text>Your Recommendations</Text>
            </CardItem>

            <RecommendedCardItem
              itemName='You can heal your life'
              itemCreator='Louise Hay'
              itemPrice='$10'
              savings='2.5'
              imageUrl={require('../assets/recommended_1.jpg')}
              rating={5}
            />
            <RecommendedCardItem
              itemName='Uncharted 4'
              itemCreator='Sony'
              itemPrice='$15'
              savings='17'
              imageUrl={require('../assets/recommended_2.jpg')}
              rating={3}
            />
            <RecommendedCardItem
              itemName='Ea UFC 3'
              itemCreator='Ea Sports'
              itemPrice='$44'
              savings='6'
              imageUrl={require('../assets/recommended_3.jpg')}
              rating={4}
            />

            <RecommendedCardItem
              itemName='Khabib Book'
              itemCreator='UFC Sports'
              itemPrice='$50'
              savings='6'
              imageUrl={require('../assets/recommended_1.jpg')}
              rating={2}
            />
            <RecommendedCardItem
              itemName='Ninja Sports'
              itemCreator='Ninja'
              itemPrice='$84'
              savings='6'
              imageUrl={require('../assets/recommended_2.jpg')}
              rating={5}
            />
            <RecommendedCardItem
              itemName='Wrestling'
              itemCreator='WWE Sports'
              itemPrice='$34'
              savings='6'
              imageUrl={require('../assets/recommended_3.jpg')}
              rating={3.5}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
});
