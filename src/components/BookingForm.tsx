import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { bookingSchema, type BookingFormData } from "@/data/schema";
import { Clock, Users, Phone } from "lucide-react";

export default function BookingForm() {
  // Ganti Whatsapp dengan nomermu 
  const WHATSAPP_NUMBER = "6285736423884"; // ganti bagian ini
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      guests: 1,
      message: "",
    },
  });

  const onSubmit = (data: BookingFormData) => {
    // Format the date to be more readable
    const formattedDate = new Date(data.date).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Create the WhatsApp message
    const whatsappMessage = `🍵 *RESERVASI MEJA BARU*

━━━━━━━━━━━━━━━━━
📋 *Detail Reservasi*
━━━━━━━━━━━━━━━━━

👤 *Nama:* ${data.name}
📧 *Email:* ${data.email}
📅 *Tanggal:* ${formattedDate}
👥 *Jumlah Tamu:* ${data.guests} orang
${data.message ? `\n📝 *Catatan:* ${data.message}` : ''}

━━━━━━━━━━━━━━━━━
Terima kasih telah memilih Biji Cerita! ☕`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset the form
    reset();
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Reservasi Meja</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pesan meja Anda sekarang dan nikmati pengalaman kopi yang tak terlupakan bersama kami.
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="100">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Nama Lengkap
                    </label>
                    <Input
                      placeholder="John Doe"
                      {...register("name")}
                      className="h-12"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@email.com"
                      {...register("email")}
                      className="h-12"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Tanggal Reservasi
                    </label>
                    <Input
                      type="date"
                      {...register("date")}
                      min={today}
                      className="h-12"
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.date.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Jumlah Tamu
                    </label>
                    <Input
                      type="number"
                      min={1}
                      max={20}
                      {...register("guests", { valueAsNumber: true })}
                      className="h-12"
                    />
                    {errors.guests && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.guests.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    rows={4}
                    placeholder="Permintaan khusus, alergi, atau informasi lainnya..."
                    {...register("message")}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg bg-green-600 hover:bg-green-700 shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Kirim via WhatsApp
                </Button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-amber-600 text-white p-6 rounded-2xl shadow-lg sticky top-24" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">Informasi Reservasi</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Jam Operasional</p>
                    <p className="text-sm text-amber-100">Senin - Jumat: 08:00 - 22:00</p>
                    <p className="text-sm text-amber-100">Sabtu - Minggu: 08:00 - 00:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Kapasitas</p>
                    <p className="text-sm text-amber-100">Maksimal 20 orang per reservasi</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Konfirmasi</p>
                    <p className="text-sm text-amber-100">Kami akan menghubungi Anda dalam 24 jam</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-amber-500">
                <p className="text-sm text-amber-100">
                  Untuk pertanyaan lebih lanjut, hubungi kami langsung di
                  <span className="font-medium text-white"> +62 812-3456-7890</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
