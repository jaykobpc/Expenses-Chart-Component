"use strict";

const GraphWrapper = document.querySelector("#graphwrapper");
let GraphBar = null;

fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((item) => {
      const result = `
        <div data-bar="${item.amount}%" class="graphbox">
            <span id="tooltip" class="graphbox__tooltip" role="tooltip">${item.amount}%</span>
            <span id="graphbar" style="height: ${item.amount}%" class="graphbox__bar ${item.amount > 50 ? 'color-cyan' : ''}"></span>
            <span class="graphbox__text">${item.day}</span>
        </div>
        `;

      GraphWrapper.insertAdjacentHTML("beforeend", result);
      GraphBar = document.querySelectorAll("#graphbar");
    });
    
    GraphBar.forEach((el) => {
      //add mouse over to each element
      el.addEventListener("mouseover", (evt) => {
        evt.target.previousElementSibling.classList.add('show');
      });
      //
      el.addEventListener("mouseout", (evt) => {
        evt.target.previousElementSibling.classList.remove('show');
      });
    });
  });
