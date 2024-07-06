import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionWithActions: React.FC = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChange = (isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  const handleAgree = () => {
    setExpanded(false);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={(event, isExpanded) => handleChange(isExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Accordion with Actions</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
      <Divider />
      <AccordionActions>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={handleAgree}
        >
          Agree
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

export default AccordionWithActions;
