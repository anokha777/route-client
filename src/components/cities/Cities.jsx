import {Row, Col} from "antd";
import {SearchOutlined} from "@ant-design/icons";

const Cities = () => {
  return (
    <div className="container">
      <div className="cities-container">
        <h1 className='center-text'>Popular Cities</h1>
        <center>
          <p className='sub-head-style'>
            <img className='img-style' src="https://bestclickphotography.com/images/icons/fav-icon.png" alt="icon" />
          </p>
        </center>
        <ul className="citibox">
          <li>
            <a href="#">
              <img src="https://bestclickphotography.com/images/icons/hyderabad.png" alt="hyderbad" />
              <p>Hyderbad</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://bestclickphotography.com/images/icons/bengaluru.png" alt="surat" />
              <p>Surat</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://bestclickphotography.com/images/icons/mumbai.png" alt="mumbai" />
              <p>Mumbai</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://bestclickphotography.com/images/icons/kolkata.png" alt="kolkata" />
              <p>Kolkata</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://bestclickphotography.com/images/icons/delhi.png" alt="delhi" />
              <p>Delhi</p>
            </a>
          </li>

          <li>
            <a href="#">
              <img src="https://bestclickphotography.com/images/icons/ahmedabad.png" alt="ahmedabad" />
              <p>Ahmedabad</p>
            </a>
          </li>
        </ul>
      </div>
      <section className='how-to-work-section'>
        <div className="work-box">
          <center><h2> How to Work</h2></center>
          <Row>
            <Col>
              <div className="main-timeline">
                <a href="#" className="timeline">
                  <div className="timeline-icon"><a href="@"><SearchOutlined /></a></div>
                  <div className="timeline-content">
                    <h3 className='content-title'>1. Search A Photographer</h3>
                    <p className='description'>                                    
                                  Only Professionals Photographers will be listed in bestclickphotography.com along with few clicks of there work and location etc which helps you to search best click Photographers best fit for your Requirements.
                                        
                    </p>
                  </div>
                </a>
              </div>
            </Col>
          </Row>

        </div>
      </section>
    </div>

  );
};

export default Cities;