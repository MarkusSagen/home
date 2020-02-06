import React, { Component } from 'react'
import profile_img from '../img/profile_img.png';
import Social from '../components/Social'









// Bannerol: https://pt.stackoverflow.com/questions/170891/como-criar-banner-com-css

// Component for profile info at navbar
class Profile extends Component {
    render() {
        return (
            <div className="profile_box">
                <div className="profile_bg" >
                    <div className="profile_photo_border">
                      <div className="profile_img_box">
                        <img src={profile_img} className="profile_img"></img>
                      </div>
                    </div>
                </div>

                <div className="profile_bannerol">
                  <p className="profile_bannerol_name">{this.props.name}</p>
                </div>
                <div className="profile_desc_box">
                  <h6 className="profile_title_desc_text">Passionate About: </h6>
                  <p className="profile_desc_text">{this.props.desc}</p>
                  <p className="profile_end_desc_text">And much more</p>
                </div>
                <Social />
            </div>
            )
        }
    }

export default Profile
