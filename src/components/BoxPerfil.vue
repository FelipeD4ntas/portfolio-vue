<template>
<section class="mt-10 absolute posicao">
  <div class="flex flex-column align-items-center w-full conjunto-perfil">
      <div class="max-w-25rem max-h-25rem animate__animated animate__pulse animate__infinite animate__slower">
        <Avatar :image="require('@/assets/images/foto-perfil.png')" shape="circle" class="h-full w-full box-img" />
      </div>
      <div class="titulo-perfil">
          <h2 class="sm:text-7xl xl:text-7xl line-height-2 mt-8 text-600 text-center font-bold">Marcos Felipe</h2>
          <h1 class="sm:text-7xl xl:text-8xl font-bold texto-gradient tipoAnimacao">Full stack web Developer</h1>
      </div>
  </div>
</section>
</template>

<script>
import Avatar from 'primevue/avatar';

export default {
  name: 'BoxPerfil',
  components: {
    Avatar
  }
}
</script>

<style scoped>
.conjunto-perfil {
  margin-top: 100px;
}

.posicao {
  top: 50%;
  left: 50%;
  transform: translate(-50%, 10%);
}
.box-img {
  background: white;
  animation: animate 1.5s alternate-reverse infinite;
  cursor: pointer;
  transition: all 1s;
}

.mt-10 {
  margin-top: 100px;
}

.texto-gradient {
  background: linear-gradient(91.36deg, #ECA658 0%, #F391A6 13.02%, #E188C3 25.52%, #A58DE3 37.5%, #56ABEC 49.48%, #737EB7 63.02%, #C8638C 72.92%, #DD5D57 84.38%, #DF6C51 97.92%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 100%;
  border-right: 6px solid var(--purple-500);
  padding-right: 10px;
  white-space: nowrap;
  overflow: hidden;

}

.tipoAnimacao {
  animation: cursorDigitacao 500ms steps(40) infinite normal, digitando 4s steps(40) 1s normal;
}


@keyframes cursorDigitacao {
  from {
    border-right-color: var(--purple-500);
  }
  to {
    border-right-color: transparent;
  }
}

@keyframes digitando {
  from {
    width: 0;
  }
}

@keyframes animate {
  0% {
      box-shadow: 0 0 0 0 var(--purple-5000), 0 0 0 0 var(--purple-500);
  }
  40% {
      box-shadow: 0 0 0 20px rgba(89, 58, 118, 0), 0 0 0 0 var(--purple-500);
  }
  80% {
      box-shadow: 0 0 0 20px rgba(89, 58, 118, 0), 0 0 0 30px rgba(89, 58, 118, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(89, 58, 118, 0), 0 0 0 30px rgba(89, 58, 118, 0);
  }
}

@media (max-width: 1246px) {
  .conjunto-perfil {
    margin-top: 0px !important;
  }
  
  .titulo-perfil h1 {
    font-size: 5rem !important;
  }

}
</style>
