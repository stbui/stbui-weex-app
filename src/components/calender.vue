<template>
    <div class="calender">
        <div class="calender-week">
            <span v-for="week in weeks" :key="week">
                <text class="calender-week-text">{{ week }}</text>
            </span>
        </div>
        <div class="calender-day">
            <span v-for="day in days" :key="day">
                <text class="calender-day-text" v-if="day != getDay()">{{ day }}</text>
                <text class="calender-day-text calender-active" v-else>{{ day }}</text>
            </span>
        </div>
    </div>
</template>

<style scoped>
.calender {}

.calender-week {
    flex-direction: row;
    justify-content: space-around;
    background-color: #fafafa;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding-top: 13.5px;
    padding-bottom: 13.5px;
}

.calender-day {
    flex-direction: row;
    justify-content: space-around;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #fff;
}

.calender-week-text {
    color: #999;
    font-size: 26px;
}

.calender-day-text {
    width: 80px;
    text-align: center;
    height: 80px;
    border-radius: 50%;
    line-height: 80px;
    font-size: 28px;
}

.calender-active {
    background-color: #ffb835;
    color: #fff;
}
</style>

<script>
export default {
    data() {
        return {
            weeks: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            days: []
        }
    },
    methods: {
        getSevenDays() {
            let now = new Date();
            let day = now.getDate();

            for (let i = 3; i >0; i--) {
                this.days.push(day - i);
            }

            for (let i = 0; i < 4; i++) {
                this.days.push(day + i);
            }

            return this.days;
        },

        getDay() {
            let now = new Date();
            return now.getDate();
        }
    },
    created() {
        this.getSevenDays();
    }


}
</script>
