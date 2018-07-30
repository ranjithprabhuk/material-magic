import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Icon, Typography } from '@material-ui/core';
import { sideBarStyles } from './sideBar.styles';
import Close from '@material-ui/icons/Close';
import { ISideBarProps, ISideBarState } from './ISideBar';
import UserProfile from '../../user-profile';

class SideBar extends React.Component<ISideBarProps, ISideBarState> {
  public renderViewContent(content: string): React.ReactNode {
    switch(content) {
      case 'User Profile': return (<UserProfile />);
      default: return null;
    }
  }

  public render(): React.ReactElement<SideBar> {
    const { classes, isSideBarOpen, toggleSideBar, viewContent } = this.props;

    return (
      <div className={classNames(classes.sideBar, isSideBarOpen && classes.sideBarOpen)}>
        <div className={classes.sideBarHeader}>
          <Typography variant='title' color='textSecondary'>{viewContent}</Typography>
          <Icon className={classes.closeIcon} color='action'>
            <Close onClick={() => toggleSideBar()} />
          </Icon>
        </div>
          {this.renderViewContent(viewContent)}
      </div>
    );
  }
}

export default withStyles(sideBarStyles, {withTheme: true})(SideBar);
