<template>
<section class="z-5 bg-white w-full">
  <div>
      <h1 class="text-7xl font-bold text-700 text-center">Meus projetos</h1>
  </div>
  <Carousel  
    :nextButtonProps="{ 'aria-label': 'Próxima página', innerHTML: customNextLabel, class: 'custom-icon proximo'}" 
    :prevButtonProps="{ 'aria-label': 'Página anterior', innerHTML: customPrevLabel, class: 'custom-icon anterior' }" 
    :value="projetos" :numVisible="2" :numScroll="2" :responsiveOptions="responsiveOptions" circular>
    <template #item="slotProps">
      <figure class="mt-7 relative overflow-hidden flex w-full">
            <a :href="slotProps.data.link" target="_blank">
              <video 
                @mouseover="playVideo($event)" 
                @mouseleave="pauseVideo($event)" 
                ref="videoPlayer" 
                muted="muted" playsinline 
                type="video/mp4" 
                :src="slotProps.data.video" 
                :poster="slotProps.data.capa"></video>
            </a>
            <figcaption>
                <p>{{ slotProps.data.titulo }}</p>
                <ul>
                    <li v-for="(detalhe, index) in slotProps.data.detalhes" :key="index">
                      <span class="detalhes">{{ detalhe }}</span>
                    </li>
                </ul>
          </figcaption>
        </figure>
    </template>
  </Carousel>
</section>
</template>

<script>
import Carousel from 'primevue/carousel';

export default {
  name: 'ProjetosComponente',
  components: {
    Carousel
  },
  data() {
    return {
      customNextLabel: '<img src="/assets/images/icones/proximo.png"/>',
      customPrevLabel: '<img src="/assets/images/icones/anterior.png"/>',
      responsiveOptions: [
          {
              breakpoint: '1199px',
              numVisible: 3,
              numScroll: 3
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 2
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ],
      projetos: [
        {
          nome: 'Projeto Android',
          link: 'https://feliped4ntas.github.io/projeto-android/',
          video: '/assets/images/videosProjetos/projetoAndroid.mp4',
          capa: '/assets/images/capasProjetos/projetoAndroid.png',
          titulo: 'Projeto criado durante o curso de HTML5 e CSS3 do Estudonauta, com o professor Guanabara.',
          detalhes: [
            'Página totalmente responsiva sem o uso de Media Queries.',
            'Uso de Listas em HTML.'
          ]
        },
        {
          nome: 'Projeto Clinica Medica',
          link: 'https://feliped4ntas.github.io/projeto-clinica-medica/',
          video: '/assets/images/videosProjetos/projetoClinicaMedica.mp4',
          capa: '/assets/images/capasProjetos/projetoClinicaMedica.png',
          titulo: 'Página web feita apenas com HTML e CSS.',
          detalhes: [
            'Página totalmente responsiva usando Media Queries.',
            'Uso de Tabelas em HTML'
          ]
        },
        {
          nome: 'Projeto Flex Blog',
          link: 'https://feliped4ntas.github.io/projeto_flex-blog/',
          video: '/assets/images/videosProjetos/projetoFlexBlog.mp4',
          capa: '/assets/images/capasProjetos/projetoFlexBlog.png',
          titulo: 'Página web feita para demonstrar o uso do display Flex em CSS.',
          detalhes: [
            'Uso de formulários.'
          ]
        },
        {
          nome: 'Projeto Hello Pizza',
          link: 'https://feliped4ntas.github.io/Projeto-hello-pizza/',
          video: '/assets/images/videosProjetos/projetoHelloPizza.mp4',
          capa: '/assets/images/capasProjetos/projetoHelloPizza.png',
          titulo: 'Página responsiva, com formulários e Media Queries.',
          detalhes: [
            'Contém menu Mobile feito apenas com HTML e CSS.',
            'Uso de formulários e tabelas.'
          ]
        },
        {
          nome: 'Projeto Pousada Secreta',
          link: 'https://feliped4ntas.github.io/projeto-pousada-secreta/',
          video: '/assets/images/videosProjetos/projetoPousadaSecreta.mp4',
          capa: '/assets/images/capasProjetos/projetoPousadaSecreta.png',
          titulo: 'Landing Page de uma Pousada feito para o curso de HTM5 e CSS3 da DevMedia.',
          detalhes: [
            'Contém o uso da biblioteca Vanilla JS.'
          ]
        },
        {
          nome: 'Projeto Bikecraft',
          link: 'https://feliped4ntas.github.io/projeto-bikcraft/',
          video: '/assets/images/videosProjetos/projetoBikeCraft.mp4',
          capa: '/assets/images/capasProjetos/projetoBikeCraft.png',
          titulo: 'Página com formulários e menu mobile, totalmente responsiva, feito apenas com HTML e CSS.',
          detalhes: [
            'Página com várias páginas de navegação.',
            'Uso de formulários.',
            'Uso de pseudo-classes e pseudo-elementos em CSS.'
          ]
        },
        {
          nome: 'Projeto Soft Sport',
          link: 'https://feliped4ntas.github.io/projeto-softs-sport/',
          video: '/assets/images/videosProjetos/projetoSoftSport.mp4',
          capa: '/assets/images/capasProjetos/projetoSoftSport.png',
          titulo: 'Blog pessoal sobre a história de alguns Esportes, demonstrando o uso do efeito parallax em imagens.',
          detalhes: [
            'Uso de animações com CSS.'
          ]
        },
        {
          nome: 'Projeto Signos',
          link: 'https://feliped4ntas.github.io/projeto-signos/',
          video: '/assets/images/videosProjetos/projetoSignos.mp4',
          capa: '/assets/images/capasProjetos/projetoSignos.png',
          titulo: 'Aplicação web feita com HTML, CSS e manipulação de datas com JavaScript puro.',
          detalhes: [
            'Uso da biblioteca Particles JS.',
            'Contém sistema de trocar temas usando JavaScript.'
          ]
        },
        {
          nome: 'Projeto Quiz',
          link: 'https://feliped4ntas.github.io/projeto-quiz-interativo/',
          video: '/assets/images/videosProjetos/projetoQuizInterativo.mp4',
          capa: '/assets/images/capasProjetos/projetoQuizInterativo.png',
          titulo: 'Aplicação web feita para demonstrar o uso de métodos de Arrays em JavaScript.',
          detalhes: [
            'Contém sistema de pontuação.',
            'Contém animações feitas usando setInterval do JavaScript.'
          ]
        },
        {
          nome: 'Projeto Lista de Tarefas',
          link: 'https://feliped4ntas.github.io/projeto-lista-tarefas/',
          video: '/assets/images/videosProjetos/projetoListaTarefas.mp4',
          capa: '/assets/images/capasProjetos/projetoListaDeTarefas.png',
          titulo: 'Aplicação web feita usando o localStorage para persistir dados no navegador',
          detalhes: [
            'Uso do localStorage.',
            'Contém sistema de busca de tarefas.',
            'Uso da biblioteca Particles JS para animar o background.'
          ]
        },
        {
          nome: 'Projeto Troca Tema Star Wars',
          link: 'https://feliped4ntas.github.io/projeto-theme-switcher/',
          video: '/assets/images/videosProjetos/projetoTrocarTema.mp4',
          capa: '/assets/images/capasProjetos/projetoTrocaTema.png',
          titulo: 'Aplicação web feita para implementar o famoso Dark Mode usando JavaScript, mas resolvi dar uma inovada usando o tema sobre Star Wars, com o uso de um toggle, podendo alternar entre o Dark Side e o Light Side.',
          detalhes: [
            'Contém efeitos sonoros.',
            'Uso de animações usando CSS e JavaScript.',
            'Uso da biblioteca Particles JS para animar o background.'
          ]
        },
        {
          nome: 'Projeto Weather Application',
          link: 'https://feliped4ntas.github.io/projeto-weather-application/',
          video: '/assets/images/videosProjetos/projetoAPIClima.mp4',
          capa: '/assets/images/capasProjetos/projetoInfoClima.png',
          titulo: 'Aplicação web para demonstrar o consumo de uma API, usando JavaScript.',
          detalhes: [
            'Consumo da API accuweather.',
            'Uso do localStorage para persistir as informações da última cidade pesquisada.'
          ]
        },
        {
          nome: 'Projeto Relogio Digital',
          link: 'https://feliped4ntas.github.io/projeto-relogio_digital/',
          video: '/assets/images/videosProjetos/projetoRelogio.mp4',
          capa: '/assets/images/capasProjetos/projetoRelogioDigital.png',
          titulo: 'Relógio Digital feito com a manipulação de tempo usando JavaScript puro.',
          detalhes: [
            'Uso do box-shadow no CSS para dar o efeito de neon ao relógio.'
          ]
        },
        {
          nome: 'Projeto Conversor de Moedas',
          link: 'https://feliped4ntas.github.io/projeto-conversor-de-moedas/',
          video: '/assets/images/videosProjetos/projeto-conversor-moedas.mp4',
          capa: '/assets/images/capasProjetos/projetoConversorDeMoedas.png',
          titulo: 'Projeto feito consumindo uma API para obter o valor de câmbio das moedas de todos os paises.',
          detalhes: [
            'Consumo da API ExchangeRate.',
            'Uso do bootstrap para estilização da página.'
          ]
        },
        {
          nome: 'Projeto Controle de Despesas',
          link: 'https://feliped4ntas.github.io/projeto-grafico-gastos/',
          video: '/assets/images/videosProjetos/projeto-gastos.mp4',
          capa: '/assets/images/capasProjetos/projetoControleDespesas.png',
          titulo: 'Aplicação Web para controle de despesas feita com JavaScript puro.',
          detalhes: [
            'Uso de event listeners com JavaScript.',
            'Manipulação do DOM.',
            'Uso do localStorage.'
          ]
        },
        {
          nome: 'Projeto Rocket Card',
          link: 'https://feliped4ntas.github.io/rocketCard/',
          video: '/assets/images/videosProjetos/projetoRocketCard.mp4',
          capa: '/assets/images/capasProjetos/projetoRocketCard.png',
          titulo: 'Aplicação Web feita com React, que faz o uso da api do Github para buscar as informações de qualquer usuário.',
          detalhes: [
            'Uso da biblioteca Axios para fazer os requests.',
            'Uso da biblioteca jsPDF para gerar um pdf do card.',
            'Projeto feito com componentes usando React.'
          ]
        },
        {
          nome: 'Projeto Press Start 2.0 da Lyncas',
          link: 'https://github.com/FelipeD4ntas/projeto-press-start',
          video: '/assets/images/videosProjetos/projetoLyncasSales.mp4',
          capa: '/assets/images/capasProjetos/projetoLyncasSales.png',
          titulo: 'Projeto desenvolvido durante o treinamento do Press Start na Lyncas',
          detalhes: [
            '.NET 6',
            'C#',
            'Entity Framework',
            'MediatR',
            'Autenticação JWT',
            'DDD',
            'SQL Server',
            'Vue.js no frontend',
            'Docker'
          ]
        },
      ]
    }
  },
  methods: {
    playVideo(event) {
      const video = event.target.closest('figure').querySelector('video');
      video.play();
    },
    pauseVideo(event) {
      const video = event.target.closest('figure').querySelector('video');
      video.pause();
    }
  }
}
</script>


<style>
figure {
  width: 100%;
  height: 80vh;
  transition: 1s;
  flex-shrink: 0;
  position: relative;
  border-left: 6px solid black;
  border-right: 6px solid black;
  border-top: 12px solid black;
  border-bottom: 12px solid black;
  display: flex;
  flex-direction: column;
}

figure a {
  background: #1E1E1E;
}

figcaption {
  border-top: 12px solid black;
  background-image: url('@/assets/images/fundo.jpg');
  background-position: right;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
  overflow: auto;
}

figcaption p {
  font-family: Anonymous;
  color: #F3FAFA;
  text-shadow: 1px 1px 1px black;
  padding-right: 94px;
}

figcaption span {
  display: flex;
  align-items: center;
  font-family: Anonymous;
  color: #F3FAFA;
  text-shadow: 1px 1px 1px black;
  padding-right: 94px;
  line-height: 2.3rem;
}

figcaption span::before {
  content: '';
  display: block;
  width: 30px;
  height: 10px;
  border-radius: 6px 0 0 6px;
  background: #735efd9a;
  margin-right: 10px;
  transition: 0.6s;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.445)
}

figcaption li:hover span::before {
  width: 50px;
  height: 10px;
}

video {
  width: 100%;
  max-height: 450px;
  filter: grayscale(80%);
  z-index: 3;
}

video:hover {
  filter: grayscale(0%);
}

.custom-icon {
  position: absolute;
  top: 35%;
  transform: translate(0%, -35%);
  max-width: 80px;
  z-index: 4;
  cursor: pointer;
  object-fit: inherit;
  background: transparent;
}

.proximo {
  right: 50px;
  animation: slideDireita 1s alternate infinite;
}

.anterior {
  left: 50px;
  animation: slideEsquerda 1s alternate infinite;
}

@keyframes slideDireita {
  from {
      transform: translateX(0);
  }
  to {
      transform: translateX(20px);
  }
}

@keyframes slideEsquerda {
  from {
      transform: translateX(0);
  }
  to {
      transform: translateX(-20px);
  }
}

@media (max-width: 1200px) {
  .custom-icon {
    top: 63%;
  }
}

@media (max-width: 768px) {
  .custom-icon {
    top: 73%;
    max-width: 50px;
  }
}

@media (max-width: 460px) {
  figure a {
    padding-bottom: 100px;
  }

  .custom-icon {
    top: 40%;
  }

  .detalhes {
    font-size: 1.1rem;
  }

  figcaption span::before {
    width: 0px;
    height: 0px;
  }

  figcaption {
    overflow: auto;
  }
}

@media (max-width: 380px) {

  .custom-icon {
    top: 48%;
  }
}
</style>