import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HomePage.css";
import axios from "axios"; // axios import 추가

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


const HomePage = () => {

    const sliderRef = useRef(null); // ✅ 슬라이더 참조 생성
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
      // 최신 게시글 3개 가져오기
      axios.get("/api/posts/latest")
        .then(res => setLatestPosts(res.data))
        .catch(err => console.error("최신 게시글 불러오기 실패", err));
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // 기본 화살표 제거
      };

    return (
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          {/* 이미지 슬라이드쇼 추가 */}
          <Slider ref={sliderRef} {...settings} className="image-slider">
            <div className="slide">
              <img src={`${process.env.PUBLIC_URL}/assets/slide1.jpg`} alt="슬라이드 1" />
              <div className="slide-text">100명의 의료산업리더들이 한자리에서 만나,<br />
              사업혁신의 기회를 만들어 갑니다.</div>
            </div>
            <div className="slide">
              <img src={`${process.env.PUBLIC_URL}/assets/slide2.jpg`} alt="슬라이드 2" />
              <div className="slide-text">연세대학교 의료산업 최고위자과정에서 함께하며,<br />
                산업과 학문, 그리고 혁신의 가치를 실현합니다.</div>
            </div>
            <div className="slide">
              <img src={`${process.env.PUBLIC_URL}/assets/slide3.jpg`} alt="슬라이드 3" />
              <div className="slide-text">세상을 더 건강하게 만들기 위한 리더들의 협력,<br />
                미래 의료산업의 길을 열어갑니다
              </div>
            </div>
          </Slider>



           {/* 🔹 중앙 정렬 컨텐츠 (info-notice, info-detail, info-btn) */}
            <div className="info-content"
            style={{
              width: "1200px",
              height: "530px",
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/world.png)`,
              backgroundSize: "100% auto",  // ✅ 가로를 100%, 세로는 비율 유지
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="info-notice">
                혁신적 헬스케어 리더를 위한 <br />
                글로벌 네트워크 프로그램
              </div>

              <div className="info-detail">
                의료산업 최고위자 과정은 의료산업 리더들의 경영 역량 강화를 목표로,<br />
                산·학·연·병·관의 상호 협력과 이해를 바탕으로 한 강력한 네트워크를 구축합니다.<br />
                이를 통해 헬스케어 관련 기업, 의과대학, 연구소, 병원, 정부 등과 긴밀히 소통하며 혁신적 헬스케어 생태계를 조성하고,<br />
                대한민국 의료산업이 세계를 선도할 수 있도록 지원합니다.<br />
                100여 명의 핵심 인맥을 통해 참가자의 업력과 경쟁력을 한층 더 발전시킬 기회를 제공합니다.
              </div>

              <Link to="/introduce" className="info-btn">
                자세히 보기 +
              </Link>
            </div>

            <div className="btn-content"
             style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/campus.jpg)`,
              backgroundSize: "100% auto",  // ✅ 가로를 100%, 세로는 비율 유지
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="btn-info">
                
                <div className="custom-line"></div>

                의료혁신과 헬스케어 리더 양상을 위한 <br />
                대한민국 대표 지식공동체
                <div className="custom-line"></div>
              </div>
              <div className="btn-info2">
                  많은 대한민국의 헬스케어 리더분들께서<br />
                  저희 '연세대학교 의료산업 최고위자과정'과 함께<br />
                  세상을 건강하게 하는 길에 동참해 주시길 기대합니다.
              </div>

              <div className="btn-container">
              <Link to="/entrance" className="btn-link">
                <button className="btn">
                  <span className="btn-text">최고위자과정</span>
                  <span className="btn-text2">입학 안내</span>
                  <div className="btn-circle">
                    <i className="arrow">→</i>
                  </div>
                </button>
              </Link>

              <Link to="/online" className="btn-link">
                <button className="btn">
                  <span className="btn-text">최고위자과정 입학</span>
                  <span className="btn-text2">온라인 지원</span>
                  <div className="btn-circle">
                    <i className="arrow">→</i>
                  </div>
                </button>
              </Link>

              <Link to="/alumni3" className="btn-link">
                <button className="btn">
                  <span className="btn-text">총동문회</span>
                  <span className="btn-text2">동문 회칙</span>
                  <div className="btn-circle">
                    <i className="arrow">→</i>
                  </div>
                </button>
              </Link>

              <Link to="/alumni4" className="btn-link">
                <button className="btn">
                  <span className="btn-text">최고위자과정</span>
                  <span className="btn-text2">동문 소개</span>
                  <div className="btn-circle">
                    <i className="arrow">→</i>
                  </div>
                </button>
              </Link>
            </div>
            </div>
            <div className="post-content">
              <span className = "post-text">연세대학교 의료산업 최고위자 과정<br />
              소식을 전해드립니다.</span>
              <Link to="/sound" className= "view-more">View More →</Link>

              <div className="post-container">
            {latestPosts.map((post, index) => (
              <Link to={`/posts/${post.id}`} className="post-box" key={post.id}>
                <img src={`${process.env.PUBLIC_URL}/assets/post${post.id}.jpg`} alt={`post${post.id}`} className="post-img" />
                <div className="hover-arrow">→</div>
                <div className="post-underline"></div>
                <div className="post-title">{post.title}</div>
                <div className="post-detail">{post.content.length > 40 ? post.content.slice(0, 40) + "..." : post.content}</div>
                <div className="post-date">⏰{post.date}</div> {/* post.date 있으면 수정 */}
              </Link>
            ))}
            </div>


            

          

          
          </div>
          <div className="inquiry-content">
            <img src={`${process.env.PUBLIC_URL}/assets/inquiry.jpg`} alt="inquiry1" className="inquiry-img" />
            <div className="inquiry-container"></div>
            <div className="inquiry-title">문의하기</div>
              <div className="inquriy-detail">도움이 필요하신가요? 문의사항을 남겨주시면 담당자가 안내드립니다.</div>
              <Link to="/inquiry"  className="inquiry-btn">문의하러 가기 →</Link>
          </div> 
          
          
        </div>
        
        <Footer /> 

        <div className="top-btn-container" onClick={scrollToTop}>
  <svg className="top-btn-circle" viewBox="0 0 200 200">
    <defs>
      <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"/>
    </defs>
    <text>
      <textPath href="#circlePath" startOffset="0%">
        YONSEI UNIVERSITY · 연세대학교 의료산업 최고위자 과정 ·
      </textPath>
    </text>
  </svg>
  <div className="top-btn-arrow">↑</div>

      </div>
      </div>
        
    );
  };
  
  export default HomePage;
  