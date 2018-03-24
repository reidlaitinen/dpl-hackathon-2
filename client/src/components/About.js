import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Chef from '../images/chef.png';
import { Pagination } from 'semantic-ui-react';
import { Segment, Image } from 'semantic-ui-react';


const AboutUs = () => (
  <Segment>
    <Image src={Chef} size='medium' centered />
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip
      detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos
      choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
)

const styles = {
  backgroundColor: "#ff5959",
  textColor: "white"
}

export default aboutus
