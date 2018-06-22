import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import * as classnames from 'classnames';
import {Card, Typography} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme: Theme) => ({
  actions: {
    display: 'flex',
    padding: '0px 12px',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class CollapsiblePanel extends React.Component<any, any> {
  public state: any = { expanded: false };

  public handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  public render(): any {
    const { classes, header } = this.props;

    return (
      <div>
        <Card>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <Typography paragraph variant='body2'>{header}</Typography>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label='Show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
            {this.props.children}
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CollapsiblePanel);
