import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {styles} from './login.styles';

class Login extends React.Component<object, object> {

  public render():React.ReactElement<Login> {

    return (
      <div>
        <Card style={styles.card}>
          <CardHeader
            avatar={
              <Avatar aria-label='Recipe' style={styles.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            style={styles.media}
            image='/static/images/cards/paella.jpg'
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography component='p'>
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions style={styles.actions} disableActionSpacing>
            <IconButton aria-label='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='Share'>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label='Show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Login;
