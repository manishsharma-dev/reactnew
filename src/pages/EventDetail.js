import React from "react";
import { useParams } from "react-router-dom";

export default function EventDetail() {
  const params = useParams();
  return (
    <>
      <h1>Event ID :- {params.eventId}</h1>
    </>
  );
}
