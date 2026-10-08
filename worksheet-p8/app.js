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