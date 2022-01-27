function finalGrade (exam, projects) {

    var final_grade ; 
    
    if(exam>90 || projects>10) {
      final_grade = 100 ; 
    }
      if(exam>75 || projects>=5) {
       final_grade = 90 ; 
      }
       if(exam>50 || projects>=2)  {
        final_grade = 75 ; 
      } 
       
    
    else {
        final_grade = 0 ;  
    } 


    return final_grade ; 
}
