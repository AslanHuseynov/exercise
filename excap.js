// davaleba4
   function expandString(strin)
   {
       let temp = "";
       let j;
 
       for (let i = 0; i < strin.length; i++) {
           if (strin[i].charCodeAt(0) >= 0) {
 
               let num = strin[i].charCodeAt(0) - '0'.charCodeAt(0);
               if (strin[i+1] == '(') {
 
                   for (j = i + 1; strin[j] != ')'; j++) {
                       if ((strin[j] >= 'a'
                            && strin[j] <= 'z')
                           || (strin[j] >= 'A'
                               && strin[j] <= 'Z')) {
                           temp += strin[j];
                       }
                   }
 
                   for (let k = 1; k <= num; k++) {
                       document.write(temp);
                   }
 
                   num = 0;
                   temp = "";
 
                   if (j < strin.length) {
                       i = j;
                   }
               }
           }
       }
   }
    
   let strin = "3(ab)";
   expandString(strin);
