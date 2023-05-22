<template>
  <div ref="boxTelaPerfil" class="boxTelaPefil relative z-4">
    <div ref="tela" style="opacity: 0" class="img-pc h-screen" @wheel.prevent="zoom">
      <img src="@/assets/images/img-top.png" alt="Foto pc">
    </div>
    
    <box-perfil @wheel.prevent="zoom" style="position: absolute;"/>
  </div>
</template>

<script>
import BoxPerfil from '@/components/BoxPerfil.vue'

export default {
  name: 'BoxTela',
  components: {
    BoxPerfil
  },
  emits: ['proximoElemento', 'topo'],
  data() {
    return {
      scale: 1,
      mouseRolandoParaBaixo: false,
      mouseRolandoParaCima: false,
      tamanhoTela500px: window.matchMedia('(max-width: 500px)').matches,
      prontoParaIrProximoElemento: false,
      prontoParaVoltarAoTopo: false
    }
  },
  watch: {
    scale() {
      if (this.scale === .6 || this.tamanhoTela500px) {
        this.prontoPraIrProximoElemento = true;
        this.$emit("proximoElemento", {proximoElemento: this.prontoParaIrProximoElemento});
      }

      if (this.scale === 1 || this.tamanhoTela500px) {
        this.prontoParaVoltarAoTopo = true;
        this.$emit("topo", {topo: this.prontoParaVoltarAoTopo});
      }
    }
  },
  methods: {
    zoom(event) {
      this.mouseRolandoParaBaixo = event.deltaY > 0;
      this.mouseRolandoParaCima = event.deltaY < 0;
      
      if (this.mouseRolandoParaBaixo && !this.tamanhoTela500px) {
        this.scale += event.deltaY * -0.0005;
        this.scale = Math.min(Math.max(.6, this.scale), 5);
        this.aplicarEstilo(this.scale);
        this.$refs.boxTelaPerfil.style.marginTop = "50px";
      }

      if (this.mouseRolandoParaCima && !this.tamanhoTela500px) {
        this.scale -= event.deltaY * 0.0005;
        this.scale = Math.max(Math.min(1, this.scale), 0.0005);
        this.aplicarEstilo(this.scale);
        this.$refs.boxTelaPerfil.style.marginTop = "0";

        if (this.scale === 1) this.$refs.tela.style.opacity = 0
      }
    },
    aplicarEstilo(scale) {
      this.$refs.tela.style.opacity = 1
      this.$refs.boxTelaPerfil.style.transform = `scale(${scale})`;
    }
  },
  mounted() {
    if (this.tamanhoTela500px) {
      this.$refs.boxTelaPerfil.style.transform = `scale(0.6)`;
    }
  }
}
</script>

<style scoped>
.boxTelaPefil {
  position: relative;
  transition: margin-top 0.6s ease;
}
.img-pc {
  position: absolute;
  transition: all 0.4s;
  top: 60%;
}


@media(max-width: 991px) {
  .img-pc {
    opacity: 0 !important; 
  }

  .boxTelaPefil .mt-10 {
    margin-top: 0 !important;
  }
}
</style>