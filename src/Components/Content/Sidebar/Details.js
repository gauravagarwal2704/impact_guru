import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import Card, { CardHeader,  CardContent } from 'material-ui/Card';
// import './Header.css';

const styles = {
  inner_padding:{
    padding:'15px',
  },
  raleway:{
    fontFamily:'Raleway'
  },
   nunito:{
    fontFamily:'Nunito',
    color:'#a2ed0a'
  }
};

class Details extends Component {


  render() {
    if(this.props.c_details){
        var detail = this.props.c_details.map((cd)=>{
                return <div key={cd.campaign_by}>
                        <Card>
                        <CardHeader
                          title={ <Typography component="p">
                                <span className="raleway-font">Campaign Details</span>
                              </Typography>
                            }
                        />
                        <Divider/>
                        <CardContent>
                          <p component="p">
                            <h6>About Campaigner</h6>
                            <h5 style={styles.nunito}>{cd.campaign_details.about}</h5>
                          </p>

                          <p component="p">
                            <h6>About Beneficiary</h6>
                            <h5 style={styles.nunito}>{cd.campaign_details.beneficiary}</h5>
                          </p>
                        </CardContent>
                      </Card>
                      </div>
          
      })
      }
    return (
       <div className='outerMargin'>{detail}</div>
    );
  }
}

export default Details;
