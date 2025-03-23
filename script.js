// Причина 1: Крикнуть матом
function scream() {
  const audio = document.getElementById("scream-audio");
  audio.play();
  alert("Сука, долбаёб, как же заебало!");
}

// Причина 2: Спрятать деталь
function hideDetail() {
  const status = document.getElementById("detail-status");
  status.textContent = "Деталь спрятана! Начальник-долбаёб ничего не заметил.";
}

// Причина 3: Починить станок
function fixMachine() {
  const status = document.getElementById("machine-status");
  status.textContent = "Станок починен! Ты — бог, долбаёб!";
}

// Причина 4: Сгенерировать фразу про начальника
const bossPhrases = [
  "Начальник — это не человек, это ошибка природы.",
  "Сегодня начальник опять придумал, как нас заебать.",
  "Долбаёб начальник сказал, что смена будет короткой. Он врал.",
  "Начальник — это как геморрой: болит, но без него никак.",
  "Начальник сегодня в ударе: он принёс два листа A4 с новыми правилами.",
];

function generatePhrase() {
  const phrase = document.getElementById("boss-phrase");
  const randomPhrase = bossPhrases[Math.floor(Math.random() * bossPhrases.length)];
  phrase.textContent = randomPhrase;
}

// Причина 5: Таймер до конца смены
function startShiftTimer() {
  const timer = document.getElementById("shift-timer");
  let timeLeft = 8 * 60 * 60; // 8 часов в секундах
  setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
      timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
      timer.textContent = "Смена закончилась, долбаёб! Иди домой!";
    }
  }, 1000);
}

// Причина 6: Оскорбить начальника
const roasts = [
  "Начальник — это как гвоздь в жопе: всегда мешает, но вытащить страшно.",
  "Начальник сегодня выглядит особенно долбаёбисто.",
  "Начальник — это человек, который считает, что его мнение важно.",
  "Начальник — это тот, кто думает, что он умный, но на самом деле он просто громкий.",
];

function roastBoss() {
  const roastResult = document.getElementById("roast-result");
  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  roastResult.textContent = randomRoast;
}

// Запуск таймера при загрузке страницы
startShiftTimer();
function contact() {
  const confirmMessage = "Ты точно хочешь написать нам? Готовься к тому, что тебя заебут!";
  if (confirm(confirmMessage)) {
    window.open("https://t.me/neyronn6620z", "_blank");
  }
}