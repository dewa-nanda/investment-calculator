# Investment Calculator

## Ringkasan
Proyek ini adalah kalkulator investasi yang dikembangkan menggunakan React. Kalkulator ini memungkinkan pengguna untuk memasukkan investasi awal, investasi tahunan, tingkat pengembalian yang diharapkan, dan durasi investasi. Kalkulator kemudian menghitung pertumbuhan investasi yang diharapkan selama periode yang ditentukan dan menampilkan hasilnya dengan cara yang jelas dan ringkas.


## Components

### `Header.jsx`
Komponen ini bertanggung jawab untuk merender halaman sambutan, seperti menampilkan judul dan gambar.

### `InvestmentForm.jsx`
Komponen ini bertanggung jawab sebagai parent atau container yang mengelola seluruh state, fungsi, serta lifecycle dari aplikasi.

#### Variabel Global:
- `calculate_investment`: Menyimpan nilai yang dihasilkan dari fungsi perhitungan investasi (`calculateInvestmentResults`).

#### State:
- `investment`: Menyimpan nilai-nilai investasi dalam sebuah objek yang terdiri dari beberapa properti:
  - `initialInvestment`: Jumlah investasi awal pengguna.
  - `annualInvestment`: Jumlah investasi tahunan pengguna.
  - `expectedReturn`: Tingkat pengembalian tahunan yang diharapkan pengguna.
  - `duration`: Durasi investasi dalam tahun.

### `InputForm.jsx`
Komponen ini bertanggung jawab untuk merender formulir input di mana pengguna dapat memasukkan detail investasi mereka. Komponen ini menerima props dari elemen parent (`InvestmentForm`).

#### Props:
- `children`: Menyimpan elemen anak yang dirender di dalam komponen ini.
- `...props`: Menyimpan semua properti lain yang diteruskan ke komponen ini.
- `onInputChange`: Fungsi yang digunakan untuk menangani perubahan nilai state yang ada pada elemen parent (`InvestmentForm`).

### `ResultCalc.jsx`
Komponen ini bertanggung jawab untuk merender hasil dari fungsi perhitungan investasi (`calculateInvestmentResults`).

#### Props:
- `data_calculateInvestment`: Menyimpan array yang dihasilkan dari fungsi perhitungan investasi (`calculateInvestmentResults`) yang diteruskan dari elemen parent (`InvestmentForm`).
