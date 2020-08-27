import programData from "./programData";

const today = new Date(new Date().setHours(0, 0, 0, 0));
const searchParams = new URLSearchParams(window.location.search);

function getTime(dateObject) {
  let hours = dateObject.getHours().toString().padStart(2, "0");
  let minutes = dateObject.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function getTimeWithOutSymbol(dateObject) {
  let hours = dateObject.getHours().toString().padStart(2, "0");
  let minutes = dateObject.getMinutes().toString().padStart(2, "0");
  return `${hours}${minutes}`;
}

function getTodaysEvent() {
  programData.map((event) => (event.date = new Date(event.date)));

  let todaysEvent = undefined;

  if (searchParams.has("id")) {
    let eventId = searchParams.get("id");
    todaysEvent = programData.find((event) => event.id.toString() === eventId);
  } else {
    todaysEvent = programData.find(
      (event) => event.date.getTime() === today.getTime()
    );
  }

  if (todaysEvent) {
    todaysEvent.events.map((event) => {
      event.startTime = new Date(event.startTime);
      event.endTime = new Date(event.endTime);
      event.startTimeInt = parseInt(getTimeWithOutSymbol(event.startTime));
      event.endTimeInt = parseInt(getTimeWithOutSymbol(event.endTime));
      event.startTimeFormatted = getTime(event.startTime);
      event.status = "upcoming";
      return event;
    });
  }
  return todaysEvent;
}

export default getTodaysEvent;
