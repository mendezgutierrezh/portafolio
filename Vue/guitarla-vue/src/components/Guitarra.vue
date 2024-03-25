<script setup>
import { ref } from "vue";

const props = defineProps({
  //defineProps es un macro / no se importa
  guitarra: {
    type: Object,
    required: true,
  },
});

defineEmits(["agregar-carrito"]); // Es un macro, no se importa
</script>

<template>
  <div class="col-md-6 col-lg-4 my-4 row align-items-center">
    <div class="col-4">
      <img
        class="img-fluid"
        v-bind:src="'/img/' + guitarra.imagen + '.jpg'"
        :alt="'imagen guitarra' + guitarra.nombre"
      />
      <!-- Renderizar imagenes con v-bind o solo :  los : son dinamicos -->
    </div>
    <div class="col-8">
      <h3 class="text-black fs-4 fw-bold text-uppercase">
        {{ guitarra.nombre }}
      </h3>
      <p>
        {{ guitarra.descripcion }}
      </p>
      <p class="fw-black text-primary fs-3">${{ guitarra.precio }}</p>
      <button
        type="button"
        class="btn btn-dark w-100"
        @click="$emit('agregar-carrito', guitarra)"
      >
        Agregar al Carrito
      </button>
    </div>
  </div>
  <!-- FIN GUITARRA -->
</template>

<style lang="scss" scoped></style>
