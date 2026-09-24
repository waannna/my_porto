# Portfolio Backend API

Lightweight Node.js & Express REST API for Ade Dermawan's Portfolio.

## Endpoints

- `GET /api/health` — Status server
- `GET /api/projects` — Daftar proyek dinamis
- `GET /api/skills` — Daftar keahlian teknis
- `GET /api/status` — Status saat ini (*"Open to project collaborations"*)
- `PATCH /api/status` — Memperbarui teks status
- `POST /api/contact` — Mengirim pesan kontak (tersimpan di `data/database.json` dan opsional notifikasi Telegram)
- `POST /api/analytics/click` — Mencatat klik tombol proyek / kontak secara non-blocking
- `GET /api/analytics/stats` — Melihat rekap statistik klik pengunjung

## Menjalankan Backend dengan `pnpm`

1. Masuk ke folder server:
   ```bash
   cd server
   ```

2. Pasang dependensi:
   ```bash
   pnpm install
   ```

3. Jalankan server:
   ```bash
   pnpm dev
   ```
   Server akan berjalan di `http://localhost:5000`.

## Opsional: Notifikasi Telegram Instan

1. Salin `.env.example` ke `.env`:
   ```bash
   cp .env.example .env
   ```
2. Isi `TELEGRAM_BOT_TOKEN` dan `TELEGRAM_CHAT_ID`. Setiap kali ada yang mengirim pesan di website portofolio, notifikasi akan langsung masuk ke Telegram kamu!
