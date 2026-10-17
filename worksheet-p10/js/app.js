import { fetchNews } from "./api.js";

const container = document.getElementById('list');
const loadingText = document.getElementById('loading');
const emptyText = document.getElementById('pesan-kosong');
const errorText = document.getElementById('pesan-error');
function render(list){
    container.textContent = '';

    list.forEach(item => {
        const card = document.createElement('article');
        card.className = 'kartu';

        const heading = document.createElement('h3');
        heading.textContent = item.title;

        const body = document.createElement('p');
        body.textContent = item.body;

        card.append(heading);
        card.append(body);
        container.append(card);
    });
}

async function loadData() {
    try {
        loadingText.hidden = false;
        errorText.hidden = true;
        emptyText.hidden = true;
        container.textContent = '';

        const data = await fetchNews();

        loadingText.hidden = true;

        if (data.length === 0) {
            emptyText.hidden = false;
            return;
        }

        console.log("Mulai merender data ke kontainer", container);
        render(data);

    } catch (error) {
        loadingText.hidden = true;
        errorText.textContent = "Gagal memuat data: " + error.message;
        errorText.hidden = false;
    }
}
loadData();