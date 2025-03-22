import Image from 'next/image'
import { FaWhatsapp, FaSwimmingPool, FaTools, FaWater, FaStar } from 'react-icons/fa'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd"
            alt="Piscina limpa e cristalina"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sua Piscina em Perfeitas Condições
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Serviços profissionais de limpeza e reparos de piscinas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contato" className="btn btn-primary">
              Solicitar Orçamento
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-500 hover:bg-green-600 text-white"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Navbar />

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaSwimmingPool className="w-12 h-12" />,
                title: "Limpeza Regular",
                description: "Manutenção periódica para manter sua piscina sempre limpa e cristalina."
              },
              {
                icon: <FaTools className="w-12 h-12" />,
                title: "Reparos",
                description: "Conserto de vazamentos, troca de peças e reparos em geral."
              },
              {
                icon: <FaWater className="w-12 h-12" />,
                title: "Tratamento Químico",
                description: "Balanceamento e tratamento da água para garantir a saúde dos banhistas."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "João Silva",
                rating: 5,
                text: "Excelente serviço! Minha piscina nunca esteve tão limpa.",
                image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd"
              },
              {
                name: "Maria Santos",
                rating: 5,
                text: "Profissionais muito competentes e pontuais.",
                image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container flex justify-center">
          <div className="w-full md:w-[40%] bg-white rounded-xl shadow-lg p-8">
            <h2 className="section-title text-center mb-8">Entre em Contato</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Tipo de Serviço
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="limpeza">Limpeza Regular</option>
                  <option value="reparos">Reparos</option>
                  <option value="tratamento">Tratamento Químico</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Com que frequência devo limpar minha piscina?",
                answer: "Recomendamos limpeza semanal para piscinas residenciais e diária para piscinas comerciais."
              },
              {
                question: "Quanto tempo leva para limpar uma piscina?",
                answer: "O tempo varia de acordo com o tamanho da piscina e seu estado. Em média, leva de 1 a 2 horas."
              },
              {
                question: "Vocês oferecem garantia nos serviços?",
                answer: "Sim, oferecemos garantia de 30 dias em todos os nossos serviços."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p>Telefone: (11) 99999-9999</p>
              <p>Email: contato@poolservice.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary">Facebook</a>
                <a href="#" className="hover:text-primary">Instagram</a>
                <a href="#" className="hover:text-primary">WhatsApp</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
                <li><a href="#depoimentos" className="hover:text-primary">Depoimentos</a></li>
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Área de Atendimento</h3>
              <p>São Paulo e região metropolitana</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Pool Service. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 