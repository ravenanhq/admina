import * as React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Checkbox, Drawer, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EventsList from "../../../event-list.json";
import { useEffect, useState } from "react";
import UpdateEvent from "./UpdateEvent";
import AddEvent from "./AddEvent";

interface Task {
  id?: string;
  title?: string;
  label?: string;
  start?: Date;
  end?: Date;
}

const localizer = momentLocalizer(moment);

export default function EventCalendar() {
  const [date, setDate] = React.useState(new Date());
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openAddEventDrawer, setOpenAddEventDrawer] = useState(false);
  const [drawerData, setDrawerData] = useState<Task | null>(null);
  const [lists, setLists] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [labelFilters, setLabelFilters] = useState({});

  useEffect(() => {
    setLists(EventsList);

    const uniqueLabels = Array.from(
      new Set(EventsList.map((event) => event.label))
    );
    const initialLabelFilters = {};
    uniqueLabels.forEach((label) => {
      initialLabelFilters[label] = true;
    });
    setLabelFilters(initialLabelFilters);
  }, []);

  const filteredEvents = lists.filter((event) => labelFilters[event.label]);

  const handleCheckboxToggle = (label) => {
    setLabelFilters((prevFilters) => ({
      ...prevFilters,
      [label]: !prevFilters[label],
    }));
  };

  const handleViewChange = (view) => {
    console.log("View changed to:", view);
  };

  const handleCloseAddEventDrawer = () => {
    setOpenAddEventDrawer(false);
  };

  const handleSubmitUpdateTask = (updatedTaskData) => {
    const updatedLists = lists.map((list) => {
      if (list.id === updatedTaskData.id) {
        return {
          ...list,
          title: updatedTaskData.title,
          label: updatedTaskData.label,
          start: updatedTaskData.start,
          end: updatedTaskData.end,
        }; 
      }
      return list;
    });
    setLists(updatedLists);
    setOpenDrawer(false);
  };

  const handleDeleteTask = (id: string) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setLists(updatedLists);
    setOpenDrawer(false);
  };

  const handleSaveAddEventData = (title, label, start, end) => {
    const newEvent = {
      id: lists.length + 1,
      title: title,
      label: label,
      start: start,
      end: end,
    };
    setLists([...lists, newEvent]);
    console.log(newEvent);
    setOpenAddEventDrawer(false);
  };

  const toggleDrawer = (data: Task | null, isEvent: boolean) => {
    if (isEvent) {
      setDrawerData(data);
      setOpenDrawer(true);
      setOpenAddEventDrawer(false);
    } else {
      setOpenDrawer(false);
      setOpenAddEventDrawer(true);
    }
  };

  const onSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.end);
    setOpenAddEventDrawer(true);
  };

  const eventStyleGetter = (event) => {
    let backgroundColor = "#3174ad";
    if (event.label === "Business") {
      backgroundColor = "#7367f0";
    } else if (event.label === "Family") {
      backgroundColor = "#28c76f";
    } else if (event.label === "Personal") {
      backgroundColor = "#ea5455";
    }
    return {
      style: {
        backgroundColor,
      },
    };
  };

  const getLabelColor = (label) => {
    switch (label) {
      case "Business":
        return "#ffa045";
      case "Family":
        return "#28c76f";
      case "Personal":
        return "#ea5455";
      default:
        return "#3174ad";
    }
  };

  return (
    <>
    
      <Typography
        variant="h6"
        style={{
          marginTop: "10px",
          padding: "10px 0",
        }}
      >
        Calendar
      </Typography>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%", background: "#fff", padding: "20px" }}
          views={["month", "week", "day", "agenda"]}
          date={date}
          onNavigate={(newDate, view) => setDate(newDate)}
          toolbar={true}
          onSelectEvent={(event) => toggleDrawer(event, true)}
          onSelectSlot={onSelectSlot}
          eventPropGetter={eventStyleGetter} 
          components={{
            toolbar: (props) => (
              <CustomToolbar {...props} onView={handleViewChange} />
            ),
          }}
          selectable
          popup
        />
      </div>
      <div style={{display:"flex"}}>
        {Object.keys(labelFilters).map((label) => (
          <div key={label} style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={labelFilters[label]}
              onChange={() => handleCheckboxToggle(label)}
              sx={{
                color: getLabelColor(label),
                "&.Mui-checked": {
                  color: getLabelColor(label),
                },
              }}
            />

            <span>
              {label}
            </span>
          </div>
        ))}
      </div>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paperAnchorRight": {
            top: "64px",
          },
        }}
      >
        <UpdateEvent
          data={drawerData}
          onClose={() => setOpenDrawer(false)}
          onEdit={handleSubmitUpdateTask}
          onDelete={() => handleDeleteTask(drawerData.id)}
        />
      </Drawer>
      <Drawer
        anchor="right"
        open={openAddEventDrawer}
        onClose={handleCloseAddEventDrawer}
        sx={{
          "& .MuiDrawer-paperAnchorRight": {
            top: "64px",
          },
        }}
      >
        <AddEvent
          onClose={() => setOpenDrawer(false)}
          onSave={handleSaveAddEventData}
          selectedDate={selectedDate}
        />
      </Drawer>
    </>
  );
}

const CustomToolbar = ({ label, onNavigate, onView }) => (
  <div
    className="rbc-toolbar"
    style={{ display: "flex", justifyContent: "space-between" }}
  >
    <div className="rbc-nav">
      <button
        type="button"
        onClick={() => onNavigate("PREV")}
        className="rbc-arrow-button"
        style={{ border: "none", padding: "0" }}
      >
        <KeyboardArrowLeftIcon />
      </button>
      <button
        type="button"
        onClick={() => onNavigate("NEXT")}
        className="rbc-arrow-button"
        style={{ border: "none", padding: "0" }}
      >
        <ChevronRightIcon />
      </button>
      <span className="rbc-toolbar-label">{label}</span>
    </div>
    <div className="rbc-view-buttons">
      <button
        type="button"
        onClick={() => onView("month")}
        className="rbc-btn"
        style={{
          background: "#dedbfb",
          color: "#7367f0",
          border: "none",
          borderRight: "1px solid #ccc",
          borderRadius: "0px",
        }}
      >
        Month
      </button>
      <button
        type="button"
        onClick={() => onView("week")}
        className="rbc-btn"
        style={{
          background: "#dedbfb",
          color: "#7367f0",
          border: "none",
          borderRight: "1px solid #ccc",
          borderRadius: "0px",
        }}
      >
        Week
      </button>
      <button
        type="button"
        onClick={() => onView("day")}
        className="rbc-btn"
        style={{
          background: "#dedbfb",
          color: "#7367f0",
          border: "none",
          borderRight: "1px solid #ccc",
          borderRadius: "0px",
        }}
      >
        Day
      </button>
      <button
        type="button"
        onClick={() => onView("agenda")}
        className="rbc-btn"
        style={{
          background: "#dedbfb",
          color: "#7367f0",
          border: "none",
          borderRadius: "0px",
        }}
      >
        Agenda
      </button>
    </div>
  </div>
);
