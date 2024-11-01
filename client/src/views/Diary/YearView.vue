<template>
  <!-- 年视图 打卡 年历-->
  <div class="calendar-view-year">
    <div class="bg">2024</div>
    <div class="bg" style="top: 50%">MARS CONCERT</div>
    <!-- 头部显示月份 12格 -->
    <div class="head">
      <span v-for="i in 13" :key="`m${i}`">{{ i - 1 }}</span>
    </div>
    <!-- 日期 -->
    <div class="days-wrap">
      <div class="days">
        <span class="weekday"></span>
      </div>
      <div class="days">
        <span
          class="weekday"
          v-for="i in ['一', '二', '三', '四', '五', '六', '日']"
          :key="`w${i}`"
          >{{ i }}</span
        >
        <span
          class="weekday"
          v-for="i in ['一', '二', '三', '四', '五', '六', '日']"
          :key="`w${i}`"
          >{{ i }}</span
        >
        <span
          class="weekday"
          v-for="i in ['一', '二', '三', '四', '五', '六', '日']"
          :key="`w${i}`"
          >{{ i }}</span
        >
        <span
          class="weekday"
          v-for="i in ['一', '二', '三', '四', '五', '六', '日']"
          :key="`w${i}`"
          >{{ i }}</span
        >
        <span
          class="weekday"
          v-for="i in ['一', '二', '三', '四', '五', '六', '日']"
          :key="`w${i}`"
          >{{ i }}</span
        >
        <span class="weekday" v-for="i in ['一', '二']" :key="`w${i}`">{{ i }}</span>
      </div>
      <div class="days" v-for="i in 12" :key="`mm${i}`">
        <span class="null" v-for="k in monthWeekday[i - 1] - 1" :key="k"></span>
        <div
          class="day"
          :class="{ mars: !!isMarsDay(i, j) }"
          v-for="j in monthDays[i - 1]"
          :key="`dd${j}`"
          @touchstart="showEvent(i, j)"
        >
          {{ j }}
          <!-- <div class="events">{{ isMarsDay(i,j) ?isMarsDay(i,j).city: '' }}</div> -->
        </div>
      </div>
    </div>
    <!-- 鼠标悬停小框 -->
    <div class="egg"></div>
  </div>
</template>

<script setup lang="ts">
const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const monthWeekday = [1, 4, 5, 1, 3, 6, 1, 4, 7, 2, 5, 7]
const WEEKDAYS = ['一', '二', '三', '四', '五', '六', '日']

// const marsDays = ['5/1','5/2','5/4','7/20','7/21','8/10','8/11','8/24', '7/24', '7/25','7/26','9/8','9/9','10/25','10/26']

const marsDays = [
  {
    date: '5/1',
    city: '烟台',
    address: '里蹦岛',
    color: '#f1b3b3',
    event: '乐园演唱会',
    seat: '外场'
  },
  { date: '5/2', city: '烟台', address: '里蹦岛', color: '#f1b3b3', event: '乐园演唱会', seat: '' },
  { date: '5/4', city: '烟台', address: '里蹦岛', color: '#f1b3b3', event: '乐园演唱会', seat: '' },
  { date: '6/24', city: '香港', address: '', color: '#f1b3b3', event: '', seat: '' },
  { date: '6/25', city: '香港', address: '', color: '#f1b3b3', event: '', seat: '' },
  { date: '6/26', city: '香港', address: '', color: '#f1b3b3', event: '', seat: '' },
  {
    date: '7/20',
    city: '南昌',
    address: '国际体育中心体育馆',
    color: '#f1b3b3',
    event: '',
    seat: '内场B4区·1排·11号（980）'
  },
  { date: '7/21', city: '南昌', address: '', color: '#f1b3b3', event: '', seat: '' },
  {
    date: '8/10',
    city: '合肥',
    address: '',
    color: '#f1b3b3',
    event: '七夕',
    seat: '一层·东6区·3排·64号（580）'
  },
  { date: '8/11', city: '合肥', address: '', color: '#f1b3b3', event: '', seat: '' },
  {
    date: '8/24',
    city: '重庆',
    address: '奥体中心',
    color: '#f1b3b3',
    event: '',
    seat: '3区下层3区下 16排23号（680）'
  },
  {
    date: '9/7',
    city: '北京',
    address: '国家体育场(鸟巢)',
    color: '#f1b3b3',
    event: '礼物',
    seat: ''
  },
  {
    date: '9/8',
    city: '北京',
    address: '国家体育场(鸟巢)',
    color: '#f1b3b3',
    event: '礼物',
    seat: ''
  },
  { date: '10/4', city: '贵阳', address: '', color: '#f1b3b3', event: '乐园收官站', seat: '' },
  { date: '10/5', city: '贵阳', address: '', color: '#f1b3b3', event: '乐园收官站', seat: '' },
  {
    date: '10/6',
    city: '贵阳',
    address: '',
    color: '#f1b3b3',
    event: '乐园收官站',
    seat: '外场（680）'
  },
  {
    date: '10/26',
    city: '杭州',
    address: '奥体中心体育场(大莲花)',
    color: '#f1b3b3',
    event: '',
    seat: 'F区 3F F2·11排·40号（580）'
  },
  { date: '11/10', city: '武汉', address: '', color: '#f1b3b3', event: '', seat: '' },
  { date: '11/29', city: '深圳', address: '', color: '#f1b3b3', event: '', seat: '' },
  { date: '11/30', city: '深圳', address: '', color: '#f1b3b3', event: '', seat: '' }
]

let theMarsDay = null

const isMarsDay = function (mm: number, dd: number) {
  for (let index = 0; index < marsDays.length; index++) {
    const marsday: { date: string; city: string } = marsDays[index]
    const marsdate = marsday.date
    if (mm === +marsdate.split('/')[0] && dd === +marsdate.split('/')[1]) return marsday
  }
  return false
}

const showEvent = function (mm: number, dd: number) {
  const isMD = isMarsDay(mm, dd)
  if (isMD) {
    theMarsDay = isMD
  }
}
</script>

<style>
:root {
  --cl-main: #d13126;
}

body {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bg {
  font-size: 148px;
  position: absolute;
  top: 20px;
  left: 50%;
  color: rgba(183, 163, 163, 0.2);
  transform: translateX(-50%);
  font-weight: bold;
  width: 100%;
  text-align: center;
}

.calendar-view-year {
  border-right: 1px solid;
  background-color: #fff;
  /* margin: 24px; */
  padding: 8px;
  /* width: 60vw; */
  display: flex;
}

.calendar-view-year .mars {
  cursor: pointer;
}

.head {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #a0fcd7;
  background-color: var(--cl-main);
}

.head span {
  width: 32px;
  height: 32px;
  font-weight: bold;
  background: none;
  line-height: 32px;
  text-align: center;
  color: #f1ceb3;
}

.days-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.days {
  display: flex;
  /* flex-direction: column; */
  /* border-right: 1px dashed #eee; */
}

.days:first-child {
  /* border-left: 1px dashed #eee; */
}

.days span,
.days .day {
  width: 26px;
  height: 26px;
  text-align: center;
  line-height: 24px;
  margin: 4px;
  /* background-color: #e7fef5; */
  border-radius: 26px;
  font-size: 12px;
  border: 1px solid #f1b3b3;
  color: var(--cl-main);
}

.days .null {
  border: none;
}

.days .weekday {
  border: none;
  font-weight: bold;
}

.days .mars {
  background-color: #f1b3b3;
  position: relative;
  overflow: visible;
}

.events {
  position: absolute;
  z-index: 1;
  padding: 0 8px;
  left: -50%;
  top: -20px;
  background-color: rgba(183, 163, 163, 0.2);
  border-radius: 12px;
  display: inline-block;
}
</style>
