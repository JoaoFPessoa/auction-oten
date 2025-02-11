import Image from "next/image";

export function AboutUsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre Nós</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/mock-images/blog/about-us.jpg"
              alt="Equipe AuctionHub"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              A AuctionHub nasceu da ideia de simplificar o processo de
              participação em leilões. Percebemos que havia uma grande
              dificuldade em acompanhar leilões de diferentes plataformas e
              leiloeiros, e decidimos criar uma solução.
            </p>
            <p className="text-lg mb-4">
              Nossa missão é agregar leilões de diversas fontes em um único
              lugar, oferecendo aos usuários uma experiência simplificada e
              eficiente. Com a AuctionHub, você pode explorar uma ampla
              variedade de leilões, desde imóveis e veículos até obras de arte e
              antiguidades.
            </p>
            <p className="text-lg">
              Estamos comprometidos em fornecer as melhores ferramentas e
              recursos para que nossos usuários possam encontrar as melhores
              oportunidades em leilões. Junte-se a nós e descubra uma nova forma
              de participar em leilões!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
