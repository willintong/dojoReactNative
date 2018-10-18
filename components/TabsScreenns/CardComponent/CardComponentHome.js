import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class CardComponentHome extends Component {

    render() {

    const data ={
        '1': require('../../../img/1.jpg'),
        '2': require('../../../img/2.jpg'),
        '3': require('../../../img/3.jpg'),

    }

    return (
      <Container>
          <Content>
              <Card>
              <CardItem>
                  <Left>
                      <Thumbnail large source={require('../../../img/3.jpg')} />
                      <Body>
                          <Text>Willintong Lopez</Text>
                          <Text note> Julio 12, 2018</Text>
                      </Body>
                  </Left>
              </CardItem>
              <CardItem cardBody>
                  <Image 
                    source ={data[this.props.imageSource]} 
                    style={{width: null, height: 200, flex: 1}}
                   />
              </CardItem>
              <CardItem style={{height:40}}>
                  <Left>
                      <Button transparent>
                        <Icon name='md-heart-outline' style={{color: 'black'}} />
                      </Button>
                      <Button transparent>
                        <Icon name='md-chatbubbles' style={{color: 'black'}} />
                      </Button>
                      <Button transparent>
                        <Icon name='md-send' style={{color: 'black'}} />
                      </Button>
                  </Left>
              </CardItem>
              <CardItem style ={{height:20}}>
                  <Text>{this.props.likes}</Text>
              </CardItem>
              <CardItem>
                  <Body>
                  <Text>
                      <Text style={{fontWeight:"900"}}>
                        Willintong
                      </Text>
                  “Aprender de los errores te hace mas fuerte.”
                  </Text>
                  </Body>
              </CardItem>
              </Card>
          </Content>
      </Container>
    );
  }
}

export default CardComponentHome;
