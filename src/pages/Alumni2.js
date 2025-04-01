import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHome, FaAngleRight } from "react-icons/fa";
import "../styles/Alumni2.css";

const AlumniGreeting = () => {
  return (
    <div className="alumni-container">
      <Navbar />

      {/* 🔹 헤더 영역 */}
      <div className="serving-header">
        <img src={`${process.env.PUBLIC_URL}/assets/alumni2.jpg`} alt="headerimg" className="headerimage" />
        <div className="serving-header-text">조직도 및 분야</div>
        <div className="serving-header-detail">연세대학교 의과대학 ‘의료산업최고위자 과정’ 조직도 및 분야를 소개합니다.</div>
      </div>

      {/* 🔹 Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <span className="breadcrumb-home"><FaHome className="home-icon" /></span>
          <span className="breadcrumb-current">총동문회</span>
          <FaAngleRight className="breadcrumb-icon" />
          <span className="breadcrumb-current">조직도 및 분야</span>
        </div>
      </div>

      {/* 🔹 본문 */}
      <div className="structure-container">

            {/* 1단계 */}
            <div className="level level-top horizontal-line">
            <div className="box">고문</div>
            <div className="box center dark">동문회장</div>
            <div className="box">명예회장</div>
            </div>

            <div className="level line-up">
            <div className="box semi-dark">수석부회장</div>
            </div>

            <div className="level line-up horizontal-line">
            <div className="box light no-line">연세대학교 사무국</div>
            <div className="box light center">사무총장</div>
            <div className="box light no-line">감사</div>
            </div>
            {/* 4단계 */}
            <div className="level line-up">
            <div className="box large">부회장단</div>
            </div>

            {/* 5단계 */}
            <div className="level line-up">
            <div className="box outline">동문회 회장</div>
            </div>
            <div className="level line-up">
            <div className="box outline">동문회 사무총장</div>
            </div>


        

        

        

        
      </div>

      <Footer />
    </div>
  );
};

export default AlumniGreeting;
