export interface InterfaceTestimonialCard {
  id?: number; // Opcional para novos depoimentos
  name: string;
  rating: number; // Avaliação em estrelas (ex: 1 a 5)
  message: string; // O texto do depoimento
  email?: string; // Opcional, não será divulgado
  isAnonymous?: boolean
}
