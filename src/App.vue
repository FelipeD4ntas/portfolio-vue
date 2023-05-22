<template>
  <div ref="menu">
    <Nav/>
  </div>
  <div class="box-tela">
    <box-tela @proximo-elemento="irProximoElemento" @topo="irParaTopo"/>
  </div>
  <div id="projetos" class="meus-projetos overflow-hid flex justify-content-center w-full" ref="proximoElemento">
    <Projetos/>
  </div>
  <div id="sobre" class="sobre-mim w-full flex justify-content-center">
    <Sobre/>
  </div>
  <div id="contatos" class="box-contatos w-full">
    <Contatos/>
  </div>
  <div class="footer w-full">
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import BoxTela from './components/BoxTela.vue';
import Projetos from '@/components/Projetos.vue';
import Sobre from './components/Sobre.vue';
import Contatos from './components/Contatos.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Nav,
    BoxTela,
    Projetos,
    Sobre,
    Contatos,
    Footer
},
  methods: {
    irProximoElemento() {
      this.$refs.proximoElemento.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    },
    irParaTopo() {
      window.scroll(0, 0);
    }
  }
}
</script>

<style>
.box-tela {
  position: relative;
  margin-bottom: 1000px;
}

.meus-projetos {
  margin-top: 100px;
  position: relative;
}

@media(max-width: 500px) {
  .box-tela {
    margin-top: 150px;
    margin-bottom: 600px;
  }
}
</style>
