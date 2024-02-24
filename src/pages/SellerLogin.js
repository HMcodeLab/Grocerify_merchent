import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/sellerlogin.module.css";

const SellerLogin = () => {
  const navigate = useNavigate();
  const [switchBtn, setSwitchBtn] = useState(1);
  const [user, setUser] = useState({
    mobile: "",
    email: "",
    password: "",
  });

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked!");
  };

  const handleLogin = () => {
    // const storeCount = getStoreCount(user);
    const storeCount = 1;

    if (storeCount === 0) {
      navigate("/sellershopregistration");
    } else {
      navigate("/sellerdashboard");
    }
  };

  return (
    <>
      <div className={styles.register_container}>
        <div className={styles.register_box_main}>
          {/* Main heading */}
          <h1>Hi, Welcome Back</h1>
          <div className={styles.input_main}>
            {/* Switch button for email or mobile number */}
            <div className={styles.switch_btn}>
              <button
                className={`${styles.switch_Btn} ${
                  switchBtn === 1
                    ? styles.active + " " + styles.greenBg
                    : styles.inactive
                }`}
                onClick={() => setSwitchBtn(1)}
              >
                E-Mail
              </button>
              <button
                className={`${styles.switch_Btn} ${
                  switchBtn === 2
                    ? styles.active + " " + styles.greenBg
                    : styles.inactive
                }`}
                onClick={() => setSwitchBtn(2)}
              >
                Mobile Number
              </button>
            </div>

            {/* Input fields */}
            <div className={styles.inputs}>
              {switchBtn === 1 ? (
                <div className="flex flex-col gap-6">
                  {/* Email input */}
                  <div>
                    <p className="">Enter your email address</p>
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      name="email"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                  </div>
                  {/* Password input */}
                  <div>
                    <p>Enter your password</p>
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      name="password"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </div>
                  {/* Forgot password link */}
                  <div className="flex flex-row justify-between">
                    <Link
                      to={"/forgetpassword"}
                      className="text-[12px] font-Montserrat cursor-pointer"
                      onClick={handleForgotPassword}
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {/* Phone input */}
                  <div>
                    <p>Enter your phone number</p>
                    <input
                      type="text"
                      placeholder="Enter Your Number"
                      name="mobile"
                      value={user.mobile}
                      onChange={(e) =>
                        setUser({ ...user, mobile: e.target.value })
                      }
                    />
                  </div>
                  {/* OTP input */}
                  <div>
                    <p>Enter your OTP</p>
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      name="password"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </div>
                  {/* Resent OTP */}
                  <div className="flex flex-row justify-between">
                    <Link
                      to={"/resendotp"}
                      className="text-[12px] font-Montserrat cursor-pointer"
                    >
                      Resend OTP
                    </Link>
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={handleLogin}
                  className="text-[#FFFFFF] font-bold text-[18px] shadow-xl font-Inter bg-[#58B310] rounded-lg pl-6 pr-6 pt-1 pb-1 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerLogin;
