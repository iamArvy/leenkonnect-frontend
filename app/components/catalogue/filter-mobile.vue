<script setup lang="ts">
  import { Filter } from 'lucide-vue-next';
</script>
<template>
    <Sheet >
        <SheetTrigger class="md:hidden" as-child>
          <Button variant="outline" >
            <Filter :size="15" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div class="mt-10" >
            <CatalogueFilter />
          </div>
        </SheetContent>
      </Sheet>
</template>