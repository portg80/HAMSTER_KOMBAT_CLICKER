(function () {
	let ECO_mod_1 = 1826; // 2 секунды за каждый клик после того как перешли в энергосберегающий режим (это когда энергия от 0-24 становится, он включается, ибо нет смысла так часто уже тыкать)
	let ECO_mod_2 = 2762;
	let ECO_isEnabele = false;
	let BOOST_isEnable = false;
	let msLeft = 30000;
	let procentEnergy = - 1;
	let clickInterval;
    let boostInterval;
	let cZapuskov = 0;
	
	let click_time_interval_1 = 100;
	let click_time_interval_2 = 500;
	
	    // Проверяем наличие элемента перед кликом
    var clickerElement = document.querySelector(".app-bar-item[href='/clicker']") || document.querySelector(".app-bar-item[href='/ru/clicker']");
    if (clickerElement) {
        clickerElement.click();
    } else {
        alert("ВЫ НЕ ПЕРЕКЛЮЧИЛИ КОНТЕКСТ НА cliker/ (hamsterkombat.io) ЛИБО НЕ ВОШЛИ В ИГРУ, проверьте все еще раз, вставте скрипт и запустите повторно, с заботой, @festHEALL. !!! ИНСТРУКЦИЯ В ТГ КАНАЛЕ: @FEST_CNL");
        return; // Останавливаем выполнение скрипта, если элемент не найден
    }
	
	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	//ФУНКЦИЯ НАЖАТИЯ НА КНОПКУ МАЙНИНГА
	function clickButton() {
		let energyReel = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
		let energyMAX = parseInt(document.querySelectorAll(".user-tap-energy p")[0].textContent.split(" / ")[1]);
		procentEnergy = energyReel/energyMAX;
		
		let x = getRandomInt(150,300);
		let y = getRandomInt(300,600);
		let evt1 = new PointerEvent('pointerdown', {clientX: x, clientY: y});
		let evt2 = new PointerEvent('pointerup', {clientX: x, clientY: y});
	  
	  
		if (energyReel > 25) {
		   document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt1);
		   document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt2);
		   console.log('КЛИК');
		   
		   if (procentEnergy > 0.5){
				ECO_isEnabele = false;
				console.log('ЭНЕРГИИ БОЛЬШЕ 50%, энергосберегающий режим выключен', ECO_isEnabele);
				startClicks();
		   }
		   
		}else{
			ECO_isEnabele = true;
			console.log('ЭНЕРГИИ СЛИШКОМ МАЛО (>25), энергосберегающий режим активирован', ECO_isEnabele);
			startClicks();
		}
	}
	
	function ART(){
		console.log("  ###    ######  ######   ####   #####             ###   #    #  #      ");
console.log(" #   #   #       #       #    #    #              #   #  ##   #  #      ");
		console.log(" # ###   #       #       #         #             #       # #  #  #      ");
console.log(" # # #   ####    ####     ####     #             #       #  # #  #      ");
		console.log(" # ###   #       #            #    #             #       #   ##  #      ");
				console.log(" #       #       #       #    #    #              #   #  #    #  #      ");
	console.log("  ###    #       ######   ####     #               ###   #    #  #####  ");
			console.log("                                         ######                          ");

	console.log('КАНАЛ РАЗРАБОТЧИКА: https://t.me/FEST_CNL/76');
	console.log('КАНАЛ МЕЛСТРОЙ ФОНЫ: https://t.me/mellfoni');
	console.log('ЖДИ 15 СЕКУНД СКРИПТ ЗАПУСКАЕТСЯ');
	}
	
	function CheckBoost(){
		stopClicks();
		console.log('ЗАПУЩЕНА функция проверки БУСТА');
		
		document.querySelector(".app-bar-item[href='/clicker']")?.click() || document.querySelector(".app-bar-item[href='/ru/clicker']")?.click();
		let energyReel = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
		let energyMAX = parseInt(document.querySelectorAll(".user-tap-energy p")[0].textContent.split(" / ")[1]);
		procentEnergy = energyReel/energyMAX;
		
		
		document.querySelector('.user-tap-boost').click();
		
		setTimeout(function() {
			let boostValue = parseInt(document.querySelector(".boost-item-content-bottom").textContent.trim().split("/")[0]);
			let boostCountdown = document.querySelector('.boost-countdown');
	
			if (boostCountdown?.textContent?.trim()?.match(/\d+/)) { // преверяем есть ли обратный отсчёт, если есть, тогда считываем его, если нету тогда пробуем купить буст (если процент позволяет)
				BOOST_isEnable = false;
				msLeft = parseInt(boostCountdown.textContent.trim().match(/\d+/)[0]) * 60000 + 5000;

				console.log('Элемент с селектором ' + '.boost-countdown' + ' Существует. КУЛДАУН(msLeft) = ', msLeft);
			} else {
				
				BOOST_isEnable = true;
				if(procentEnergy => 0.1 && BOOST_isEnable == true){
					ECO_isEnabele = false;
					msLeft = getRandomInt(20031,30351);
				}
				
				console.log('Элемент с селектором ' + '.boost-countdown' + ' НЕ существует, а значит буст доступен');
				
				if(procentEnergy < 0.1 && BOOST_isEnable == true){ //ЕСЛИ буст доступен и энергии < 10%
					try {
						
						document.querySelector(".boost-item").click();
						setTimeout(function() {
							console.log('ПОКУПКА DONE');
							document.querySelector(".bottom-sheet-button").click();////////////////////////////////////////////////////////////временная мера чтобы тестить
							BOOST_isEnable = false;
							msLeft = getRandomInt(3600231,3618000); 
						}, 5000); // задержка 1000 миллисекунд (1 секунда)
						
					} catch (error) {}
				}
				
				
			}
			
				document.querySelector(".app-bar-item[href='/clicker']")?.click() || document.querySelector(".app-bar-item[href='/ru/clicker']")?.click();
				setTimeout(function(){ //Перезапуск функции с новыми значениями времени
					temp = boostInterval;
					boostInterval = setInterval(CheckBoost, msLeft);
					
					clearInterval(temp);
					startClicks();
				}, 5500);

			
		}, 2000);
	}
	
	
	 // Function to start clicking
    function startClicks() {
		stopClicks();
        if (!clickInterval) {
            clickInterval = setInterval(clickButton, ECO_isEnabele ? getRandomInt(ECO_mod_1,ECO_mod_2) : getRandomInt(click_time_interval_1,click_time_interval_2));
        }
    }

    // Function to stop clicking
    function stopClicks() {
		if(clickInterval){
			clearInterval(clickInterval);
			clickInterval = null;
		}
    }

	//ОСНОВНОЙ ЗАПУСК ФУНКЦИЙ
	boostInterval = setInterval(CheckBoost, 15000);
	ART();
	
	
})();