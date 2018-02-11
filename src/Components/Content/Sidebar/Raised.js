import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import { Progress, Button } from 'reactstrap';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import '../../../App.css';

const styles = {
  center : {
    textAlign : 'center'
  },
  right : {
    float : 'right'
  }
}

let amtRaised = 0;

class Raised extends Component {

  state={
    amtRaisedState : 0,
    amtTargetState : 0,
    progress :0,
    status : '',
  }

  componentDidMount(){
    this.updateAmount();
  }

  updateAmount=()=>{
    let progress = 0;
    let amtInterval = setInterval(()=>{
      amtRaised = this.state.amtRaisedState + Math.floor((Math.random() * 5000) + 1);
      this.setState({amtRaisedState: amtRaised}); 
      progress = (this.state.amtRaisedState * 100) / this.state.amtTargetState;
      this.setState({
        progress : progress
      })
      if(this.state.progress <= 40){
            this.setState({
              status : 'danger'
            })
        }
        else if(this.state.progress >= 41 && this.state.progress <= 80){
            this.setState({
              status : 'warning'
            })
        }
        else if(this.state.progress >= 90 && this.state.progress <= 100){
            this.setState({
              status : 'success'
            })
        }
      if(this.state.amtRaisedState >= this.state.amtTargetState){
              clearInterval(amtInterval);
      }
    }, 200);
  }

  render() {
    if(this.props.raised){
      var raisedAmt = this.props.raised.map((cd)=>{
        this.state.amtTargetState = cd.campaign_target;
        return <div className='outerMargin' key={cd.campaign_by}>
                  <Card>
                    <CardHeader
                      title={ <Typography component="p">
                                <span className="raleway-font">Donations</span>
                              </Typography>
                            }
                    />
                    <Divider />
                    <CardContent>
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="raleway-font">₹ <span>{this.state.amtRaisedState} </span> Raised</h5>
                        <h6 className="">of ₹ {cd.campaign_target}</h6>
                      </div>

                      <div className="col-md-4" >
                        <span style={styles.right}>351 Donors</span>
                        <br/>
                        <span style={styles.right}>in 54 days</span>
                      </div>
                    </div>
                    
                   
                      <Progress striped color={this.state.status} value={this.state.progress} /> {Math.floor(this.state.progress)} %
                      <br/>
                      <br />
                      <div style={styles.center}>
                      <div className="fb-share-button" 
                      data-href="https://www.facebook.com/ImpactGuru/" 
                      data-layout="button" data-size="large" 
                      data-mobile-iframe="true">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FImpactGuru%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
                          Share
                        </a>
                      </div></div>
                     
                      <br/>
                      <div style={styles.center}>
                        <Button color="primary">Start Similar Fundraiser</Button>{' '}
                      </div>
                    </CardContent>
                </Card>
              </div>
              })
    }
    return (
        <div>{raisedAmt}</div>        
    );
  }
}

export default Raised;
