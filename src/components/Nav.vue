<template>
  <nav class="border-bottom-2 z-5 relative bg-white">
    <section class="flex justify-content-between align-items-center p-5 max-w-90rem
      navbar navbar-expand-lg">
        <a class="text-4xl font-bold text-blue-800">Marcos Felipe</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link ml-4 text-3xl font-medium text-600 hover:text-purple-500" href="https://github.com/FelipeD4ntas" target="_blank">Github</a>
            </li>

            <li class="nav-item">
              <a class="nav-link ml-4 text-3xl font-medium text-600 hover:text-purple-500" href="https://www.linkedin.com/in/marcos-felipe-dantas-da-costa-a3b71a215/" target="_blank">Linkedin</a>
            </li>

            <li class="nav-item">
              <a class="nav-link ml-4 text-3xl font-medium text-600 hover:text-purple-500" href="#projetos">Projetos</a>
            </li>

            <li class="nav-item">
              <a class="nav-link ml-4 text-3xl font-medium text-600 hover:text-purple-500" href="#sobre">Sobre mim</a>
            </li>

            <li class="nav-item">
              <a class="nav-link ml-4 text-3xl font-medium text-600 hover:text-purple-500" href="#contatos">Contatos</a>
            </li>
          </ul>
        </div>          
    </section>
</nav>
</template>

<script>
export default {
  name: 'NavComponent'
}
</script>

<style>
  .max-w-90rem {
    max-width: 1000px !important;
    margin: 0 auto;
  }

  @media(max-width: 991px) {
    .nav-item .ml-4 {
      margin-left: 0 !important;
    }
  }
</style>