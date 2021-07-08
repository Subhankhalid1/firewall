import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import queryString from "query-string";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        display: "flex",
        justifyContent: "center"
    },
}));

export default function BasicPagination({ categoryInfo, getAllProductCategories, catID }) {
    const classes = useStyles();
    const { category } = queryString.parse(window.location.search);
    const changePagination = (e, value) => {
        getAllProductCategories(category, value)
    }
    return (
        <div className={classes.root}>
            <Pagination count={categoryInfo?.count ? Math.ceil(categoryInfo.count / 50) : 0} onChange={changePagination} color="secondary" />
        </div>
    );
}