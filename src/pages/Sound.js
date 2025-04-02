import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHome} from "react-icons/fa";
import "../styles/Sound.css";

const AlumniGreeting = () => {
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
              <div className="post-box">
                <img src={`${process.env.PUBLIC_URL}/assets/post1.jpg`} alt="post1" className="post-img" />
                <div className="hover-arrow">→</div>
                <div className="post-underline"></div>
                <div className="post-title">2025년 교직원 새해인사</div>
                <div className="post-detail">
                  2025년 새해를 맞이하여 하나님의 크신 은혜가 선생님과<br />
                  가정에 함께 하시기를 기원합니다.
                </div>
                <div className="post-date">⏰2024-12-30</div>
              </div>
              <div className="post-box">
                <img src={`${process.env.PUBLIC_URL}/assets/post2.jpg`} alt="post2" className="post-img" />
                <div className="hover-arrow">→</div>
                <div className="post-underline"></div>
                <div className="post-title">제 2기 과정 수료식</div>
                <div className="post-detail">
                  제 2기 연세대학교 의료산업 최고위자 과정 수료식
                </div>
                <div className="post-date">⏰2024-11-30</div>
              </div>
              <div className="post-box">
                <img src={`${process.env.PUBLIC_URL}/assets/post3.jpg`} alt="post3" className="post-img" />
                <div className="hover-arrow">→</div>
                <div className="post-underline"></div>
                <div className="post-title">제 2기 과정 입학식</div>
                <div className="post-detail">
                제 2기 연세대학교 의료산업 최고위자 과정 입학
                </div>
                <div className="post-date">⏰2024-07-01</div>
              </div>

              <div className="post-box">
                <img src={`${process.env.PUBLIC_URL}/assets/post4.jpg`} alt="post4" className="post-img" />
                <div className="hover-arrow">→</div>
                <div className="post-underline"></div>
                <div className="post-title">제 1기 과정 수료식</div>
                <div className="post-detail">
                제 1기 연세대학교 의료산업 최고위자 과정 수료식
                </div>
                <div className="post-date">⏰2024-06-20</div>
              </div>

              <div className="post-box">
                <img src={`${process.env.PUBLIC_URL}/assets/post5.jpg`} alt="post5" className="post-img" />
                <div className="hover-arrow">→</div>
                <div className="post-underline"></div>
                <div className="post-title">제 1기 과정 입학식</div>
                <div className="post-detail">
                제 1기 연세대학교 의료산업 최고위자 과정 입학식
                </div>
                <div className="post-date">⏰2024-03-02</div>
              </div>

              <div className="post-box">
                <img src={`${process.env.PUBLIC_URL}/assets/post6.jpg`} alt="post6" className="post-img" />
                <div className="hover-arrow">→</div>
                <div className="post-underline"></div>
                <div className="post-title">2024년 송년의 밤</div>
                <div className="post-detail">
                안녕하세요. 2024년 송년의 밤에 여러분을 초대합니다.<br />
                풍성하고 즐거운 행사가 되도록 노력하겠습니다. 감사합...
                </div>
                <div className="post-date">⏰2023-12-31</div>
              </div>
              </div>
      

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
