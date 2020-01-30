import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { signIn, signOut } from '../actions/AuthActions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                    '858972970615-7kbth6ib3s3gi4i7burqrqqdi817n2en.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                  
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);

            });
        });
    }

   

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId(),this.auth.currentUser.Ab.w3.U3);
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === true) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button" >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google fluid button" >
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return (
            <div>
                <Modal size='mini' open={this.props.isSignedIn === false} onClose={this.close}>
                    <Modal.Header> 
                        <Icon name='sign-in'/>
                        Sign in
                    </Modal.Header>
                    <Modal.Content>
                        <p>Wellcome to my webpage, please sign in</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={this.onSignInClick} className="ui fluid button" style={{ marginLeft: 0 }}>
                            <Icon name='google'/> 
                            Sign in with Google
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);