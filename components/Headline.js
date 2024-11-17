import React from "react";

export default function Headline(props) {
    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-5xl title">{props.page}</h1>
        <p>pages/{props.page}.js</p>
        </div>
    );
  }