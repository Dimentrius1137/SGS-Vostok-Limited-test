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
			<p
				v-if="!application"
				class="application__empty"
			>
				Нет заявок
			</p>
			<ul
				v-else
				class="application-list"
			>
				<li
					v-for="{name, type} in application"
					:key="name"
					class="application-list__item"
				>
					{{ type }}: <span class="application-list__item-name">{{ name }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { UseApplicationStore } from '@/app/stores/application/applicationStore';
import { collectionsApi } from '@/entities/collections';

const store = UseApplicationStore();
const application = store.getApplication;

const collectionTypes = new collectionsApi().getTypes();

for(let field in application){
	application[field].type = collectionTypes[field];
}

</script>

<style scoped lang="scss">
	.result-page{
		&__title{
			text-align: center;
			margin-top: 60px;
			margin-bottom: 10px;
		}
	}

	.result-link{
			position: fixed;
			left: 40px;
			top: 45px;
			color: var(--gray);
			@media all and (max-width: 800px) {
				top: 20px;
				left: 20px;
			}
		}
	.application{
		padding: 40px;
		&__empty{
			font-size: 20px;
			text-align: center;
		}
		@media all and (max-width: 800px) {
			padding: 20px
		}
	}

	.application-list{
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			list-style: none;
			&__item-name{
			text-decoration: underline;
		}
		
		}


</style>