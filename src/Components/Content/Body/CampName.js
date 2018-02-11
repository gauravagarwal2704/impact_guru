import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

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

class CampName extends Component {

  render() {
      if(this.props.name){
      var cards = this.props.name.map((cd)=>{
        return <div key={cd.campaign_by}>
                  <Paper elevation={4}  style={styles.inner_padding} className="heading-center">
                    <Typography variant="headline" component="h3" style={styles.raleway} >
                      {cd.campaign_name}
                    </Typography>
                    <Typography component="h4" style={styles.nunito}>
                      <b>By</b> {cd.campaign_by}
                    </Typography>
                  </Paper>
                </div>
              })
    }
    else{
      cards = <div>
        Loading...
      </div>
    }
    return (
        <div>
          {cards}
        </div>
    );
  }
}

export default CampName;
