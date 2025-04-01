import React from "react";
import Navbar from "../components/Navbar"; // 기존 Navbar 사용
import Footer from "../components/Footer"; // 기존 Footer 사용
import "../styles/Entrance.css"; // 스타일 추가
import { FaHome, FaAngleRight } from "react-icons/fa"; // 🔹 아이콘 추가

const ServingPage = () => {
  return (
    <div className="serving-container">
      <Navbar />
      
      {/* 🔹 배경 이미지 추가 */}
      <div className="serving-header">
      <img src={`${process.env.PUBLIC_URL}/assets/campus.jpg`} alt="introheader" className="headerimage" />  
        <div className="serving-header-text">
          <span>입학 안내</span>
        </div>
        <div className="serving-header-detail">
        <span>연세대학교 의료산업 최고위자 과정 입학 안내를 소개합니다.</span>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="breadcrumb-container">
          {/* 홈 아이콘 */}
          <span className="breadcrumb-home">
            <FaHome className="home-icon" />
          </span>
          {/* 입학 안내 */}
          <span className="breadcrumb-current">입학 안내</span>
          {/* > 아이콘 */}
          <FaAngleRight className="breadcrumb-icon" />
          {/* 온라인 지원 */}
        </div>

        <div className="breadcrumb-container">
        <span className="breadcrumb-current">입학 안내</span>
          {/* > 아이콘 */}
        </div>  
      </div>
  

      <div className="serving-content">
        <div className="serving-content-title">
          <span className="blue-text">입학 안내</span>
        </div>
        <span className="Entrance-text">강남세브란스병원과 연세대학교 의과대학이 함께 신설한 ‘의료산업 최고위자과정’은 의료산업 혁신 성장을 촉진하기 위한 인프라를 구축하고, 다양한 사업화 지원서비스와 인력양성 프로그램을 제<br />
          공하고자 신설하게 되었습니다. 미래 의학의 동향, 첨단의료기기 정책, 의료기기 규제 철학, 디지털 혁신 등에 대한 의료산업 전반의 주요 현안을 폭넓게 토론하는 네트워크를 구축하고자 하며 빠른<br /> 
          의료환경과 교육 등 선도적 대응을 하기 위하여 협력해 시너지 효과를 발휘하도록 노력하고 있습니다.
        </span>
        <div className="entrance-title2">과정 정보</div>
        <img src={`${process.env.PUBLIC_URL}/assets/poster.jpg`} alt="poster" className="posterimage" /> 
        <div className="title">모집기간</div>
        <div className="detail">2025년 1월 16일(목) ~ 5월 8일(목) 매주 목요일, 15주간</div>
        <div className="title2">장 소</div>
        <div className="detail2">강남세브란스병원 세미나실(1동 9층)</div>
        <div className="title3">모집인원</div>
        <div className="detail3">약 20명내외</div>
        <div className="title4">모집대상</div>
        <div className="detail4">의료기기, 의약품, 바이오 등 의료산업 관련 임원 및 정부기관 관계자</div>
        <div className="title5">전형방법</div>
        <div className="detail5">서류전형 후 합격여부 개별통지<br />
                                 서류접수 기간 : 2024년 11월 1일 ~ 2025년 1월 10일<br />
                                 접수방법 : 이메일 접수 (sinae@yuhs.ac)</div>
        <div className="title6">제출서류</div>
        <div className="detail6">입학원서, 재직증명서, 사업자등록증</div>
        <div className="title7">교육비</div>
        <div className="detail7">600만원</div>
        <div className="title8">문 의 처</div>
        <div className="detail8">담당자 : 박시내<br />
                                 Tel : 02-2019-5451<br />
                                 E-mail : sinae@sinae@yuhs.ac</div>
                                 <div class="table-container">
  <table class="schedule-table">
    <thead>
      <tr>
        <th>주차</th>
        <th>일자</th>
        <th>내용</th>
        <th>강사</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2025-01-16</td>
        <td>개강식 / 의료기기산업의 현재와 미래</td>
        <td>구성욱 (강남세브란스병원 병원장)</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2025-01-23</td>
        <td>Digital Healthcare 2025: Age of Generative AI</td>
        <td>나군호 (네이버헬스케어 소장)</td>
      </tr>
      <tr>
        <td>3</td>
        <td>2025-02-06</td>
        <td>뉴노멀 시대 인사조직전략</td>
        <td>황성현 (가천대학교 교수)</td>
      </tr>
      <tr>
        <td>4</td>
        <td>2025-02-13</td>
        <td>인공지능의 의료적용: 현황과 미래</td>
        <td>김광준 (세브란스병원 교수)</td>
      </tr>
      <tr>
        <td>5</td>
        <td>2025-02-20</td>
        <td style={{ paddingLeft: "500px" }}>특강</td>
        <td></td>
      </tr>
      <tr>
        <td>6</td>
        <td>2025-02-27</td>
        <td>건강보험심사평가원의 역할과 중요성</td>
        <td>서희숙 (건강보험심사평가원 실장)</td>
      </tr>
      <tr>
        <td>7</td>
        <td></td>
        <td>2025-03-07~2025-03-08 (워크숍)</td>
        <td></td>
      </tr>
      <tr>
        <td>8</td>
        <td>2025-03-13</td>
        <td>건강관리의 중요성</td>
        <td>이강영 (세브란스병원 병원장)</td>
      </tr>
      <tr>
        <td>9</td>
        <td>2025-03-20</td>
        <td>디지털의료제품법 이해</td>
        <td>정희교 (김앤장 법률사무소 고문)</td>
      </tr>
      <tr>
        <td>10</td>
        <td>2025-03-27</td>
        <td>정밀의료 어디까지 왔나?</td>
        <td>최재영 (연세대학교 학장)</td>
      </tr>
      <tr>
        <td>11</td>
        <td>2025-04-03</td>
        <td>의료기기 규제 동향</td>
        <td>이정민 (한국의료기기안전정보원 원장)</td>
      </tr>
      <tr>
        <td>12</td>
        <td>2025-04-10</td>
        <td>정부의 바이오 디지털헬스 육성방향</td>
        <td>차순도 (한국보건산업진흥원 원장)</td>
      </tr>
      <tr>
        <td>13</td>
        <td>2025-04-17</td>
        <td>암의 예방과 치료</td>
        <td>노성호 (강남세브란스병원 교수)</td>
      </tr>
      <tr>
        <td>14</td>
        <td>2025-04-24</td>
        <td>오픈이노베이션과 스타트업 협업 전략</td>
        <td>허대석 (연세대학교 경영학과 교수)</td>
      </tr>
      <tr>
        <td>15</td>
        <td>2025-05-08</td>
        <td style={{ paddingLeft: "500px" }}>특강</td>
        <td></td>
      </tr>
      </tbody>
    </table>
</div>
<div className="title9">※ 상기 일정 및 강의제목은 상황에 따라 변경될 수 있음.</div>
<div className="title10">
  <span className="blue-text">담당자.</span> 박시내 | 
  <span className="blue-text">TEL.</span> 02)2019-5451 | 
  <span className="blue-text">E-mail.</span> sinae@yuhs.ac
</div>

      </div> 
      <Footer />
    </div>
  );
};

export default ServingPage;
