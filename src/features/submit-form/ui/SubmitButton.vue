<template>
	<button
		type="submit"
		:class="['submit-btn', {'submit-btn--disabled': disable}]"
		:disabled="disable"
	>
		{{ btnText }}
	</button>
</template>

<script setup>
    defineProps({
        btnText: {
            type: String,
            required: true
        },
        disable: {
            type: Boolean,
            default: true
        }
    })
</script>

<style scoped lang="scss">
    .submit-btn{
        width: 130px;
        height: 35px;
        border: none;
        border-radius: 5px;
        text-align: center;
        color: var(--black);
        background-color: var(--yellow);
        font-weight: 600;
        font-size: 15px;
        transition: all 100ms ease;
        box-sizing: border-box;
        outline: 0;


        &:hover{
            cursor: pointer;
            background-color: var(--accent-yellow);
        }

        &:active{
            transform: scale(0.9);
        }

        &--disabled:hover,&--disabled{
            cursor:default;
            background-color: var(--gray);
        }

    }
</style>