import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionCustomIcon: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = React.useState<string | false>(
    false
  );

  const handleChange = (panel: string) => {
    setExpandedPanel((prevPanel) => (prevPanel === panel ? false : panel));
  };

  const accordionData = [
    {
      panel: "panel1",
      title: "Accordion 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      icon: <HomeIcon />,
    },
    {
      panel: "panel2",
      title: "Accordion 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      icon: <InfoIcon />,
    },
    {
      panel: "panel3",
      title: "Accordion 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      icon: <ContactMailIcon />,
    },
  ];

  return (
    <div>
      {accordionData.map(({ panel, title, content, icon }) => (
        <Accordion
          key={panel}
          expanded={expandedPanel === panel}
          onChange={() => handleChange(panel)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${panel}-content`}
            id={`${panel}-header`}
          >
            <IconButton sx={{ mr: 1, p: "0 8px" }}>{icon}</IconButton>
            <Typography sx={{ fontSize: "12px", color: "#565656" }}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "12px", color: "#565656" }}>
              {content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionCustomIcon;
