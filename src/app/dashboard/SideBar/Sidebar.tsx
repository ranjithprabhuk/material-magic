import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { sideBarStyles } from './sideBar.styles';
import { ISideBarProps, ISideBarState } from './ISideBar';

class SideBar extends React.Component<ISideBarProps, ISideBarState> {
  public render(): React.ReactElement<SideBar> {
    const { classes, isSideBarOpen } = this.props;

    return (
      <div className={classNames(classes.sideBar, isSideBarOpen && classes.sideBarOpen)}>
          Settings
      </div>
    );
  }
}

export default withStyles(sideBarStyles, {withTheme: true})(SideBar);
