import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import * as XLSX from 'xlsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для парсинга JSON и CORS
app.use(cors());
app.use(bodyParser.json());

// Пути к файлам
const jsonFilePath = path.join(__dirname, 'users.json');
const excelFilePath = path.join(__dirname, 'users.xlsx');

// Функция для чтения данных из JSON
const readUsers = () => {
  try {
    if (fs.existsSync(jsonFilePath)) {
      const data = fs.readFileSync(jsonFilePath, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Ошибка при чтении JSON файла:', error);
    return [];
  }
};

// Функция для записи данных в JSON
const writeUsers = (users) => {
  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(users, null, 2), 'utf8');
    console.log('Данные успешно записаны в JSON файл. Количество записей:', users.length);
    
    // Генерация Excel файла из JSON
    generateExcel(users);
  } catch (error) {
    console.error('Ошибка при записи в JSON файл:', error);
  }
};

// Функция для генерации Excel файла из JSON
const generateExcel = (users) => {
  try {
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Пользователи');
    XLSX.writeFile(workbook, excelFilePath);
    console.log('Excel файл успешно сгенерирован');
  } catch (error) {
    console.error('Ошибка при генерации Excel файла:', error);
  }
};

// Эндпоинт для регистрации пользователей
app.post('/api/register', (req, res) => {
  console.log('Получен запрос на регистрацию:', req.body);
  const { name, email, password, phone, address } = req.body;
  
  // Читаем существующих пользователей
  const users = readUsers();
  console.log('Текущее количество пользователей:', users.length);

  // Проверка, существует ли пользователь с таким email
  if (users.some(user => user.email === email)) {
    console.log('Пользователь с таким email уже существует:', email);
    return res.status(400).json({ error: 'Пользователь с таким email уже существует.' });
  }

  // Добавление нового пользователя
  const newUser = { 
    name, 
    email, 
    password, 
    phone, 
    address,
    registrationDate: new Date().toISOString()
  };
  
  // Добавляем нового пользователя к существующим
  users.push(newUser);
  
  // Сохраняем обновленный список пользователей
  writeUsers(users);

  console.log('Пользователь успешно зарегистрирован:', email);
  res.status(201).json({ message: 'Пользователь успешно зарегистрирован.' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
}); 