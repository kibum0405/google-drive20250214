<script setup>
import {
  VerticalNavLink,
  VerticalNavSectionTitle,
} from '@layouts'
</script>

<template>
    <ul>
        <VerticalNavSectionTitle :item="{ heading: '파일 관리' }" />
        <VerticalNavLink
            :item="{
                title: '파일',
                to: '/files',
            }"
        />
    </ul>
</template>
