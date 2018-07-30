import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';
import { sideBarStyles } from './sideBar.styles';
import Close from '@material-ui/icons/Close';
import { ISideBarProps, ISideBarState } from './ISideBar';
import UserProfile from '../../user-profile';
import Settings from '../../settings';

class SideBar extends React.Component<ISideBarProps, ISideBarState> {
  public renderViewContent(content: string): React.ReactNode {
    switch(content) {
      case 'User Profile': return (<UserProfile />);
      case 'Settings': return (<Settings />);
      default: return null;
    }
  }

  public render(): React.ReactElement<SideBar> {
    const { classes, isSideBarOpen, toggleSideBar, viewContent } = this.props;

    return (
      <div className={classNames(classes.sideBar, isSideBarOpen && classes.sideBarOpen)}>
        <div className={classes.sideBarHeader}>
          <Typography variant='title' color='textSecondary'>{viewContent}</Typography>
          <IconButton>
            <Close onClick={() => toggleSideBar()} />
          </IconButton>
        </div>
          {this.renderViewContent(viewContent)}
      </div>
    );
  }
}

export default withStyles(sideBarStyles, {withTheme: true})(SideBar);
