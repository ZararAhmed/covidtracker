import React from 'react'
import { Card, CardContent, Typography, Grid, CircularProgress } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import clsx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const dateValue = new Date(lastUpdate).toDateString()
  if (!confirmed) {
    return <CircularProgress/>
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={3} className={clsx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={1.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{dateValue}</Typography>
            <Typography color='textPrimary' variant='body2'>Number of active cases of covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={clsx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered.value} duration={1.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{dateValue}</Typography>
            <Typography color='textPrimary' variant='body2'>Number of Recoveries from covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={clsx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={1.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{dateValue}</Typography>
            <Typography color='textPrimary' variant='body2'>Number of Deaths from covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}
export default Cards;