import React from "react";

const OrderInstructions = () => {
  return (
    <section className="max-[100%] w-[80%] mx-auto text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Как оформить заказ</h2>
      <p className="mb-4">Добавьте выбранные товары в корзину, перейдите на страницу оформления и нажмите «Оформить заказ» или «Быстрый заказ».</p>

      <h3 className="text-xl font-semibold mb-2">Быстрый заказ</h3>
      <p className="mb-6">
        Упростите оформление — просто заполните форму. Менеджер свяжется с вами, уточнит детали и подтвердит заказ. Особенно удобно для частых клиентов.
      </p>

      <h3 className="text-xl font-semibold mb-2">Оформление заказа в стандартном режиме</h3>
      <p className="mb-6">Если вы уверены в выборе — оформите заказ самостоятельно, заполнив форму на сайте.</p>

      <h4 className="text-lg font-medium mb-1">Заполнение адреса</h4>
      <p className="mb-4">Укажите индекс, улицу, дом, подъезд, этаж. При ошибках — система предложит корректировку.</p>

      <h4 className="text-lg font-medium mb-1">Доставка</h4>
      <p className="mb-4">Выберите один из предложенных способов: курьер, постамат, самовывоз или почта.</p>

      <h4 className="text-lg font-medium mb-1">Оплата</h4>
      <p className="mb-4">Выберите удобный способ оплаты: картой, наложенным платежом или наличными.</p>

      <h4 className="text-lg font-medium mb-1">Покупатель</h4>
      <p className="mb-4">Укажите свои ФИО, телефон, e-mail, а также любые дополнительные комментарии.</p>

      <h4 className="text-lg font-medium mb-1">Оформление заказа</h4>
      <p>
        После заполнения всех данных — нажмите «Оформить заказ». Вы получите письмо на e-mail и, при необходимости, перезвонит менеджер.
      </p>
    </section>
  );
};

export default OrderInstructions;

