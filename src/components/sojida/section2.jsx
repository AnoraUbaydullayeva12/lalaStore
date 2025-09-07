import React from "react";

const PaymentAndReturn = () => {
  return (
    <section className="max-[100%] w-[80%] mx-auto">
      <h2 className="text-2xl font-bold mb-4 pt-[40px]">Условия оплаты и возврата</h2>

      <h3 className="text-xl font-semibold mb-2">Оплата наличными</h3>
      <p className="mb-4">При оплате наличными — платите курьеру при получении.</p>

      <h3 className="text-xl font-semibold mb-2">Оплата банковскими картами</h3>
      <p className="mb-4">Осуществляется через АО «АЛЬФА-БАНК». Принимаются карты VISA, MasterCard, МИР.</p>

      <h3 className="text-xl font-semibold mb-2">Случаи отказа в совершении платежа:</h3>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Ошибка данных карты</li>
        <li>Истёк срок действия</li>
        <li>Отказ банка</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Правила возврата товара</h3>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Только при оплате по безналичному расчёту</li>
        <li>Заявление на возврат и чек обязательны</li>
        <li>Деньги возвращаются в течение 10 рабочих дней</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Правила доставки</h3>
      <p className="mb-6">Работаем через курьеров, СДЭК, с доставкой по всей России. Возможен самовывоз.</p>

      <h3 className="text-xl font-semibold mb-2">Возврат</h3>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>По Москве: проверка товара, возврат через курьера — 500₽</li>
        <li>По России: через СДЭК, возврат за счёт покупателя</li>
      </ul>

      <p><strong>Срок возврата:</strong> не позднее 14 календарных дней с момента получения</p>
    </section>
  );
};

export default PaymentAndReturn;
