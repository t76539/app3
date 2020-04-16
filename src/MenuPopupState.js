//import 'core-js/fn/object/assign';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { withStyles } from '@material-ui/core/styles';

const SvcButton = withStyles({
    root: {
        textTransform: "none",
        width: 200,
        textAlign: "align-left"
    }
})(Button);

export default function MenuPopupState(props) {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <SvcButton {...bindTrigger(popupState)}>{props.value}</SvcButton>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Start</MenuItem>
                        <MenuItem onClick={popupState.close}>Stop</MenuItem>
                        <MenuItem onClick={popupState.close}>Restart</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
