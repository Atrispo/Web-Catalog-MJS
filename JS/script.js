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

    for (let i = 0; i < data.length; i++) {

        const item = data[i];

        const tr = document.createElement("tr");

        tr.innerHTML =
            "<td>" + (i + 1) + "</td>" +
            "<td>" + item.nama + "</td>" +
            "<td>" + item.email + "</td>" +
            "<td>" + item.phone + "</td>" +
            "<td>" + item.subject + "</td>"+
            "<td>"+item.message+"</td>";
        tbody.appendChild(tr);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    tampilRiwayat();

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

