import React from 'react';
import { connect } from 'react-redux';
import { closeErrorModal } from '../../actions/MenuAndModalActions';
import { Header, Modal } from 'semantic-ui-react';

class SuccessModal extends React.Component {
    componentWillMount(){
        this.setState({ openError: this.props.openError })
    }

    componentWillReceiveProps(nextProps){
        this.setState({ openError: nextProps.openError })
    }

    handlerCloseErrorModal() {
        this.props.closeErrorModal()
    }

    render() {
        return (
            <div>
                <Modal open={this.props.openError} size='mini' onClose={this.close}>
                    <Header icon='times circle' content='Ups, something went wrong' />
                    <Modal.Content>
                        <p>
                            Your email couldnt be sent, please try again later
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                            <button className="ui mini primary button" onClick={this.handlerCloseErrorModal.bind(this)}>
                                Close 
                            </button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        openError: state.menu.errorModal
    }
}

export default connect(mapStateToProps,{closeErrorModal})(SuccessModal);