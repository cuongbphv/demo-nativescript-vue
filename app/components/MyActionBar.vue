<template lang="html">
    <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label class="fas icon" :text="'fa-bars' | fonticon" @tap="openDrawer()" col="0" />
                <Label class="title" :text="title" col="1" />
            </GridLayout>
        </ActionBar>
</template>

<script>
import sideDrawer from "~/mixins/sideDrawer";
export default {
    name: 'MyActionBar',
    props: {
        title: {
            type: String,
            default: 'Demo Linear Chart!'
        }
    },
    mixins: [sideDrawer]
};
</script>

<style lang="scss" scoped>
.icon {
    font-size: 20px;
}
.title {
    text-align: center;
}
</style>