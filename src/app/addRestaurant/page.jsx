"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from 'react';
import CategoryEnum from "../utils/enum/categoryEnum";


const AddRestaurantPage = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
          redirect("/api/auth/signin?callbackUrl=/addRestaurant");
        },
      });

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    email: '',
    web: '',
    city: '',
    address: '',
    tlf: '',
    insta: '',
    description: '',
    img: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      img: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   

    // Si todos los campos están completos, manejar el envío del formulario
    console.log('Formulario enviado:', formData);



  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Añade tu restaurante</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <span className="text-gray-700">Nombre *</span>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-900 "
                        placeholder="Restaurante"
                        minLength={3}
                        maxLength={30}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Por favor, ingrese el nombre del restaurante.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <span className="text-gray-700">Tipo de Restaurante *</span>
                      <select
                        name="category"
                        id="category"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-900"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Por favor, seleccione el tipo de restaurante.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      >
                        <option value="">Selecciona una categoría</option>
                        {Object.keys(CategoryEnum).map((key) => (
                          <option key={key} value={CategoryEnum[key]}>{CategoryEnum[key]}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-5">
                      <span className="text-gray-700">Email *</span>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-900"
                        placeholder="restaurante@example.com"
                        minLength={3}
                        maxLength={30}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Por favor, ingrese el mail del restaurante.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <span className="text-gray-700">Web (Opcional)</span>
                      <input
                        type="url"
                        name="web"
                        id="web"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-900"
                        placeholder="https://restaurant.com"
                        maxLength={60}
                        value={formData.web}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <span className="text-gray-700">Ciudad *</span>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-900"
                        placeholder="City"
                        maxLength={60}
                        value={formData.city}
                        onChange={handleChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Por favor, ingrese la ciudad.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <span className="text-gray-700">Dirección *</span>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-900"
                        placeholder="Address"
                        maxLength={100}
                        value={formData.address}
                        onChange={handleChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Por favor, ingrese la dirección.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <span className="text-gray-700">Teléfono *</span>
                      <input
                        type="tel"
                        name="tlf"
                        id="tlf"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-900"
                        placeholder="Teléfono"
                        maxLength={60}
                        pattern="[0-9]*"
                        value={formData.tlf}
                        onChange={handleChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity('Por favor, ingrese el teléfono del restaurante.')}
                        onInput={(e) => e.target.setCustomValidity('Ingresa un teléfono válido')}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <span className="text-gray-700">Instagram (Opcional)</span>
                      <input
                        type="text"
                        name="insta"
                        id="insta"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-900"
                        placeholder="Usuario de Instagram (sin @)"
                        value={formData.insta}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <span className="text-gray-700">Descripción (Opcional)</span>
                      <textarea
                        type="text"
                        name="description"
                        id="description"
                        className="h-20 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-900"
                        placeholder="Una breve descripción del restaurante"
                        maxLength={300}
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <span className="text-gray-700">Imagen (Opcional)</span>
                      <input
                        type="file"
                        name="img"
                        id="img"
                        accept="image/*"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        onChange={handleImageChange}
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurantPage;
