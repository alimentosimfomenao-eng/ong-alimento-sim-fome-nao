# ONG Alimento Sim, Fome Não — site estático

Site institucional simples (HTML + CSS + JavaScript leve) da **ONG Alimento Sim, Fome Não**, organização sem fins lucrativos de Marília, SP.

## Como abrir

1. Abra a pasta do projeto no computador.
2. Dê um duplo clique em **`index.html`**, ou
3. No terminal, a partir desta pasta:

```bash
# Opção A — abrir no navegador (macOS)
open index.html

# Opção A — Linux
xdg-open index.html

# Opção B — servidor local simples (Python)
python3 -m http.server 8080
```

Se usar o servidor local, acesse: [http://localhost:8080](http://localhost:8080)

## Estrutura

```
ong-alimento-sim-fome-nao/
├── index.html      # Página principal
├── styles.css      # Estilos (mobile-first)
├── script.js       # Menu mobile + copiar PIX
├── README.md       # Este arquivo
└── assets/         # Logo, capa e fotos
    ├── logo.jpg
    ├── cover.jpg
    └── photo-01.jpg … photo-08.jpg
```

## Conteúdo

Textos e dados (PIX, WhatsApp, e-mail, endereço, redes e Vakinha) vêm do material-base da ONG. Não é necessário build nem framework.

## Observação

As imagens são de mídia publicamente visível e devem ser usadas respeitando eventuais direitos de imagem e de autor.
