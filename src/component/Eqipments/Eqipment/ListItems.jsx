import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { GlobalContext } from "../../Context/Context";

export default function CheckboxList({ categoryCount, categoryList }) {
    const { checked, handleToggle, brandSearch } = useContext(GlobalContext);

    const categoryCountArray = categoryCount && Object.entries(categoryCount);

    const filterBrand = categoryCountArray && categoryCountArray.filter(item => {
        return item[0].toLowerCase().includes(brandSearch.toLowerCase());
    });

    return (
        <List className="listScroll">
            {
                filterBrand ? filterBrand.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return <>
                        {value[0] !== "undefined" &&
                            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value[0])}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.includes(value[0]) ? true : false}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText className="text-muted" id={labelId} primary={value[0]} />
                                <ListItemSecondaryAction>
                                    <span className="text-muted">{value[1]}</span>
                                </ListItemSecondaryAction>
                            </ListItem>
                        }
                    </>
                }) :
                    categoryList?.map((item, value) => {
                        return <ListItem key={value} role={undefined} dense button onClick={handleToggle(value[0])}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.includes(value[0]) ? true : false}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText className="text-muted" primary={item.name} />
                            <ListItemSecondaryAction>
                                <span className="text-muted">{value[1]}</span>
                            </ListItemSecondaryAction>
                        </ListItem>
                    })
            }
        </List>
    );
}