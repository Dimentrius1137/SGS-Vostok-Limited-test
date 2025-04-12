<template>
	<form
		class="aplication-form"
		@submit.prevent="SubmitForm"
	>
		<div class="aplication-form__fields">
			<DropDown
				v-model="formData.cities"
				placeholder="Город"
				:options="getCities()"
			/>
			<DividerLine />
			<DropDown
				v-model="formData.workshops"
				:options="getWorkShops(formData.cities?.id)"
				placeholder="Цех"
				:dependency="formData.cities"
			/>
			<DividerLine />
			<DropDown
				v-model="formData.employees"
				:options="getEmployees(formData.workshops?.id)"
				placeholder="Сотрудник"
				:dependency="formData.workshops"
			/>
			<DividerLine />
			<DropDown
				v-model="formData.brigades"
				placeholder="Бригада"
				:options="getBrigade()"
			/>
			<DividerLine />
			<DropDown
				v-model="formData.shifts"
				placeholder="Смена"
				:options="getShifts()"
			/>
		</div>
		<SubmitButton
			btn-text="Отправить"
			:disable="true"
		/>
	</form>
</template>
<script setup>
import SubmitButton from '@/features/submit-form/ui/SubmitButton.vue';
import DividerLine from '@/features/submit-form/ui/DividerLine.vue';
import DropDown from '@/features/submit-form/ui/DropDown.vue';
import { reactive, ref, watch } from 'vue';
import { collectionsApi } from '@/entities/collections';

import { useRouter } from 'vue-router';

const router = useRouter();

const { 
	getCities, 
	getWorkShops, 
	getEmployees, 
	getBrigade, 
	getShifts, 
	getAllCollections
 } = new collectionsApi();

const formData = reactive({});
Object.keys(getAllCollections()).forEach((e) => formData[e] = null);



function SubmitForm(){
	router.push({ name: 'resultRoute'});
}

</script>
<style scoped lang="scss">
    .aplication-form{
        width: 80%;
		height: 100%;
        display: flex;
        flex-direction: column;
		justify-content: start;
        &__fields{
            max-width: 100%;
            height: 100%;
			max-height: 200px;
            display: flex;
            flex-direction: row;
			justify-content: center;
            align-items: start;
            gap: 20px;
			margin: 20px 0;
			@media all and (max-width: 800px) {
				flex-direction: column;
				align-items: normal;
				max-height: fit-content;
			}
			.dropdown{
				max-width: calc(100% / 5 - 22px);
				flex: 1;
				@media all and (max-width: 800px) {
					max-width: 100%;
				}
			}
        }

    }
</style>