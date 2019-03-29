<template>
    <form-wizard>
        <tab-content title="Personal details">
            <sui-container fluid>
                <sui-grid :columns="3">
                    <sui-grid-column>
                        <sui-card class="fluid">
                            <sui-image style="max-width: 350px; max-height: 350px; min-width: 350px; min-height: 350px;" src="https://www.dentaconbg.com/wp-content/uploads/2014/11/stomatologichen-stol-s-gorno-okachvane-tekmil-epica1.jpg" />
                            <sui-card-content>
                                <sui-card-header>
                                    Дентален юнит Epica
                                </sui-card-header>
                            </sui-card-content>
                            <sui-button attached="bottom">
                                <sui-icon name="add" /> Конфигурирай
                            </sui-button>
                        </sui-card>
                    </sui-grid-column>
                    <sui-grid-column>
                        <sui-card class="fluid">
                            <sui-image style="max-width: 350px; max-height: 350px; min-width: 350px; min-height: 350px;"
                                       src="https://www.dentaconbg.com/wp-content/uploads/2014/11/stomatologichen-unit-i-stol-tekmil-correcta-gorno-okachvane1-768x718.jpg" />
                            <sui-card-content>
                                <sui-card-header>
                                    Дентален юнит Correcta
                                </sui-card-header>
                            </sui-card-content>
                            <sui-button attached="bottom">
                                <sui-icon name="add" /> Конфигурирай
                            </sui-button>
                        </sui-card>
                    </sui-grid-column>
                    <sui-grid-column>
                        <sui-card class="fluid">
                            <sui-image style="max-width: 350px; max-height: 350px; min-width: 350px; min-height: 350px;"
                                       src="https://www.dentaconbg.com/wp-content/uploads/2014/11/dentalen-unit-s-gorno-okachvane-tekmil-diverso1-800x702.jpg"></sui-image>
                            <sui-card-content>
                                <sui-card-header>Дентален юнит Diverso</sui-card-header>
                            </sui-card-content>
                            <sui-button attached="bottom">
                                <sui-icon name="add" /> Конфигурирай
                            </sui-button>
                        </sui-card>
                    </sui-grid-column>
                    <sui-grid-column>
                        <sui-card class="fluid">
                            <sui-image src="https://www.dentaconbg.com/wp-content/uploads/2017/09/correcta-S-768x709.jpg" />
                            <sui-card-content>
                                <sui-card-header>Elliot Fu</sui-card-header>
                            </sui-card-content>
                            <sui-button attached="bottom">
                                <sui-icon name="add" /> Конфигурирай
                            </sui-button>
                        </sui-card>
                    </sui-grid-column>
                </sui-grid>
            </sui-container>
        </tab-content>
        <tab-content title="Additional Info">
            My second tab content
        </tab-content>
        <tab-content title="Last step">
            Yuhuuu! This seems pretty damn simple
        </tab-content>

    </form-wizard>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
