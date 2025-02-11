export type RawPropertyData = {
  id: number;
  title: string;
  appraisal_value: string;
  minimum_value: string;
  address: string;
  image_url: string;
};

export const propertyData: RawPropertyData[] = [
  ...Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `CHACARA ${index + 1}`,
    appraisal_value: `CHACARA ${index + 1}`,
    minimum_value: `Valor de avaliação: R$${
      (index + 1) * 1000000
    },00\nValor mínimo de venda: R$605.448,59 (  descontro de 36,27%)`,
    address: `Casa - ${index + 4} quarto(s), ${
      index + 1
    } vaga(s) na garagem - Venda Online\nNúmero do imóvel: ${index + 1}${
      index + 1
    }${index + 1}${index + 1}-2\nRUA ${index}, N. ${
      index + 4
    } .\n Despesas do imóvel sob responsabilidade do comprador: Tributos inferiores a R$1.000,00 (mil reais)`,
    image_url: "https://venda-imoveis.caixa.gov.br/fotos/F144441755964221.jpg",
  })),
];
