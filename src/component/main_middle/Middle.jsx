import React from "react";
import "./middle.css";
import Profile from "../../assets/photo (8).jpg";
import Profile1 from "../../assets/photo (1).jpg";
import Profile2 from "../../assets/photo (2).jpg";
import Profile3 from "../../assets/photo (3).jpg";
import Profile4 from "../../assets/photo (4).jpg";
import Profile5 from "../../assets/photo (5).jpg";
import Profile6 from "../../assets/photo (6).jpg";
import { AiOutlineEllipsis } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../reducer/Post";

const Middle = () => {
  const myPost = useSelector((state) => state?.posts?.posts);
  const dispatch = useDispatch();
  const newPost = (event) => {
    event.preventDefault();
    const data = {
      user: "Subham",
      profile_img: Profile,
      user_info: "India, 1 MIN AGO",
      posts:
        "lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      liked_img_1: Profile1,
      liked_img_2: Profile2,
      liked_img_3: Profile4,
      liked_info: "Liked by Ankit and 30 other",
      caption: "Life is all about a race.",
      has_tag: "#lifestyle",
      comment: "view all 2 comments",
    };
    dispatch(addPost(data));
  };

  return (
    <div className="container__middle">
      <div className="middle">
        <div className="stories">
          <div className="profile-photo">
            <img src={Profile} alt="" />
          </div>
          <p className="name">Your story</p>
        </div>
        <div className="stories">
          <div className="profile-photo">
            <img src={Profile1} alt="" />
          </div>
          <p className="name">Ankit</p>
        </div>
        <div className="stories">
          <div className="profile-photo">
            <img src={Profile2} alt="" />
          </div>
          <p className="name">Jyoti</p>
        </div>
        <div className="stories">
          <div className="profile-photo">
            <img src={Profile3} alt="" />
          </div>
          <p className="name">Deepak</p>
        </div>
        <div className="stories">
          <div className="profile-photo">
            <img src={Profile4} alt="" />
          </div>
          <p className="name">Neha</p>
        </div>
        <div className="stories">
          <div className="profile-photo">
            <img src={Profile5} alt="" />
          </div>
          <p className="name">Mukesh</p>
        </div>
        <div className="stories">
          <div className="profile-photo">
            <img src={Profile6} alt="" />
          </div>
          <p className="name">Angle</p>
        </div>
      </div>

      <form className="create-post">
        <div className="profile-photo">
          <img src={Profile2} alt="" />
        </div>
        <input
          type="text"
          placeholder=" What's on your mind "
          id="create-post"
          // onChange={inputValue}
        />
        <input
          type="submit"
          value="post"
          className="btn btn-primary"
          onClick={newPost}
        />
      </form>

      {/* =======FEEEDS======== */}
      <div className="posts">
        {myPost?.map(
          ({
            id,
            profile_img,
            user,
            user_info,
            post,
            liked_img_1,
            liked_img_2,
            liked_img_3,
            liked_info,
            caption,
            comment,
            has_tag,
            posts,
          }) => {
            return (
              <div className="feed">
                <div key={id} className="head">
                  <div className="user">
                    <div className="profile-photo">
                      <img src={profile_img} />
                    </div>
                    <div className="user_info">
                      <h3>{user}</h3>
                      <small>{user_info}</small>
                    </div>
                  </div>
                  <div>
                    <span className="edit">
                      <i>
                        <AiOutlineEllipsis />
                      </i>
                    </span>
                  </div>
                </div>
                <div className="post">
                  <img src={post} alt="" />
                  <p>{posts}</p>
                </div>
                <div className="action-button">
                  <div className="action">
                    <i>
                      <AiOutlineHeart />
                    </i>
                    <i>
                      <FaRegCommentDots />
                    </i>
                    <i>
                      <AiOutlineShareAlt />
                    </i>
                  </div>
                  <div className="bookmarks">
                    <i>
                      <FiBookmark />
                    </i>
                  </div>
                </div>
                <div className="liked-by">
                  <img src={liked_img_1} />
                  <img src={liked_img_2} />
                  <img src={liked_img_3} />
                  <p>{liked_info}</p>
                </div>
                <div className="caption">
                  <p>
                    <b>{user} </b>
                    {caption} <span className="has-tag">{has_tag}</span>
                  </p>
                </div>
                <div className="text-muted">{comment}</div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Middle;
