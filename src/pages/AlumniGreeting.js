import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHome, FaAngleRight } from "react-icons/fa";
import "../styles/AlumniGreeting.css";

const AlumniGreeting = () => {
  return (
    <div className="alumni-container">
      <Navbar />

      {/* 🔹 헤더 영역 */}
      <div className="serving-header">
        <img src={`${process.env.PUBLIC_URL}/assets/alumni-header.jpg`} alt="headerimg" className="headerimage" />
        <div className="serving-header-text">총동문회</div>
        <div className="serving-header-detail">동문과 함께 만들어가는 연세의 미래</div>
      </div>

      {/* 🔹 Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <span className="breadcrumb-home"><FaHome className="home-icon" /></span>
          <span className="breadcrumb-current">총동문회</span>
          <FaAngleRight className="breadcrumb-icon" />
          <span className="breadcrumb-current">동문회장 인사말</span>
        </div>
      </div>

      {/* 🔹 본문 */}
      <div className="serving-content">
        <div className="serving-content-title">
            연세대학교 의료산업 <br />
            최고위자과정 동문 여러분
        </div>

        <div className="serving-content-detail">
        안녕하십니까?<br />
        저는 연세대학교 의료산업 최고위자과정 2대 총동문회장 ‘강대원’입니다.<br />
        먼저, 본 과정과 총동문회에 많은 관심과 사랑을 보내주신 여러분께 깊은 감사의 인사를 드립니다.<br />
        <br />
        우리 ‘연세대학교 의료산업 최고위자과정’은 지난 2020년 개설이래로 대한민국 의료계를 대표하는 최고경영자 과정으로 자리매김해 왔습니다.<br />
        이런 훌륭한 과정의 총동문회장이라는 중책을 맡게 되어 매우 영광스럽게 생각합니다.<br />
        <br />
        전 세계가 다양한 보건의료 문제에 직면한 상황에서, 우리는 보다 적극적으로 대처하고 발전해야 할 시기에 있습니다.<br />
        고령화, 난치성 질환, 저출산 등의 문제는 우리 사회의 중요한 과제로 대두되고 있습니다.<br />
        <br />
        우리 ‘연세대학교 의료산업 최고위자과정’은 의료산업의 발전을 이끌어 가고 있는 자랑스러운 최고경영자과정입니다.<br />
        우리 동문들은 현재 의료산업 각계각소에서 중요한 역할을 하고 있으며, 총동문회는 이들이 함께 소통하고 협력할 수 있는 중심이 될 것입니다.<br />
        <br />
        우리의 목표는 ‘연세대학교 의료산업 최고위자과정’이 더욱 발전하고, 우리 동문들이 사회 각계각층에서 빛나는 역할을 할 수 있도록 돕는 것입니다.<br />
        이를 위해 총동문회는 끊임없는 노력과 지원을 약속합니다.<br />
        여러분의 가정과 직장에 항상 건강과 행복이 함께하기를 기원합니다.<br />
        <br />
        감사합니다
        </div>

        <div className="serving-content-all">
          <br />
          <span className="serving-content-all-text">연세대학교 의료산업 최고위자과정<br />2대 총동문회장 강대원 배상</span>
        </div>

        <img src={`${process.env.PUBLIC_URL}/assets/sign.png`} alt="signature" className="signpng" />

        <img src={`${process.env.PUBLIC_URL}/assets/alumni.jpg`} alt="alumni" className="alumnijpg" />
      </div>

      <Footer />
    </div>
  );
};

export default AlumniGreeting;
