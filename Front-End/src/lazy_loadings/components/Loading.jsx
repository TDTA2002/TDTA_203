import React from "react";
import "./Loading.scss";
import loading from './Loading.png'
export default function Loading() {
  return (
    <div className="loading_container">
      <img
        className="rotating-image"
        src={loading}
      />
    </div>
  );
}
