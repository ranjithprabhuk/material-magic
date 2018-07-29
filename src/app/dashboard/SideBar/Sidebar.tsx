import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { sideBarStyles } from './sideBar.styles';
import { ISideBarProps, ISideBarState } from './ISideBar';
import UserProfile from '../../user-profile';

class SideBar extends React.Component<ISideBarProps, ISideBarState> {
  public renderViewContent(): React.ReactNode {
    switch(this.props.viewContent) {
      case 'user-profile': return (<UserProfile />);
      default: return null;
    }
  }
  public render(): React.ReactElement<SideBar> {
    const { classes, isSideBarOpen } = this.props;

    return (
      <div className={classNames(classes.sideBar, isSideBarOpen && classes.sideBarOpen)}>
          {this.renderViewContent()}
      </div>
    );
  }
}

export default withStyles(sideBarStyles, {withTheme: true})(SideBar);
