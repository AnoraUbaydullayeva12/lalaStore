import React from 'react'

const section1 = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl w-[200px] mx-auto mt-[40px] mb-[20px]'>О компании</h1>
      <div className='bg-gray-200 h-[45px]'>
        <h2 className='w-[500px] pl-[150px] pt-[10px] text-gray-600'>Главная - О компании</h2>
        </div>
        <div className=' bg-gray-200  h-[67px] pt-[17px] mt-[10px] '>
            <nav className='flex justify-between max-[100%] w-[85%] mx-auto pl-[40px]'>
                <ul className='flex gap-[160px]'>
                    <li className='text-gray-500 text-xl hover:text-black '>| О компании|</li>
                    <li className='text-gray-500 text-xl hover:text-black '>| Новости |</li>
                    <li className='text-gray-500 text-xl hover:text-black '>| Отзывы |</li>      
                    <li className='text-gray-500 text-xl hover:text-black '>| Контакты |</li>
                    <li className='text-gray-500 text-xl hover:text-black '> | Лицензии |</li>
                </ul>
            </nav>
        </div>


        <div className='max-[100%] w-[80%] mx-auto'>
          <p className='pt-[20px] text-gray-700'>Наш магазин Lalastore.ru существует с 2019 года и всегда рад приветствовать Мам и Пап, своей теплой атмосферой. В нашем магазине, Вы всегда найдете качественную продукцию для Ваших малышей, на любое время года. У нас работают настоящие профессионалы, любящие и знающие свое дело, которые всегда помогут Вам. Покупка товара проста не только на первый взгляд, но так же легка в нашем магазине. Мы ценим каждого покупателя и знаем как осуществить Ваши покупки по самым приятным ценам. </p>
          
          <ul className=' pt-[30px]'>
            <li className='text-gray-700'>Название компании: .......................... ООО "СБВ ГРУПП"</li>
            <li className='text-gray-700'>ИНН / КПП: .............................................. 7713795458 / 771701001</li>
            <li className='text-gray-700'>ОГРН: ........................................................... 5147746119220</li>
            <li className='text-gray-700'>Фактический адрес: ............................. г. Москва, Электролитный проезд, д. 3Б, строение 6</li>
            <li className='text-gray-700'>Телефон: ................................................... +7 916 361-30-00</li>
            <li className='text-gray-700'>e-mail: ....................................................... lalastore.ru@yandex.ru</li>
          </ul>

          <section>
      <h1 className="text-2xl font-bold mb-4 pt-[40px]">Lalastore.ru — интернет-магазин товаров для самых маленьких</h1>
      <p className="mb-2">В нашем магазине вы сможете приобрести различные товары для новорожденных, такие как:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Нательные комбинезоны</li>
        <li>Песочники</li>
        <li>Боди</li>
        <li>Комбинезоны из футера</li>
        <li>Комбинезоны вязаные</li>
        <li>Демисезонные комбинезоны</li>
        <li>Комбинезоны-трансформеры</li>
        <li>Головные уборы</li>
        <li>Носочки</li>
        <li>Нагрудники</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">Клиентский сервис на высоте!</h2>
      <p className="mb-2">
        Наши менеджеры — помощники и консультанты. Всегда помогут подобрать необходимые товары для ваших деток, подскажут, как оформить заказ и оплату.
      </p>
      <p className="font-semibold mb-6">
        Учитываем историю покупок и общения, чтобы персонализировать ответы и предложения. Формирование долгосрочных отношений — одна из главных целей.
      </p>

      <h2 className="text-xl font-bold mb-2">Почему стоит выбрать магазин для детей Lalastore.ru?</h2>
      <ul className="list-disc list-inside space-y-1 mb-8">
        <li>Индивидуальный подход к каждому покупателю</li>
        <li>Менеджер, который знает детали заказов</li>
        <li>Комплексный подход к товарам и услугам</li>
        <li>Доставка товаров до квартиры в течение 24 часов</li>
        <li>Широкий ассортимент вещей</li>
        <li>Работаем со всеми регионами России</li>
        <li>Качественная продукция от крупнейших поставщиков</li>
      </ul>
      <p className="font-medium">Сделаем жизнь ярче, уютнее и комфортнее!</p>
    </section>

        </div>
    </div>
  )
}

export default section1
