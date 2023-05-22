<template>
  <section class="contatos">
    <h2 class="text-7xl font-bold text-700 text-center mb-6">Contatos</h2>
    <div class="flex justify-content-center gap-8">
      <a href="https://wa.me/556299137640?text=%20Olá!%20Eu%20tenho%20uma%20oportunidade%20pra%20você." target="_blank" class="contato whatsapp text-700">
        <img src="@/assets/images/icones/whatsapp.png" alt="icone whatsapp">
        <div class="texto-contatos">
          <h3 class="font-semibold">Whatsapp</h3>
          (62) 99913-7640
        </div>
      </a>
      <a href="mailto: felipeicedantas@gmail.com" target="_blank" class="contato email text-700">
        <img src="@/assets/images/icones/email.png" alt="icone email">
        <div class="texto-contatos">
          <h3 class="font-semibold">Email</h3>
          felipeicedantas@gmail.com
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContatosComponent'
}
</script>

<style>
.contatos {
  max-width: 900px;
  margin: 0 auto;
  margin-top: 100px;
}

.contatos a {
  box-shadow: 2px 1px 10px #00000074;
  transition: 0.4s;
}

.contatos a:hover {
 transform: scale(0.99);
 box-shadow: none;
}

.contato {
  display: flex;
  flex: 1;
  border: 3px solid black;
  border-radius: 15px;
  padding: 15px;
}

.contato img {
  max-width: 50px;
  object-fit: contain;
  margin-right: 10px;
}

@media (max-width: 841px) {
  .contatos {
    padding: 2rem !important;
  }

  .contatos .flex {
    flex-direction: column !important;
    gap: 3rem !important;
  }
}
</style>