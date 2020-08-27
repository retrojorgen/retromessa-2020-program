import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getTodaysEvent from "./program";

const todaysEvent = getTodaysEvent();

const LeftMenuStyles = styled.div`
  .events {
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: red;
    .event-header {
      color: white;
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      padding-left: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 10px;
    }
    .event {
      color: white;
      font-size: 1.4em;
      display: flex;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 20px;
      &.upcoming {
      }
      &.next {
        background-color: #9c27b0;
        .event-name {
          &:before {
            content: "COMING UP";
            display: inline-block;
            font-size: 1rem;
            color: #9c27b0;
            font-weight: bold;
            background-color: white;
            padding: 2px 6px;
            border-radius: 10px;
            margin-right: 6px;
          }
        }
      }
      &.ended {
        opacity: 0.5;
      }
      &.ongoing {
        background-color: blue;
        .event-name {
          &:before {
            content: "NOW";
            display: inline-block;
            font-size: 1rem;
            color: blue;
            font-weight: bold;
            background-color: white;
            padding: 2px 6px;
            border-radius: 10px;
            margin-right: 6px;
          }
        }
      }
      .time {
        margin-right: 20px;
      }
    }
  }
`;

function getTimeWithOutSymbol(dateObject) {
  let hours = dateObject.getHours().toString().padStart(2, "0");
  let minutes = dateObject.getMinutes().toString().padStart(2, "0");
  return `${hours}${minutes}`;
}

function LeftMenu() {
  let [hasDates] = useState(todaysEvent);
  let [eventName] = useState(todaysEvent ? todaysEvent.name : false);
  let [events, setEvents] = useState(todaysEvent ? todaysEvent.events : false);
  let [currentIndex, setCurrentIndex] = useState({ index: 0 });
  let [manualToggle, setManualToggle] = useState(false);

  useEffect(() => {
    const updateCurrentIndex = (e) => {
      if (!manualToggle) {
        setManualToggle(true);
      }
      let newIndex = { ...currentIndex };
      let keyCode = e.keyCode;
      let newEvents = [...events];
      console.log(keyCode);
      if (keyCode === 40) {
        newIndex.index =
          newIndex.index + 1 <= newEvents.length - 1
            ? newIndex.index + 1
            : newIndex.index;
      } else if (keyCode === 38) {
        newIndex.index =
          newIndex.index - 1 >= 0 ? newIndex.index - 1 : newIndex.index;
      } else if (keyCode === 27) {
        setManualToggle(false);
      }

      setCurrentIndex((currentIndex) => (currentIndex = newIndex));
      newEvents.map((event, index) => {
        if (index < newIndex.index) event.status = "ended";
        else if (index === newIndex.index) event.status = "ongoing";
        else if (index > newIndex.index && newIndex.index + 1 === index)
          event.status = "next";
        else if (index > newIndex.index) event.status = "upcoming";
        return event;
      });
      setEvents(newEvents);
    };

    document.addEventListener("keydown", updateCurrentIndex);
    return () => {
      document.removeEventListener("keydown", updateCurrentIndex);
    };
  }, [currentIndex, manualToggle, events]);

  useEffect(() => {
    function updateEvents() {
      if (!manualToggle) {
        let now = new Date();
        let timeInt = parseInt(getTimeWithOutSymbol(now));
        let newEvents = [...events];
        let onGoingIndex = false;
        newEvents.map((event, index) => {
          if (event.startTimeInt <= timeInt && event.endTimeInt > timeInt) {
            event.status = "ongoing";
            onGoingIndex = index;
            setCurrentIndex(index);
          } else if (event.startTimeInt < timeInt) {
            event.status = "ended";
          } else {
            if (onGoingIndex !== false && index === onGoingIndex + 1)
              event.status = "next";
            else event.status = "upcoming";
          }
          return event;
        });
        setEvents(newEvents);
      }
    }
    const interval = setInterval(updateEvents, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, events, manualToggle]);

  return (
    <LeftMenuStyles>
      <ul className="events">
        <h1 className="event-header">{eventName}</h1>
        {hasDates &&
          events.map((event, key) => (
            <li className={`event ${event.status}`} key={key}>
              <span className="time">{event.startTimeFormatted}</span>
              <span className="event-name">{event.name}</span>
            </li>
          ))}
      </ul>
    </LeftMenuStyles>
  );
}

export default LeftMenu;
