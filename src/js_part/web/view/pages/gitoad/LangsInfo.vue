<template>
    <section class="info">
        <div class="info__block-settings">
            <button class="info__btn-settings"><img class="info__icon" src="@/css_part/images/icons8-настройки-50.svg"
                                                    alt="иконка  настрoек"></button>
        </div>

    </section>
</template>
<script>
export default {
    name: 'langs-info',
    props: {
        langs: {
            required: true
        }
    }
}
</script>