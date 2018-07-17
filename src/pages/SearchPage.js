import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';


const styles = theme => ({
    card: {
        maxWidth: 400,
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
    // avatar: {
    //     backgroundColor: red[500],
    // },
});


class Page extends Component  {

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };


    render() {
        const { classes } = this.props;

        return (

            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with
                            your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            {/*<FavoriteIcon />*/}
                        </IconButton>
                        {/*<IconButton*/}
                            {/*className={classnames(classes.expand, {*/}
                                {/*[classes.expandOpen]: this.state.expanded,*/}
                            {/*})}*/}
                            {/*onClick={this.handleExpandClick}*/}
                            {/*aria-expanded={this.state.expanded}*/}
                            {/*aria-label="Show more"*/}
                        {/*>*/}
                            {/*<ExpandMoreIcon />*/}
                        {/*</IconButton>*/}
                    </CardActions>
                </Card>
                <TextField
                    id="search"
                    label="Search field"
                    type="search"
                    margin="normal"
                />
            </div>
    )
    }

};

export default withStyles(styles)(Page);
