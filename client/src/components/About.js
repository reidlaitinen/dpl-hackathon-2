import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react';
import { Segment, Image, Container, Grid } from 'semantic-ui-react';
import Chef from '../images/chef.jpg';
import banner from '../images/banner.png';


<Segment>
  <Image src={Chef} size='medium' centered />
    <p align="center">
    Originally from South Korea and adopted by an Oklahoman family, Danny Bowien is the chef and co-founder of Mission Chinese Food, based in New York and San Francisco. Starting his culinary career at various places on both coasts, Danny Bowien came to greater national attention when he worked at Farina and won the Pesto World Championship (who knew that was a thing?!).

    He describes his cooking as “Americanized Oriental food,” with dishes like supersmoky kung pao pastrami. Now, he focuses his time on Mission Chinese Food where only one dish costs more than $16, and 75 cents from each food item sold goes to a local food bank. Amazing chef and amazing person?I think yes.
    </p>
    <div><Image src={banner} fluid/></div>
</Segment>

// <Grid.Row height={3}>
//   <h1 style={{marginLeft: "50px"}}></h1>
// </Grid.Row>



const ImageExampleCentered = () => (
  <Container>
    <Grid>
      <Grid.Row height={1}>
        <p style={{marginLeft: "50px"}}></p>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <Segment>
          <Image src={Chef} size='medium' centered />
          </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
        <h1 align="center">Our Amazing Chef!</h1>
        <p align="center">
        Originally from South Korea and adopted by an Oklahoman family, Danny Bowien is the chef and co-founder of Mission Chinese Food, based in New York and San Francisco. Starting his culinary career at various places on both coasts, Danny Bowien came to greater national attention when he worked at Farina and won the Pesto World Championship (who knew that was a thing?!).

        He describes his cooking as “Americanized Oriental food,” with dishes like supersmoky kung pao pastrami. Now, he focuses his time on Mission Chinese Food where only one dish costs more than $16, and 75 cents from each food item sold goes to a local food bank. Amazing chef and amazing person?I think yes.
        </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <span><Image src={banner} fluid/></span>
  </Container>
)


export default ImageExampleCentered;
