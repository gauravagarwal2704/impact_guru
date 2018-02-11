import React, { Component } from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
       <footer className="footer">
		    <section className="footer-bg-1">
		    </section>
		    <section id="top-footer">
		        <div className="container ">
		            <div className="footer-top" id="new-footer">
		                <div className="row">
		                    <div className="col col-md-3 col-xs-12 col-sm-4">
		                        <h4>Connect with us</h4>
		                        <ul className="footer-nav">
		                            <li><b>General Enquiry :</b></li>
		                            <li className="hidden-xs"><b>Phone : </b>08030187007</li>
		                            <li className="visible-xs"><b>Phone : </b>08030187007</li>
		                            <li><b>Email : </b><a href="mailto:info@impactguru.com">info@impactguru.com</a></li>
		                            <li></li>
		                            <li><b>Fund Settlement :</b></li>
		                            <li className="hidden-xs"><b>Phone : </b>+91 - 8655066210 , 022-49717414</li>
		                            <li className="visible-xs"><b>Phone : </b>+91 - 8655066210 , 022-49717414</li>
		                            <li><b>Email : </b><a href="mailto:fundtransfer@impactguru.com">fundtransfer@impactguru.com</a></li>
		                        </ul>
		                        <ul className="social-icons">
		                            <li> <a rel="noopener noreferrer" href="https://www.facebook.com/ImpactGuru" target="_blank" title="Follow us on Facebook" className="facebook"> <i className="fa fa-facebook" aria-hidden="true"></i> </a> </li>
		                            <li> <a rel="noopener noreferrer" href="https://twitter.com/ImpactGuru" title="Follow us on Twitter" target="_blank" className="twitter"> <i className="fa fa-twitter" aria-hidden="true"></i> </a> </li>
		                            <li> <a rel="noopener noreferrer" href="https://www.linkedin.com/company/impact-guru" title="Follow us on Linkedin" target="_blank" className="linkedin"> <i className="fa fa-linkedin" aria-hidden="true"></i> </a> </li>
		                            <li> <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UC7Wk6CyitaJshN8V1KNNs8A" title="Youtube" target="_blank" className="youtube"> <i className="fa fa-youtube-square" aria-hidden="true"></i></a></li>
		                            <li> <a rel="noopener noreferrer" href="https://www.impactguru.com/blog" target="_blank" title="Follow our Blog" className="blog"> <i className="fa fa-wordpress" aria-hidden="true"></i> </a> </li>
		                        </ul>
		                    </div>
		                        <div className="col col-md-3 col-xs-12 col-sm-6">
		                            <h4 className="footer-h">About Us</h4>
		                            <ul className="footer-nav">
		                                <li><a href="https://www.impactguru.com/about-us" title="About Us" className="about-us-event">About Us</a></li>
		                                <li><a href="https://www.impactguru.com/team" title="Team &amp; Advisory" className="team-advisory-board-event">Team &amp; Advisory Board</a></li>
		                                <li><a href="https://www.impactguru.com/careers" title="Careers" className="careers-event">Careers</a></li>
		                                <li><a rel="noopener noreferrer" href="https://www.impactguru.com/blog" title="Blog" target="_blank" className="blog-event">Blog</a></li>
		                                <li><a href="https://www.impactguru.com/press-news" title="Press &amp; News" className="press-news-event">Press &amp; News</a></li>
		                                <li><a href="https://www.impactguru.com/globalgiving-partnership-enables-US-UK-tax-benefits-for-indian-ngos-and-social-enterprises" title="GlobalGiving Partnership" className="globalgiving-partnership-event">GlobalGiving Partnership</a></li>
		                                <li><a href="https://www.impactguru.com/contact-us" title="Contact Us" className="contact-us-event">Contact Us</a></li>
		                            </ul>
		                        </div>
		                        <div className="col col-md-3 col-xs-12 col-sm-6">
		                            <h4 className="footer-h">Learn</h4>
		                            <ul className="footer-nav">
		                                <li><a href="https://www.impactguru.com/how-crowdfunding-works" title="How Crowdfunding Works" className="how-crowdfunding-works-event">How Crowdfunding Works</a></li>
		                                <li><a href="https://www.impactguru.com/fundraising-ideas" title="Fundraising Ideas" className="fundraising-ideas-event">Fundraising Ideas</a></li>
		                                <li><a href="https://www.impactguru.com/fundraising-tips" title="Fundraising Tips" className="fundraising-tips-event">Fundraising Tips</a></li>
		                                <li><a href="https://www.impactguru.com/success-stories" title="Success Stories" className="success-stories-event">Success Stories</a></li>
		                                <li><a href="https://www.impactguru.com/help-center" title="Help Center" className="help-center-event">Help Center</a></li>
		                                <li><a href="https://www.impactguru.com/pricing" title="Pricing" className="pricing-event">Pricing &amp; Fees</a></li>
		                                <li><a href="https://www.impactguru.com/trust-and-safety" title="Trust &amp; Safety" className="trust-safety-event">Trust &amp; Safety</a></li>
		                            </ul>
		                        </div>
		                        <div className="col col-md-3 col-xs-12 col-sm-6">
		                            <h4 className="footer-h">Top Categories</h4>
		                            <ul className="footer-nav">
		                                <li><a href="https://www.impactguru.com/medical-crowdfunding" title="Medical Crowdfunding" className="donate-event">Medical Crowdfunding</a></li>
		                                <li><a rel="noopener noreferrer" href="https://www.impactguru.com/cancer-crowdfunding" title="Cancer Crowdfunding " className="faqs-by-donors-event">Cancer Crowdfunding </a></li>
		                                <li><a href="https://www.impactguru.com/transplant-crowdfunding" title="Transplant Crowdfunding" className="individual-giving-event">Transplant Crowdfunding</a></li>
		                                <li><a href="https://www.impactguru.com/ngo-crowdfunding" title="NGO Crowdfunding" className="csr-engagement-event">NGO Crowdfunding</a></li>
		                                <li><a href="https://www.impactguru.com/children-crowdfunding" title="Children Crowdfunding" className="family-office-giving-event">Children Crowdfunding</a></li>
		                                <li><a href="https://www.impactguru.com/education-crowdfunding" title="Education Crowdfunding" className="foundation-giving-event">Education Crowdfunding </a></li>
		                                <li><a href="https://www.impactguru.com/films-crowdfunding" title="Film Crowdfunding" className="foundation-giving-event">Film Crowdfunding </a></li>
		                            </ul>
		                        </div>
		                    </div>
		            </div>
		        </div>
		    </section>
		    <section id="last-footer">
		        <div className="container">
		            <div className="row ">
		                <div className="col-md-3 hidden-xs hidden-sm" style={{textAlign: 'center'}}> <a href="https://www.impactguru.com/" className="footer-logo" title="Impact Guru"> <img src="assets/images/logo.png" alt="Impact Guru"/> </a>
		                    <p className="copyright">© 2018 Impact Guru. All Rights Reserved.</p>
		                </div>
		                <div className="col-md-9" style={{textAlign: 'center'}}>
		                    <ul className="footer-link">
		                        <li><a href="https://www.impactguru.com/terms-of-use">Terms of Use</a></li>
		                        <li><a href="https://www.impactguru.com/privacy-policy">Privacy Policy</a></li>
		                        <li><a href="https://www.impactguru.com/report-abuse">Report Abuse</a></li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </section>
		</footer>
    );
  }
}

export default Header;



