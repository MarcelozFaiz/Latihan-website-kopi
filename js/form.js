import { formatPesan } from "./utils.js";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nama = document.getElementById("nama").value;
        const kategori = document.getElementById("kategori").value;
        const pesan = document.getElementById("pesan").value;
        const hasil = formatPesan(nama, kategori, pesan);
        alert(hasil);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formKontak");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // mencegah reload halaman

        let valid = true;

        // Nama
        const nama = document.getElementById("nama");
        const errorNama = document.getElementById("errorNama");
        if (nama.value.trim() === "") {
            errorNama.textContent = "Nama wajib diisi.";
            valid = false;
        } else {
            errorNama.textContent = "";
        }

        // Email hanya @gmail.com
        const email = document.getElementById("email");
        const errorEmail = document.getElementById("errorEmail");
        const emailPattern = /^[^ ]+@gmail\.com$/i;
        if (!emailPattern.test(email.value)) {
            errorEmail.textContent = "Email harus @gmail.com dan format benar.";
            valid = false;
        } else {
            errorEmail.textContent = "";
        }

        // Gender
        const gender = document.querySelector('input[name="gender"]:checked');
        const errorGender = document.getElementById("errorGender");
        if (!gender) {
            errorGender.textContent = "Pilih jenis kelamin.";
            valid = false;
        } else {
            errorGender.textContent = "";
        }

        // Tanggal
        const tanggal = document.getElementById("tanggal");
        const errorTanggal = document.getElementById("errorTanggal");
        if (tanggal.value === "") {
            errorTanggal.textContent = "Tanggal wajib diisi.";
            valid = false;
        } else {
            errorTanggal.textContent = "";
        }

        // Kategori
        const kategori = document.getElementById("kategori");
        const errorKategori = document.getElementById("errorKategori");
        if (kategori.value === "" || kategori.value === "pilih") {
            errorKategori.textContent = "Pilih salah satu kategori.";
            valid = false;
        } else {
            errorKategori.textContent = "";
        }

        // Pesan minimal 10 karakter
        const pesan = document.getElementById("pesan");
        const errorPesan = document.getElementById("errorPesan");
        if (pesan.value.trim().length < 10) {
            errorPesan.textContent = "Pesan minimal 10 karakter.";
            valid = false;
        } else {
            errorPesan.textContent = "";
        }

        // Jika tidak valid, hentikan submit
        if (!valid) return;

        // Jika valid, tampilkan alert
        alert("Terima kasih $ { nama.value.trim() }!Pesanmu telah terkirim.");
        const hasil = formatPesan(nama.value, kategori.value, pesan.value)
        alert(" hasil ")

        form.reset();
    });

    // ===========================
    // PRAKTIKUM 2 (ONBLUR / INPUT)
    // ===========================

    // Nama on blur
    document.getElementById("nama").addEventListener("blur", function() {
        const errorNama = document.getElementById("errorNama");
        if (this.value.trim() === "") {
            errorNama.textContent = "Nama wajib diisi.";
        } else {
            errorNama.textContent = "";
        }
    });

    // Pesan real-time
    document.getElementById("pesan").addEventListener("input", function() {
        const errorPesan = document.getElementById("errorPesan");
        if (this.value.trim().length < 10) {
            errorPesan.textContent = "Pesan minimal 10 karakter.";
        } else {
            errorPesan.textContent = "";
        }
    });

    // ===========================
    // PRAKTIKUM 3 (LANGGANAN)
    // ===========================

    const langganan = document.getElementById("langganan");
    if (langganan) {
        langganan.addEventListener("change", function() {
            if (this.checked) {
                const namaValue = document.getElementById("nama").value.trim();
                if (namaValue !== "") {
                    alert("Terima kasih telah berlangganan newsletter, $ { namaValue }!");
                } else {
                    alert("Terima kasih telah berlangganan newsletter!");
                }
            }
        });
    }
});