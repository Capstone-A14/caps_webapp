"use client";
import React, { useEffect, useState } from "react";
import data from "@/app/ECG.json";
import * as d3 from "d3";

<<<<<<< Updated upstream
export default function page() {
    return (
        <>
            <h1 className="breadcrumb-text">HELLO WORLD</h1>
            {/*<iframe src="http://localhost:3000/d-solo/cd994587-df97-432b-a420-c244d96b8ce0/default?orgId=1&refresh=5s&from=1699238595264&to=1699238605264&panelId=6" width="450" height="200" frameBorder="0"></iframe>*/}
        </>
    );
}
=======
export default function Page() {
  // DATA
  const [lead1, setLead1] = useState(null);
  const [lead2, setLead2] = useState(null);

  const convertLead = (leadData) =>
    Object.keys(leadData).map((index) => ({
      label: parseInt(index),
      value: leadData[index],
    }));

  useEffect(() => {
    setLead1(convertLead(data.lead1));
    setLead2(convertLead(data.lead2));
  }, []);

  useEffect(() => {
    if (lead1 && lead2) {
      ecgChart();
    }
  }, [lead1, lead2]);

  console.log(lead1);
  console.log(lead2);

  // DRAWING THE TIME SERIES CHART
  const ecgChart = () => {
    // WIDTH, HEIGTH, & MARGIN
    const margin = { top: 10, right: 30, bottom: 30, left: 60 };
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // X & Y MIN & MAX VAL
    const yMinVal = d3.min(lead1, (d) => d.value);
    const yMaxVal = d3.max(lead1, (d) => d.value);
    const xMinVal = d3.min(lead1, (d) => d.label);
    const xMaxVal = d3.max(lead1, (d) => d.label);

    // CREATE SVG
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // SCALE FOR X AXIS
    const xScale = d3
      .scaleLinear()
      .domain([xMinVal, xMaxVal])
      .range([0, width]);

    // SCALE FOR Y AXIS
    const yScale = d3.scaleLinear().domain([0, yMaxVal]).range([height, 0]);

    // X GRID
    svg
      .append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0, {height}")
      .call(d3.axisBottom(xScale).tickSize(-height).tickFormat(""));

    // Y GRID
    svg
      .append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(yScale).tickSize(-width).tickFormat(""));

    // X AXIS ON BOTTOM
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom().scale(xScale).tickSize(15));

    //  Y AXIS ON LEFT
    svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

    // CREATE LINE X AND Y TO THE DATA
    const line = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value));
    // .curve(d3.curveMonotoneX);

    // DRAW THE LINE
    svg
      .append("path")
      .datum(lead1)
      .attr("fill", "none")
      .attr("stroke", "#4666FF")
      .attr("stroke-width", 1)
      .attr("class", "line")
      .attr("d", line);
  };

  return (
    <div className="m-5 p-5 bg-white rounded-lg">
      <p> d3 js testing </p>
      <div id="chart" />
    </div>
  );
}
>>>>>>> Stashed changes
