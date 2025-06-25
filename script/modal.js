const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalDetails = document.getElementById("modal-details");

const serviceContent = {
    "lua": `
      <h2>LUA Scripting</h2>
      <p></p>
    `,
    "build": `
      <h2>Building & Level Design</h2>
      <p></p>
    `,
    "design": `
      <h2>3D & UI Design</h2>
      <p></p>
    `
};

document.querySelectorAll(".btn-view-more").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const key = ["lua", "build", "design"][index];
      modalDetails.innerHTML = serviceContent[key];
      modal.classList.remove("hidden");
      setTimeout(() => modal.classList.add("show"), 10);
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => modal.classList.add("hidden"), 300);
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => modal.classList.add("hidden"), 300);
    }
  });