import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

type FormState = {
    name: string,
    nameError: boolean,
    surname: string,
    surnameError: boolean,
    email: string,
    emailError: boolean,
    phone: string,
    phoneError: boolean,
};

export default function RegistrationCourseForm2() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormState>({
        name: "",
        nameError: false,
        surname: "",
        surnameError: false,
        email: "",
        emailError: false,
        phone: "",
        phoneError: false,
    });

    const handleRegistration = (id: string) => {
        alert('handleRegistration todo ' + id)
    }

    const handleInputsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log('jest');
        validationForm(name, value);

        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const validationForm = (name: string, value: string) => {

        if (value.length === 0) {
            setFormData(prev => ({ ...prev, [name + 'Error']: true }));
        }
        else {
            setFormData(prev => ({ ...prev, [name + 'Error']: false }));
        }
    }

    if (!id) {
        return (
            <div>Brak takiego kursu</div>
        )
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-4 px-4">
            <div className="max-w-xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 text-gray-400 hover:text-gray-900 hover:cursor-pointer transition-colors mb-8"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="text-xs font-black uppercase tracking-widest">Wróć do kursów</span>
                </button>
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">
                        Zapisz się na kurs
                    </h1>
                    <p className="text-gray-500 font-medium">
                        Wypełnij poniższe dane, aby zarezerwować miejsce
                    </p>
                </div>

                <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-10">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Imię</label>
                            <input
                                type="text"
                                placeholder="Jan"
                                name='name'
                                value={formData.name}
                                onChange={handleInputsChange}
                                className={`w-full p-4 bg-gray-50 border-2 ${formData.nameError ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Nazwisko</label>
                            <input
                                type="text"
                                placeholder="Kowalski"
                                name='surname'
                                value={formData.surname}
                                onChange={handleInputsChange}
                                className={`w-full p-4 bg-gray-50 border-2 ${formData.surnameError ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Adres E-mail</label>
                            <input
                                type="email"
                                placeholder="twoj@email.pl"
                                name='email'
                                value={formData.email}
                                onChange={handleInputsChange}
                                className={`w-full p-4 bg-gray-50 border-2 ${formData.emailError ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Numer telefonu</label>
                            <input
                                type="tel"
                                placeholder="511222456"
                                name='phone'
                                value={formData.phone}
                                onChange={handleInputsChange}
                                className={`w-full p-4 bg-gray-50 border-2 ${formData.phoneError ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                        </div>

                        <div className="pt-4">
                            <button onClick={() => handleRegistration(id)} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-100 active:scale-[0.98] transition-all">
                                Potwierdź rejestrację
                            </button>
                            <p className="text-center mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                Bezpieczne zapisy przez MountainCourses
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}