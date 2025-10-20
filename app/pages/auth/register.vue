<script setup>
useAppTitle('Register');
definePageMeta({
    layout: 'auth'
})
const { submit, isSubmitting, meta } = useRegisterForm()
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
                    Enter your email address.
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
                    Enter your new password.
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField name="password_confirmation" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                    <Input type="password" required v-bind="componentField" />
                </FormControl>
                <FormDescription>
                    Confirm your new password.
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField name="terms" type="checkbox" v-slot="{ componentField }">
            <FormItem class="mt-2 flex items-center">
                <FormControl>
                    <Checkbox v-bind="componentField" />
                </FormControl>
                <FormLabel class="ms-2 mb-0">Terms and conditions</FormLabel>
            </FormItem>
        </FormField>
        <div class="block mt-4">
            <div v-show="status" class="mb-4 font-medium text-sm text-green-600">
                {{ status }}
            </div>
        </div>

        <div class="flex items-center justify-end mt-4">

            <Button class="w-full" :disabled="isSubmitting || !meta.valid">
                Register
            </Button>
        </div>
        <div class="flex gap-1 items-center justify-center mt-4">
            <p>Already have an account?</p>
            <NuxtLink to="/auth/login" class=" underline text-sm text-gray-600 hover:text-gray-900 rounded-md ">
                Log in
            </NuxtLink>
        </div>
    </form>
</template>
