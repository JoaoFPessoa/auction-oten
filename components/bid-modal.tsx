"use client";

import { LucideShieldQuestion } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PropertyData } from "@/types/auction";

export default function BidModal({
  auction,
  onClose,
}: {
  auction: PropertyData;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [showExplanation, setShowExplanation] = useState(false); // Estado para controlar a exibição da explicação

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation); // Alterna a exibição da explicação
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Fazer Lance - {auction.title}</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para ser redirecionado ao site oficial
            do leiloeiro.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 py-4 ">
            <div className="flex items-center gap-4">
              <Label htmlFor="name" className="w-[80px] ">
                Nome
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="email" className="w-[80px] ">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="phone" className="w-[80px] ">
                Telefone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter className="flex !flex-col gap-2">
            <Button
              disabled={!formData.name || !formData.email || !formData.phone}
              type="submit"
              variant={"primary"}
            >
              Continuar para o Leilão
            </Button>
            <p
              className="text-sm flex gap-2 mt-2 text-gray-600 cursor-pointer hover:underline"
              onClick={toggleExplanation}
            >
              <LucideShieldQuestion />
              Você sabe por que pedimos seus dados?
            </p>
            {showExplanation && (
              <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
                <p>
                  Para melhorar ainda mais sua experiência, utilizamos seus
                  dados para enviar informações sobre leilões semelhantes ao que
                  você demonstrou interesse. Assim, você não perde oportunidades
                  incríveis e pode continuar encontrando as melhores opções para
                  você.
                </p>
              </div>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
