import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import logo from '../logo.svg';

class Portfolios extends Component {
    render(){
        return (
            <Grid id='portfolios'>
        <h3>Portfolios</h3>
            <Row>
              <Col xs={12} md={4}>
                <a href='https://codepen.io/JohnLinCN/pen/WjOjbL' target="_blank">
                    <Thumbnail src={logo} alt="242x200">
                      <h3>Wiki Search</h3>
                      <p>Description</p>
                      <p>
                        <Button bsStyle="primary">Button</Button>&nbsp;
                        <Button bsStyle="default">Button</Button>
                      </p>
                    </Thumbnail>
                </a>
              </Col>
              <Col xs={12} md={4}>
                  <a href='https://codepen.io/JohnLinCN/pen/yXEoeY' target="_blank">
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                  <h3>LeaderBoard</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
                </a>
              </Col>
              <Col xs={12} md={4}>
                  <a href='https://codepen.io/JohnLinCN/pen/wdJNmv' target="_blank">
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                  <h3>Weather App</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
                </a>
              </Col>
              <Col xs={12} md={4}>
                  <a href='https://codepen.io/JohnLinCN/pen/awGMOO' target="_blank">
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                  <h3>Markdown Preview</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
                </a>
              </Col>
              <Col xs={12} md={4}>
                  <a href='https://codepen.io/JohnLinCN/pen/gWaRXO' target="_blank">
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                  <h3>Calculator</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
                </a>
              </Col>
              <Col xs={12} md={4}>
                  <a href='https://codepen.io/JohnLinCN/pen/KmyyaO' target="_blank">
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                  <h3>Twitch API</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
                </a>
              </Col>
            </Row>
          </Grid>
        )
    }
}

export default Portfolios;
