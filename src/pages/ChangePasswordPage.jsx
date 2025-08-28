import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Shield, CheckCircle, AlertCircle } from 'lucide-react';

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordRequirements = [
    { text: 'Минимум 8 символов', check: (pwd) => pwd.length >= 8 },
    { text: 'Содержит заглавную букву', check: (pwd) => /[A-Z]/.test(pwd) },
    { text: 'Содержит строчную букву', check: (pwd) => /[a-z]/.test(pwd) },
    { text: 'Содержит цифру', check: (pwd) => /\d/.test(pwd) },
    { text: 'Содержит специальный символ', check: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Введите текущий пароль';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'Введите новый пароль';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Пароль должен содержать минимум 8 символов';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Подтвердите новый пароль';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = 'Новый пароль должен отличаться от текущего';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Здесь будет логика смены пароля
      await new Promise(resolve => setTimeout(resolve, 2000)); // Имитация API запроса
      
      // Успешная смена пароля
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      // Показать уведомление об успехе
      alert('Пароль успешно изменен!');
      
    } catch (error) {
      setErrors({ submit: 'Произошла ошибка при смене пароля' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPasswordStrength = (password) => {
    const passedRequirements = passwordRequirements.filter(req => req.check(password)).length;
    if (passedRequirements < 2) return { strength: 'weak', color: 'bg-red-500', text: 'Слабый' };
    if (passedRequirements < 4) return { strength: 'medium', color: 'bg-yellow-500', text: 'Средний' };
    return { strength: 'strong', color: 'bg-green-500', text: 'Сильный' };
  };

  const passwordStrength = getPasswordStrength(formData.newPassword);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Смена пароля</h2>
        <p className="text-gray-600">Обеспечьте безопасность вашего аккаунта</p>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="text-yellow-500" size={24} />
          <h3 className="text-lg font-semibold text-gray-900">Изменение пароля</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Текущий пароль*
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPasswords.current ? 'text' : 'password'}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                  errors.currentPassword ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Введите текущий пароль"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('current')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPasswords.current ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={16} className="mr-1" />
                {errors.currentPassword}
              </p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Новый пароль*
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPasswords.new ? 'text' : 'password'}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                  errors.newPassword ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Введите новый пароль"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('new')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPasswords.new ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={16} className="mr-1" />
                {errors.newPassword}
              </p>
            )}
            
            {/* Password Strength Indicator */}
            {formData.newPassword && (
              <div className="mt-2">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                      style={{ width: `${(passwordRequirements.filter(req => req.check(formData.newPassword)).length / passwordRequirements.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{passwordStrength.text}</span>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Подтверждение нового пароля*
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPasswords.confirm ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                  errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Повторите новый пароль"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirm')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPasswords.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={16} className="mr-1" />
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Password Requirements */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Требования к паролю:</h4>
            <div className="space-y-2">
              {passwordRequirements.map((requirement, index) => {
                const isValid = requirement.check(formData.newPassword);
                return (
                  <div key={index} className="flex items-center space-x-2">
                    {isValid ? (
                      <CheckCircle className="text-green-500" size={16} />
                    ) : (
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                    )}
                    <span className={`text-sm ${isValid ? 'text-green-700' : 'text-gray-600'}`}>
                      {requirement.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {errors.submit && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 flex items-center">
                <AlertCircle size={16} className="mr-2" />
                {errors.submit}
              </p>
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-900 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                  <span>ИЗМЕНЕНИЕ ПАРОЛЯ...</span>
                </>
              ) : (
                <>
                  <Lock size={18} />
                  <span>СМЕНИТЬ ПАРОЛЬ</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Security Tips */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-900 mb-3">Советы по безопасности:</h4>
        <ul className="text-sm text-blue-800 space-y-2">
          <li>• Используйте уникальный пароль для каждого аккаунта</li>
          <li>• Регулярно меняйте пароли (рекомендуется каждые 3-6 месяцев)</li>
          <li>• Не используйте личную информацию в паролях</li>
          <li>• Рассмотрите использование менеджера паролей</li>
        </ul>
      </div>
    </div>
  );
};

export default ChangePasswordPage;