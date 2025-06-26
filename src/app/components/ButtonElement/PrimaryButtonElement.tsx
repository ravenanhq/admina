// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   Stack,
// } from "@mui/material";
// import ButtonComponent from "./ButtonComponent";

// const PrimaryButtonElement = () => {
//   return (
//     <>
//       <div style={{borderRadius:"0 0 5px 5px"}}>
//         <CardHeader
//           title=" Primary Button"
//           sx={{ bgcolor: "#007BFF", color: "white" ,borderRadius: "5px 5px 0 0"}}
//           titleTypographyProps={{ fontSize: "14px" }}
//         />
//         <Card>
//           <CardContent>
//             <Stack
//               direction="row"
//               spacing={2}
//               sx={{
//                 alignItems: "center",
//                 justifyContent: "normal",
//                 padding: "11px 0",
//                 minHeight:"80px",
//               }}
//             >
//               <ButtonComponent text="Home Button" type="buttonbg" className="btn-response"/>

//               <ButtonComponent text="About Button" rounded type="buttonbg"/>
//             </Stack>
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default PrimaryButtonElement;



import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ButtonComponent from "./ButtonComponent";

const PrimaryButtonElement = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // true if screen < 600px

  return (
    <div style={{ borderRadius: "0 0 5px 5px" }}>
      <CardHeader
        title="Primary Button"
        sx={{
          bgcolor: "#007BFF",
          color: "white",
          borderRadius: "5px 5px 0 0",
        }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <Card>
        <CardContent
          sx={{
            padding: {
              xs: "12px 8px", // for mobile
              sm: "16px 12px", // for tablets & up
            },
          }}
        >
          <Stack
            direction={isMobile ? "column" : "row"} // stack vertically on mobile
            spacing={2}
            sx={{
              alignItems: isMobile ? "stretch" : "center",
              justifyContent: isMobile ? "center" : "flex-start",
              padding: "11px 0",
              minHeight: "80px",
            }}
          >
            <ButtonComponent
              text="Home Button"
              type="buttonbg"
              className="btn-response"
              fullWidth={isMobile} // stretch button on mobile
            />

            <ButtonComponent
              text="About Button"
              type="buttonbg"
              rounded
              fullWidth={isMobile}
            />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrimaryButtonElement;

