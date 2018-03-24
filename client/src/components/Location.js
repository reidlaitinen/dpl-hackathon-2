import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react';
import { Segment, Image, Container, Grid } from 'semantic-ui-react';

// locationleft = {
//   display: flex;
//   justify-content: left;
// }

// TESTING 123
//   <div>
//     SIDE BAR
//   </div>
//   </Container>
//
//   <Container column=2>
//   <div>
//     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.40235220016!2d-111.8432572845965!3d40.665102879336985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752621d97d5f405%3A0x800c6a89b50c2ea3!2s4810+Highland+Cir%2C+Salt+Lake+City%2C+UT+84117!5e0!3m2!1sen!2sus!4v1521921914824" width="600" height="450" frameborder="0" allowfullscreen></iframe>
//   </div>
//   </Grid>

const Location = () => (
    <Container>
      <Grid>
        <Grid.Row height={1}>
          <h1 style={{marginLeft: "50px"}}>Jasmine Bistro</h1>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={5}>
            <Segment>
            <p>4810 S Highland Cir<br/>
            Salt Lake City, UT 84117<br/><br/>
            <b>Phone:</b> (801) 278-6688
            <div class="ui divider"></div>
            <b>Store Hours:</b><br />
            Monday:	Closed<br />
            Tue - Thurs:	11:00 AM - 09:30 PM<br />
            Fri & Sat:	11:00 AM - 10:30 PM<br />
            Sunday:	01:00 PM - 08:00 PM<br />
            <div class="ui divider"></div>
            Delivery time is 30 to 60 minutes<br />
            Delivery starts at 4 PM for Mon to Thu

            </p>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.40235220016!2d-111.8432572845965!3d40.665102879336985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752621d97d5f405%3A0x800c6a89b50c2ea3!2s4810+Highland+Cir%2C+Salt+Lake+City%2C+UT+84117!5e0!3m2!1sen!2sus!4v1521921914824" width="600" height="450" frameborder="0" allowfullscreen></iframe>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
)

export default Location;
