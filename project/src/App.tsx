import React, { useState } from 'react';
import { Building2, Phone, Mail, User, MapPin, Calendar } from 'lucide-react';

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  details: string;
}

const properties: Property[] = [
  {
    id: 1,
    name: "Residencial Villa Marina",
    location: "São Paulo, SP",
    price: "R$ 850.000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    details: "3 quartos • 2 vagas • 150m²"
  },
  {
    id: 2,
    name: "Edifício Sky Garden",
    location: "Rio de Janeiro, RJ",
    price: "R$ 1.200.000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    details: "4 quartos • 3 vagas • 200m²"
  },
  {
    id: 3,
    name: "Condomínio Park View",
    location: "Curitiba, PR",
    price: "R$ 650.000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    details: "2 quartos • 1 vaga • 100m²"
  }
];

function App() {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-2xl font-semibold text-gray-800">Lançamentos Imobiliários</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Descubra seu Novo Lar</h2>
          <p className="text-xl text-blue-100">Os melhores lançamentos imobiliários em um só lugar</p>
        </div>
      </div>

      {/* Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">Lançamentos em Destaque</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{property.name}</h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{property.details}</p>
                  <p className="text-2xl font-bold text-blue-600">{property.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Fale Conosco</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <User className="h-4 w-4 mr-2" />
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Imóvel de Interesse
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.property}
                  onChange={(e) => setFormData({...formData, property: e.target.value})}
                  required
                >
                  <option value="">Selecione um imóvel</option>
                  {properties.map((property) => (
                    <option key={property.id} value={property.name}>
                      {property.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Building2 className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">Lançamentos Imobiliários</span>
            </div>
            <div className="flex space-x-6">
              <a href="tel:+551199999999" className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                (11) 9999-9999
              </a>
              <a href="mailto:contato@lancamentos.com" className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                contato@lancamentos.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;