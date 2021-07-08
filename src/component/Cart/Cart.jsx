import React, { useContext } from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import {
    List, ListItem, Divider, ListItemText, ListItemAvatar, ListItemSecondaryAction, Avatar, Typography
} from "@material-ui/core"
import { GlobalContext } from "../Context/Context";
import { useState } from "react";
import PayWithPayPal from "./PayWithPayPal";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%",
            backgroundColor: theme.palette.background.paper,
            color: 'green',

        },
        inline: {
            display: "inline"
        },
        listItem: {
            padding: theme.spacing(1, 0),
            justifyContent: "flex-end"
        },
        total: {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.fontSize * 2
        }
    })
)

const Cart = () => {
    const classes = useStyles({})
    const { cartData, setCartData } = useContext(GlobalContext);
    const [isCheckout, setCheckout] = useState(false);

    let total = 0;
    cartData && cartData.forEach(item => {
        total += Number(item.price) * Number(item.count)
    })

    return <>
        <div className="px-4">
            <br /> <br />
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Shopping Cart History
            </Typography>
            <br />
            <Typography component="p" variant="body1">
                You have selected items in your cart.
            </Typography>
            <br />
            <List className={classes.root}>
                {cartData && cartData
                    .map((product, index) => (
                        <React.Fragment key={index}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Product" src={product.image && product.image[0]?.src} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${product.name} (${product.count})`}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                <b style={{ color: "red" }}> {product.price}/- KR only </b>
                                            </Typography>

                                        </React.Fragment>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <button className="btn btn-danger rounded-0" onClick={(e) => {
                                        let cartItems = JSON.parse(localStorage.getItem('cart'));
                                        const filter = cartItems.filter(item => item.id !== product.id);
                                        localStorage.setItem('cart', JSON.stringify(filter));
                                        setCartData(filter);
                                    }}>Remove</button>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </React.Fragment>
                    ))}
                <h3 className="mt-4" style={{ color: 'forestgreen' }}>Total billing amount is given below:</h3>
                <ListItem className={classes.listItem}>

                    <Typography variant="subtitle1" className={classes.total}>
                        {/* &pound; */}
                        {
                            total.toFixed(2)
                        }/- KR
                    </Typography>
                </ListItem>
                <div className="d-flex justify-content-end">
                    {
                        isCheckout ?
                            <PayWithPayPal items={cartData} total={total} />
                            :
                            <button onClick={() => setCheckout(true)} className="btn btn-danger">CheckOut</button>
                    }
                </div>
            </List>
        </div>
    </>
}

export default Cart