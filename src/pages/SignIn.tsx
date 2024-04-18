import { Box,IconButton, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import SignInImg from "../assets/images/SignIn.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


//#3A244A

//#D72638 - RED

const SignIn = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const server = import.meta.env.VITE_SERVER;

  const logInHandler = async (e :  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${server}/user/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      navigate(`welcome/${data.name}`);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }

  }
 
  return (
    <>
      <Box height={"100vh"} padding={"8rem 12rem"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          height={"100%"}
          justifyContent={"center"}
          gap={"10rem"}
        >
          <img
            src={SignInImg}
            alt="SingInImage"
            style={{
              height: "100%",
            }}
          />

          <Box
            border={"2px solid rgba(0,0,0,0.1)"}
            padding={"2rem 4rem"}
            borderRadius={"1rem"}
            boxShadow={"0 0 10px 0px rgba(0,0,0,0.1)"}
          >
            <Typography
              fontFamily={"Breul Grotesk A Black"}
              marginBottom={"2rem"}
              variant="h3"
              color={"#3A244A"}
            >
              Fill what we know <span style={{ color: "#D72638" }}>!</span>
            </Typography>
            <form onSubmit={logInHandler}>
              <input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div
                style={{
                  width: "100%",
                  position: "relative",
                  borderBottom: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                <input
                  required
                  style={{ border: "none" }}
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {show && (
                  <IconButton
                    className="toogleOff"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%) rotateY(180deg)",
                      right: "0rem",
                      cursor: "pointer",
                      padding: "0",
                      color: "#3A244A",
                    }}
                    onClick={() => setShow((prev) => !prev)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                )}
                {!show && (
                  <IconButton
                    className="toogleOff"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%) rotateY(180deg)",
                      right: "0rem",
                      cursor: "pointer",
                      padding: "0",
                      color: "#3A244A",
                    }}
                    onClick={() => setShow((prev) => !prev)}
                  >
                    <VisibilityOffIcon />
                  </IconButton>
                )}
              </div>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  margin: "2rem 0 1rem 0",
                }}
              >
                <button type="submit">Sign In</button>
                <button onClick={() => navigate("/signup")}>Sign Up</button>
              </Box>
            </form>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default SignIn;
