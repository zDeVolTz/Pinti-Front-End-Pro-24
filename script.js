class Student {
  constructor(firstName,lastName,birthYear,grades = []){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;

    this._attendance = new Array(25);
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }
 
  getAvarageRating() {
    return this.avarageRating();
  }

  avarageRating() {
    const avarageRating = this.grades.reduce((total , grade) => total += grade,0) / this.grades.length;
    return +avarageRating.toFixed(2);
  }

  present() {
    if (this._attendance.length <= 25){
      // Так можно или лучше через for ?
      const findIndex = this._attendance.findIndex(value => value === undefined);
      if(findIndex != -1){
        this._attendance[findIndex] = true;
      } else {
        console.log('Массив заполнен');
      }
    } else {
      console.log('Ошибка длины массива');
    }
  }

  absent() {
    if (this._attendance.length <= 25){
      // Реализация через for 
      for(let i = 0 ; i < this._attendance.length; i++){
        if (this._attendance[i] === undefined){
          this._attendance[i] = false;
          break;
        } else if (i === this._attendance.length-1) {
          console.log('Массив заполнен');
        }
      }
    } else {
      console.log('Ошибка длины массива');
    }
  }

  summary() {
    const averageGrade = this.avarageRating();
    const averageAttendance = +(this._attendance.filter(status => status === true).length / this._attendance.length).toFixed(2);

    if (averageGrade > 90 && averageAttendance > 0.9) {
        return "Молодець!";
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
        return "Добре, але можна краще";
    } else {
        return "Редиска!";
    }
  }

}

const student1 = new Student("Люк", "Скайвокер", 1998, [90, 90, 92]);
const student2 = new Student("Дарт", "Вейдер", 1960, [90, 90, 95]);
const student3 = new Student("Лея", "Органа", 1999, [4, 5, 6]);


student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();

// Викликаємо методи для виведення результатів
console.log(`Вік студента 1: ${student1.getAge()}`);
console.log(`Середня оцінка студента 1: ${student1.getAvarageRating()}`);
console.log(`Студент 1: ${student1.summary()}`);

console.log(`Вік студента 2: ${student2.getAge()}`);
console.log(`Середня оцінка студента 2: ${student2.getAvarageRating()}`);
console.log(`Студент 2: ${student2.summary()}`);


console.log(`Вік студента 3: ${student3.getAge()}`);
console.log(`Середня оцінка студента 3: ${student3.getAvarageRating()}`);
console.log(`Студент 3: ${student3.summary()}`);