import { Box, IconButton, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import SignInImg from "../assets/images/SignUp.png";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [retypeShow, setRetypeShow] = useState(false);

  const server = import.meta.env.VITE_SERVER;

  // console.log(server);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [email, setEmail] = useState("");


  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${server}/user/register`,
        {
          firstName: fname,
          lastName: lname,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )

      toast.success(data.message);
      navigate(`/welcome/${data.name}`);
    } catch (error: any) {
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
            gap={"13rem"}
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
              <Stack
                direction={"row"}
                gap={"5rem"}
                alignItems={"flex-end"}
                marginBottom={"2rem"}
              >
                <Typography
                  fontFamily={"Breul Grotesk A Black"}
                  variant="h3"
                  color={"#3A244A"}
                >
                  Let us know <span style={{ color: "#D72638" }}>!</span>
                </Typography>
                <Typography
                  fontFamily={"Breul Grotesk A Black"}
                  variant="h6"
                  color={"#3A244A"}
                >
                  <a href="/">
                    Sign <span style={{ color: "#D72638" }}>In</span>
                  </a>
                </Typography>
              </Stack>
              <form onSubmit={submitHandler}>
                <input
                  required
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="First name"
                />
                <input
                  required
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last Name"
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
                    placeholder="Set password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {show && (
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
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
                      sx={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
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
                <div
                  style={{
                    width: "100%",
                    position: "relative",
                    borderBottom: "1px solid rgba(0,0,0,0.2)",
                  }}
                >
                  <input
                    required
                    id="password"
                    style={{ border: "none" }}
                    type={retypeShow ? "text" : "password"}
                    placeholder="Retype password"
                    value={retypePassword}
                    onChange={(e) => setRetypePassword(e.target.value)}
                  />
                  {retypeShow && (
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        right: "0rem",
                        cursor: "pointer",
                        padding: "0",
                        color: "#3A244A",
                      }}
                      onClick={() => setRetypeShow((prev) => !prev)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  )}
                  {!retypeShow && (
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        right: "0rem",
                        cursor: "pointer",
                        padding: "0",
                        color: "#3A244A",
                      }}
                      onClick={() => setRetypeShow((prev) => !prev)}
                    >
                      <VisibilityOffIcon />
                    </IconButton>
                  )}
                </div>
                {retypePassword && (retypePassword !== password) && <Typography margin={"0"} marginLeft={"1rem"} variant="body2" color={"red"}>
                Password does not match
                </Typography>}

                <select required onChange={(e) => {
                  if (e.target.value === "contactMode")
                    e.target.style.color = "rgba(0,0,0,0.2);";
                  else e.target.style.color = "#3A244A";
                }}>
                  <option value={"contactMode"}>Contact Mode</option>
                  <option value={"email"}>Email</option>
                </select>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    margin: "2rem 0 1rem 0",
                  }}
                >
                  <button type="submit">Sign Up</button>
                </Box>
              </form>
            </Box>
          </Stack>
        </Box>
      </>
    );
  };

export default SignUp;
