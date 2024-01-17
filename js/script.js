// Fungsi untuk menghitung luas dan keliling persegi
function calculate() {
    // Mengambil nilai panjang sisi dari input
    var sideLength = parseFloat(document.getElementById('sideLength').value);

    // Memeriksa apakah nilai panjang sisi valid
    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Masukkan panjang sisi yang valid!");
        return; // Keluar dari fungsi jika nilai tidak valid
    }

    // Menghitung luas dan keliling persegi
    var area = sideLength * sideLength; // Rumus Luas
    var perimeter = 4 * sideLength; // Rumus Keliling

    // Membuat string hasil dengan nilai bulat (tanpa digit desimal)
    var result = "Luas Persegi: " + area.toFixed(0) + "<br>Keliling Persegi: " + perimeter.toFixed(0);

    // Menampilkan hasil di elemen dengan id 'result'
    document.getElementById('result').innerHTML = result;
}

function validateInput(input) {
    // Memastikan karakter harus angka di form input
    input.value = input.value.replace(/[^0-9]/g, '');
}


// Fungsi untuk mereset formulir (mengosongkan input dan hasil)
function resetForm() {
    // Mengosongkan nilai input dan hasil
    document.getElementById('sideLength').value = '';
    document.getElementById('result').innerHTML = '';
}
