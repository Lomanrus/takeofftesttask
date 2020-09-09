<template>
        <div>
        <v-app-bar dark class="primary">
            <v-toolbar-title v-text="'Контакты'"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn v-for="(item,i) in menuItems" text    :key="`menuitem${i}`" :to="item.route">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
        </div>
</template>

<script>
export default {
    computed:{
        menuItems(){
            return[
                {
                    title:"Войти",
                    route:"/signin",
                    icon: 'account-circle'
                },
                {
                    title:"Зарегистрироваться",
                    route:"/signup",
                    icon: 'account-edit'
                }
            ]
        }
    }
}
</script>

<style>

</style>