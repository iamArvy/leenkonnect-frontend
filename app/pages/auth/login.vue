<script setup lang="ts">
// import Container from './partials/Container.vue';
const data = {
    title: "Log In",
    description: "Enter your email below to login to your account",
    img: "/images/login.jpg"
}
// const status = ref(''); // Replace with actual status if needed
// import { useForm } from 'vee-validate';
// import * as z from 'zod'
// import { toTypedSchema } from '@vee-validate/zod'

// const formSchema = toTypedSchema(z.object({
//     email: z.email(),
//     password: z.string().min(8, "Password must be at least 8 characters long").max(50, "Password must be at most 50 characters long"),
//     remember: z.boolean().optional(),
// }))

// const { handleSubmit, isSubmitting, meta } = useForm({
//     validationSchema: formSchema,
//     initialValues: {
//         email: '',
//         password: '',
//         remember: false,
//     },
// })

// const { login, error } = useAuth();
// const onSubmit = handleSubmit((values) => {
//     login(values)
// })

const { submit, isSubmitting, meta } = useLoginForm()
useAppTitle('Log In');
definePageMeta({
    layout: 'auth'
})
</script>

<template>
    <form @submit="submit" class=" w-full max-w-[400px]">
        <FormField name="email" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="email" required v-bind="componentField" />
                </FormControl>
                <FormDescription>
                    Enter your email address
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField name="password" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="password" required v-bind="componentField" />
                </FormControl>
                <FormDescription>
                    <div class="flex justify-between">
                        <span>Enter your password.</span>
                        <NuxtLink to="/auth/forgot-password" class="underline hover:text-gray-900">Forgot your pasword?
                        </NuxtLink>
                    </div>
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField name="remember" type="checkbox" v-slot="{ componentField }">
            <FormItem class="mt-2 flex items-center">
                <FormControl>
                    <Checkbox v-bind="componentField" />
                </FormControl>
                <FormLabel class="ms-2 mb-0">Remember me</FormLabel>
            </FormItem>
        </FormField>

        <!-- <div class="block mt-4">
            <div v-show="status" class="mb-4 font-medium text-sm text-green-600">
                {{ status }}
            </div>
        </div> -->

        <div class="flex items-center justify-end mt-4">

            <Button class="w-full" :disabled="isSubmitting || !meta.valid">
                Log in
            </Button>
        </div>
        <div class="flex gap-1 items-center justify-center mt-4">
            <p>Don't have an account?</p>
            <NuxtLink to="/auth/register" class=" underline text-sm text-gray-600 hover:text-gray-900 rounded-md ">
                Sign up
            </NuxtLink>
        </div>
    </form>
</template>
