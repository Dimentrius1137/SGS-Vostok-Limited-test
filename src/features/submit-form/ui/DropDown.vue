<template>
	<div
		ref="root"
		class="dropdown"
	>
		<div
			:class="['dropdown__active', { 'blocked': isBlocked, 'open': isOpen, 'empty': !selectedOption}]"
			@click="isOpen = !isOpen"
		>
			{{ currentSelectedOption }}
		</div>
		<Transition name="list">
			<ul
				v-if="isOpen && !isBlocked"
				class="dropdown-list"
			>
				<li
					v-for="option in options"
					:key="option.id"
					class="dropdown-list__item"
					@click="ChangeSelectedItem(option)"
				>   
					{{ option.name }}
				</li>
			</ul>
		</Transition>
	</div>
</template>

<script setup>
    import { computed, ref, watch, useTemplateRef } from 'vue';
    import { onClickOutside } from '@vueuse/core';
    const props = defineProps({
        options: {
            type: Object,
            required: true
        },
        dependency: {
            type: Object
        },
        placeholder: {
            type: String,
            default: 'none'
        }
    })

    const isBlocked = computed(() => props.options.length === 0)
    const selectedOption = defineModel();
    const isOpen = ref(false);

    function ChangeSelectedItem(option){
            selectedOption.value = option;
            isOpen.value = false;
    }       

    const target = useTemplateRef('root');
    onClickOutside(target, () => isOpen.value = false);

    const currentSelectedOption = computed(() => {
            if(!selectedOption.value) return props.placeholder;
            else return selectedOption.value.name
    })

   watch(() => props.dependency, () => {
        isOpen.value = false;
        selectedOption.value = null
   })
</script>

<style scoped lang="scss">
*{
    color: var(--black)
}
    .dropdown{
        min-height: 50px;
        background-color: var(--white);
        position: relative;
        cursor: pointer;
        &-list{
            z-index: 2;
            width: calc(100% - 24px);
            background-color: var(--white);
            position: absolute;
            list-style: none;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 1rem
        }

        &-list__item {
            font-size: 13px;
        }

        &__active{
            font-size: 16px;
            padding: 0 0.5rem;
            height: 50px;
            text-align: start;
            align-content: center;
            overflow: hidden;
            white-space: nowrap !important;  
            text-overflow: ellipsis;
        }
        &__active::after{
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: var(--black);
            transform: scale(0);
            transition: 300ms ease;
            transform-origin: right;
        }
        &__active:hover::after{
            transform: scale(1);
        }
    }

    .blocked{
        color: red !important
    }
    .blocked:hover::after{
        color: red;
        transform: scale(0);
    }

    .open:not(.blocked)::after{
        transform: scale(1);
    }
    .empty{
        color: var(--dark-gray);
    }
    .list-enter-active,
    .list-leave-active {
        transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .list-enter-from,
    .list-leave-to {
        transform: translateY(-1rem);
        opacity: 0;

    }
</style>