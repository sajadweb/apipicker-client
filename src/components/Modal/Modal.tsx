import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from "./Modal.style";


import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';



interface ModelProps extends WithStyles<typeof styles> {
    open:  boolean;
    scroll?:  any;
    handleToggel:  (open:boolean)=>void;
    title?:  any;
}
interface IState {
    open: boolean;
}



class Index extends React.Component<ModelProps, IState> {
    constructor(props:ModelProps) {
        super(props);
        this.state = {
            open: false,
        };
    }
    UNSAFE_componentWillMount() {
        let { open } = this.props;
        if (open) {
            this.handleClickOpen();
        }  
    }
    UNSAFE_componentWillReceiveProps(props:ModelProps) {
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
                    open={this.props.open}
                    onClose={()=>{
                        debugger
                        this.props.handleToggel(false)}}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>

                    {this.props.children}
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(Index);
