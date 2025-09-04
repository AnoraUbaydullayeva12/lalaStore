import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Save, Edit3 } from 'lucide-react';

const PersonalDataPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Иванов Иван Иванович',
    email: 'ivanov@gmail.com',
    phone: '+7 (999) 123-45-67',
    birthDate: '1990-05-15',
    address: 'г. Москва, ул. Примерная, д. 123, кв. 45',
    city: 'Москва',
    postalCode: '123456'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Здесь будет логика сохранения данных
    setIsEditing(false);
    // Показать уведомление об успешном сохранении
  };

  const handleCancel = () => {
    // Сбросить изменения
    setFormData({
      fullName: 'Иванов Иван Иванович',
      email: 'ivanov@gmail.com',
      phone: '+7 (999) 123-45-67',
      birthDate: '1990-05-15',
      address: 'г. Москва, ул. Примерная, д. 123, кв. 45',
      city: 'Москва',
      postalCode: '123456'
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Личные данные</h2>
            <p className="text-gray-600">Управление вашей личной информацией</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Edit3 size={18} />
            <span>{isEditing ? 'Отменить' : 'Редактировать'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Avatar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="text-gray-400" size={48} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{formData.fullName}</h3>
              <p className="text-gray-600 text-sm mb-4">{formData.email}</p>
              {isEditing && (
                <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                  Изменить фото
                </button>
              )}
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-6">
            <h4 className="font-semibold text-gray-900 mb-4">Информация об аккаунте</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Дата регистрации:</span>
                <span className="font-medium">15.03.2022</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Последний вход:</span>
                <span className="font-medium">Сегодня, 14:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Статус:</span>
                <span className="text-green-600 font-medium">Активный</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-6">Основная информация</h4>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Фамилия Имя Отчество*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                      !isEditing ? 'bg-gray-50 text-gray-600' : ''
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    E-mail*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                      !isEditing ? 'bg-gray-50 text-gray-600' : ''
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Телефон*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                      !isEditing ? 'bg-gray-50 text-gray-600' : ''
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Дата рождения
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                      !isEditing ? 'bg-gray-50 text-gray-600' : ''
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin size={16} className="inline mr-2" />
                  Адрес
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                    !isEditing ? 'bg-gray-50 text-gray-600' : ''
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Город
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                      !isEditing ? 'bg-gray-50 text-gray-600' : ''
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Почтовый индекс
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                      !isEditing ? 'bg-gray-50 text-gray-600' : ''
                    }`}
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Save size={18} />
                    <span>СОХРАНИТЬ ИЗМЕНЕНИЯ</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    ОТМЕНИТЬ
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDataPage;