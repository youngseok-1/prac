import React from "react";
import Navbar from "../components/Navbar"; // 기존 Navbar 사용
import Footer from "../components/Footer"; // 기존 Footer 사용
import "../styles/Introduce.css"; // 스타일 추가
import { FaHome } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const ServingPage = () => {
  return (
    <div className="serving-container">
      <Navbar />
      
      {/* 🔹 배경 이미지 추가 */}
      <div className="serving-header">
      <img src={`${process.env.PUBLIC_URL}/assets/introduce1.jpg`} alt="introheader" className="headerimage" />  
        <div className="serving-header-text">
          <span>과정 소개</span>
        </div>
        <div className="serving-header-detail">
        <span>연세대학교 의료산업 최고위자과정을 소개합니다.</span>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <span className="breadcrumb-home">
          <FaHome className="home-icon" />
           </span>
          <span className="breadcrumb-current">과정 소개</span>
        </div>
      </div>

      <div className="serving-content">
        <div className="serving-content-title">
        <span className="blue-text">의료산업 리더를 위한 혁신 네트워크와 역량 강화 과정</span>
         </div>

        <div className="serving-content-detail">
            본 과정은 고도의 지식과 기술의 결합체인 의료산업에 종사하는<br />
            리더들의 지견(知見)을 넓혀 경영자로서 역량을 강화하고,<br />
            산·학·연·병·관의 상호이해와 협력을 기반으로 한 강력한 네트워크와 Innovative Healthcare Ecology를<br />
            조성하여 대한민국 의료산업이 세계의료를 선도할 수 있도록 하고자 합니다.<br />
    `        <br /> 
            ‘의료산업 최고위자 과정’의 일원이 된다는 것은 산업리더로서 경쟁력을 강화하고,<br />
            함께 협력해야 할 헬스케어 관련기업, 의과대학, 연구소, 병원과 긴밀한 네트워크를 유지함은 물론<br />
            정부와의 대화·소통창구를 확보한다는 것을 의미합니다.<br />
            <br />
            본 과정을 통해 구축된 100여명의 핵심적이고,<br />
            단단한 네트워크를 통해 여러분의 업력을 더욱 더 발전시켜 가실 것을 기원합니다.<br />
        </div>


       
        <img src={`${process.env.PUBLIC_URL}/assets/introduce2.jpg`} alt="serveimg" className="servejpg" />

        <button className="download-btn">브로슈어 다운로드 
            <FaDownload className="download-icon" />
        </button>
        


        
      </div> 
      <Footer />
    </div>
  );
};

export default ServingPage;
