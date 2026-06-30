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

    return false;
}