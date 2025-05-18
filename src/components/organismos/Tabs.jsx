import { useState } from "react";
import styled from "styled-components";
import { v } from "../../styles/variables";
export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index)=>{
    setActiveTab(index)
  }
  return (
    <Container className="container">
      <ul className="tabs">
        <li className={activeTab === 0 ? "active" :
             ""} onClick={()=>handleClick(0)}>
          {<v.iconopie/>}
          Kardex
        </li>
        <li className={activeTab === 0 ? "active" :
             ""} onClick={()=>handleClick(1)}>
          {<v.iconopie/>}
          Kardex 2
        </li>
        <span className="glider"></span>
      </ul>
      <div className="tab-content">
        {activeTab===0 && <span>tab1</span>}
        {activeTab===1 && <span>tab2</span>}
        {activeTab===1 && <span>tab3</span>}
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid #6a6b6c;
  border-radius: 15px;
  height: 100%;

  .tabs {
  list-style: none;
  display: flex;
  position: relative;
  border-radius: 100px;
  justify-content: space-between;
  top: 0;
  left: 0;
  flex-direction: column;  
  }
  li {
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 180px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
  }
  .glider {
  position: absolute;
  color: "#fff";
  display: flex;
  height: 4px;
  width: 180px;
  background-color: #e05024;
  z-index: 1;
  border-radius: 15px;
  transition: 0.25s ease-out;
  transform: translateX(${props => props.activeTab});
  box-shadow: 0px 10px 20px -3px #ff5722;
  bottom: 0;
  }
  .tab-content{
    margin-top:20px;
    height:100%;
    width:100%;  
  }
`;