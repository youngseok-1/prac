import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHome, FaAngleRight } from "react-icons/fa";
import "../styles/Alumni4.css";

const AlumniGreeting = () => {
  return (
    <div className="alumni-container">
      <Navbar />

      {/* 🔹 헤더 영역 */}
      <div className="serving-header">
        <img src={`${process.env.PUBLIC_URL}/assets/alumni4.jpg`} alt="headerimg" className="headerimage" />
        <div className="serving-header-text">동문 소개</div>
        <div className="serving-header-detail">연세대학교 의과대학 ‘의료산업최고위자 과정’ 동문을 소개합니다.</div>
      </div>

      {/* 🔹 Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <span className="breadcrumb-home"><FaHome className="home-icon" /></span>
          <span className="breadcrumb-current">총동문회</span>
          <FaAngleRight className="breadcrumb-icon" />
          <span className="breadcrumb-current">동문 소개</span>
        </div>
      </div>

      {/* 🔹 본문 */}
      <div className="alumni-table-container">
      <h2 className="table-title">동문 소개</h2>

      <div className="search-bar">
        <input type="text" placeholder="직책 또는 내용 검색" />
        <span className="search-icon">🔍</span>
      </div>

      <table className="alumni-table">
        <thead>
          <tr>
            <th>입학년도</th>
            <th>근무처</th>
            <th>소속</th>
            <th>회사명</th>
            <th>회사 소개</th>
            <th>홈페이지 주소</th>
            <th>전화번호</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {/* 예시 데이터 */}
          {Array.from({ length: 20 }).map((_, idx) => (
            <tr key={idx}>
              <td>Cell text</td>
              <td>Cell text</td>
              <td>Cell text</td>
              <td>Cell text</td>
              <td>Cell text</td>
              <td>Cell text</td>
              <td>Cell text</td>
              <td>Cell text</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button>{'≪'}</button>
        <button>{'<'}</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button className={num === 1 ? "active" : ""} key={num}>{num}</button>
        ))}
        <button>{'>'}</button>
        <button>{'≫'}</button>
      </div>
    </div>
  

        
      <Footer />
    </div>
  );
};

export default AlumniGreeting;
