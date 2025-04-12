<template>
	<div class="result-page">
		<RouterLink
			class="result-link"
			to="/form"
		>
			<- К форме
		</RouterLink>
		<h1 class="result-page__title">
			Заявка
		</h1>
		<div class="application">
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped lang="scss">
	.result-page{
		&__title{
			text-align: center;
			margin-top: 60px;
			margin-bottom: 10px;
		}
		.result-link{
			position: fixed;
			left: 100px;
			top: 45px;
			color: var(--gray);
			@media all and (max-width: 800px) {
				top: 20px;
				left: 20px;
			}
		}
	}
</style>