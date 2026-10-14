const profil = {
    nama: "Mochamad Isfiansah Aria Putra",
    namaPanggilan: "Isfi",
    peran: "Mahasiswa Informatika",
    nim: "25523174",
    email: "25523174@students.uii.ac.id",
    keahlian: ["HTML", "CSS", "JavaScript"],
};

const kalimatIdentitas = `Halo, nama saya ${profil.nama} atau biasa dipanggil ${profil.namaPanggilan}. Saya seorang ${profil.peran} dengan NIM ${profil.nim}. Saya sedang belajar tentang ${profil.keahlian.join(", ")}. Jika Anda ingin menghubungi saya, silakan kirim email ke ${profil.email}.`;
console.log(kalimatIdentitas);

function buatPerkenalan({nama, peran}) {
    return `Halo, nama saya ${nama}. Saya seorang ${peran}.`;
}

const formatKeahlian = (daftar) => daftar.join(" . ");

console.log(buatPerkenalan(profil));
console.log(`Keahlian saya: ${formatKeahlian(profil.keahlian)}`);

const daftarPerjalanan = [
    { id: 1, nama: "Bali", tahun: 2022, teman: "Keluarga", lamaHari: 5, foto: "bali.jpg", status: "selesai" },
    { id: 2, nama: "Yogyakarta", tahun: 2023, teman: "keluarga", lamaHari: 3, foto: "yogyakarta.jpg", status: "selesai" },
    { id: 3, nama: "Yogyakarta 2 dan Bali 2", tahun: 2023, teman: "Teman Sekolah", lamaHari: 7, foto: "yogyakarta-2-bali-2.jpg", status: "selesai" },
];

console.log("--- Data Profil & Keahlian ---");
console.table(profil.keahlian);

console.log("--- Daftar Perjalanan ---");
console.table(daftarPerjalanan);

const perjalananSelesai = daftarPerjalanan.filter((perjalanan) => perjalanan.status === "selesai");
console.log("--- Perjalanan yang Selesai ---");
console.table(perjalananSelesai);

const cariYogyakarta = daftarPerjalanan.find((perjalanan) => perjalanan.nama === "Yogyakarta");
console.log("--- Perjalanan ke Yogyakarta ---");
console.table(cariYogyakarta);

const daftarDestinasi = daftarPerjalanan.map((perjalanan) => perjalanan.nama);
console.log("--- Daftar Destinasi Perjalanan ---");
console.table(daftarDestinasi);

const urutanTahun = daftarPerjalanan.sort((a, b) => a.tahun - b.tahun);
console.log("--- Urutan Perjalanan Berdasarkan Tahun ---");
console.table(urutanTahun);