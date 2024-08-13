# Investment Calculator

## Ringkasan
Proyek ini adalah kalkulator investasi yang dikembangkan menggunakan React. Kalkulator ini memungkinkan pengguna untuk memasukkan investasi awal, investasi tahunan, tingkat pengembalian yang diharapkan, dan durasi investasi. Kalkulator kemudian menghitung pertumbuhan investasi yang diharapkan selama periode yang ditentukan dan menampilkan hasilnya dengan cara yang jelas dan ringkas.

## Struktur Proyek
```plaintext
investment-calculator/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── investment-calculator-logo.png
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── index.js
│   │   └── InvestmentForm/
│   │       ├── InvestmentForm.jsx
│   │       ├── InputForm.jsx
│   │       ├── ResultCalc.jsx
│   │       └── index.js
│   │
│   ├── util/
│   │   └── investment.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
└── README.md
```

## Cara Penggunaan

### 1. Mengakses Aplikasi di Website

Aplikasi ini juga telah dideploy dan dapat diakses secara online. Anda dapat mengunjungi aplikasi kalkulator investasi melalui link berikut:

<a href="https://investment-calculator-ketapp.netlify.app/">Investment Calculator Online</a>

### 2. Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini secara lokal di mesin Anda, ikuti langkah-langkah berikut:

1. Clone repository ini** ke dalam direktori lokal Anda:
   ```bash
   git clone https://github.com/username/investment-calculator.git
2. Masuk ke direktori proyek:
   ```bash
   cd investment-calculator
3. Install dependencies menggunakan npm:
   ```bash
   npm install
4. Jalankan proyek:
   ```bash
   npm run dev
5. Buka Aplikasi di browser:
   Setelah menjalankan perintah di atas, buka http://localhost:3000 di browser Anda untuk melihat aplikasi kalkulator investasi berjalan.

## Lifecycle Components

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
