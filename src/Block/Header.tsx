/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import {
  TbMessage,
  TbSettings,
  TbArrowsRightLeft,
  TbLogout,
  TbPlayerPause,
} from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

const Header = () => {
  const [show, setshow] = useState(false);

  const ToggleBox = () => {
    setshow(!show);
  };
  return (
    <Container>
      <Main>
        <First>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                background: isActive ? "white" : "",
                borderTop: isActive ? "1px solid silver" : "",
                borderLeft: isActive ? "1px solid silver" : "",
                borderRight: isActive ? "1px solid silver" : "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60%",
                color: "black",
              };
            }}
          >
            <Navs>Home</Navs>
          </NavLink>
          <NavLink
            to="Orders"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                background: isActive ? "white" : "",
                borderTop: isActive ? "1px solid silver" : "",
                borderLeft: isActive ? "1px solid silver" : "",
                borderRight: isActive ? "1px solid silver" : "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60%",
                color: "black",
              };
            }}
          >
            <Navs>Orders</Navs>
          </NavLink>
          <NavLink
            to="Education"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                background: isActive ? "white" : "",
                borderTop: isActive ? "1px solid silver" : "",
                borderLeft: isActive ? "1px solid silver" : "",
                borderRight: isActive ? "1px solid silver" : "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60%",
                color: "black",
              };
            }}
          >
            <Navs>Education </Navs>
          </NavLink>
          <NavLink
            to="Community"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                background: isActive ? "white" : "",
                borderTop: isActive ? "1px solid silver" : "",
                borderLeft: isActive ? "1px solid silver" : "",
                borderRight: isActive ? "1px solid silver" : "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60%",
                color: "black",
              };
            }}
          >
            <Navs>Community</Navs>
          </NavLink>
          <NavLink
            to="Forums"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                background: isActive ? "white" : "",
                borderTop: isActive ? "1px solid silver" : "",
                borderLeft: isActive ? "1px solid silver" : "",
                borderRight: isActive ? "1px solid silver" : "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60%",
                color: "black",
              };
            }}
          >
            <Navs>Forums</Navs>
          </NavLink>
          <NavLink
            to="Support"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                background: isActive ? "white" : "",
                borderTop: isActive ? "1px solid silver" : "",
                borderLeft: isActive ? "1px solid silver" : "",
                borderRight: isActive ? "1px solid silver" : "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60%",
                color: "black",
              };
            }}
          >
            <Navs>Support</Navs>
          </NavLink>
          <NavLink
            to="Account"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                background: isActive ? "white" : "",
                borderTop: isActive ? "1px solid silver" : "",
                borderLeft: isActive ? "1px solid silver" : "",
                borderRight: isActive ? "1px solid silver" : "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60%",
                color: "black",
              };
            }}
          >
            <Navs>Account</Navs>
          </NavLink>
          <NavLink
            to="Helpdesk"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                background: isActive ? "white" : "",
                borderTop: isActive ? "1px solid silver" : "",
                borderLeft: isActive ? "1px solid silver" : "",
                borderRight: isActive ? "1px solid silver" : "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60%",
                color: "black",
              };
            }}
          >
            <Navs>Helpdesk</Navs>
          </NavLink>
        </First>
        <Holder>
          <Circle></Circle>
          <Text onClick={ToggleBox}>CodeLab</Text>
          <RiArrowDropDownLine size={30} onClick={ToggleBox} />
        </Holder>
        {show ? (
          <Left>
            <Down>
              <div>
                <AiOutlineHeart size={18} style={{ color: "red" }} />
                <p>Liked posts</p>
              </div>
              <div>
                <AiOutlineStar size={18} style={{ color: "yellow" }} />
                <p>Saved posts</p>
              </div>
              <div>
                <TbMessage size={18} style={{ color: "blue" }} />
                <p>Your comments</p>
              </div>
              <p>Settings</p>
              <div>
                <TbSettings size={18} />
                <p>Account settings</p>
              </div>
              <div>
                <TbArrowsRightLeft size={18} />
                <p>Change account</p>
              </div>
              <div>
                <TbLogout size={18} />
                <p>Logout</p>
              </div>
              <hr />
              <p>Dange Zone</p>
              <div>
                <TbPlayerPause size={18} />
                <p>Pause subscription</p>
              </div>
              <div>
                <RiDeleteBinLine size={18} style={{ color: "lightred" }} />
                <p>Delete account</p>
              </div>
            </Down>
          </Left>
        ) : null}
      </Main>
    </Container>
  );
};

export default Header;

const Down = styled.div`
  /* display: flex; */
  div {
    display: flex;
    margin-left: 15px;
    margin-bottom: 30px;
    margin-top: 5.5px;
    align-items: center;
  }
  p {
    margin: 0;
    margin-left: 15px;
    align-items: center;
  }
`;
const Left = styled.div`
  width: 250px;
  height: 450px;
  background-color: #ffffff;
  border: 1px solid #e4e7ea;
  border-radius: 10px;
  position: absolute;
  left: 840px;
  top: 90px;
  cursor: pointer;
`;

const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: silver;
  border-radius: 50%;
  margin-right: 10px;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-right: 3px;
`;
const Navs = styled.div`
  display: flex;
  align-items: center;
  margin-top: 45px;
  font-size: 15px;
  font-weight: 700;
  margin: 20px;
`;
const Holder = styled.div`
  width: 300px;
  height: 45px;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  cursor: pointer;
`;

const Main = styled.div`
  width: 84%;
  height: 100px;
  /* background-color: red; */
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;
const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e4e7ea;
  background-color: #f8f9fa;
`;
