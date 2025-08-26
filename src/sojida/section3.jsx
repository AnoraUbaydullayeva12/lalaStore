import React from "react";

const DeliveryInfo = () => {
  return (
    <section className="max-[100%] w-[80%] mx-auto text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Наш интернет-магазин предлагает несколько вариантов доставки:</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Курьерская</li>
        <li>Самовывоз из магазина</li>
        <li>Постамат</li>
        <li>Почтовая</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Курьерская доставка*</h3>
      <p className="mb-4">
        Курьер привезёт заказ по указанному адресу в будние дни с 9:00 до 18:00. Проверка товара, примерка — до 15 минут. Минимальная сумма — 3000 ₽.
      </p>
      <p className="text-sm mb-6 text-gray-500">
        *Уточняйте у менеджера магазина, действует ли услуга в вашем регионе.
      </p>

      <h3 className="text-xl font-semibold mb-2">Самовывоз из магазина</h3>
      <p className="mb-6">
        Заберите заказ из удобного магазина. Адреса и график уточняются у менеджера или в корзине. Покажите номер заказа и получите товар.
      </p>

      <h3 className="text-xl font-semibold mb-2">Постамат</h3>
      <p className="mb-2">Удобно, когда вы хотите забрать заказ в любое удобное время.</p>

      <h4 className="font-medium mt-4 mb-2">Как работать с постаматом:</h4>
      <ul className="list-disc list-inside mb-6">
        <li>Выбирайте пункт выдачи на сайте</li>
        <li>Получите уведомление</li>
        <li>Заберите заказ</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Почтовая доставка</h3>
      <p className="mb-6">
        Доставка по всей России Почтой России. Стоимость — 100–150 ₽. Трек-номер для отслеживания предоставляется.
      </p>

      <h3 className="text-xl font-semibold mb-2">Срок доставки</h3>
      <table className="w-full text-left border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Регион</th>
            <th className="border p-2">Курьерская</th>
            <th className="border p-2">Самовывоз</th>
            <th className="border p-2">Постамат</th>
            <th className="border p-2">Почта</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Москва и обл.</td>
            <td className="border p-2">1-2 рабочих дня</td>
            <td className="border p-2">1 рабочий день</td>
            <td className="border p-2">2-3 дня</td>
            <td className="border p-2">3-5 дней</td>
          </tr>
          <tr>
            <td className="border p-2">Центр</td>
            <td className="border p-2">2-3 рабочих дня</td>
            <td className="border p-2">2-3 дня</td>
            <td className="border p-2">3-4 дня</td>
            <td className="border p-2">5-7 дней</td>
          </tr>
          <tr>
            <td className="border p-2">Сибирь</td>
            <td className="border p-2">3-5 рабочих дней</td>
            <td className="border p-2">3 дня</td>
            <td className="border p-2">5-6 дней</td>
            <td className="border p-2">7-10 дней</td>
          </tr>
        </tbody>
      </table>

      <p className="text-sm text-gray-600">О доставке в другие регионы уточняйте у менеджера магазина.</p>
    </section>
  );
};

export default DeliveryInfo;
