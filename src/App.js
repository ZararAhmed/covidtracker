import React, { Component } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import { CircularProgress } from "@material-ui/core";

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
    console.log(data);
  }
  render() {
    const { data } = this.state;
    if (!data) {
      return <CircularProgress />
    }
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart />
      </div>
    );
  }

}

export default App;
