import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import { AddPoints } from '../AddPoints';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../state/store';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(1),
  },
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
            key={el.id}
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
      <Typography variant="h4" component="h2" className={classes.title}>{title}</Typography>
      {children}
    </Paper>
  );
}

export const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const professorsState = useSelector(state => state.professors);
  const studentsState = useSelector(state => state.students);
  const housesState = useSelector(state => state.houses);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <Panel title="Maisons">
          <ItemsList
            data={housesState.houses}
            extractPrimary={(house) => house.name}
            extractSecondary={(house) => house.points}
          />
        </Panel>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Panel title="Professeurs">
          <ItemsList
            data={professorsState.professors}
            extractPrimary={(prof) => `${prof.firstname} ${prof.lastname}`}
            extractSecondary={(prof) => prof.points}
          />
        </Panel>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Panel title="Ajouter des points">
          <AddPoints
            professors={professorsState.professors}
            students={studentsState.students}
          />
        </Panel>
      </Grid>
    </Grid>
  );
}
