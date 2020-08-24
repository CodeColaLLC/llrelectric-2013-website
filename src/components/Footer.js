import React from 'react';
import {Container, Grid, Header, Icon, List, Segment} from "semantic-ui-react";

import wbenc from '../assets/images/wbenclogo.png';

const Footer = () => {
    return <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                            <List.Item as='a'>Capabilities</List.Item>
                            <List.Item as='a'>Services</List.Item>
                            <List.Item as='a'>Clients</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as='h4' inverted>
                            Phoenix
                        </Header>
                        <p>
                            4802 East Ray Road #23-209
                            <br/> Phoenix, Arizona 85044
                            <br/>
                            <br/> <Icon name='phone'/> 480.705.8349
                            <br/> <Icon name='fax'/> 480.961.8876
                            <br/> <Icon name='mail'/> <a href="mailto:support@llrelectric.com">support@llrelectric.com</a>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <div style={{display: 'flex'}}>
                            <div style={{flex: 1}}></div>
                            <a href="https://www.wbenc.org/" target="_blank"><img src={wbenc} style={{width: '170px'}}/></a>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
}
export default Footer;