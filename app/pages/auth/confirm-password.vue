<script setup lang="ts">
useAppTitle('Confirm Password');
definePageMeta({
    layout: 'auth-card'
})
const { submit, isSubmitting } = usePasswordConfirmationForm()
</script>

<template>
    <main>
        <div class="mb-4 text-sm text-gray-600">
            This is a secure area of the application. Please confirm your password before continuing.
        </div>

        <form @submit="submit">
            <FormField name="password" v-slot="{ componentField }">
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input type="password" required v-bind="componentField" />
                    </FormControl>
                    <FormDescription>
                        Confirm your password before continuing.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            </FormField>

            <div class="flex justify-end mt-4">
                <Button class="ms-4" :disabled="isSubmitting">
                    Confirm
                </Button>
            </div>
        </form>
    </main>
</template>
