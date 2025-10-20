<script setup>
import { computed } from 'vue';

const props = defineProps({
    status: String,
});


const verificationLinkSent = computed(() => props.status === 'verification-link-sent');

const onSubmit = (values) => {
  console.log('Form submitted!', values)
}

useAppTitle('Email Verification');
definePageMeta({
  layout: 'auth-card'
})
</script>

<template>
    <main>
        <div class="mb-4 text-sm text-gray-600">
            Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
        </div>

        <div v-if="verificationLinkSent" class="mb-4 font-medium text-sm text-green-600">
            A new verification link has been sent to the email address you provided in your profile settings.
        </div>

        <form @submit="onSubmit">
            <div class="mt-4 flex items-center justify-between">
                <Button type="submit">
                    Resend Verification Email
                </Button>

                <div>
                    <NuxtLink
                        href="/"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Edit Profile</NuxtLink>

                    <NuxtLink
                        to="/"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ms-2"
                    >
                        Log Out
                    </NuxtLink>
                </div>
            </div>
        </form>
    </main>
</template>
