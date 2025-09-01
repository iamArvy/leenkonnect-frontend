<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { User } from 'lucide-vue-next';
const user = useState('user')
const logout = () => {
    // router.post(route('logout'));
    user.value = null
};

defineProps<{
    auth: any
}>()
const data = [
    {
        label: 'Profile',
        path: '/profile'
    },
    {
        label: 'Orders',
        path: '/orders'
    },
]
const authLinks = [
    {
        label: 'Login',
        path: 'login'
    },
    {
        label: 'Register',
        path: 'register'
    }
]
</script>
<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <User class="cursor-pointer hover:text-primary transition-all ease-in-out" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
        <template v-if="user">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem v-for="{ path, label } in data">
                <NuxtLink :to="path">{{ label }}</NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="logout">Logout</DropdownMenuItem>
        </template>
        <template v-else>
            <DropdownMenuItem 
                v-for="{ path, label } in authLinks" as-child>
                <NuxtLink :to="path">{{ label }}</NuxtLink>
            </DropdownMenuItem>
        </template>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
