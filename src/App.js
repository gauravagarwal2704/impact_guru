import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Content/Body/Slider';
import CampName from './Components/Content/Body/CampName';
import Raised from './Components/Content/Sidebar/Raised';
import Details from './Components/Content/Sidebar/Details';
import TopPromoters from './Components/Content/Sidebar/TopPromoters';
import Body from './Components/Content/Body/Body';
import Sidebar from './Components/Content/Sidebar/Sidebar';
import api from './Helpers/Helpers'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    api.fetchPrices()
      .then((fetchPrices) => {
        this.setState({ data: fetchPrices });
      })
  }

  render() {
    return (
      <div>
       <Header />
       <br/>
        <div className="container ">
          <div className="row">
            <div className="col-md-8">
              <Slider />
              <CampName name={this.state.data}/>
              <p></p>
            </div>
            <div className="col-md-4">
              <Raised raised={this.state.data}/>
              <Details c_details={this.state.data}/>
              <TopPromoters tp ={this.state.data} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <Body content={this.state.data}/>
            </div>
            <div className="col-md-4">
              <Sidebar sidebar={this.state.data}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
