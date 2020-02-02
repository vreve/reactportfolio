import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';



const api = {
  old_key: "&APPID=7d4ef5d23648c7c62acd3ccfa1a0a30b",
  key: "&APPID=f8384513fad5f91ea04d07a2cbf916ec",
  base: "https://api.openweathermap.org/data/2.5/",
  query: "weather?q=stockholm,se",
  options: "&units=metric"
}

class App extends Component {
  state = {weather: null}
  componentDidMount() {

    fetch(api.base + api.query + api.key + api.options)
      .then(response => response.json())
      .then(data => this.setState({ weather: data.main.temp }));
  }

  render() {
    
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/projects">Projekt</Link>
                <Link to="/contact">Kontakt</Link>
                <Link to="/weather">weather</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Portfolio</Link>}>
            <Navigation>
              <Link to="/projects">Projekt</Link>
              <Link to="/contact">Kontakt</Link>
              <Link to="/weather">weather</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main weather={this.state.weather} />
        </Content>
    </Layout>
</div>



    );
  }
}





export default App;
