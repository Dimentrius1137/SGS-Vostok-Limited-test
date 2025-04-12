<template>
	<div class="divider">
		<div class="divider__line"></div>
	</div>
</template>
<script setup></script>
<style scoped lang="scss">
	.divider{
		height: 50px;
		align-content: center;
		&__line{
			background-color: var(--gray);
			width: 1px;
			height: 70%;
		}
		@media all and (max-width: 800px) {
			display: none;
		}
	}

</style>