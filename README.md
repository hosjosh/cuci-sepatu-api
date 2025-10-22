# REST API Daftar Barang Cuci Sepatu

## Deskripsi Umum Proyek
API ini merupakan tugas responsi untuk modul Pembuatan API dengan JavaScript. API ini dibuat menggunakan Node.js dan Express.js, berfungsi untuk mengelola data sepatu yang sedang dicuci pada sebuah layanan jasa cuci sepatu.

## Tujuan dan Fitur Utama
- Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam REST API.
- Meningkatkan pemahaman penggunaan Express.js sebagai framework backend.
- Mengelola data menggunakan Supabase sebagai database.
- Deploy API ke Vercel agar bisa diakses publik.
- Filter data berdasarkan status cucian sepatu.

## Struktur Data Sepatu
Contoh struktur data sepatu yang disimpan:
```json
{
  "id": 1,
  "nama": "Nike Air Force 1",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}
```
**Keterangan:**
- `id` : Nomor unik sepatu (integer, auto increment dari database)
- `nama` : Nama sepatu atau merek pelanggan
- `status` : Status proses cuci ("Sedang Dicuci" atau "Selesai")
- `tanggalMasuk` : Tanggal sepatu diterima untuk dicuci
- `tanggalSelesai` : Tanggal sepatu selesai dicuci (atau "-" jika belum selesai)

## Endpoint API

| Method | Endpoint             | Deskripsi                                             |
|--------|---------------------|-------------------------------------------------------|
| GET    | /items              | Menampilkan seluruh daftar sepatu                     |
| GET    | /items?status=Selesai | Menampilkan sepatu yang sudah selesai dicuci         |
| POST   | /items              | Menambahkan data sepatu baru ke dalam daftar          |
| PUT    | /items/:id          | Memperbarui status sepatu                             |
| DELETE | /items/:id          | Menghapus data sepatu yang sudah selesai dicuci       |

### Contoh Request dan Response

#### GET /items
**Response:**
```json
[
  {
    "id": 1,
    "nama": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggalMasuk": "2025-10-01",
    "tanggalSelesai": "2025-10-03"
  }
]
```

#### POST /items
**Request Body:**
```json
{
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}
```
**Response:**
```json
{ "message": "Data sepatu berhasil ditambahkan." }
```

#### PUT /items/:id
**Request Body:**
```json
{
  "status": "Selesai",
  "tanggalSelesai": "2025-10-09"
}
```
**Response:**
```json
{ "message": "Status sepatu berhasil diperbarui." }
```

#### DELETE /items/:id
**Response:**
```json
{ "message": "Data sepatu berhasil dihapus." }
```

## Langkah Instalasi & Menjalankan API

1. **Clone repository:**
   ```
   git clone <link-repo-github>
   cd cuci-sepatu-api
   ```
2. **Install dependencies:**
   ```
   npm install
   ```
3. **Buat file `.env`** di root project, lalu isi:
   ```
   SUPABASE_URL=<supabase-url>
   SUPABASE_KEY=<supabase-key>
   ```
4. **Jalankan server:**
   ```
   node index.js
   ```
   Server berjalan di port 3000 (`http://localhost:3000`).

## Cara Deploy ke Vercel

1. Push project ke GitHub.
2. Login ke [Vercel](https://vercel.com/), hubungkan dengan repository project kamu.
3. Tambahkan environment variable SUPABASE_URL dan SUPABASE_KEY di dashboard Vercel.
4. Klik "Deploy".
5. Setelah berhasil, API dapat diakses via link deploy Vercel.

## Link Deploy (Vercel)
[https://<nama-project>.vercel.app](https://<nama-project>.vercel.app)

---

## Teknologi yang Digunakan
- Node.js
- Express.js
- Supabase (Database)
- Vercel (Deploy)

---

**Author:**  
<Josh Frederich Irawady 21120123140130>
