import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Card, { CardHeader, CardContent } from 'material-ui/Card';

const styles = {
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#a2ed0a',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};
class Donations extends Component {

  render() {
     if(this.props.donation_props){
      var donations = this.props.donation_props.map((cd)=>{
        return <div className='outerMargin' key={cd.campaign_by}>
                  <Card>
                    <CardHeader
                      title={ <Typography component="p">
                                <span className="raleway-font">All Donations</span>
                              </Typography>
                            }

                    />
                        <Divider/>
                    {
                      cd.donations.map((d)=>{
                        let avatar = d.name.slice(0, 1);
                    return <div className="row" key={d.name}>
                    <div className="col-md-2">
                      <Avatar style={styles.avatar}>{avatar}</Avatar>
                    </div>
                    <div className="col-md-10">
                      <CardContent key={d.name}>
                      <h5 >₹ <span>{d.amount} </span> from</h5>
                      <h6>{d.name}</h6>
                      </CardContent>
                    </div>
                      
                    </div>
                    })
                  }
                </Card>
              </div>
            })
       }
    return (
        <div>
        	{donations}
        </div>
    );
  }
}

export default Donations;
