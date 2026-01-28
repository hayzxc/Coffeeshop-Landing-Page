import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Leaf, Clock, MapPin, Award, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Cerita Kami",
      description: "Berdiri sejak 2020, kami berkomitmen menghadirkan biji kopi lokal kualitas premium dengan cita rasa autentik Indonesia.",
      icon: <History className="h-8 w-8 text-amber-600" />
    },
    {
      title: "Biji Pilihan",
      description: "Kami bekerja sama langsung dengan petani lokal dari berbagai daerah untuk memastikan kesegaran dan kualitas setiap cangkir.",
      icon: <Leaf className="h-8 w-8 text-amber-600" />
    },
    {
      title: "Jam Buka",
      description: "Senin - Jumat: 08:00 - 22:00. Sabtu - Minggu: 08:00 - 00:00.",
      icon: <Clock className="h-8 w-8 text-amber-600" />
    },
    {
      title: "Lokasi Strategis",
      description: "Terletak di pusat kota dengan akses mudah dan parkir luas untuk kenyamanan Anda.",
      icon: <MapPin className="h-8 w-8 text-amber-600" />
    },
    {
      title: "Barista Profesional",
      description: "Tim barista berpengalaman yang siap menciptakan kreasi kopi sesuai selera Anda.",
      icon: <Award className="h-8 w-8 text-amber-600" />
    },
    {
      title: "Komunitas Coffee",
      description: "Bergabunglah dengan komunitas pecinta kopi kami dan nikmati berbagai acara menarik setiap bulannya.",
      icon: <Users className="h-8 w-8 text-amber-600" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Tentang Biji Cerita</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lebih dari sekadar kopi, kami menciptakan pengalaman yang tak terlupakan untuk setiap kunjungan Anda.
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <Card
              key={f.title}
              className="border-none bg-white/60 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">{f.icon}</div>
                <CardTitle className="text-xl text-gray-900">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}