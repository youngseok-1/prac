import React from "react";
import Navbar from "../components/Navbar"; // 기존 Navbar 사용
import Footer from "../components/Footer"; // 기존 Footer 사용
import "../styles/ServingPage.css"; // 스타일 추가
import { FaHome } from "react-icons/fa";

const ServingPage = () => {
  return (
    <div className="serving-container">
      <Navbar />
      
      {/* 🔹 배경 이미지 추가 */}
      <div className="serving-header">
      <img src={`${process.env.PUBLIC_URL}/assets/header-image.jpg`} alt="headerimg" className="headerimage" />  
        <div className="serving-header-text">
          <span>모시는 글</span>
        </div>
        <div className="serving-header-detail">
        <span>연세대학교 의료산업 최고위자과정과 함께할 관계를 가치 있게 지속적으로 강화합니다.</span>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <span className="breadcrumb-home">
          <FaHome className="home-icon" />
           </span>
          <span className="breadcrumb-current">모시는 글</span>
        </div>
      </div>

      <div className="serving-content">
        <div className="serving-content-title">
        의료혁신과 헬스케어 리더 양성을 위한 <br />
        <span className="blue-text">대한민국 대표 지식공동체</span>
         </div>

        <div className="serving-content-detail">
        안녕하세요.<br />
        연세대학교 의과대학 ‘의료산업최고위자 과정’에 관심을 가져 주셔서 진심으로 감사합니다.<br />
        <br />

        연세대학교 의료산업최고위자 과정은 ‘인류를 질병으로부터 자유롭게 한다’는<br />
        연세대학교 의료원의 사명을 계승하여 <strong>‘의료혁신(醫療革新)</strong>을 위해 <strong>동주공제(同舟共濟)</strong>하며<br />
        세상을 더 건강하게 하기 위해 2020년 설립되었습니다.<br />
        <br />
        본 과정은 병원, 제약, 의료기기산업을 미래의학, 첨단의료, 규제개혁, 디지털 혁신이라는<br />
        키워드로 묶어, 대한민국 의료산업을 대표하는<br />
        지식공동체이자 헬스케어 리더그룹이 되고자 합니다.<br />
        <br />
        많은 대한민국의 헬스케어 리더분들께서 저희 ‘연세대학교 의료산업 최고위자과정’과 함께<br />
        세상을 건강하게 하는 길에 동참해 주시길 기대합니다.<br />
        <br />
        감사합니다.
        <br />
        </div>


        <div className="serving-content-all">
          <br />
          <span className="serving-content-all-text">연세대학교 <br />
          의료산업최고위자 과정 일동 </span>
        </div>

        <img src={`${process.env.PUBLIC_URL}/assets/sign.png`} alt="headerimg" className="signpng" />

        <img src={`${process.env.PUBLIC_URL}/assets/serve1.jpg`} alt="serveimg" className="servejpg" />


        
      </div> 
      <Footer />
    </div>
  );
};

export default ServingPage;
