import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  formatDate,
  type DateSelectArg,
  type EventApi,
  type EventClickArg,
} from "@fullcalendar/core"; // Importez ce type
import HeaderComponent from "../../components/Header/HeaderComponent";
import { tokens } from "../../context/theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event.");

    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.start}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });

      setCurrentEvents(calendarApi.getEvents());
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={"20px"}>
      <Box>
        <HeaderComponent
          title="CALENDAR"
          subtitle="Full Calendar Interactive Page"
        />
      </Box>

      <Box display={"flex"} justifyContent={"space-between"}>
        {/* CALENDAR SIDEBAR */}
        <Box
          flex={"1 1 20%"}
          bgcolor={colors.primary[400]}
          p={"15px"}
          borderRadius={"4px"}
        >
          <Typography variant="h5">Events</Typography>

          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {/* {event.start &&
                        formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })} */}
                      {event.start
                        ? formatDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "No date"}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex={"1 1 100%"} ml={"15px"}>
          <FullCalendar
            height={"75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2025-09-14" },
              { id: "4321", title: "Timed event", date: "2025-09-28" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
