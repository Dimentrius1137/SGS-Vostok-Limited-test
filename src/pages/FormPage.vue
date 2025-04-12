<template>
	<div class="form-page">
		<h1 class="form-page__title">
			Новая заявка
		</h1>
		<RouterLink
			class="result-link"
			to="/result"
		>
			Перейти к заявке ->
		</RouterLink>
		<ApplicationForm />
	</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import ApplicationForm from '@/features/submit-form/ui/ApplicationForm.vue';
</script>

<style scoped lang="scss">
	.form-page{
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		&__title{
			text-align: center;
			margin-top: 60px;
			margin-bottom: 10px;
		}
		.result-link{
			position: fixed;
			right: 100px;
			top: 45px;
			color: var(--gray);
			@media all and (max-width: 800px) {
				top: 20px;
				right: 20px;
			}
		}
	}
</style>