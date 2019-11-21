import React from 'react';
import { connect } from 'react-redux';

import { Responsive, Segment, Header, Container, List, Grid, Item, Form, TextArea, Button, Icon } from 'semantic-ui-react';
import '../../style/View.css';

import { sendEmail } from '../../actions/EmailSenderActions';
import SuccessModal from '../modals/SuccessModal';
import ErrorModal from '../modals/ErrorModal';

class Portfolio extends React.Component {
    state={
        text: ''
    }

    componentDidMount() {
        window.scrollTo(0,window.innerHeight)
    }
    

    handlerText(text) {
        this.setState({text: text})
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.props.emailSender!==null && this.state.text!=='') { //bc the login doesnt work in mobile
            //1.prepare json
            let email = {
                "subject": 'New job offer',
                "text": this.state.text,
                "sender": this.props.emailSender
            }
            //2.call post method email sender
            this.props.sendEmail(email)
            //3.show popup and clean input text
            this.setState({ text: '' })
        }  
    }

    render() {
        return (
            <div style={{ padding: 0, height: (window.innerHeight) }}>
                <SuccessModal/>
                <ErrorModal/>
                <Responsive as={Segment} style={{ padding: 0, height: (window.innerHeight) }}>
                    <div className='viewContainerNotExpanded' style={{ paddingTop: 0, height: (window.innerHeight) }} >
                        <Container fluid >
                            <Segment className='backgroundContainer' style={{ height: (window.innerHeight) }}>
                                <Header textAlign='center' as='h1'>Portfolio</Header>
                                <Grid columns='equal'>
                                    <Grid.Row>
                                    <Grid.Column mobile={16} tablet={8} computer={16}>
                                        <Item.Group>
                                            <Item>
                                                <Item.Content style={{ margin: 20 }}>
                                                    <Item.Description>
                                                        Feel free to have a look on my projects and how I code (every tip or advice is welcome)                                                    
                                                    </Item.Description>
                                                </Item.Content>
                                            </Item> 
                                        </Item.Group> 
                                    </Grid.Column>
                                        <Grid.Column mobile={16} tablet={8} computer={16} className='listMargin' style={{ margin: 20 }}>
                                            <Header as='h3'>FrontEnd</Header>
                                            <List divided relaxed>
                                                <List.Item>
                                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                                    <List.Content>
                                                        <div target="_blank" onClick={() => window.open(('https://github.com/GHernandez2410/MyProfile'))}>
                                                            <List.Header as='a'>This webpage</List.Header>
                                                            <List.Description as='a'>ReactJs + Redux + GoogleApi + Semantic UI + Consuming the EmailSender microservice</List.Description>
                                                        </div>
                                                    </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                                    <List.Content>
                                                        <div target="_blank" onClick={() => window.open(('https://github.com/GHernandez2410/Upics'))}>

                                                            <List.Header as='a'>ÜPics</List.Header>
                                                            <List.Description as='a'>ReactJs + GoogleApi + Semantic UI</List.Description>
                                                        </div>
                                                    </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                                    <List.Content>
                                                        <div target="_blank" onClick={() => window.open(('https://github.com/GHernandez2410/MyYoutube'))}>
                                                            <List.Header as='a'>FakeYoutube</List.Header>
                                                            <List.Description as='a'>ReactJs + YoutubeApi + GoogleApi + Semantic UI</List.Description>
                                                        </div>
                                                    </List.Content>
                                                </List.Item>
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} tablet={8} computer={16} className='listMargin' style={{ margin: 20 }}>
                                            <Header as='h3'>BackEnd</Header>
                                            <List divided relaxed>
                                                <List.Item>
                                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                                    <List.Content>
                                                        <div target="_blank" onClick={() => window.open(('https://github.com/GHernandez2410/EmailSenderMicroService'))}>
                                                            <List.Header as='a'>EmailSender WebService Rest</List.Header>
                                                            <List.Description as='a'>Java 8 + SpringBoot</List.Description>
                                                        </div>
                                                    </List.Content>
                                                </List.Item>
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} tablet={8} computer={16} className='listMargin' style={{ margin: 20 }}>
                                            <Header as='h3'>Contact me!</Header>
                                            <Form>
                                                <TextArea placeholder='Lets get in touch! Tell me more about you and what we could do together' value={this.state.text} onChange={(e) =>this.handlerText(e.target.value)} />
                                            </Form>
                                            <div style={{ paddingTop: 15 }}>
                                                <Button animated  floated='right' onClick={(e)=>this.handleSubmit(e)} disabled={this.state.text===null || this.props.emailSender===null}>
                                                    <Button.Content visible>Send email</Button.Content>
                                                    <Button.Content hidden>
                                                        <Icon name='paper plane' />
                                                    </Button.Content>
                                                </Button>
                                            </div>
                                            
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

const mapStateToProps = (state) => {
    return {
        emailSender: state.auth.userEmail 
    }
}

export default connect(mapStateToProps,{sendEmail})(Portfolio);
