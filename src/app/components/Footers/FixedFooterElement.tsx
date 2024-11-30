import React from "react";
import {
  Typography,
  Container,
  Box,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

const FixedFooterElement = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Fixed Footer"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent sx={{ height: "200px", overflowY: "auto" }}>
        <Box>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            align="left"
            sx={{ fontSize: "12px", color: "#565656" }}
          >
            Morbi vitae rhoncus ante, in malesuada libero. Aliquam erat
            volutpat. Phasellus sit amet efficitur purus. Vestibulum ac velit
            vitae eros vehicula dignissim. Aenean dictum, est eget accumsan
            venenatis, massa tortor varius risus, non laoreet mauris tellus at
            tortor. Suspendisse potenti. Etiam justo dui, ultrices finibus
            egestas quis, consectetur eu erat.
          </Typography>
          <br />
          <Typography
            variant="subtitle2"
            color="textSecondary"
            align="left"
            sx={{ fontSize: "12px", color: "#565656" }}
          >
            Cras quam tellus, tincidunt sit amet malesuada eget, vulputate
            auctor lorem. Proin purus risus, blandit ac ornare et, interdum ut
            dolor. Vestibulum tincidunt posuere ipsum sed scelerisque. Maecenas
            pretium diam turpis. Ut fringilla, dolor vel tincidunt venenatis,
            nunc nulla luctus tellus, sit amet faucibus urna ligula eget purus.
            Cras lobortis fringilla leo condimentum tincidunt. Aenean eget
            mollis ante. Donec ultrices, nulla ut elementum dignissim, leo felis
            dictum sem, at feugiat turpis ligula sed arcu. Sed vel diam id orci
            fringilla volutpat. Curabitur porta elit et ornare commodo. Nullam
            finibus metus ut nunc condimentum vestibulum vitae in dolor.
            Suspendisse sit amet dignissim urna.
          </Typography>
          <br />
          <Typography
            variant="subtitle2"
            color="textSecondary"
            align="left"
            sx={{ fontSize: "12px", color: "#565656" }}
          >
            Vivamus ac dui fringilla, imperdiet tellus ut, dapibus nulla.
            Integer volutpat magna eget lectus ultrices dapibus. Quisque ac
            turpis a leo fringilla tristique. Phasellus arcu augue, fermentum ut
            dolor eget, posuere convallis nisl. Proin auctor, felis congue
            sodales dictum, eros lacus gravida velit, at faucibus enim est eget
            mauris. Nullam placerat gravida quam vel iaculis. Aenean placerat in
            sem at ullamcorper. Duis id nisi ut est varius aliquet eu eu ante.
            Integer at eleifend libero.
          </Typography>
          <br />
          <Typography
            variant="subtitle2"
            color="textSecondary"
            align="left"
            sx={{ fontSize: "12px", color: "#565656" }}
          >
            Aenean at justo mollis, vulputate odio vitae, gravida odio. Duis
            molestie, risus nec tempus aliquet, erat sapien tempor lorem, vitae
            gravida urna tellus scelerisque nunc. Cras auctor libero tellus, ac
            convallis elit hendrerit in. Curabitur quis elementum urna,
            dignissim pulvinar tellus. Nam in risus ac justo tristique
            consectetur et ac purus. Aenean pharetra varius leo ut elementum.
            Quisque finibus, sapien nec rhoncus interdum, dui nisl vestibulum
            libero, vehicula porta ligula purus non ipsum. Aliquam efficitur
            nisi ut leo placerat pellentesque. Sed placerat arcu et arcu iaculis
            mattis.
          </Typography>
        </Box>
      </CardContent>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#fafafa",
          padding: "15px 8px",
          bottom: 0,
          position: "sticky",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ fontSize: "12px", color: "#565656" }}
          >
            &copy; Copyright All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Card>
  );
};

export default FixedFooterElement;
