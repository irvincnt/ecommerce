import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import ProductList from '../ProductList'
import style from './App.css'

class App extends Component {
  render() {
    return (
      <Container className={style.root}>
        <Header as='h3' block>
          E-commerce
        </Header>
        <Grid>
          <Grid.Column width={10}>
            <ProductList/>
          </Grid.Column>
          <Grid.Column width={6}>
            CartList
          </Grid.Column>
        </Grid>
      </Container>

    );
  }
}

export default App;
