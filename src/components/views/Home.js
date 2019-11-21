import React from 'react';
import { Responsive, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Background from '../../utils/images/background.jpg';
import '../../style/View.css';

class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0,window.innerHeight/2)
    }

    render() {
        return (
            <div>
                <Segment.Group style={{ height: window.innerHeight }}>
                    <Responsive as={Segment}>
                        <div className='viewContainerNotExpanded ' >
                            <Segment basic  mobile={16} tablet={16} computer={16}> 
                                <Link to={'/about'} >
                                    <div className='bg' >
                                        <img src={Background}  alt='a'/>
                                    </div>
                                </Link>
                            </Segment> 
                        </div>
                    </Responsive>
                </Segment.Group>
            </div>
        )
    }
}

export default Home;