export interface InterfaceProduct {
   id: number;
  name: string;
  description: string;
  price: number;
  image: string; // Nome do arquivo da imagem (ex: 'bolo-brigadeiro.png')
  weight: string; // Ex: "500g", "1kg"
  size: string;   // Ex: "20cm", "Pequeno", "Médio"
  recipe: string; // Ex: "Tradicional", "Secreta da Vovó"
  servings: number; // Quantidade de pessoas que serve
}
