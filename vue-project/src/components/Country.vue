<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const Countries = ref([])

async function getcountries() {
  const { data } = await supabase.from('Countries').select()
  countries.value = data
}

onMounted(() => {
  getcountries()
})
</script>

<template>
    <h1>Countries:</h1>
    <ul>
        <li v-for="country in countries" :key="countries.id">{{ countries.name }}</li>
    </ul>
</template>

<style>
</style>