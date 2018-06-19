import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import * as classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = (theme: Theme) => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
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
  avatar: {
    backgroundColor: red[500],
  },
});

class CollapsiblePanel extends React.Component<any, any> {
  public state: any = { expanded: false };

  public handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  public render(): any {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='Share'>
              <ShareIcon />
            </IconButton>
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
            <CardContent>
              {this.props.children}
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CollapsiblePanel);
