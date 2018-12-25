import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    UNSAFE_componentWillMount() {
        let { open } = this.props;
        if (open) {
            this.handleClickOpen();
        } else {
            this.handleClose();
        }
    }
    UNSAFE_componentWillReceiveProps(props) {
        let { open } = props;
        if (open) {
            this.handleClickOpen();
        } else {
            this.handleClose();
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>

                <Dialog
                    scroll={this.props.scroll ? this.props.scroll : "paper"}
                    open={this.state.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>

                    {this.props.children}
                </Dialog>
            </div>
        );
    }
}
