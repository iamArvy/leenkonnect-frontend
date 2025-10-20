<script setup lang="ts">
useAppTitle('Reset Password');
definePageMeta({
    layout: 'auth-card'
})
const { submit, isSubmitting } = useResetPasswordForm()
</script>

<template>
    <main>
        <form @submit="submit">
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
            <div class="flex items-center justify-end mt-4">
                <Button :disabled="isSubmitting">
                    Reset Password
                </Button>
            </div>
        </form>
    </main>

    <Head title="Reset Password" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>


    </AuthenticationCard>
</template>
