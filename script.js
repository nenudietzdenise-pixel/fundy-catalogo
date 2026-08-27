const grid = document.getElementById("grid");
const search = document.getElementById("search");
const empty = document.getElementById("empty");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const closeModal = document.getElementById("closeModal");

function render(items){
  grid.innerHTML = "";
  empty.hidden = items.length !== 0;
  items.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="photo"><img src="${p.image}" alt="${p.name} para ${p.model}" loading="lazy"></div>
      <div class="card-info">
        <h3>${p.name}</h3>
        <p class="model">${p.model}</p>
        <p class="price">${p.price}</p>
      </div>`;
    card.addEventListener("click", () => openProduct(p));
    grid.appendChild(card);
  });
}

function openProduct(p){
  document.getElementById("modalImage").src = p.image;
  document.getElementById("modalImage").alt = p.name;
  document.getElementById("modalModel").textContent = p.model;
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalPrice").textContent = p.price;

document.getElementById("whatsapp").href = "https://www.instagram.com/fundy.arg/";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}
function close(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
closeBtn.addEventListener("click", close);
closeModal.addEventListener("click", close);
document.addEventListener("keydown", e => { if(e.key === "Escape") close(); });
search.addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  render(PRODUCTS.filter(p => `${p.name} ${p.model}`.toLowerCase().includes(q)));
});

render(PRODUCTS);
