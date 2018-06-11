<template>
  <div class="home">
    <div class="page-title">
      <h1>Inline Input test page</h1>
    </div>
    <div
      class="grid">
      <c-grid
        ref="grid"
        :data="data"
        :frozen-col-count="1"
        @changed-value="onChangedValue">
        <c-grid-column
          :width="50"
          field="check"
          column-type="check"
          action="check" />
        <c-grid-column
          field="personid"
          width= "85">
          ID
        </c-grid-column>
        <c-grid-icon-column
          :width="150"
          :column-style="{
            color: 'gold'
          }"
          :action="{
            actionName: 'InlineMenuEditor',
            option:{options: [
              {value: '', caption: 'Empty'},
              {value: 1, classList: 'stars', html: `<i class='material-icons'>star</i>`},
              {value: 2, classList: 'stars', html: `<i class='material-icons'>star</i>`.repeat(2)},
              {value: 3, classList: 'stars', html: `<i class='material-icons'>star</i>`.repeat(3)},
              {value: 4, classList: 'stars', html: `<i class='material-icons'>star</i>`.repeat(4)},
              {value: 5, classList: 'stars', html: `<i class='material-icons'>star</i>`.repeat(5)}
            ]}
          }"
          :message="starsValidateMessage"
          icon-name="star"
          field= "stars"
        >
          Class
        </c-grid-icon-column>
        <c-grid-column-group
          caption="Name">
          <c-grid-column
            :action="{
              actionName: 'InlineInputEditor',
            }"
            :message="firstNameValidateMessage"
            field= "fname"
            width= "20%"
          >
            First Name
          </c-grid-column>
          <c-grid-column
            :action="{
              actionName: 'InlineInputEditor',
            }"
            :message="lastNameValidateMessage"
            field="lname"
            width= "20%"
            min-width="150"
          >
            Last Name
          </c-grid-column>
        </c-grid-column-group>

        <c-grid-percent-complete-bar-column
          :formatter="v => { return v ? `${v}%` : '' }"
          :column-style="{
            textAlign: 'right',
            padding: [0, 10, 0, 0]
          }"
          :action="{
            actionName: 'InlineInputEditor',
            option: {
              type: 'number',
              classList: ['al-right']
            }
          }"
          :message="progressValidateMessage"
          field= "progress"
          width= "10%"
          min-width="50"
        >
          Progress
        </c-grid-percent-complete-bar-column>
        <c-grid-column
          :action="{
            actionName: 'InlineInputEditor',
          }"
          :message="emailValidateMessage"
          field="email"
          width="calc(50% - 505px - 20px)"
          min-width="200"
        >
          Email
        </c-grid-column>
        <c-grid-column
          :action="{
            actionName: 'InlineInputEditor',
          }"
          :message="birthdayValidateMessage"
          :field="{
            get (rec) {
              return rec.birthday
            },
            set (rec, val) {
              rec.birthday = new Date(val)
            }
          }"
          width="100"
          filter="dateFormat('yyyy/m/d')"
        >
          Birthday
        </c-grid-column>
        <c-grid-button-column
          :width="120"
          caption="SHOW REC"
          @click="clickRec"
        />
      </c-grid>
    </div>
  </div>
</template>
<script>
import {generatePersonsDataSource} from './common'

const personsDataSource = generatePersonsDataSource(1000000)

const starsValidateMessage = (rec) => rec.stars ? null : 'Please select.'
const firstNameValidateMessage = rec => rec.fname ? null : 'Please enter First Name.'
const lastNameValidateMessage = rec => rec.lname ? null : 'Please enter Last Name.'
const progressValidateMessage = rec => rec.progress > 0 ? null : 'Please enter progress.'
const emailValidateMessage = rec => {
  const {email} = rec
  if (!email) {
    return {
      type: 'error',
      message: 'Please enter Email address.'
    }
  }
  if ((`${rec.fname.replace('-', '_')}_${rec.lname.replace('-', '_')}@example.com`).toLowerCase() !== email) {
    return {
      type: 'warning',
      message: 'Email address is incorrect.'
    }
  }
  return null
}
const birthdayValidateMessage = rec => rec.birthday ? null : 'Please enter birthday.'

export default {
  name: 'Enterprise',
  data () {
    return {
      data: personsDataSource
    }
  },
  watch: {
  },
  methods: {
    clickRec (rec) {
      alert(JSON.stringify(rec))
    },
    onChangedValue () {
      this.$refs.grid.invalidate()
    },
    starsValidateMessage,
    firstNameValidateMessage,
    lastNameValidateMessage,
    progressValidateMessage,
    emailValidateMessage,
    birthdayValidateMessage
  }
}
</script>

<style scoped>
  .grid >>> .cheetah-grid__inline-menu__menu-item.stars {
    text-align: center;
    color: gold;
    display: block;
    white-space: nowrap;
  }
  .grid >>> .cheetah-grid__inline-menu__menu-item.stars .material-icons {
    line-height: 40px;
  }
</style>
