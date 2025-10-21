<script setup>
import { nextTick, ref } from 'vue';
const recovery = ref(false);

const recoveryCodeInput = ref(null);
const codeInput = ref(null);

const toggleRecovery = async () => {
    recovery.value ^= true;

    await nextTick();

    if (recovery.value) {
        recoveryCodeInput.value.focus();
        form.code = '';
    } else {
        codeInput.value.focus();
        form.recovery_code = '';
    }
};

const { submit, isSubmitting } = useTwoFactorAuthenticationForm()
</script>

<template>
    <main>

        <div class="mb-4 text-sm text-gray-600">
            <template v-if="!recovery">
                Please confirm access to your account by entering the authentication code provided by your authenticator
                application.
            </template>

            <template v-else>
                Please confirm access to your account by entering one of your emergency recovery codes.
            </template>
        </div>

        <form @submit.prevent="submit">
            <div v-if="!recovery">
                <FormField name="code" v-slot="{ componentField }">
                    <FormItem>
                        <FormLabel>Code</FormLabel>
                        <FormControl>
                            <Input type="text" required v-bind="componentField" inputmode="numeric" autofocus
                                autocomplete="one-time-code" />
                        </FormControl>
                        <FormDescription>
                            Enter your one time code.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </div>

            <div v-else>
                <FormField name="recovery_code" v-slot="{ componentField }">
                    <FormItem>
                        <FormLabel>Recovery Code</FormLabel>
                        <FormControl>
                            <Input type="text" required v-bind="componentField" autocomplete="one-time-code" />
                        </FormControl>
                        <FormDescription>
                            Enter your one time code.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </div>

            <div class="flex items-center justify-end mt-4">
                <button type="button" class="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer"
                    @click.prevent="toggleRecovery">
                    <template v-if="!recovery">
                        Use a recovery code
                    </template>

                    <template v-else>
                        Use an authentication code
                    </template>
                </button>

                <Button class="ms-4" :class="{ 'opacity-25': isSubmitting }" :disabled="isSubmitting">
                    Log in
                </Button>
            </div>
        </form>
    </main>
</template>
