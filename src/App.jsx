
import { useEffect,  } from 'react';
import { Button, Checkbox, Layout, Divider } from 'antd';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { getTestData } from './redux/actions/test';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import ApplicationRouter from './router/ApplicationRouter';
const { Content } = Layout;
function App() {
  const dispatch = useDispatch();
  const testData = useSelector((state)=>state.testReducerData.testData);

  useEffect(() => {
    dispatch(getTestData());
  },[dispatch]);

  const testClick = ()=>{
    console.log('test button clicked');
  };
  const onChange = (e) => {
    console.log(e.target.checked);
  };
  return (
    <>
      <Router>
        <Header />
        <Content className='route-container'>
          <ApplicationRouter />
        </Content>
      </Router>
      <div>{testData}</div>
      <Button type="default" onClick={testClick}>Primary Button</Button>
      <Divider />
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </>
  );
}
export default App;

