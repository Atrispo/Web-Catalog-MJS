function getData() {
    const raw = localStorage.getItem("pertanyaan_data");
    return raw ? JSON.parse(raw) : [];
}

function saveData(data) {
    localStorage.setItem("pertanyaan_data", JSON.stringify(data));
}

function validasiForm() {
    const nama = document.getElementById("nama").value.trim();
    const perusahaan = document.getElementById("perusahaan").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (
        nama === "" ||
        email === "" ||
        phone === "" ||
        subject === "" ||
        message === ""
    ) {
        alert("Semua field yang bertanda (*) wajib diisi.");
        return false;
    }

    if (nama.length < 3) {
        alert("Nama minimal 3 karakter.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
    alert("Format email tidak valid!");
    return false;
    }

    if (isNaN(phone)) {
    alert("Nomor WhatsApp hanya boleh berisi angka!");
    return false;
    }   

    if (phone.length < 10 || phone.length > 15) {
        alert("Nomor WhatsApp harus terdiri dari 10-15 digit.");
        return false;
    }

    let data = getData();

    const item = {
        nama: nama,
        perusahaan: perusahaan,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    };

    data.push(item);

    saveData(data);

    alert(
        "Pertanyaan berhasil dikirim!\n\n" +
        "Nama : " + nama + "\n" +
        "Perusahaan : " + perusahaan + "\n" +
        "Email : " + email + "\n" +
        "WhatsApp : " + phone + "\n" +
        "Subjek : " + subject + "\n\n" +
        "Pesan:\n" + message
    );

    console.log("Data Formulir:", {
        nama: nama,
        perusahaan: perusahaan,
        email: email,
        whatsapp: phone,
        subjek: subject,
        pesan: message
    });

    document.querySelector(".enquiry-form").reset();

    return false;
}

function tampilRiwayat() {
    const tbody = document.getElementById("tableBody");
    if (!tbody) return;

    const data = getData();
    tbody.innerHTML = "";

    if (data.length === 0) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td colspan="6" class="text-center py-[40px] text-gray-500">
                <div class="flex flex-col items-center justify-center">
                    <!-- Ikon Inbox Kosong -->
                    <svg class="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                    </svg>
                    <p class="text-lg font-semibold text-gray-700 mb-1">Belum ada riwayat pertanyaan</p>
                    <p class="text-sm font-normal">Silakan isi formulir kontak terlebih dahulu.</p>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
        return; 
    }


    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const tr = document.createElement("tr");

        tr.innerHTML =
            "<td>" + (i + 1) + "</td>" +
            "<td>" + item.nama + "</td>" +
            "<td>" + item.email + "</td>" +
            "<td>" + item.phone + "</td>" +
            "<td>" + item.subject + "</td>"+
            "<td>" + item.message + "</td>";
        
        tbody.appendChild(tr);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    tampilRiwayat();

    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener("click", function () {
            // Memunculkan dan menyembunyikan menu saat diklik
            mobileMenu.classList.toggle("hidden");
            mobileMenu.classList.toggle("flex");
        });
    }

});


function validasiPesanan() {
    const nama = document.getElementById("nama").value.trim();
    const perusahaan = document.getElementById("perusahaan").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const produk = document.getElementById("produk").value;
    const ukuran = document.getElementById("ukuran").value.trim();
    const jumlah = document.getElementById("jumlah").value.trim();
    const alamat = document.getElementById("alamat").value.trim();

    if (
        nama === "" ||
        email === "" ||
        phone === "" ||
        produk === "" ||
        ukuran === "" ||
        jumlah === "" ||
        alamat === ""
    ) {
        Swal.fire({
            icon: "error",
            title: "Data Belum Lengkap",
            text: "Mohon isi semua data terlebih dahulu."
        });

        return false;
    }

    Swal.fire({
        icon: "success",
        title: "Pesanan Berhasil!",
        text: "Terima kasih, pesanan Anda telah berhasil dikirim."
    });

    document.getElementById("formPesan").reset();

    return false;
}

