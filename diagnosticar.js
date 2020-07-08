
//class Diagnostico{
//    constructor(edad){
//        this.edad=edad      //this.d="";
//    }
//    diag(){
//        if (this.edad>40) {return "Usted tiene piel madura. Debe usar Timewise Repair"}
//        else{return "Usted tiene piel relativamente joven. Debe usar Timewise 3D"}
//   }
//  }

//----------------------------------------------------------------
class Diagnostico2{
    constructor(edad){
        this.edad=edad      //this.d="";
    }

    const diagCallback=(operacion, this.edad)=>{
        return operacion(this.edad);
    }

    const dmadura=()=>{
        if (this.edad>40) {return "Usted tiene piel madura. Debe usar Timewise Repair"}
   }
    const djoven=()=>{
    if (this.edad<=40) {return "Usted tiene piel relativamente joven. Debe usar Timewise 3D"}
}
}

module.exports={Diagnostico2};