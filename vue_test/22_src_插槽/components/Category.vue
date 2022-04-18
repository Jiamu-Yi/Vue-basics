<template>
    <div>
        <h3>asfasf</h3>
        <ul>
            <li>
<!--                插槽，相当于给外面一个定位，当父组件往里面填结构时，在slot里面插入-->
                <slot :games="///">我是默认值，当没有传入结构时，会显示我</slot>
            </li>
            <li>
                <slot name="1">我是默认值，当没有传入结构时，会显示我</slot>
                <slot name="2">我是默认值，当没有传入结构时，会显示我</slot>

            </li>
            <li><
                /li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Category"
}
</script>

<style scoped>
    .category {
        background-color: #bd362f;
    }
</style>