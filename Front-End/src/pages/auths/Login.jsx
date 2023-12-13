import React, { useEffect, useState } from "react";
import api from "@api";
import "./auth.scss";
import { message, Modal } from "antd";
import background from './login-bg.png'
message.config({
  top: 120,
  duration: 1,
  maxCount: 1,
  rtl: true,
  prefixCls: "my-message",
});

export default function Login() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  });

  return (
    <div className="login">
      <img src={background} alt="image" className="login__bg" />
      <form action="" className="login__form" onSubmit={async (e) => {
        e.preventDefault();
        let data = {
          username: e.target.username.value,
          password: e.target.password.value,
        }

        try {
          alert("ok đã gửi")
          let result = await api.users.login(data);
          if (result.status == 200) {
            if (result.data.token == undefined) {
              alert("Đăng nhập thất bại")
            } else {
              localStorage.setItem("token", result.data.token);
              alert("Đăng nhập Thành Công")
            }


          } else {
            alert(result.data.message)
          }
        } catch { err } {
        }

      }}>
        <h1 className="login__title">Login</h1>
        <div className="login__inputs">
          <div className="login__box">
            <input
              name="username"
              type="username"
              placeholder="Username"
              required=""
              className="login__input"
            />
            <i className="ri-mail-fill" />
          </div>
          <div className="login__box">
            <input
              name="password"
              type="password"
              placeholder="Password"
              required=""
              className="login__input"
            />
            <i className="ri-lock-2-fill" />
          </div>
        </div>
        {/* <div className="login__check">
          <div className="login__check-box">
            <input type="checkbox" className="login__check-input" id="user-check" />
            <label htmlFor="user-check" className="login__check-label">
              Remember me
            </label>
          </div>
          <a href="#" className="login__forgot">
            Forgot Password?
          </a>
        </div> */}
        <button type="submit" className="login__button">
          Login
        </button>

      </form>
    </div>

  );
}