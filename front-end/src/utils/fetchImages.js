import { useEffect, useState } from 'react';

// utils.js (ou imageUtils.js)
export const fetchImages = async (apiKey) => {
  try {
    const query = 'hotel'; // Palavra-chave para busca de imagens de hotel
    const perPage = 3; // Número de imagens por página
    const page = 2; // Página de resultados
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=${page}`,
      {
        headers: {
          Authorization: apiKey,
        },
      },
    );

    if (!response.ok) {
      throw new Error('Erro ao buscar imagens');
    }

    const data = await response.json();

    // Aqui estamos pegando a primeira imagem para o background
    const background = data.photos[0].src.large;

    // Pegando as próximas 3 imagens para overlay
    const overlay = data.photos.slice(0, 4).map((photo) => photo.src.small);

    return { backgroundImage: background, overlayImages: overlay };
  } catch (error) {
    console.error('Erro ao buscar imagens:', error);
    return { backgroundImage: '', overlayImages: [] };
  }
};
