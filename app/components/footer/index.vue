<script setup lang="ts">
const navs = [
  {
    title: "Services",
    children: [
      {
        title: "Consultation",
        href: "/consultation"
      },
      {
        title: "Shop",
        href: "/shop"
      }
    ]
  },
  {
    title: "Information",
    children: [
      {
        title: "About us",
        href: "/about"
      },
      {
        title: "Services",
        href: "/services"
      },
      {
        title: "Contact",
        href: "/contact"
      }
    ]
  }
]

const contacts = [
  {
    title: "1 Awe St, Ojodu, Lagos 101232, Lagos.",
  },
  {
    title: "support@leenkonnect.com",
  },
  {
    title: "+2347069973395, +2348073467445",
  }
]

const { appName } = useAppConfig()
</script>
<template>
  <footer class="bg-foreground text-white">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterAbout />
          <FooterNavigationList
            v-for="item in navs"
            :key="item.title"
            :title="item.title"
            :children="item.children"
          />
          <FooterNavigationList
            text
            title="Contact"
            :children="contacts"
          />
        </div>
        
        <div class="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="font-inter text-white/70 text-sm">
            © {{ new Date().getFullYear() }} {{ appName }}. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="font-inter text-white/70 hover:text-spa-gold transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" class="font-inter text-white/70 hover:text-spa-gold transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
</template>