const express = require('express');
const path = require('path');

const app = express();
// Render автоматически назначает порт через переменную окружения PORT
const PORT = process.env.PORT || 8000;

// Раздаём все статические файлы (css, js, assets) из корневой папки
app.use(express.static(path.join(__dirname, '.')));

// При заходе на главную страницу отдаём index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`✅ Сервер "Коканд Рынок" успешно запущен на порту ${PORT}`);
});