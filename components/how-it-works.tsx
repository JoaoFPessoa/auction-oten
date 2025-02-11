import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Eye, ExternalLink, UserPlus, Bell, Clock } from "lucide-react";

const steps = [
  {
    title: "Filtre os Leilões",
    description:
      "Use nossos filtros avançados para encontrar exatamente o que procura.",
    icon: Search,
  },
  {
    title: "Veja os Detalhes",
    description: "Obtenha informações detalhadas sobre cada item em leilão.",
    icon: Eye,
  },
  {
    title: "Acesse o Site Oficial",
    description:
      "Seja redirecionado para o site do leiloeiro para fazer seu lance.",
    icon: ExternalLink,
  },
  {
    title: "Crie sua Conta",
    description: "Registre-se para acessar recursos exclusivos.",
    icon: UserPlus,
  },
  {
    title: "Salve Favoritos",
    description: "Marque leilões interessantes para acompanhar depois.",
    icon: Bell,
  },
  {
    title: "Histórico de Pesquisas",
    description: "Acesse facilmente suas últimas pesquisas de leilões.",
    icon: Clock,
  },
];

export function HowItWorks() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <step.icon className="w-6 h-6 mr-2" />
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
