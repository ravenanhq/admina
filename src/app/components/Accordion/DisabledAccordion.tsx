import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DisabledAccordion: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = React.useState<string | false>(false);

  const handleChange = (panel: string) => {
    setExpandedPanel(prevPanel => (prevPanel === panel ? false : panel));
  };

  const accordionData = [
    {
      panel: 'panel1',
      title: 'Accordion 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      disabled: false
    },
    {
      panel: 'panel2',
      title: 'Accordion 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      disabled: true
    },
    {
      panel: 'panel3',
      title: 'Accordion 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      disabled: false
    },
  ];

  return (
    <div>
      {accordionData.map(({ panel, title, content, disabled }) => (
        <Accordion
        key={panel}
        expanded={expandedPanel === panel}
        onChange={() => handleChange(panel)}
        disabled={disabled}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${panel}-content`}
          id={`${panel}-header`}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{content}</Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
};

export default DisabledAccordion;
