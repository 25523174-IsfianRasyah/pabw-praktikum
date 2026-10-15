// Data foto perjalanan
const dataPerjalanan = [
  { destinasi: "Bali", tahun: "2022", gambar: "Bali.jpg", alt: "Foto saya sedang berlibur di Bali bersama keluarga" },
  { destinasi: "Yogyakarta", tahun: "2023", gambar: "Yogyakarta.jpg", alt: "Foto saya sedang berlibur di Yogyakarta bersama Keluarga" },
  { destinasi: "Yogyakarta 2", tahun: "2023", gambar: "Yogyakarta 2.jpg", alt: "Foto saya sedang berlibur di Yogyakarta bersama teman sekolah" },
  { destinasi: "Bali 2", tahun: "2023", gambar: "Bali 2.jpg", alt: "Foto saya sedang berlibur di Bali bersama Teman Sekolah" }
];

function buildCard(item) {
    const figure = document.createElement("figure");
    figure.className = "kartu";

    const img = document.createElement("img");
    img.src = item.gambar;
    img.alt = item.alt;
    img.width = 400;
    img.height = 600;
    img.loading = "lazy";

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = item.alt;

    figure.append(img);
    figure.append(figcaption);

    return figure;
}

const container = document.querySelector("#list");

function render(list) {
    container.textContent = "";

    list.forEach((item) => {
        container.append(buildCard(item));
    });
}

render(dataPerjalanan);

const filterRow = document.querySelector("#filter");

function markActiveButton(activeButton) {
    document.querySelectorAll("#filter button").forEach((button) => {
        button.classList.toggle("active", button === activeButton);
    });
}

filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    
    const category = button.dataset.category;

    const selected = dataPerjalanan.filter(
        (item) => category === "all" || item.tahun === category
    );

    render(selected);

    markActiveButton(button);
});