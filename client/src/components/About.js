import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react';
import { Segment, Image } from 'semantic-ui-react';


const About = () => (
  <Segment>
    <Image src="../images/chef.jpg" size='medium' centered />
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip
      detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos
      choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </Segment>
)

const styles = {
  backgroundColor: "#ff5959",
  textColor: "white"
}

export default About;
