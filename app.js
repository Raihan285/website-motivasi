const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const kutipan = [
  {
    quote: "💡 Satu-satunya cara untuk melakukan pekerjaan besar adalah dengan mencintai apa yang Anda lakukan. 💖",
    author: "Steve Jobs",
    image: "/image/steve-jobs.jpg"
  },
  {
    quote: "🎯 Kesuksesan bukanlah akhir, kegagalan bukanlah fatal: Yang penting adalah keberanian untuk terus melangkah. 🚶‍♂️",
    author: "Winston Churchill",
    image: "/image/Churchill_V_sign_HU_55521.jpg"
  },
  {
    quote: "🌟 Percaya bahwa Anda bisa dan Anda sudah setengah jalan! 🏃‍♂️",
    author: "Theodore Roosevelt",
    image: "/image/Theodore_Roosevelt_by_the_Pach_Bros.jpg"
  },
  {
    quote: "🐢 Tidak masalah seberapa lambat Anda berjalan, selama Anda tidak berhenti. 💪",
    author: "Confucius",
    image: "/image/confucius.jpg"
  },
  {
    quote: "🌱 Waktu terbaik untuk menanam pohon adalah 20 tahun yang lalu. Waktu terbaik kedua adalah sekarang. 🌳",
    author: "Peribahasa Tiongkok",
    image: "/image/peribahasationgkok.jpg"
  },
  {
    quote: "🚀 Jangan tunggu waktu yang sempurna. Ambil waktu sekarang dan buatlah sempurna. 🔥",
    author: "Zig Ziglar",
    image: "/image/zigziglar.jpg"
  },
  {
    quote: "💡 Kesuksesan adalah hasil dari keputusan yang baik dan tindakan yang tepat. ✅",
    author: "Albert Schweitzer",
    image: "/image/albertschweitzer.jpg"
  },
  {
    quote: "💥 Jangan takut gagal, karena kegagalan adalah bagian dari perjalanan menuju kesuksesan. 🏆",
    author: "Oprah Winfrey",
    image: "/image/oprah.webp"
  },
  {
    quote: "🌍 Kekuatan bukan berasal dari kapasitas fisik, tetapi dari kehendak yang tak tergoyahkan. 💪",
    author: "Mahatma Gandhi",
    image: "/image/mahatma.jpg"
  },
  {
    quote: "🔥 Keberanian untuk memulai adalah langkah pertama menuju kesuksesan. ✨",
    author: "Nelson Mandela",
    image: "/image/Nelson_Mandela.jpg"
  },
  {
    quote: "🕰️ Jangan pernah menyerah, karena waktu terbaik untuk memulai adalah sekarang! ⏳",
    author: "Anonymous",
    image: "/image/anonymous.jpg"
  }
];

const createMotivationPage = (quoteData) => `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Kutipan Motivasi</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <div class="container">
    <div id="quote-wrapper">
      <div id="title">Motivasi</div>
      <div id="quote-symbol">❝</div>
      <div id="quote">${quoteData.quote}</div>
      <div id="author">
        <span id="author-name">${quoteData.author}</span>
      </div>
    </div>
    <div id="author-photo-border">
      <img src="${quoteData.image}" alt="${quoteData.author}" class="author-photo">
    </div>
    <div class="button-container">
      <button class="button-motivasi" onclick="window.location.reload()">Kutipan Motivasi Baru</button>
    </div>
    <div id="bottom">Dibuat oleh Raihan Alif | SMK KARTIKA XX-1 MAKASSAR | Kelas X Backend Database</div>
  </div>
</body>
</html>
`;

app.get('/', (req, res) => {
  const randomQuote = kutipan[Math.floor(Math.random() * kutipan.length)];
  res.send(createMotivationPage(randomQuote));
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
