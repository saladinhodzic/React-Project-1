import "./Pagination.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
export function Pagination({ brojStranica, setPage, page }) {
  const niz = [];
  for (let i = 1; i <= brojStranica; i++) {
    niz.push(i);
  }

  document.querySelectorAll(".pagination-btn").forEach((value) => {
    value.addEventListener(
      "click",
      () => (window.onscroll = document.documentElement.scrollTop = 0)
    );
  });

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <MdKeyboardArrowLeft />
      </button>
      {niz.map((value, index) => {
        return (
          <button
            onClick={() => {
              setPage(value);
            }}
            key={index}
            style={{ fontSize: "1.25em" }}
            className="pagination-btn"
          >
            {value}
          </button>
        );
      })}
      <button
        className="pagination-btn"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}
