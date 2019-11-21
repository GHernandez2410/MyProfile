import React from 'react';
import { Responsive, Segment, Header, Container, List, Button, Icon, Grid, Reveal, Image, Item } from 'semantic-ui-react';

import avatar from '../../utils/images/avatar.jpeg';
import me from '../../utils/images/me.jpeg';
import '../../style/View.css';

class Skills extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    
    render() {
        return (
            <div style={{ padding: 0, height: (window.innerHeight) }}>
                <Responsive as={Segment} style={{ padding: 0, height: (window.innerHeight*2) }}>
                    <div className='viewContainerNotExpanded' style={{ paddingTop: 0, height: (window.innerHeight*2) }} >
                        <Container fluid >
                            <Segment className='backgroundContainer' style={{ height: (window.innerHeight*2) }}>
                                <Header textAlign='center' as='h1'>Skills</Header>
                                <Grid columns='equal'>
                                    <Grid.Row>
                                        <Grid.Column mobile={16} tablet={8} computer={4}>
                                            <List as='ul' className='listMargin'>
                                                <Header as='h3'>FrontEnd</Header>
                                                <List.Item as='li'>React</List.Item>
                                                <List.Item as='li'>Npm</List.Item>
                                                <List.Item as='li'>Redux</List.Item>
                                                <List.Item as='li'>HTML</List.Item>
                                                <List.Item as='li'>CSS</List.Item>
                                                <List.Item as='li'>Semantic UI</List.Item>
                                                <List.Item as='li'>Postman</List.Item>
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} tablet={8} computer={4}>
                                            <List as='ul' className='listMargin'>
                                                <Header as='h3'>BackEnd</Header>
                                                <List.Item as='li'>Java EE 8</List.Item>
                                                <List.Item as='li'>JSF Primefaces</List.Item>
                                                <List.Item as='li'>Eclipse</List.Item>
                                                <List.Item as='li'>Maven</List.Item>
                                                <List.Item as='li'>Jetty</List.Item>
                                                <List.Item as='li'>WildFly</List.Item>

                                            </List>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} tablet={8} computer={4}>
                                            <List as='ul' className='listMargin'>
                                                <Header as='h3'>DataBase</Header>
                                                <List.Item as='li'>SQL</List.Item>
                                                <List.Item as='li'>PostGreSQL</List.Item>
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} tablet={8} computer={4}>
                                            <List as='ul' className='listMargin'>
                                                <Header as='h3'>Organization</Header>
                                                <List.Item as='li'>Agile / Scrum methodologies</List.Item>
                                                <List.Item as='li'>Jira</List.Item>
                                                <List.Item as='li'>Bitbucket</List.Item>
                                                <List.Item as='li'>Gitlab</List.Item>
                                                <List.Item as='li'>SmartGit</List.Item>
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} tablet={16} computer={16}>
                                        <Item.Group>
                                            <Item>
                                                <Reveal animated='small fade'>
                                                    <Reveal.Content visible>
                                                        <Image circular size='small' src={avatar} />
                                                    </Reveal.Content>
                                                    <Reveal.Content hidden>
                                                        <Image circular size='small' src={me} />
                                                    </Reveal.Content>
                                                </Reveal>
                                                <Item.Content style={{ margin: 20 }}>
                                                    <Item.Description>
                                                        Feel free to take a deeper look at what I've accomplished over the years and what I'm able to do for you.
                                                    </Item.Description>
                                                    <Item.Extra>
                                                        <br/>
                                                        <div onClick={ () => window.open(require('../../utils/files/CV.pdf'), '_none')}>
                                                            <Button icon labelPosition='left'>
                                                                <Icon name='download' />
                                                                View my resume
                                                            </Button>
                                                        </div>                                                      
                                                    </Item.Extra>
                                                </Item.Content>
                                            </Item> 
                                        </Item.Group> 
                                    </Grid.Column>
                                    </Grid.Row>
                                    
                                </Grid>
                            </Segment>
                        </Container>
                    </div>
                </Responsive>
            </div>
        )
    }
}

export default Skills;