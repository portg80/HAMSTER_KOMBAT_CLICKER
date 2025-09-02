# HAMSTER_KOMBAT_CLICKER
Что вы получите: 
1) АФК ФАРМ - теперь  не нужно заходить каждые 3 часа в приложение чтобы афк фарм возобновился, вы всегда онлайн в игре
2) Автопокупку буста(а именно Full Energy)
3) Вы сможете открывать любые миниприложения прямо в web версии телеграмм
Не стоит недооценивать автоклики - энергия восстанавливается на 3 монеты в секунду, а это 10800 монет в час, как хорошая карточка в несколько ЛВЛ.

СКРИПТ: https://github.com/portg80/HAMSTER_KOMBAT_CLICKER/releases/download/HAMSTER/HAMSTER_CHEAT_V2.0.js

ИНСТРУКЦИЯ:
Выберите один из 2х вариантов обхода ограничения. А потом один из 2х скриптов


Вариант 1 - Предпочтительный. Используйте расширение Resource Override. (самый простой, подгружает нужные изменения автоматически на лету)
Я тестил на гугл хроме, в яндексе браузере не всегда открывается игра с компа, другие браузеры хз

1) Скачать расширение Resource Override для браузера Chrome, и нажать на его значок.
   
2) Добавить новое правило: 
Из https://hamsterkombat.io/js/telegram-web-app.js  -> 
-> В https://serezhka.github.io/hamsterkombat/js/telegram-web-app.js
![image](https://github.com/portg80/HAMSTER_KOMBAT_CLICKER/assets/42353304/a82c4e9f-7607-4621-832b-2cdd0b809de4)
Нажимаем на расширение и вписываем эти 3 адреса туда

3) В Tab URL вставьте адрес: https://web.telegram.org/* или если не работает адрес страницы с ботом хомяка
![image](https://github.com/portg80/HAMSTER_KOMBAT_CLICKER/assets/42353304/93ddd6c7-6b6f-4e22-b05c-1b8722b33324)
4) Запустите Telegram Web: https://web.telegram.org/a/ (тут должна быть буква а, если открылась с k, то замените), откройте игру Hamster Kombat.

5) Откройте Chrome DevTools (клавиша F12 или пкм по сайту->исследовать элемент), перейдите в консоль, выберите контекст «cliker (hamsterkombat.io)».
   ![image](https://github.com/portg80/HAMSTER_KOMBAT_CLICKER/assets/42353304/70bfff82-f5d1-4da5-984e-666c303acdfb)
6) Скопируйте и вставьте скрипт который внизу статьи в консоль и нажмите Enter. (в игре вы должны быть на главной странице)
    6.1) При вставке любых скриптов, вы в первый раз вероятно получите сообщение по типу:
          "Не вводите скрипты если вы не знаете что они делают. Чтобы разрешить вставку введите "разрешить вставку" в консоль и нажмите ентр"
   Так вот вы просто переписываете разрешающую фразу "разрешить вставку". 
   Эта "ошибка" может быть и на английском




Вариант 2 - нахуй оно вам нужно. Используйте локальные переопределения Chrome (тот же что и первый, только вручную менять каждый раз)
1) Запустите Telegram Web, откройте игру Hamster Kombat.
2) Откройте Chrome DevTools, перейдите в раздел «Источники», найдите telegram-web-app.js и замените этот код:
```
Object.defineProperty(WebApp, 'platform', {
     get: function () {
         return webAppPlatform;
     },
     enumerable: true,
 });
```
На этот:
```
Object.defineProperty(WebApp, 'platform', {
     get: function () {
         return 'ios';
     }, enumerable: true,
 });
```
3. Щелкните правой кнопкой мыши по файлу, выберите «Переопределить содержимое».

4. Обновите страницу, запустите игру, зайдите в консоль, выберите контекст javascript «cliker (hamsterkombat.io)».

5. Скопируйте и вставьте скрипт в консоль и нажмите Enter.
![image](https://github.com/portg80/HAMSTER_KOMBAT_CLICKER/assets/42353304/b502b752-aca7-48fb-be9a-d7c1ca7c4347)



СКРИПТЫ И АВТОКЛИКЕРЫ 
На данном этапе у вас уже будет возможность получать афк монеты без ограничений по времени, просто открой в отдельном окне вкладку браузера, и сверни ее.
Заставим теперь еще и кликать автоматом, и бусты все за день тратить без участия.


1. СКРИПТ С АВТОКЛИКЕРОМ И АВТОПОКУПКОЙ БУСТА:
Подойдет для прокачки свежих аккаунтов, когда клики еще что то решают. Запускаете, ждете секунд 15, и все работает (НЕ ЗАБЫВАЙТЕ ПРО cliker (hamsterkombat.io))
!!! Скрипт запускать только после запуска игры (нужно быть на главной стр хомяка) !!!!
СКРИПТ ТУТ:
https://github.com/portg80/HAMSTER_KOMBAT_CLICKER/releases/download/HAMSTER/HAMSTER_CHEAT_V2.0.js


2. СКРИПТ ТОЛЬКО С АВТОКЛИКЕРОМ (Он более стабильный, реже мозги ебет, но я буду дорабатывать тот который выше)
!!! Скрипт запускать только после запуска игры (нужно быть на главной стр хомяка) !!!
```
(function () {
  const evt1 = new PointerEvent('pointerdown', {clientX: 150, clientY: 300});
  const evt2 = new PointerEvent('pointerup', {clientX: 150, clientY: 300});
  setInterval((function fn() {
    const energy = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
    if (energy > 25) {
      document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt1);
      document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt2);
    }
    return fn;
  })(), 50);
})();
```

БОНУС: Чтобы с телефона зайти со своего второго аккаунта и  у вас не входил в основу, клонируйте приложение и входите на нем во второй акк. и в игру.
Также можно клонировать пространство и получить еще 2 копии телеграмма.
Либо на крайний случай переустановить тг и войти в другой акк
