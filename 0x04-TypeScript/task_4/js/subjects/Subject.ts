/// <reference path="Teacher.ts" />

namespace Subjects {
    export class Subject{
      teacher: Teacher;
  
      setTeacher = (teacher: Teacher) => {
        this.teacher = teacher;
      }
      
    }
  }

// Path: 0x04-TypeScript/task_4/js/subjects/Cpp.ts