"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export function SignUpSection() {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const checkPassword = formData.get("checkPassword");
    console.log(email, password, checkPassword);
    if (password !== checkPassword) {
      toast({
        title: "As senhas precisam ser iguais.",
        description: "Por favor, verifique e tente novamente.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    toast({
      title: "Registro bem-sucedido",
      description: "Sua conta foi criada. Bem-vindo ao AuctionHub!",
    });
    event.currentTarget.reset();
    setIsLoading(false);
    router.push("/");
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Cadastre-se Agora
        </h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                type="name"
                placeholder="José Alfonso"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Confirme sua senha</Label>
              <Input
                id="checkPassword"
                name="checkPassword"
                type="password"
                placeholder="******"
                required
              />
            </div>
            <Button
              disabled={loading}
              variant={"primary"}
              className="w-full"
              type="submit"
            >
              Cadastrar
            </Button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Ao se cadastrar, você concorda com nossos Termos de Serviço e
            Política de Privacidade.
          </p>
        </div>
      </div>
    </section>
  );
}
