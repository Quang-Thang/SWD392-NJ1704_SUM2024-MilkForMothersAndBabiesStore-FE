import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "./InputForm";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="min-h-[100vh] bg-white">
          <img
            className="w-[100%]"
            srcSet="https://s3-alpha-sig.figma.com/img/e7a6/81cd/80cadd6f09f9da8b0573d5545fdd18a5?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fX0vaEccFfoWcBtsyPkrNjwClVmcQL7gB5CvgMk2dfM48FJV0szykOt0h-CAQoQudAdNaYEWatQ5nQS~6zjZWglZpiNlAqNoXLjMWIOu~dbvqgQ5ehNi6CW79dP3Dlyh4TkV0xsDOQkg2EGHSHFe5x6vCMNkGAjNNVcBB8c-tQPBXVMdfh5lqWhygqMMOoUoNxVzU49HHgZJZ6wvD8TMmvz4pH4Oe8v0Qd-CegM7QXG8OalLoEVA1jU5CQx29PqtRmTBhS46FiN1B3z6Z-OM6lc5UF5a3sMZ0tMJ2uq3eGPh0M0OqvZP6VfR2ubL3QvMi1qQ2V7P5vpOfXuOUQmJwQ__"
          />
          <div className="form-login ml-3">
            <div className="form-header mt-[-30px] ml-52 flex-col">
              <label className="bg-[#FFBE31] text-[#002278] text-[48px] p-7 font-bold rounded-l-lg">
                ĐĂNG NHẬP
              </label>
              <a className="bg-[#F5F5F5] text-[#002278] text-[48px] p-7 pl-[90px] font-bold rounded-r-lg">
                ĐĂNG KÝ
              </a>
            </div>
            <div className="form-body ml-60">
              <form>
                <div className="mt-10">
                  <input
                    type="text"
                    className="input p-[20px] w-[600px] h-[55px] rounded-lg text-[24px] shadow-lg  shadow-gray-400 mb-3"
                    placeholder="Email | SDT"
                  />
                  <input
                    type="password"
                    className="input p-[20px] w-[600px] h-[55px] rounded-lg text-[24px] shadow-gray-400 shadow-lg mb-4"
                    placeholder="Mật khẩu*"
                  />
                </div>
              </form>
              <div className="option flex justify-start mb-4 ml-1">
                <p className="font-semibold">Lưu thông tin đăng nhập</p>
                <p className="ml-72 font-semibold">Quên mật khẩu?</p>
              </div>
              <button className="w-[600px] h-[55px] bg-[#00BAF2] text-[#FFFFFF] font-bold text-[24px] rounded-xl mb-10">
                ĐĂNG NHẬP
              </button>
              <p className="ml-20 ">
                ---------------------------Hoặc đăng nhập
                bằng---------------------------
              </p>
              <button className="w-[600px] h-[55px] bg-[#D54B3D] text-[#FFFFFF] font-bold text-[24px] rounded-xl mt-10 ">
                Google
              </button>
              <button className="w-[600px] h-[55px] bg-[#1877F2] text-[#FFFFFF] font-bold text-[24px] mt-5 rounded-xl">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
