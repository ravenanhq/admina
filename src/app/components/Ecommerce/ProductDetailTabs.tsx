import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Tabs,
    Tab,
} from '@mui/material';

const ProductDetailTabs = () => {

    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event, newValue) => {
      setCurrentTab(newValue);
    };
  
    const TabPanel = ({ children, index, value }) => {
      return (
        <div hidden={value !== index}>
          {value === index && <Box>{children}</Box>}
        </div>
      );
    };

    return (
      <>
        <Card style={{ display: "flex", marginTop: "20px",border:"1px solid #ccc" }}>
          <CardContent style={{ flex: 1, marginLeft: "20px" }}>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              sx={{ marginBottom: "10px" }}
            >
              <Tab label="Product Description" />
              <Tab label="Reviews" />
            </Tabs>

            <TabPanel value={currentTab} index={0}>
              <Typography variant="body1" color="textPrimary">
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
                sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
                placeat salvia cillum iphone. Seitan aliquip quis cardigan
                american apparel, butcher voluptate nisi.
              </Typography>
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
              <Typography variant="body1" color="textPrimary">
              Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's 
              organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork
               tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. 
               DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi 
               whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. S
               cenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. 
              Pitchfork sustainable tofu synth chambray yr.
              </Typography>
            </TabPanel>
          </CardContent>
        </Card>
      </>
    );
};

export default ProductDetailTabs;
