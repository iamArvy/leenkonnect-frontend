<script setup lang="ts">
useAppTitle('Confirm Password');
definePageMeta({
    layout: 'auth-card'
})
const { submit, isSubmitting } = useForgotPasswordForm()
</script>

<template>
    <main>
        <div class="mb-4 text-sm text-gray-600">
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset
            link that will allow you to choose a new one.
        </div>
        <form @submit="submit">
            <FormField name="email" v-slot="{ componentField }">
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type="email" required v-bind="componentField" />
                    </FormControl>
                    <FormDescription>
                        Enter your email to receive password reset link.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            </FormField>

            <div class="flex justify-end mt-4">
                <Button class="ms-4" :disabled="isSubmitting">
                    Email Password Reset Link
                </Button>
            </div>
        </form>
    </main>
</template>
