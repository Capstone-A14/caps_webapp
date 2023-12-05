"use client";
import React, { useEffect, useState } from "react";
import data from "@/app/ECG.json";
import * as d3 from "d3";

// export default function ChartEcg({data}) {
export default function ChartEcg() {

  // DATA
  const [lead1, setLead1] = useState(null);
  const [lead2, setLead2] = useState(null);

  const convertLead = (leadData) =>
    Object.keys(leadData).map((index) => ({
      label: parseInt(index),
      // label: parseInt(index) / 60,
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

  // console.log(lead1);
  // console.log(lead2);

  // DRAWING THE TIME SERIES CHART
  const ecgChart = () => {
    // WIDTH, HEIGTH, & MARGIN
    const margin = { top: 10, right: 30, bottom: 30, left: 60 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // X & Y MIN & MAX VAL
    const yMinVal = Math.min(
      d3.min(lead1, (d) => d.value),
      d3.min(lead2, (d) => d.value)
    );
    const yMaxVal = Math.max(
      d3.max(lead1, (d) => d.value),
      d3.max(lead2, (d) => d.value)
    );
    const xMinVal = Math.min(
      d3.min(lead1, (d) => d.label),
      d3.min(lead2, (d) => d.label)
    );
    const xMaxVal = Math.max(
      d3.max(lead1, (d) => d.label),
      d3.max(lead2, (d) => d.label)
    );

    // CREATE SVG
    const svg = d3
      .select("#chart")
      .append("svg")
      // .attr("width", width + margin.left + margin.right)
      // .attr("height", height + margin.top + margin.bottom)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 960 500")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // SCALE FOR X AXIS
    const xScale = d3
      .scaleLinear()
      // .domain([xMinVal, xMaxVal])
      .domain([xMinVal, xMaxVal])
      .range([0, width]);

    // SCALE FOR Y AXIS
    const yScale = d3
      .scaleLinear()
      .domain([yMinVal, yMaxVal])
      .range([height, 0]);

    // X GRID
    svg
      .append("g")
      .attr("class", "grid")
      // .attr("transform", "translate(0, {height}")
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
      // .call(d3.axisBottom().scale(xScale).tickSize(15));
      .call(
        d3
          .axisBottom()
          .scale(xScale)
          .tickSize(10)
          .tickFormat(function (d) {
            return d3.timeFormat("%I:%M:%S")(new Date(0).setSeconds(d));
          })
      );

    //  Y AXIS ON LEFT
    svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

    // CREATE LINE X AND Y TO THE DATA
    const line1 = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value));

    const line2 = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value));

    // DRAW THE LINE
    svg
      .append("path")
      .datum(lead1)
      .attr("fill", "none")
      .attr("stroke", "#4666FF")
      .attr("stroke-width", 1)
      .attr("class", "line")
      .attr("d", line1);

    svg
      .append("path")
      .datum(lead2)
      .attr("fill", "none")
      .attr("stroke", "#FF6347")
      .attr("stroke-width", 1)
      .attr("class", "line")
      .attr("d", line2);
  };

  return (
    <div className="w-full mt-8 overflow-y-auto">
      <div id="chart" />
    </div>
  );
}
