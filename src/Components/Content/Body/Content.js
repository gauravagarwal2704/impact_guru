import React, { Component } from 'react';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class Content extends Component {

  render() {
    return (
        <div>
        	<Card>
            <CardHeader
              title="Story"
              className="heading-center"
            />
            <Divider />
            
            <CardContent>
              <p component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with
                your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                Education is the passport to the future, for tomorrow belongs to those who prepare for it today - Malcom X
                </p>
                <p component="p">
                <br/>  As we read this quote, I'm sure we believe that education is 
                that one passport that every child deserves to hold. That being said, the sad truth is, 
                it is a lot more difficult for some compared to others.
        Project Alpha by The Living Routes - story -1
        </p>
        
        <CardMedia
        style={{height:'450px'}}
            image="/assets/images/slider/5.jpg"
          />
          <br/>
        <p component="p">
        Hence, as a part of our project, Project Alpha by The Living Routes , we aim to throw some limelight on this inspirational school and help them raise funds for building a recreational centre/classroom for the students.
       <br/> Project Alpha, the first of its kind, is a project spearheaded by a couple, Tracey and Ajay who connect their passion for bike riding with a cause, the cause being education this time. As ardent bikers, both Tracey and Ajay are touring across the length and breadth of the country on their bikes and achieving the following objectives for this project;
       <br/> 1. Covering minimum of 15 states and 10,000 km on their respective bikes ( neither is a pillion, both are riders)
        <br/>2. Raising 5 lakh rupees via confounding portal ImpactGuru to help build classroom for the much deserved kids at Sikkim Himalayan Academy.
      <br/>3. Understanding perspectives on education enroute from people across the nation.
        <br/>4. Create awareness  and educating ourselves, alongwith others, about the diverse culture of our country.
        <br/>This is only the first hence Project Alpha. The couple also hopes to continue the saga with more such expeditions and biking for many more causes. '
      </p>
<p component="p">
        <br/>About the School and the challenges faced:
       <br/> Started by a few local Sikkimese teachers and volunteers in 2003, the mission of SHA is to provide free education as well as daily care to children in need from the remote mountains of Sikkim. The school faces multiple challenges in doing so. Some of them include staying in the makeshift hostel in the attic of the school, accessibility to resources, weather conditions, lack of opportunities for talented kids due to devoid of a facility room etc. 
</p>
<p component="p">
        <br/>How can you help?
        <br/>The school wants to provide its students not just in academia but also extra curricular activities so each student can hone over their talents. The academy is also short of one classroom for its students who are currently being taught in corridors. They hope to build a recreation room which can also be used as a classroom for the same. Every donation made to this project will be contributed to building this room for the kids at Sikkim Himalayan Academy. 
</p>

              
            </CardContent>
          </Card>
        </div>
    );
  }
}

export default Content;
