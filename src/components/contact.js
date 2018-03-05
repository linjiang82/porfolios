import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import FA from 'react-fontawesome';

class Contact extends Component {
    render(){
        return (
            <div id='contactme'>
            <h3>Contact Me</h3>
                    <a href='https://www.linkedin.com/in/linjiang82/'><FA name='linkedin' size='2x'/></a>&nbsp;&nbsp;
                    <a href='https://github.com/linjiang82'><FA name='github' size='2x'/></a>&nbsp;&nbsp;
                   <a href='https://codepen.io/JohnLinCN/'> <FA name='codepen' size='2x'/></a>
            </div>
        )
    }
}

export default Contact;
