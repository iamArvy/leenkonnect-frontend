<script setup lang="ts">
import { ref } from "vue";
import { toTypedSchema } from "@vee-validate/zod"
import { Check, Circle, Dot } from "lucide-vue-next";
import { bookingSteps as steps } from ".";
import { toast } from "vue-sonner";
import type { GenericObject } from "vee-validate";
const currentStep = ref(1);
const currentStepObj = computed(() =>
 steps.find(s => s.step === currentStep.value) || steps[0]
)
const router = useRouter();

const onSubmit = (values: GenericObject) => {
  router.push(`/book/success`)
  toast({
    title: "You submitted the following values:",
    description: h("pre", { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" }, h("code", { class: "text-white" }, JSON.stringify(values, null, 2))),
  })
}
const isLastStep = (stepValue: number) => stepValue === steps[steps.length - 1]?.step;
</script>

<template>
  <Form
    v-slot="{ meta, values, validate, setFieldValue, isSubmitting }"
    as="" keep-values :validation-schema="toTypedSchema(currentStepObj?.schema!)"
  >
    <Stepper v-slot="{ nextStep }" v-model="currentStep">
      <form
        class="space-y-8"
        @submit="(e) => {
          e.preventDefault()
          validate()
          if (isLastStep(currentStep) && meta.valid) {
            onSubmit(values)
          }
        }"
      >
        <!-- Progress Header -->
        <div class="space-y-6">
            <div class="flex w-full flex-start gap-2" >
              <StepperItem
                v-for="step in steps"
                :key="step.step"
                v-slot="{ state }"
                class="relative flex w-full flex-col items-center justify-center"
                :step="step.step"
              >
                <StepperSeparator
                  v-if="step.step !== steps[steps.length - 1]?.step"
                  class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
                />

                <StepperTrigger as-child>
                  <Button
                    :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                    size="icon"
                    class="z-10 rounded-full shrink-0"
                    :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                    :disabled="state === 'inactive' && !meta.valid"
                  >
                    <Check v-if="state === 'completed'" class="size-5" />
                    <Circle v-if="state === 'active'" />
                    <Dot v-if="state === 'inactive'" />
                  </Button>
                </StepperTrigger>

                <div class="mt-5 flex flex-col items-center text-center">
                  <StepperTitle
                    :class="[state === 'active' && 'text-primary']"
                    class="text-sm font-semibold transition lg:text-base"
                  >
                    {{ step.title }}
                  </StepperTitle>
                  <StepperDescription
                    :class="[state === 'active' && 'text-primary']"
                    class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
                  >
                    {{ step.description }}
                  </StepperDescription>
                </div>
              </StepperItem>
            </div>
        </div>
        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Step Content -->
          <div class="lg:col-span-2">
            <Card>
              <CardContent class="p-8">
                <div class="mb-6">
                  <h2 class="font-playfair text-2xl font-semibold mb-2">
                    {{ currentStepObj?.title }}
                  </h2>
                  <p class="text-muted-foreground">
                    {{ currentStepObj?.description }}
                  </p>
                </div>

                <div class="animate-fade-in">
                  <component
                    :is="currentStepObj?.component" 
                    v-bind="{ values, meta, validate, setFieldValue, nextStep, isSubmitting }"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <!-- Booking Summary Sidebar -->
          <div class="lg:col-span-1 sticky top-8">
            <div class="sticky top-8">
              <BookingSummary :booking-data="values" />
              <BookingWhatsappFallback />
            </div>
          </div>
        </div>
      </form>
    </Stepper>
  </Form>
</template>