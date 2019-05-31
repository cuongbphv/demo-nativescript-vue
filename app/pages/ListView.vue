<template lang="html">
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label class="fas icon" :text="'fa-bars' | fonticon" @tap="openDrawer()" col="0" />
                <Label class="title" text="Demo List View!" col="1" />
            </GridLayout>
        </ActionBar>

        <StackLayout>
        <RadListView ref="listView"
                    for="user in users">
            <v-template name="header">
                <Label text="Header, Sort here"></Label>
            </v-template>
            <v-template>
                <StackLayout class="item" orientation="vertical">
                    <Image :src="user.avatar" stretch="none" />
                    <Label :text="user.first_name + ' ' +user.last_name" class="nameLabel"></Label>
                    <Label :text="user.email" class="descriptionLabel"></Label>
                </StackLayout>
            </v-template>
            <v-template name="footer">
                <Label text="Pagination here"></Label>
            </v-template>
        </RadListView>
        </StackLayout>
    </Page>
</template>

<script>
import sideDrawer from "~/mixins/sideDrawer"
import { mapActions, mapGetters } from 'vuex'

export default {
  mixins: [sideDrawer],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('user', ['users'])
  },
  methods: {
      ...mapActions('user', ['getUsers'])
  },
  created() {
      this.getUsers()
  }
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