<template>
  <div
    class="h-screen max-h-[900px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.1)),url('/images/homehero.jpg')] bg-opacity-10 bg-no-repeat bg-cover flex lg:bg-none lg:flex-row flex-col gap-4 bg-surface-0 dark:bg-surface-900"
  >
    <div class="flex-1 flex items-center justify-center">
      <div class="p-6 pt-12 lg:p-12">
        <h1
            class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left"
            data-aos="fade-up"
        >
            Empowering businesses with
            <span class="text-primary"
                >innovative IT solutions.</span
            >
        </h1>
        <p
            class="text-surface-700 dark:text-surface-200 leading-normal mb-8 text-center lg:text-left"
            data-aos="fade-up"
        >
            Your one stop solution for IT services and e-commerce
            technology needs.
        </p>
        <div
            class="flex items-center justify-center lg:justify-start gap-6"
            data-aos="fade-left"
        >
            <Button
                class="rounded-2xl"
                size="lg"
                as-child
            >
                <NuxtLink to="consultation">
                Free Consultation
                </NuxtLink>
            </Button>
            <LinkButton
                class="rounded-2xl"
                size="lg"
                variant="outline"
                :link="{ to: 'shop' }"
            >
                Shop Now

            </LinkButton>
        </div>
      </div>
        </div>
        <div class="hidden lg:block flex-1 overflow-hidden">
            <img
                src="/images/homehero.jpg"
                alt="hero-1"
                class="h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]"
                data-aos="fade-left"
            />
        </div>
    </div>
</template>