const express = require('express');
const cors = require('cors');
const supabase = require('./supabaseClient');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// GET /items [+ filter]
app.get('/items', async (req, res) => {
  const { status } = req.query;
  let query = supabase.from('items').select('*').order('id', { ascending: true });
  if (status) {
    query = query.eq('status', status);
  }
  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// POST /items
app.post('/items', async (req, res) => {
  const { nama, status, tanggalMasuk, tanggalSelesai } = req.body;
  if (!nama || !status || !tanggalMasuk) {
    return res.status(400).json({ error: 'nama, status, tanggalMasuk harus diisi.' });
  }
  const { error } = await supabase.from('items').insert([
    { nama, status, tanggalMasuk, tanggalSelesai: tanggalSelesai || '-' }
  ]);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Data sepatu berhasil ditambahkan.' });
});

// PUT /items/:id
app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const { status, tanggalSelesai } = req.body;
  if (!status) return res.status(400).json({ error: 'status harus diisi.' });
  const { error } = await supabase.from('items').update({ status, tanggalSelesai }).eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Status sepatu berhasil diperbarui.' });
});

// DELETE /items/:id
app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('items').delete().eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Data sepatu berhasil dihapus.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server berjalan di port', PORT);
});

module.exports = app; // untuk Vercel