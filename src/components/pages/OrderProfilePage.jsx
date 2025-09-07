import React, { useState } from 'react';
import { FileText, Plus, Edit3, Trash2, User, Building, Calendar, Search } from 'lucide-react';

const OrderProfilePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  const userProfiles = [
    { 
      id: 5, 
      date: '18/03/2022 16:48:15', 
      name: 'А С И', 
      fullName: 'Алексеев Сергей Иванович',
      type: 'Физическое лицо',
      phone: '+7 (999) 123-45-67',
      email: 'alexeev@gmail.com',
      address: 'г. Москва, ул. Ленина, д. 10'
    },
    { 
      id: 9, 
      date: '18/03/2022 16:48:15', 
      name: 'А С И', 
      fullName: 'Андреев Сергей Иванович',
      type: 'Физическое лицо',
      phone: '+7 (999) 987-65-43',
      email: 'andreev@gmail.com',
      address: 'г. Санкт-Петербург, пр. Невский, д. 25'
    },
    { 
      id: 12, 
      date: '20/03/2022 14:22:30', 
      name: 'ООО "Рога и Копыта"', 
      fullName: 'ООО "Рога и Копыта"',
      type: 'Юридическое лицо',
      phone: '+7 (495) 123-45-67',
      email: 'info@rogaikopyta.ru',
      address: 'г. Москва, ул. Бизнес-центр, д. 1',
      inn: '1234567890',
      kpp: '123456789'
    },
    { 
      id: 15, 
      date: '22/03/2022 11:15:45', 
      name: 'И П Петров', 
      fullName: 'ИП Петров Петр Петрович',
      type: 'Индивидуальный предприниматель',
      phone: '+7 (999) 555-44-33',
      email: 'petrov.ip@gmail.com',
      address: 'г. Екатеринбург, ул. Мира, д. 5',
      inn: '987654321012'
    }
  ];

  const filteredProfiles = userProfiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ProfileModal = ({ profile, onClose, onSave }) => {
    const [formData, setFormData] = useState(profile || {
      name: '',
      fullName: '',
      type: 'Физическое лицо',
      phone: '',
      email: '',
      address: '',
      inn: '',
      kpp: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b">
            <h3 className="text-xl font-semibold">
              {profile ? 'Редактировать профиль' : 'Создать новый профиль'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ×
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Тип плательщика*
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="Физическое лицо">Физическое лицо</option>
                <option value="Юридическое лицо">Юридическое лицо</option>
                <option value="Индивидуальный предприниматель">Индивидуальный предприниматель</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Краткое название*
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Полное название*
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон*
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Адрес*
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
            </div>

            {(formData.type === 'Юридическое лицо' || formData.type === 'Индивидуальный предприниматель') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ИНН*
                  </label>
                  <input
                    type="text"
                    value={formData.inn}
                    onChange={(e) => setFormData({...formData, inn: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  />
                </div>
                {formData.type === 'Юридическое лицо' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      КПП*
                    </label>
                    <input
                      type="text"
                      value={formData.kpp}
                      onChange={(e) => setFormData({...formData, kpp: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      required
                    />
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 rounded-lg font-medium transition-colors"
              >
                {profile ? 'СОХРАНИТЬ ИЗМЕНЕНИЯ' : 'СОЗДАТЬ ПРОФИЛЬ'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-lg font-medium transition-colors"
              >
                ОТМЕНИТЬ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Профили пользователей</h2>
            <p className="text-gray-600">Управление профилями для оформления заказов</p>
          </div>
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <Plus size={18} />
            <span>Добавить профиль</span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Поиск по названию или типу профиля..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
      </div>

      {/* Profiles Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-gray-900">Профиль: 1</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Код
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Дата обновления
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Название
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Тип плательщика
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProfiles.map((profile) => (
                <tr key={profile.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {profile.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-gray-400" />
                      {profile.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {profile.type === 'Физическое лицо' ? (
                        <User size={16} className="mr-2 text-blue-500" />
                      ) : (
                        <Building size={16} className="mr-2 text-green-500" />
                      )}
                      <div>
                        <div className="text-sm font-medium text-gray-900">{profile.name}</div>
                        <div className="text-sm text-gray-500">{profile.fullName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      profile.type === 'Физическое лицо' 
                        ? 'bg-blue-100 text-blue-800'
                        : profile.type === 'Юридическое лицо'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {profile.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedProfile(profile)}
                        className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                      >
                        <Edit3 size={16} />
                        <span>Изменить</span>
                      </button>
                      <button className="text-red-600 hover:text-red-800 flex items-center space-x-1">
                        <Trash2 size={16} />
                        <span>Удалить</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProfiles.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto text-gray-300 mb-4" size={64} />
            <p className="text-gray-500 text-lg">Профили не найдены</p>
            <p className="text-gray-400 text-sm mt-2">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {userProfiles.filter(p => p.type === 'Физическое лицо').length}
          </div>
          <p className="text-gray-600">Физические лица</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {userProfiles.filter(p => p.type === 'Юридическое лицо').length}
          </div>
          <p className="text-gray-600">Юридические лица</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {userProfiles.filter(p => p.type === 'Индивидуальный предприниматель').length}
          </div>
          <p className="text-gray-600">ИП</p>
        </div>
      </div>

      {/* Modals */}
      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          onSave={(data) => {
            // Здесь будет логика сохранения
            console.log('Saving profile:', data);
          }}
        />
      )}

      {isCreating && (
        <ProfileModal
          profile={null}
          onClose={() => setIsCreating(false)}
          onSave={(data) => {
            // Здесь будет логика создания
            console.log('Creating profile:', data);
          }}
        />
      )}
    </div>
  );
};

export default OrderProfilePage;