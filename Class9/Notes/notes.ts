// const addNumbers = (a: number, b: number) => a + b;

// const sumWithNumbers = addNumbers(4, 3);
// // const sumWithMixed = addNumbers(4, "3");
// // const sumWithStrings = addNumbers("4", "3");

// console.log("SUM w/ Numbers:", sumWithNumbers, "~>", typeof sumWithNumbers);
// // console.log("SUM w/ Mixed:", sumWithMixed, "~>", typeof sumWithMixed);
// // console.log("SUM w/ Strings:", sumWithStrings, "~>", typeof sumWithStrings);

// let numberOfStudents: number;

// numberOfStudents = 2;
// numberOfStudents = "3";

// let username: string = ''
// username = "123";

// username = "James";

// username = 123;

// * COMPLEX TYPES START * \\
// Arrays
//let students: Array<string>;
// let students: string[];

// students = ["Quinton", "Betty", "Mary"];

// let mixedBag: any[];

// mixedBag = [2, "Hello", false];

// Objects
// let student: {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     hasPets?: boolean;
//   };
  
//   student = {
//     name: "James",
//     age: 33,
//     isStudent: true,
//     hasPets: true
//   };

// 
// Type inference & Unions
// let course = "Codefi Coding Bootcamp";
// // course = 123 // Type intferences causes an error

// let bootcamp: string | number;
// bootcamp = "Codefi Coding Bootcamp";
// bootcamp = 123;

// Type Aliases
// type CodefiPerson = {
//     name: string;
//     age: number;
//     isStudent?: boolean;
//   };
  
//   let randomStudent: CodefiPerson = {
//     name: "James",
//     age: 33,
//     //isStudent: true
//   };
//   let currCodeCoach: CodefiPerson = {
//     name: "Chris",
//     age: 99,
//     isStudent: false
//   };

// Functions & Parameters
// function add(a: number, b: number): number {
//     return a + b;
//   }
  
//   function printName(name: string): void {
//     console.log(name);
//   }

//   const someArr: string[] = ["some", "array"]
//   let someArr2: string[]

//   type SomeUnion = string | number
//   const someThing: SomeUnion = 123

// // * GENERICS START * \\
// function getId<T>(value: T): T {
//     return value;
//   }
  
//   let userOneId = getId<String>("stringId_userOne");
//   let userTwoId = getId<Number>(new Number("123"));
//   let userThreeHasId = getId<Boolean>(true);

//
// * CLASSES & INTERFACES START * \\

// interface StudentInterface {
//     first: string;
//     last: string;
//     enroll: (courseName: string) => void;
//     listCourses: () => string[];
//   }

// class Student implements StudentInterface {
//     constructor(
//       public first: string,
//       public last: string,
//       private courses: string[]
//     ) {

//     }
  
//     enroll(courseName: string) {
//       this.courses.push(courseName);
//     }
  
//     listCourses() {
//       return this.courses.slice();
//     }
//   }
  
//   const studentOne = new Student("Will", "Wilder", ["Codefi Front-End Bootcamp"]);
//   studentOne.enroll("Codefi Back-End Bootcamp");
  
//   // studentOne.courses
//   studentOne.listCourses();
  
//   console.log("studentOne:", studentOne);
//   // CLASSES & INTERFACES END \\
