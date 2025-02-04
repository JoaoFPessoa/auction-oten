EXPLICAÇÃO DO USO DE 2 ARQUIVOS PARA O MAPA

O Next.js não suporta o Leaflet diretamente no servidor, pois o Leaflet depende do objeto window, que está disponível apenas no navegador. Para corrigir isso, o mapa é dividido em dois componentes:

AuctionMap.tsx → Atua como um wrapper e importa dinamicamente o AuctionMapClient com ssr: false.

AuctionMapClient.tsx → Contém o mapa do Leaflet e é renderizado apenas no lado do cliente.
