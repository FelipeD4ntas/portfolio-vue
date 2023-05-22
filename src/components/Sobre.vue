<template>
  <section class="box-sobre-mim flex justify-content-between mb-7">
    <div class="texto-sobre-mim w-7">
      <h2 class="text-7xl font-bold text-700 text-left mb-6">Sobre Mim</h2>
        <p>
          Olá! Atualmente estou cursando Sistemas de Informação. 
          <br>Sou uma pessoa extremamente dedicada e apaixonada por tecnologia, sempre buscando me atualizar e aprender novas habilidades. Quando aprendo algo novo, faço questão de desenvolver um projeto relacionado ao assunto, com o objetivo de aprimorar minhas habilidades e me desafiar a ir além.
          <br>Uma das minhas maiores aspirações é ser fluente em diversas linguagens de programação, o que me permitirá ser ainda mais útil para a empresa que me contratar e desenvolver uma grande variedade de projetos. Acredito que a tecnologia é uma ferramenta poderosa para solucionar problemas, e estou sempre buscando novas formas de aplicar meus conhecimentos para resolver desafios cada vez mais complexos.
          <br>Além da tecnologia, tenho um grande amor por animais e costumo dedicar parte do meu tempo livre para cuidar dos meus pets. Também adoro experimentar novas tecnologias e explorar áreas com as quais não tenho tanto contato no meu dia a dia, para ampliar meu conhecimento e aprimorar minhas habilidades.
          <br><br>Estou animado para continuar minha jornada na área de tecnologia e acredito que posso trazer muito valor para qualquer empresa que me contratar, com minha dedicação, proatividade e vontade de aprender.
        </p>
    </div>

    <div class="img-sobre-mim w-5 flex justify-content-end align-items-center">
      <img src="@/assets/images/foto-perfil-2.png" class="foto-perfil-dois" alt="Foto Marcos Felipe">
    </div>
  </section>
</template>

<script>
export default {
  name: 'SobreComponent'
}
</script>

<style scoped>
.box-sobre-mim {
  max-width: 900px;
  margin-top: 100px;
}

.foto-perfil-dois {
  height: max-content;
  max-width: 350px;
  object-fit: contain;
  border: 6px solid black;
  border-radius: 6px;
  filter: grayscale(20%);
}

@media(max-width: 841px) {
  .foto-perfil-dois, .img-sobre-mim {
    display: none !important;
  }

  .box-sobre-mim {
    max-width: 100%;
    padding: 2rem !important;
  }

  .box-sobre-mim .w-7 {
    width: 100% !important;
  }

  .texto-sobre-mim p {
    text-align: justify;
  }
}
</style>