import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';
import blogPost from '../../../data/blog.json';
import { Link } from 'react-router-dom';
import SectionHeader from '../../../components/SectionHeader'
/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
        <SectionHeader name= "Recent Posts"/>
            <div className="postImageWrapper">
                <img src={require('../../../blogPostImages/AssasinsCreed-EzioAuditore.jpg')} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Assasins Creed</span>
                <h2>Ezio Auditore</h2>
                <span>posted by Shashank</span>
                <p>To say that nothing is true is to realize that the foundations of society are fragile and that we must be the shepherds of our civilization. To say everything is permitted is to...</p>

                <a href="#posts">  <button className="readMore">Read More</button> </a>


            </div>




        </Card>
    </div>
   )

 }

export default RecentPosts
