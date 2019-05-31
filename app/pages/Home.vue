<template lang="html">
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label class="fas icon" :text="'fa-bars' | fonticon" @tap="openDrawer()" col="0" />
                <Label class="title" text="Demo NativeScript-Vue!" col="1" />
            </GridLayout>
        </ActionBar>

        <GridLayout class="main-container" ~mainContent columns="*" rows="*">
            <GridLayout [columns]="genCols(item)" />
        </GridLayout>
    </Page>
</template>

<script>
import sideDrawer from "~/mixins/sideDrawer";
export default {
  mixins: [sideDrawer],
  data() {
    return {
      text: "Hello Home Page!"
    };
  },
  methods: {
    genCols(item) {
      if (item.columns) {
        return item.columns;
      } else {
        item.columns = "*, auto";
        item.specifications.forEach(el => {
          item.columns += ",auto";
        });
        return item.columns;
      }
    }
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