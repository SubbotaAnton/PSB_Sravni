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

    document.getElementById('submitForm').addEventListener('click', function (event) {
        event.preventDefault();
        document.location = 'https://www.psbank.ru/Business/Acquiring/sbp?utm_source=sravni&utm_medium=cpm&utm_campaign=msb_sbp_sravni_guide';
    }, false);

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

    switch (formResult) {
        case 'coffeeCorner':
            document.getElementById('yourBusiness').innerText = 'кофе-корнер';
            break;
        case 'restaurant':
            document.getElementById('yourBusiness').innerText = 'ресторан';
            break;
        case 'internetShop':
            document.getElementById('yourBusiness').innerText = 'интернет-магазин';
            break;
        case 'beautySaloon':
            document.getElementById('yourBusiness').innerText = 'салон красоты';
            break;
        case 'fitness':
            document.getElementById('yourBusiness').innerText = 'фитнес';
            break;
        case 'dealer':
            document.getElementById('specialCase').innerHTML = 'подключиться <span class="orangeText">к системе быстрых платежей</span>';
            break;
        case 'hotel':
            document.getElementById('yourBusiness').innerText = 'отель';
            break;
        case 'medicine':
            document.getElementById('yourBusiness').innerText = 'медицина';
            break;
        case 'retailStore':
            document.getElementById('yourBusiness').innerText = 'розничный магазин';
            break;
        case 'education':
            document.getElementById('yourBusiness').innerText = 'бизнес';
            break;
        case 'other':
            document.getElementById('yourBusiness').innerText = 'бизнес';
            break;
        default:
            document.getElementById('yourBusiness').innerText = 'бизнес';
    }

    switch (formResult) {
        case 'coffeeCorner': // 1
        case 'restaurant': // 2
            // default
            break;
        case 'internetShop': // 3
        case 'beautySaloon': // 4
            document.getElementById('specialBenefits').innerHTML = `
                <p>Если вы продаете продукты, игрушки, книги, спорттовары, бытовую технику, то комиссия</p>
                <p class="percent">0,4%</p>
            `;
            break;
        case 'medicine': // 9
            document.getElementById('specialBenefits').innerHTML = `
                <p>Комиссия для образовательных проектов</p>
                <p class="percent">0,4%</p>
            `;
            break;
        case 'education':
            document.getElementById('specialBenefits').innerHTML = `
                <p>Комиссия для медицинских учреждений и части аптек</p>
                <p class="percent">0,4%</p>
            `;
            break;
        default:
            document.getElementById('specialBenefits').innerHTML = `
                <p>Для части бизнесов комиссия</p>
                <p class="percent">0,4%</p>
                <p class="remark">Узнать вашу комиссию можно при подключении.</p>
            `;
    }

    const shareText = 'Все, что нужно знать, чтобы подключить ваш бизнес к системе быстрых платежей и экономить.';
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
