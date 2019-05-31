<template lang="html">
    <ScrollView>
        <StackLayout width="100%">
            <Label style="margin: 15px 0; padding-left: 20px;" v-for="(page, i) in pages" @tap="goToPage(page.component)"
                class="drawer-item" :text="page.name" :key="i" />
            <Button class="drawer-close-button" @tap="closeDrawer()">Close</Button>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import sideDrawer from "~/mixins/sideDrawer";
    export default {
        mixins: [sideDrawer],
        data() {
            return {
                // define our pages, making sure the component matches that defined in /app/router/index.js
                pages: [{
                        name: "Home",
                        component: this.$routes.Home
                    },
                    {
                        name: "Linear Chart",
                        component: this.$routes.Chart
                    },
                    {
                        name: "Bar Chart",
                        component: this.$routes.BarChart
                    },
                    {
                        name: "List View",
                        component: this.$routes.ListView
                    },
                    {
                        name: "Push Notification",
                        component: this.$routes.PushNotification
                    },
                    {
                        name: "Validation Form",
                        component: this.$routes.ValidationForm
                    }
                ]
            };
        },
        methods: {
            goToPage(pageComponent) {
                // use the manual navigation method
                this.$navigateTo(pageComponent);
                // and we probably want to close the drawer when changing pages
                this.closeDrawer();
            }
        }
    };
</script>

<style lang="css">
</style>