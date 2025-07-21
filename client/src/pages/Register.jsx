import React, { useState } from 'react';
import useAuthStore from '../store/authStore';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import RegisterForm from '../components/LoginRegisterForms/RegisterForm.jsx';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    carName: '',
  });

  const { registerUser, loading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('הסיסמאות לא תואמות');
      return;
    }

    const result = await registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      carName: formData.carName,
    });

    if (result.success) {
      navigate('/login');
    }
  };

  return (
      <div className="content-wrapper">
        <div className="form-container">
          <h2 className="text-2xl font-bold text-center mb-6">הרשמה</h2>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
              <RegisterForm
                  formData={formData}
                  handleChange={handleChange}
                  loading={loading}
                />

            <Button
                type="submit"
                className="w-full btn-primary"
                text={loading ? 'נרשם...' : 'הירשם'}
            />
          </form>

          <p className="text-center mt-4 text-gray-600">
            יש לך כבר חשבון?
            <Link to="/login" className="text-blue-500 hover:underline mr-1">
              התחבר
            </Link>
          </p>
        </div>
      </div>
  );
};

export default Register;
