import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetail() {
  const data = useRouteLoaderData('event-detail');
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export async function loader({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
