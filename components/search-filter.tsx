"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implementar a lógica de busca aqui
    console.log(
      "Buscar:",
      search,
      "Categoria:",
      category,
      "Localização:",
      location
    );
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 mb-8"
    >
      <Input
        type="text"
        placeholder="Buscar leilões..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-grow"
      />
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="all">Todas</SelectItem>
          <SelectItem value="cars">Carros</SelectItem>
          <SelectItem value="art">Arte</SelectItem>
          <SelectItem value="realestate">Imóveis</SelectItem>
        </SelectContent>
      </Select>
      <Select value={location} onValueChange={setLocation}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Localização" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="all">Todas</SelectItem>
          <SelectItem value="sp">São Paulo</SelectItem>
          <SelectItem value="rj">Rio de Janeiro</SelectItem>
          <SelectItem value="mg">Minas Gerais</SelectItem>
          {/* Adicione mais localizações conforme necessário */}
        </SelectContent>
      </Select>
      <Button variant={"primary"} type="submit">
        Buscar
      </Button>
    </form>
  );
}
