import React, { Component } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import { CircularProgress } from "@material-ui/core";
import covidImage from "./images/covid-image.png";


class App extends Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data })
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });
  }
  render() {
    const { data, country } = this.state;
    if (!data) {
      return <CircularProgress />
    }
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="covidImage"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }

}

export default App;
