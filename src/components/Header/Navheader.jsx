import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Col, Drawer, Row, Select } from 'antd';

import { CaretDownOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';

function Navheader() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // select option---------------
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  // const [size, setSize] = useState('middle');
  const [size] = useState('middle');
  // const handleSizeChange = (e) => {
  //   setSize(e.target.value);
  // };


  return (
    <>
      <nav>
        <a href="#">
          <img src="https://bestclickphotography.com/images/logo.png" alt="LoGo" />
        </a>
        <div id='lg-screen'>
          <ul id='navbar'>
            <li>
              <Link className='nav-links' to='/home'>Home</Link>
            </li>
            <li>
              <Link className='nav-links' to='/xyz'>About</Link>
            </li>
            <li>
              <Link className='nav-links' to='/register'>Gallery</Link>
            </li>
            <li>
              <Link className='nav-links' to='/home'>Find Photographer</Link>
            </li>

            <li>
              <Link className='nav-links' to='/xyz'>How to Works</Link>
            </li>
            <li>
              <Link className='nav-links' to='/register'>Blog</Link>
            </li>
            <li>
              <Link className='nav-links' to='/register'>Help & Support</Link>
            </li>
            <li>
              <Link className='nav-links btn-singin-singup' to='/login'>List Your Business <CaretDownOutlined /></Link>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <MenuOutlined onClick={showDrawer} />
          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <div>
              <ul id='navbar'>
                <li>
                  <Link className='nav-links' to='/home'>Home</Link>
                </li>
                <li>
                  <Link className='nav-links' to='/xyz'>About</Link>
                </li>
                <li>
                  <Link className='nav-links' to='/register'>Gallery</Link>
                </li>
                <li>
                  <Link className='nav-links' to='/home'>Find Photographer</Link>
                </li>

                <li>
                  <Link className='nav-links' to='/xyz'>How to Works</Link>
                </li>
                <li>
                  <Link className='nav-links' to='/register'>Blog</Link>
                </li>
                <li>
                  <Link className='nav-links' to='/register'>Help & Support</Link>
                </li>
                <li>
                  <Link className='nav-links' to='/login'>List Your Business</Link>
                </li>
              </ul>
            </div>
          </Drawer>
        </div>
      </nav>
      <div className="container top-input">
        <Row style={{ textAlign: 'left' ,alignItems: "center"}}>
          <Col xs={24} sm={12} md={14} lg={20} xl={20}>
            <div className="top-form">
              <span>Search Photographers </span>
              <Select
                className='select-style'
                size={size}
                defaultValue="a1"
                onChange={handleChange}
                style={{
                  width: 200,
                }}
                options={options}
              />
              <Select
                className='select-style'
                size={size}
                defaultValue="a1"
                onChange={handleChange}
                style={{
                  width: 200,
                }}
                options={options}
              />
              <Button className='search' icon={<SearchOutlined />}>
                Search
              </Button>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={4} xl={4}>
            <ul className="social-icons">
              <span>Connect With Us</span>
              <li>
                <Link className='social-links' to='/home'><FacebookOutlined /></Link>
              </li>
              <li>
                <Link className='social-links' to='/home'><LinkedinOutlined /></Link>
              </li>
              <li>
                <Link className='social-links' to='/home'><InstagramOutlined /></Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Navheader;

