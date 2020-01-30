import React from 'react';
import { Responsive, Segment, Divider, Grid, Image, Header, Container } from 'semantic-ui-react';

import me from '../../utils/images/me.jpeg';
import '../../style/View.css';

class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0,window.innerHeight/0.89)
    }

    render() {
        return (
            <div>
                <Responsive as={Segment} style={{ padding: 0 }}>
                    <div className='viewContainerNotExpanded' style={{ height: (window.innerHeight*3) }}>
                        <Segment placeholder style={{ height: (window.innerHeight*3) }}>
                            <Grid columns={2} relaxed='very' stackable>
                                <Grid.Column>
                                    <Image src={me} style={{ paddingTop: 215 }} />
                                </Grid.Column>

                                <Grid.Column verticalAlign='middle'>
                                    <Container textAlign='center' fluid style={{paddingTop: 200}} >
                                        <Segment className='backgroundContainer segmentAbout' style={{ margin: 14 }}>
                                            <Header as='h1'>My Passion & Personality</Header>
                                            <p>
                                                I'm a software developer, focused in frontend with experience in back end.
                                            </p>
                                            <p>
                                                I studied computer engineering in South America.
                                            </p>
                                            <p>
                                               I'm a selfmotivated learner, passionate for code.
                                            </p>
                                            <p>
                                                I believe in the art of code, developing scalable and maintainable code using creativity solutions.
                                            </p>
                                            <p>
                                                I'm highly interested in the user experience and design in general.
                                            </p>
                                            <p>
                                                I love challenges, I don't give up that easy.
                                            </p>

                                            <Header as='h2'>Let's talk about my passion</Header>
                                            <p>
                                                My life is guided by the feeling of overcoming 
                                            </p>
                                            <p>
                                                I want to build the best version of my self.
                                            </p>
                                            <p>
                                                I'm a surfer, longboarder and also I have been training Bjj (Brazilian jui jitsu).
                                            </p>
                                            <p>
                                                I love to travel, meet people and learn different cultures and languages.
                                            </p>
                                            <p>
                                                I believe every language is a new way of thinking, and thats pretty interesing to me.
                                            </p>
                                            <p>
                                                Check the menu if you wanna know more about me...
                                            </p>
                                        </Segment>
                                    </Container>
                                </Grid.Column>
                            </Grid>
                            <Responsive minWidth={768}  style={{position: 'static'}}>
                                <Divider vertical style={{ paddingLeft: 15 }} >About me</Divider>
                            </Responsive>
                        </Segment>

                    </div>
                </Responsive>
            </div>
        )
    }
}

export default About;