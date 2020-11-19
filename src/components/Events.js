import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Events = () => {
  const classes = useStyles();

  return (<div style={{ padding: "10px" }}>    
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Kinderboeken week
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          20-20-2020 tot 30-30-2030
        </Typography>
        <Typography variant="body2" component="p">
          Kinderboeken week tekst 123 123
          <br />
          {'"1231231231231"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link}
          to={"/dashboard/activiteit/kinderboekenweek"} size="small">
            Lees meer
            </Button>
      </CardActions>
    </Card></div>)
}

export default Events