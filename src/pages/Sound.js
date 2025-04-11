import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHome } from "react-icons/fa";
import "../styles/Sound.css";
import axios from "axios";
import { Link } from "react-router-dom"; 

const PAGE_SIZE = 6;

const AlumniGreeting = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0); // 0부터 시작
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios.get(`/api/posts?page=${page}&size=6`)
      .then((res) => {
        if (res.data && Array.isArray(res.data.content)) {
          setPosts(res.data.content);
          setTotalPages(res.data.totalPages);
        } else {
          console.error("백엔드 응답 형식이 예상과 다릅니다.", res.data);
          setPosts([]); // 기본값으로 처리
        }
      })
      .catch((err) => console.error(err));
  }, [page]);
  return (
    <div className="alumni-container">
      <Navbar />

      {/* 🔹 헤더 영역 */}
      <div className="serving-header">
        <img src={`${process.env.PUBLIC_URL}/assets/sound.jpg`} alt="headerimg" className="headerimage" />
        <div className="serving-header-text">연세소리</div>
        <div className="serving-header-detail">연세대학교 의과대학 ‘의료산업최고위자 과정’ 소식을 전해드립니다.</div>
      </div>

      {/* 🔹 Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <span className="breadcrumb-home"><FaHome className="home-icon" /></span>
          <span className="breadcrumb-current">연세소리</span>
        </div>
      </div>

      {/* 🔹 본문 */}
      <div className="alumni-table-container">
        <h2 className="table-title">동문회 소식</h2>

        <div className="search-bar">
          <input type="text" placeholder="검색어를 입력해주세요." />
          <span className="search-icon">🔍</span>
        </div>

        <div className="post-container2">
        {posts.map((post, index) => (
          <Link to={`/posts/${post.id}`} key={post.id} className="post-box-link">
            <div className="post-box">
              <img
                src={`${process.env.PUBLIC_URL}/assets/post${index + page * PAGE_SIZE + 1}.jpg`}
                alt={`post${index + 1}`}
                className="post-img"
              />
              <div className="hover-arrow">→</div>
              <div className="post-underline"></div>
              <div className="post-title">{post.title}</div>
              <div className="post-detail">{post.content}</div>
              <div className="post-date">⏰2024-12-30</div>
            </div>
          </Link>
          ))}
        </div>

        {/* 🔹 페이지네이션 */}
        <div className="pagination">
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))} disabled={page === 0}>
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button key={i} className={page === i ? "active" : ""} onClick={() => setPage(i)}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))} disabled={page === totalPages - 1}>
            {">"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AlumniGreeting;
