import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaHome } from "react-icons/fa";
import "../styles/PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!post) return <div>로딩 중...</div>;

  return (
    <div className="alumni-container">
      <Navbar />

      {/* 헤더 영역 */}
      <div className="serving-header">
        <img src={`${process.env.PUBLIC_URL}/assets/sound.jpg`} alt="headerimg" className="headerimage" />
        <div className="serving-header-text">연세소리</div>
        <div className="serving-header-detail">연세대학교 의과대학 ‘의료산업최고위자 과정’ 소식을 전해드립니다.</div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <span className="breadcrumb-home"><FaHome className="home-icon" /></span>
          <span className="breadcrumb-current">연세소리</span>
        </div>
      </div>

      {/* 상세 내용 */}
      <div className="post-detail-container" style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2>{post.title}</h2>
        <img
          src={`${process.env.PUBLIC_URL}/assets/post${id}.jpg`}
          alt="게시물 이미지"
          className="post-detail-img"
          
        />
        <p>{post.content}</p>

        <button
          onClick={() => navigate("/sound")}
        >
          목록으로
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default PostDetail;
