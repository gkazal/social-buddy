import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const Comment = (props) => {
    const { name, id, email, body } = props.comment

    const [images, setImages] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    //console.log(images)


    const style = {
        padding: '10px',
        margin: '10px'
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 80,
            height: 80,
        },
    
    }));

    const classes = useStyles();

    return (

        <div style={style} className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        {/* <img className={classes.image} alt="complex" src= {images.thumbnailUrl} /> */}
                        <Avatar alt="Remy Sharp" src={images.thumbnailUrl} className={classes.image} />

                    </Grid>
                   
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="row" spacing={2}>
                            <Grid item >
                                <Typography gutterBottom variant="subtitle1">
                                    Name: {name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                   Email: {email}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Comments: {body}
                                </Typography>
                            </Grid>                          
                       </Grid> 
                    </Grid>
                </Grid>

            </Paper>
        </div>

    );
};

export default Comment;