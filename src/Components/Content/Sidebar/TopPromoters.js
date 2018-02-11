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

class TopPromoters extends Component {


  render() {
    if(this.props.tp){
        var detail = this.props.tp.map((cd)=>{
                return <div className='outerMargin' key={cd.campaign_by}>
                        <Card>
                        <CardHeader
                          title={ <Typography component="p">
                                <span className="raleway-font">Top Promoters</span>
                              </Typography>
                            }
                        />
                        <Divider/>
                        <CardContent>
                          <p component="p">
                            <h6>Support Fundraiser</h6>
                            <h5 style={styles.nunito}>{cd.top_promoters.name}</h5>
                          </p>
                        </CardContent>
                      </Card>
                      </div>
          
      })
      }
    return (
       <div>{detail}</div>
    );
  }
}

export default TopPromoters;

