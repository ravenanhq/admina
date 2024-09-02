import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { Avatar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TimelineData from "../../../profile-timeline.json";

const ProfileTimeline = () => {
  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    setTimelines(TimelineData);
  }, []);
  return (
    <>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {timelines.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineContent sx={{ px: 1 }}>
                <Avatar sx={{ width: 40, height: 40 }}>
                  <img
                    src={item.avatar}
                    alt="Avatar"
                    style={{ width: 40, height: 40 }}
                  />
                </Avatar>
              </TimelineContent>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ px: 1 }}>
              <Typography variant="h6" component="span">
                {item.primary}
              </Typography>
              <Typography>{item.secondary}</Typography>
              <Typography variant="body2">{item.timestamp}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default ProfileTimeline;
