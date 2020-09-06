import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display: 'inline-block',
        height: '300px',
        margin: '10px',
        padding: '10px',
        backgroundColor: 'silver',
        marginLeft: '30px'
    },
    
});

const Post = (props) => {
    const { title, body, id } = props.user

    const classes = useStyles();

    //console.log(props)


    const history = useHistory()
    const handleClick = (userId) =>{
        history.push(`/user/${userId}`)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="h2">
                        Title: {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Body: {body}
                    </Typography>
                    
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button onClick={()=>handleClick(id)} variant="contained" color="primary">Detials</Button>
                <Typography gutterBottom variant="h5" component="h2">
                        Id: {id}
                </Typography>

            </CardActions>
        </Card>
    );
};

export default Post;