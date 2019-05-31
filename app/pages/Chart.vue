<template lang="html">
    <Page>
        <MyActionBar :title="'Linear Chart'" />
        <GridLayout class="main-container" ~mainContent columns="*" rows="*">
            <RadCartesianChart>
                <CategoricalAxis v-tkCartesianHorizontalAxis />
                <LinearAxis v-tkCartesianVerticalAxis />
                <LineSeries v-tkCartesianSeries
                            :items="items"
                            categoryProperty="Country"
                            valueProperty="Amount" />
            </RadCartesianChart>
        </GridLayout>
    </Page>
</template>

<script>
import MyActionBar from '../components/MyActionBar';

const description = 'Line Series';

export default {
    components: {
        MyActionBar
    },
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