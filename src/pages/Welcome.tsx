import { Box, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const { name } = useParams();
;  return (
    <>
      <Box height={"100%"} marginTop={"10rem"}>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography
            variant="h3"
            fontFamily={"Neometric Black"}
            fontWeight={"600"}
          >
            Welcome{" "}
            <span
              style={{
                color: "#D72638",
              }}
            >
              {name}
            </span>
          </Typography>
          <Typography
            margin={"1rem 0 3rem 0"}
            fontFamily={"Breul Grotesk A Black"}
            fontWeight={"600"}
            variant="h4"
          >
            Have a Nice day <span style={{ color: "#D72638" }}>!</span>
          </Typography>

          <form
            style={{
              display: "inline-block",
              width: "30%",
              height: "10%",
            }}
          >
            <button style={{ width: "100%" }} onClick={() => navigate("/")}>
              Logout
            </button>
          </form>
        </Stack>
      </Box>
    </>
  );
};

export default Welcome;
