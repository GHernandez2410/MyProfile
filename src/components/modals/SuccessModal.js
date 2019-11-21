import React from 'react';
import { connect } from 'react-redux';
import { closeSuccessModal } from '../../actions/MenuAndModalActions';
import { Header, Modal } from 'semantic-ui-react';

class SuccessModal extends React.Component {
    componentWillMount(){
        this.setState({ openSuccess: this.props.openSuccess })
    }

    componentWillReceiveProps(nextProps){
        this.setState({ openSuccess: nextProps.openSuccess })
    }

    handlerCloseExitoModal() {
        this.props.closeSuccessModal()
    }

    render() {
        return (
            <div>
                <Modal open={this.props.openSuccess} size='mini' onClose={this.close}>
                    <Header icon='paper plane' content='Your email has been sent!' />
                    <Modal.Content>
                        <p>
                            I will reply you as soon as possible, thanks for your interest :)
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                            <button className="ui mini primary button" onClick={this.handlerCloseExitoModal.bind(this)}>
                                Accept 
                            </button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        openSuccess: state.menu.successModal
    }
}

export default connect(mapStateToProps,{closeSuccessModal})(SuccessModal);