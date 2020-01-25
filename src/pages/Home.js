import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import { api } from '../api';

const useStyles = makeStyles(theme => ({
  item: {
    padding: theme.spacing(2),
  }
}));

const ItemsList = ({data, extractPrimary, extractSecondary}) => {
  if (!data) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <List>
      {
        data.map(el => (
          <ListItem
            ket={el.id}
          >
            <ListItemText
              primary={extractPrimary(el)}
              secondary={extractSecondary(el)}
            />
          </ListItem>
        ))
      }
    </List>
  )
}

const Panel = ({title, children}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.item}>
      <Typography variant="h4" component="h2">{title}</Typography>
      {children}
    </Paper>
  );
}

export const Home = () => {
  const classes = useStyles();

  const [houses, setHouses] = useState(null);
  const [professors, setProfessors] = useState(null);

  useEffect(() => {
    api('/houses').then((res) => {
      const houses = res.data;
      houses.sort((a, b) => b.points - a.points);
      setHouses(res.data);
    });
    api('/professors').then((res) => {
      const professors = res.data;
      professors.sort((a, b) => b.points - a.points);
      setProfessors(res.data);
    });
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <Panel title="Maisons">
          <ItemsList
            data={houses}
            extractPrimary={(house) => house.name}
            extractSecondary={(house) => house.points}
          />
        </Panel>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Panel title="Professeurs">
          <ItemsList
            data={professors}
            extractPrimary={(prof) => `${prof.firstname} ${prof.lastname}`}
            extractSecondary={(prof) => prof.points}
          />
        </Panel>
      </Grid>
      <Grid item xs={12}>
        <Panel title="Actions">
          
        </Panel>
      </Grid>
    </Grid>
  );
}
