export interface TestimonialFormData {
  name: string;
  email?: string; // Opcional
  isAnonymous?: boolean; // Opcional
  rating: number; // Obrigatório
  message: string; // Obrigatório
}
