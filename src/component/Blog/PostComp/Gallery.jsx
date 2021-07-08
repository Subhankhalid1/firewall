import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import pic from "../../Home/CarouselGallery/img/g1.jpg";
import PostDetail from './PostDetail';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        height: '350px',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const Gallery = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList}>
                <GridListTile className="flex-fill h-100" >
                    <img src={pic} alt="" />
                    <GridListTileBar
                        title="rerereer"
                        subtitle={<span>by:fdfdffd</span>}
                        actionIcon={
                            <IconButton aria-label={`info about`} className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </GridListTile>
            </GridList>
            <div className='border w-100 py-3' style={{ backgroundColor: "#f7f7f7" }}>
                <section className="w-50 post-options d-flex justify-content-evenly">
                    <i className="fa fa-lg fa-heart text-danger" aria-hidden="true"></i>
                    <i className="fa text-muted fa-lg fa-commenting-o" aria-hidden="true"></i>
                    <i className="fa text-muted fa-lg fa-share-alt" aria-hidden="true"></i>
                    <i className="fa text-danger fa-lg fa-instagram" aria-hidden="true"></i>
                    <i className="fa text-primary fa-lg fa-twitter" aria-hidden="true"></i>
                    <i className="fa text-primary fa-lg fa-facebook" aria-hidden="true"></i>
                </section>
            </div>
            <PostDetail />
        </div>
    )
}

export default Gallery;
