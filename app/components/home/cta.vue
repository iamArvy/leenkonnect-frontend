<template>
  <div
    class="w-full bg-gradient-cta min-h-[400px] text-white text-center flex flex-col justify-center items-center gap-4"
  >
    <div
        class="container text-white text-center flex flex-col justify-center items-center gap-4"
    >
        <h1 class="text-2xl md:text-4xl font-bold" data-aos="fade-up">
            Let's empower your business with innovative IT solutions.
        </h1>
        <p class="text-lg md:text-2xl" data-aos="fade-up">
            Experience our solutions today!
        </p>
        <br />
        <LinkButton size="lg" :link="{to: '/consultation'}" data-aos="fade-up" > Get Started </LinkButton>
    </div>
  </div>
</template>