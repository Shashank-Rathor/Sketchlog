import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import SectionHeader from '../SectionHeader';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                  <SectionHeader name="About"/>
                </div>
                <div className="profileImageContainer">
                    <img src={require("../../Personal.jpg")} alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Shashank I am a software developer specialization in Front end developement....:)</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <SectionHeader name="Social Network"/>
                </div>
                <div className="socialMenu">
                    <ul>
                    <li><a href="https://www.facebook.com/shashank.shekhar.3511/"><img src={require("../../data/facebook.png")}/></a></li>
                    <li><a href="https://www.instagram.com/dashing_rathor/?hl=en"><img src={require("../../data/instagram.png")}/></a></li>
                    <li><a href="https://in.pinterest.com/"><img src={require("../../data/pintrest.png")}/></a></li>
                    </ul>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <SectionHeader name="Posts"/>
                </div>

                <div className="recentPosts" id="posts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>

                            );
                        })
                    }
                </div>

            </Card>
      </div>

   )

 }

export default Sidebar
