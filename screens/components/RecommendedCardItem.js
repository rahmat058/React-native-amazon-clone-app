import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {Card, CardItem, Right} from 'native-base'
import StarRating from 'react-native-star-rating'

export default class RecommendedCardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {imageUrl, itemName, itemCreator, itemPrice, savings, rating} = this.props
    return (
      <CardItem>
        <View> 
          <Image style={{height: 90, width: 60}} source={imageUrl}/>  
        </View>
        <Right style={{flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20}}>
          <Text>{itemName}</Text>
          <Text style={{color: 'grey', fontSize: 11}}>{itemCreator}</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#c4402f'}}>{itemPrice}</Text>
          <Text style={{color: 'grey', fontWeight: '300', fontSize: 11}}> You save 
            <Text> ${savings}</Text>
          </Text>

          <StarRating 
            disabled={true}
            maxStars={5}
            rating={rating}
            starSize={12}
            fullStarColor='orange'
            emptyStarColor='orange'
          />
        </Right>
      </CardItem>
    );
  }
}
