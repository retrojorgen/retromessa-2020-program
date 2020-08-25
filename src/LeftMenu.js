import React, { useState, useEffect } from "react";
import styled from "styled-components";
import program from "./program";

const LeftMenuStyles = styled.div`
  .events {
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: red;
    .event {
      color: white;
      font-size: 1.4em;
      display: flex;
      margin-bottom: 20px;
      &.upcoming {
      }
      &.ended {
        opacity: 0.5;
      }
      &.ongoing {
        background-color: blue;
      }
      .time {
        margin-right: 20px;
      }
    }
  }
`;
const today = new Date(new Date().setHours(0, 0, 0, 0));

function getTime(dateObject) {
  let hours = dateObject.getHours().toString().padStart(2, "0");
  let minutes = dateObject.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

program.map((event) => (event.date = new Date(event.date)));

let todaysEvent = program.find(
  (event) => event.date.getTime() === today.getTime()
);

if (todaysEvent) {
  todaysEvent.events.map((event) => {
    event.startTime = new Date(event.startTime);
    event.endTime = new Date(event.endTime);
    event.startTimeFormatted = getTime(event.startTime);
    event.status = "upcoming";
  });
}

function LeftMenu() {
  let [hasDates, setHasDates] = useState(todaysEvent);
  let [eventName, setEventName] = useState(
    todaysEvent ? todaysEvent.name : false
  );
  let [events, setEvents] = useState(todaysEvent ? todaysEvent.events : false);
  let [currentIndex, setCurrentIndex] = useState({ index: 0 });
  let [manualToggle, setManualToggle] = useState(false);

  useEffect(() => {
    const updateCurrentIndex = (e) => {
      let newIndex = { ...currentIndex };
      newIndex.index = newIndex.index + 1;
      console.log(newIndex, currentIndex);
      setCurrentIndex((currentIndex) => (currentIndex = newIndex));
    };

    document.addEventListener("keydown", updateCurrentIndex);
    return () => {
      document.removeEventListener("keydown", updateCurrentIndex);
    };
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!manualToggle) {
        let now = new Date();
        let newEvents = [...events];
        newEvents.map((event, index) => {
          if (event.endTime.getTime() < now.getTime()) {
            event.status = "ended";
          } else if (
            event.StartTime.getTime() >= now.getTime() &&
            event.endTime.getTime() < now.getTime()
          ) {
            event.status = "ongoing";
            setCurrentIndex(index);
          } else {
            event.status = "upcoming";
          }
        });
        setEvents(newEvents);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /**
  useEffect(() => {
    function printKeyCode(e) {
      let keyCode = e.keyCode;
      let newIndex = currentIndex;
      let newEvents = [...events];

      if (!manualToggle) {
        manualToggle = true;
      }
      if (keyCode === 38) {
        if (newIndex === false) {
          newIndex = newEvents.length - 1;
        } else if (newIndex !== false && newIndex > 0) {
          newIndex = newIndex--;
        }
      } else if (keyCode === 40) {
        console.log("down", newIndex);
        if (newIndex === false) {
          newIndex = 0;
        } else if (newIndex !== false && newIndex < newEvents.length - 1) {
          console.log("new index");
          newIndex = newIndex++;
        }
      }

      newEvents.forEach((event, index) => {
        if (index < newIndex) {
          event.status = "ended";
        } else if (index === newIndex) {
          event.status = "ongoing";
        } else {
          event.status = "upcoming";
        }
        setEvents(newEvents);
      });
      setCurrentIndex(["hest"]);
      console.log("setting index", "hest");
    }
    console.log("yo");
    window.addEventListener("keyup", printKeyCode.bind(this));
    return () => window.removeEventListener("keyup", printKeyCode.bind(this));
  }, [currentIndex]);
   */
  return (
    <LeftMenuStyles>
      <ul className="events">
        {currentIndex.index}
        {hasDates &&
          events.map((event, key) => (
            <li className={`event ${event.status}`} key={key}>
              <span className="time">{event.startTimeFormatted}</span>
              <span>{event.name}</span>
            </li>
          ))}
      </ul>
    </LeftMenuStyles>
  );
}

export default LeftMenu;
