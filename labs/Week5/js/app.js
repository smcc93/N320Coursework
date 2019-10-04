Vue.component("student-card", {
  props: ["student", "isactive"],
  template:
    "<div class='student' v-bind:class='{ cardActive:isactive, cardOut:!isactive }'>{{ student.name }} : {{ student.skill }} <br> Joy: {{student.joy}}</div>"
});

var app = new Vue({
  el: "#app",
  data: {
    students: [
      { name: "Sienna", skill: 2, joy: 1 },
      { name: "Cyan", skill: 0, joy: 5 },
      { name: "Magenta", skill: 3, joy: 7 }
    ],
    currentStudent: { name: "Sienna", skill: 2, joy: 1 },
    curStudentId: 0,
    cardActive: true
  },
  methods: {
    arrowClicked: function() {
      this.cardActive = !this.cardActive;

      setTimeout(() => {
        //modify the skill of the current student
        //before moving onward:
        this.currentStudent.skill++;
        this.currentStudent.joy++;
        //iteration code
        this.curStudentId++;
        this.currentStudent = this.students[this.curStudentId];

        if (this.curStudentId >= this.students.length - 1) {
          this.curStudentId = -1;
        }
        if (this.curStudentId == 2) {
          this.curStudentId = -1;
        }

        //animation trigger
        this.cardActive = !this.cardActive;
      }, 300);
    },
    backClick: function() {
      this.cardActive = !this.cardActive;

      setTimeout(() => {
        this.currentStudent.joy--;

        this.curStudentId--;
        if (this.curStudentId < 0) {
          this.curStudentId = 2;
        }

        this.currentStudent = this.students[this.curStudentId];
        if (this.currentStudent.joy <= 0) {
          document.getElementById("emojiField").classList.remove("noEmoji");
          document.getElementById("emojiField").classList.add("emoji");
        } else {
          document.getElementById("emojiField").classList.remove("emoji");
          document.getElementById("emojiField").classList.add("noEmoji");
        }
        this.cardActive = !this.cardActive;
      }, 300);
    }
  }
});
