import React, { Component } from "react";
import { ActionSheet, Button, Body, Container, Content, Footer, Header, Icon, Left, Right, Text, Title } from "native-base";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: "#f44242" }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' />
              </Button>
            </Right>
          </Header>
        </Container>
    );
  }
}
