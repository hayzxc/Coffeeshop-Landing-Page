import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami siap melayani Anda. Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut.
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8" data-aos="fade-right">
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-600">
                  <MapPin className="h-6 w-6" />
                  Lokasi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Jl. Sudirman No. 123<br />
                  Jakarta Selatan, DKI Jakarta 12190<br />
                  Indonesia
                </p>
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1635959048934!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-600">
                  <Clock className="h-6 w-6" />
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Senin - Jumat</span>
                  <span className="font-medium">08:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sabtu</span>
                  <span className="font-medium">08:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Minggu</span>
                  <span className="font-medium">08:00 - 00:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hari Libur</span>
                  <span className="font-medium">09:00 - 00:00</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8" data-aos="fade-left">
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-600">
                  <Phone className="h-6 w-6" />
                  Kontak Langsung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Telepon</p>
                    <p className="text-amber-600">+62 21 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-amber-600">info@pranacoffee.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-amber-600">+62 812-3456-7890</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-amber-600">Ikuti Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dapatkan update terbaru dan promo menarik dengan mengikuti kami di media sosial.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-3 bg-amber-100 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-amber-100 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-amber-100 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-amber-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-100 mb-4">
                  Dapatkan penawaran spesial dan informasi terbaru langsung di inbox Anda.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <button className="px-6 py-2 bg-white text-amber-600 rounded-lg font-medium hover:bg-amber-50 transition-colors">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}