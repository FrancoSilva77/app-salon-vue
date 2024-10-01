<script setup></script>

<template>
  <h1 class="text-6xl font-extrabold text-white text-center mt-10">Crea una cuenta</h1>
  <p class="text-2xl text-white text-center my-5">Crea una cuenta en AppSalón</p>

  <FormKit
    type="form"
    :actions="false"
    incomplete-message="No se pudo enviar, revisa las notificaciones"
  >
    <FormKit
      type="text"
      label="Nombre"
      name="name"
      placeholder="Tu Nombre"
      validation="required|length:3"
      :validation-messages="{
        required: 'El nombre es obligatorio',
        length: 'El nombre es muy corto'
      }"
    />

    <FormKit
      type="email"
      label="Correo Electronico"
      name="email"
      placeholder="Tu Correo"
      validation="required|email"
      :validation-messages="{
        required: 'El correo es obligatorio',
        email: 'Email no válido'
      }"
    />

    <FormKit
      type="password"
      label="Contraseña"
      name="password"
      placeholder="Tu Contraseña - Min 8 caracteres"
      validation="required|length:8"
      :validation-messages="{
        required: 'La contraseña es obligatoria',
        length: 'La contraseña debe tener al menos 8 caracteres'
      }"
    />

    <FormKit
      type="password"
      label="Repetir Contraseña"
      name="password_confirm"
      placeholder="Repite Tu Contraseña"
      validation="required|confirm"
      :validation-messages="{
        required: 'La contraseña es obligatoria',
        confirm: 'Las contraseñas no son iguales'
      }"
    />

    <FormKit type="submit">Crear Cuenta</FormKit>
  </FormKit>
</template>
