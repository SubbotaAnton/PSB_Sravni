(function () {

    function getQueryVariable(variable) {
        const query = window.location.search.substring(1);
        const vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) === variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        return null;
    }

    function openShareWindow(url) {
        const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
        window.open(url,'sharer', options);
    }

    const formResult = getQueryVariable('data')

    switch (formResult) {
        case 'coffeeCorner': // 1
        case 'dealer': // 7
            // Сколько живет QR-код?
            document.getElementById('liveOfQR').innerText = 'Наклейка с QR-кодом генерится один раз для вашей компании и действует бессрочно.';
            break;
        case 'internetShop': // 4
            // как работает система быстрых платежей
            document.getElementById('benefits_1').innerText = 'Вы заключаете договор с банком, который поддерживает СБП';
            document.getElementById('benefits_2').innerText = 'Интегрируете систему с кассой по удобному API';
            document.getElementById('benefits_3').innerText = 'Каждому покупателю в корзине предлагается отсканировать QR-код и провести оплату';
            document.getElementById('benefits_4').innerText = 'Также QR-наклейку можно приклеивать или вкладывать в доставку';
            break;
        case 'other': // 12
            // как работает система быстрых платежей
            document.getElementById('benefits_1').innerText = 'Вы заключаете договор с банком, который поддерживает СБП';
            document.getElementById('benefits_3').innerText = 'Вы можете принимать платежи без кассы, просто поставив QR-код на видное место либо провести интеграцию с кассой по удобному API, чтобы формировать индивидуальные QR-коды, в которые будет зашита цена';
            document.getElementById('benefits_2').innerText = 'Покупатель сканирует QR-код банковским приложением и подтверждает платеж';
            document.getElementById('benefits_4').parentElement.style.display = 'none';
            break;
        default:
            // как работает система быстрых платежей
            document.getElementById('benefits_1').innerText = 'Вы заключаете договор с банком, который поддерживает СБП';
            document.getElementById('benefits_2').innerText = 'Интегрируете систему с кассой по удобному API';
            document.getElementById('benefits_3').innerText = 'К каждой покупке будет сгенерен индивидуальный QR-код, куда будут зашиты ваши реквизиты и сумма платежа';
            document.getElementById('benefits_4').innerText = 'Покупатель сканирует QR-код банковским приложением и подтверждает платеж';
    }

    const shareText = 'Как не платить банку за эквайринг? Все, что нужно знать, чтобы подключить ваш бизнес к системе быстрых платежей и экономить.';
    const absoluteURL = document.location.href;

    // vk share

    document.getElementById('vkShare').addEventListener('click', (e) => {
        e.preventDefault();
        const url = `http://vk.com/share.php?url=${absoluteURL}`;
        openShareWindow(url);
    });

    // ok share

    document.getElementById('okShare').addEventListener('click', (e) => {
        e.preventDefault();
        // или эта?
        // http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl={ссылка}&st.comments={комментарий}
        const url = `https://connect.ok.ru/offer?url=${absoluteURL}`;
        openShareWindow(url);
    });

    // twitter share
    document.getElementById('twitterShare').addEventListener('click', (e) => {
        e.preventDefault();
        const url = `https://twitter.com/intent/tweet?text=${encodeURI(shareText)}&url=${absoluteURL}`;
        openShareWindow(url);
    });

    // telegram share

    document.getElementById('telegramShare').addEventListener('click', (e) => {
        e.preventDefault();
        const url = `https://t.me/share/url?url=${encodeURI(absoluteURL)}&text=${encodeURI(shareText)}`;
        openShareWindow(url);
    });


    // fb share

    document.getElementById('facebookShare').addEventListener('click', (e) => {
        e.preventDefault();
        const url = `https://www.facebook.com/sharer/sharer.php?u=${absoluteURL}`;
        openShareWindow(url);
    });

    // whatsUp share

    document.getElementById('whatsUpShare').addEventListener('click', (e) => {
        e.preventDefault();
        let url;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // mobile
            url = `https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`;
        } else {
            // desktop
            url = `https://web.whatsapp.com/send?l=en&text=${encodeURIComponent(window.location.href)}`;
        }
        openShareWindow(url);
    });

}());