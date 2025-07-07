const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalDetails = document.getElementById("modal-details");

import { lua, build, uiDesign } from './modules/index.js';

const serviceContent = {
  lua: lua,
  build: build,
  uiDesign: uiDesign
};

function openModal(key) {
  modalDetails.innerHTML = `
    <div class="modal-tabs">
      <button class="tab-btn active" data-tab="portfolio">Portfolio</button>
      <button class="tab-btn" data-tab="prices">Prices</button>
    </div>
    <div class="modal-body">
      ${serviceContent[key].portfolio}
    </div>
  `;
  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.add("show"), 10);
  attachTabEvents(key);
}

function attachTabEvents(key) {
  const tabs = modalDetails.querySelectorAll(".tab-btn");
  const body = modalDetails.querySelector(".modal-body");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(b => b.classList.toggle("active", b === btn));
      const tab = btn.getAttribute("data-tab");
      body.innerHTML = serviceContent[key][tab];
    });
  });
}

document.querySelectorAll(".btn-view-more").forEach((btn) => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const key = btn.dataset.service;
    if (serviceContent[key]) openModal(key);
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 300);
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => modal.classList.add("hidden"), 300);
  }
});