import { z } from "zod";

/**
 * Zod Schema untuk validasi form booking.
 * Mengikuti spesifikasi teknis: nama, email, tanggal, guests, message.
 */
export const bookingSchema = z.object({
  name: z.string().min(2, "Nama lengkap harus diisi"),
  email: z.string().email("Format email tidak valid"),
  date: z.string().min(1, "Silakan pilih tanggal reservasi"),
  guests: z.number().min(1, "Minimal 1 orang"),
  message: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
