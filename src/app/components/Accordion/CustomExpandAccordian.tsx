import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomExpandAccordian: React.FC = () => {
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
      icon: <ArrowDownwardIcon />,
    },
    {
      panel: "panel2",
      title: "Accordion 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      icon: <ArrowDropDownIcon />,
    },
    {
      panel: "panel3",
      title: "Accordion 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      icon: <ArrowForwardIcon />,
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        background: "#fff",
        border: "1px solid #c0c0c0",
      }}
    >
      {accordionData.map(({ panel, title, content, icon }) => (
        <Accordion
          key={panel}
          expanded={expandedPanel === panel}
          onChange={() => handleChange(panel)}
          sx={{ borderTop: "1px solid #c0c0c0" }}
        >
          <AccordionSummary
            expandIcon={icon}
            aria-controls={`${panel}-content`}
            id={`${panel}-header`}
          >
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

export default CustomExpandAccordian;
