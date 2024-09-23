<template>
  <div class="countdown">
    <p>距离最后一天还有</p>
    <span class="heavy">{{countdown}}</span>
    <span>天</span>
  </div>
  <div class="diary">
    <h1>☀️</h1>
    <div class="banner">
      <div class="calendar calendar-weeks">
        <div class="head">
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span class="weekend">六</span>
          <span class="weekend">日</span>
        </div>
        <div class="dates">
          <!-- 填充空白 -->
          <span v-for="j in firstDayOfMonth-1" :key="`n${j}`"></span>
          <!-- 日历 -->
          <span
            v-for="i in lastDayOfMonth"
            :key="i"
            :class="{
              weekend: (i-1) % 7 === 6 || (i-1) % 7 === 0,
              today: i === currentDay.day,
              before: i < currentDay.day
            }"
          >
            <template v-if="i === currentDay.day"> 今 </template>
            <template v-else>
              <!--  -->
              {{ i }}
            </template>
          </span>
        </div>
      </div>

      <div class="poster"></div>
    </div>

    <div class="fly yearmonth">{{ currentDate.year }}年/{{ currentDate.month }}月</div>
    <!-- <div class="fly yearmonth">{{ currentDate.month }}</div> -->
  </div>
</template>
<script setup lang="ts">
import { DateTime } from 'luxon'
import { ref } from 'vue'

const MM = ['一','二','三','四','五','六','七','八','九','十','十一','十二']

// 今天
const today = DateTime.now() //moment()
// 今年
const tyear = today.year
const tmonth = today.month + 1

const currentDate = ref({
  year: today.year,
  month: today.month,
  day: today.day,
  week: today.weekday
})
console.log('🚀 ~ currentDate:', currentDate)

// 当前显示月份日期 可选择
const currentDay = DateTime.now()
console.log("🚀 ~ currentDay:", currentDay.day)

// 当前显示的月份
const customYear = 2024
const customMonth = 10

// 当月第一天是星期几
const firstDayOfMonth = currentDay.startOf('month').weekday // (new Date(year, month, 1).getDay() + 6) % 7

const lastDayOfMonth = currentDay.endOf('month').day

// 倒计时
const countdown = ref<number>(0)
// 今年最后一天
const deadline = DateTime.now().endOf('year')

const diff = DateTime.now().until(deadline)

// countdown.value = diff.toDuration(['years','days']).toObject()

countdown.value = Math.round(deadline.diff(DateTime.now(), 'days').as('days'))

</script>
<style>
:root{
  --dark-blue: #09028a;
}
@media (min-width: 1024px) {
  .diary {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }
}

h1 {
  text-align: center;
}

.fly {
  position: absolute;
}

.yearmonth {
  top: 0;
  left: 0;
  padding: 8px 0;
  font-size: 12px;
  font-weight: 600;
  font-weight: 600;
  color: #f0f351;
  color: #fff;
  background-color: #e05040;
  border: 2px solid #111;
  border-left: none;
  box-shadow: -2px 4px 0 #d7b3af;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.countdown{
  text-align: center;
  padding: 12px;
  /* border-radius: 0 0 6px 6px; */
  cursor: pointer;
  user-select: none;
  background-color: #f0f351;
  box-shadow: 0px 4px 2px #7da4d390;
  /* border-bottom: 4px solid #7da4d390; */
  /* background-color: #c6ddcd; */
  /* color: #e34d27; */
  /* color: #c6ddcd; */
}

.heavy{
  font-weight: bold;
  font-size: 48px;
}

.banner {
  display: flex;
  justify-content: space-around;

  .poster {
    width: 40vw;
    height: 40vw;
    background-color: #f5f5f5;
    /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAC1JREFUKFNjTKi+7bugVXUzLvr89Y//DTX5GRkZiASMMJMIqR9eJsLCiWq+BgAP8iQLLL3wDgAAAABJRU5ErkJggg==); */
    background: radial-gradient(circle, #6ff0bb 1px, transparent 1px);
    background-size: 20px 20px;
    box-shadow: 2px 2px 2px #6ff0ba90;
  }
}

.calendar {
  width: 212px;
  padding: 8px;
  margin: 0 8px;
  background-color: #f5f5f5;
  border-radius: 16px;
}

.calendar span {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 2px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;

  &.weekend {
    color: #e472e8;

    /* background-color: #e472e8; */
  }

  &.today {
    background-color: #e472e8;
    border-radius: 24px;
  }

  &.before {
    background-color: #6ff0bb;
    border-radius: 24px;
  }
}

.head span {
  font-size: 12px;
  font-weight: bold;
  opacity: 0.6;
}
</style>
