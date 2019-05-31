<template lang="html">
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label class="fas icon" :text="'fa-bars' | fonticon" @tap="openDrawer()" col="0" />
                <Label class="title" text="Demo Bar Chart!" col="1" />
            </GridLayout>
        </ActionBar>

        <GridLayout class="main-container" ~mainContent columns="*" rows="*">
            <RadCartesianChart>
                <RadCartesianChartGrid v-tkCartesianGrid
                    horizontalLinesVisible="true"
                    verticalLinesVisible="true"
                    horizontalStripLinesVisible="true"
                    verticalStripLinesVisible="true"
                    horizontalStrokeColor="#ffffcc80"
                    verticalStrokeColor="#804d0026"
                    horizontalStrokeWidth="2"
                    verticalStrokeWidth="3"
                    horizontalStripLineColor="#8059005c, #804d0026">
                </RadCartesianChartGrid>

                <BarSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="Amount"></BarSeries>

                <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
                <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
            </RadCartesianChart>
        </GridLayout>
    </Page>
</template>

<script>
import sideDrawer from "~/mixins/sideDrawer";

const description = 'Bar Series';

export default {
    mixins: [sideDrawer],
    data () {
        return {
            title: description,
            items: [
                {
                    Country: 'VietNam',
                    Amount: 117.3
                },
                {
                    Country: 'China',
                    Amount: 158.9
                },
                {
                    Country: 'USA',
                    Amount: 352.3
                },
                {
                    Country: 'Nepal',
                    Amount: 51.1
                },
                {
                    Country: 'Cambodia',
                    Amount: 20.1
                }
            ]
        };
    },
    methods: {
        onNavigationButtonTap() {
        frameModule.topmost().goBack();
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