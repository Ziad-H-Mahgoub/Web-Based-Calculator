let myVue = new Vue({
    el:'#mainDiv',
    data:{
      i:["button00","button01","button02","button03"],
      j:["button10","button11","button12","button13"],
      k:["button20","button21","button22","button23"],
      l:["button30","button31","button32","button33"],
      m:["button40","button41","button42","button43"],
      n:["button50","button51","button52","button53"],
      message1:"",
      message2:"",
      message3:"",
      message4:"",
      x:0,
      mianbool:false,


    },
    methods: {
      /* row 0*/
      row0:function(){
        if(this.x==0){
          this.x ++;
          return "%";
        }
        else if (this.x==1){
          this.x ++;
          return "CE";
        }
        else if (this.x==2){
          this.x ++;
          return "C";
        }
        else if (this.x==3){
          this.x =0;
          return "del";
        }
      },
      buttonRow0:function(x){
        this.foundError(); 
        if(x==="button00"){
          if(this.message3===""&&this.message2===""){
             this.message3="0";
          }
          else if(this.message3===""&&this.message2!=""&&this.message1!=""){
            this.message4="%";
            this.message3=this.message1;
            this.SingleOperants();
          }
          else{
           this.message4="%";
          this.SingleOperants();
          }
        }
        else if(x==="button01"){
          this.message3="";
        }
        else if(x==="button02"){ 
          this.message1="";
          this.message2="";
          this.message3="";
        }
        else if(x==="button03"){
          this.message3=this.message3.slice(0,-1);
         
        }
        return;
      },

     /* row 1*/
      row1:function(){
        if(this.x==0){
          this.x ++;
          return "1/X";
        }
        else if (this.x==1){
          this.x ++;
          return "x<sup>2</sup>";
        }
        else if (this.x==2){
          this.x ++;
          return "&#8730";
        }
        else if (this.x==3){
          this.x =0;
          return "&divide";
        }
      },
      buttonRow1:function(x){
        this.foundError();
        if(x==="button10"){
          if((this.message3===""||this.message3==="0")&&this.message2===""||this.message3==="0.0"){
          this.message3="E";
          
          }
          else if(this.message3===""&&this.message2!=""&&this.message1!=""){
            this.message4="/";
            this.message3=this.message1;
            this.SingleOperants();
          }
          else{
          this.message4="/";
          this.SingleOperants();
          }
        }
        else if(x==="button11"){
          if((this.message3===""||this.message3==="0")&&this.message2===""){
             this.message1="sqr(0)";
             this.message3="0";
             this.message1="";

          }
          else if((this.message3===""&&this.message2!="")&&this.message1!=""){
            this.message4="sqr";
            this.message3=this.message1;
            this.SingleOperants();
          }
          
          else{
            this.message4="sqr";
            this.SingleOperants();              }
        }
        else if(x==="button12"){ 
          if((this.message3===""||this.message3==="0")&&this.message2===""){
             this.message1="0";
             this.message2="&#8730";
             this.message3="0";
             this.message1="";
             this.message2="";
          }
          else if(this.message3===""&&this.message2!=""&&this.message1!=""){
            this.message4="√";
            this.message3=this.message1;
            this.SingleOperants();
          }
          else{
            this.message4="√";
            this.SingleOperants();  
          }
        }
        else if(x==="button13"){
          if(this.message3===""&&this.message1===""){
            this.message1="0";
            this.message2="&divide";
          }
          else if(this.message2!=""&&this.message1!=""&&this.message2!="&divide"&&this.message3==="")
          this.message2="&divide";
          else{
            this.allSpansFull();
            setTimeout(() => { 
            this.message1=this.message3;
            this.message2="&divide";
            this.message3=" ";
            this.message3="";
                             }, 100  );
          }
        }
        return;
      },
      
      /*row2*/
      row2:function(){
        if(this.x==0){
          this.x ++;
          return "7";
        }
        else if (this.x==1){
          this.x ++;
          return "8";
        }
        else if (this.x==2){
          this.x ++;
          return "9";
        }
        else if (this.x==3){
          this.x =0;
          return "&times";
        }
      },
      buttonRow2:function(x){
        this.foundError();
        if(x==="button20")
        this.message3 +="7";
        
        else if(x==="button21")
        this.message3 +="8";
          
        else if(x==="button22")
        this.message3 +="9";
         
        else if(x==="button23"){
          if(this.message3===""&&this.message1===""){
            this.message1="0";
            this.message2="*";
          }
          else if(this.message2!=""&&this.message1!=""&&this.message2!="*"&&this.message3==="")
          this.message2="*";
          else{
            this.allSpansFull();
            setTimeout(() => { 
            this.message1=this.message3;
            this.message2="*";
            this.message3=" ";
            this.message3="";
                             }, 100  );
          }
        }
        return;
      },

      /*row 3*/
      row3:function(){
        if(this.x==0){
          this.x ++;
          return "4";
        }
        else if (this.x==1){
          this.x ++;
          return "5";
        }
        else if (this.x==2){
          this.x ++;
          return "6";
        }
        else if (this.x==3){
          this.x =0;
          return "-";
        }
      },
      buttonRow3:function(x){
        this.foundError();
        if(x==="button30")
        this.message3 +="4";
        
        else if(x==="button31")
        this.message3 +="5";
          
        else if(x==="button32")
        this.message3 +="6";
         
        else if(x==="button33"){
          if(this.message3===""&&this.message1===""){
            this.message1="0";
            this.message2="-";
          }
          else if(this.message2!=""&&this.message1!=""&&this.message2!="-"&&this.message3==="")
          this.message2="-";
          else{
            this.allSpansFull();
            setTimeout(() => { 
            this.message1=this.message3;
            this.message2="-";
            this.message3=" ";
            this.message3="";
                             }, 100  );
          }
        }
        return;
      },
      /*row 4*/
      row4:function(){
        if(this.x==0){
          this.x ++;
          return "1";
        }
        else if (this.x==1){
          this.x ++;
          return "2";
        }
        else if (this.x==2){
          this.x ++;
          return "3";
        }
        else if (this.x==3){
          this.x =0;
          return "+";
        }
      },

      buttonRow4:function(x){
        this.foundError();
        if(x==="button40")
        this.message3 +="1";
        
        else if(x==="button41")
        this.message3 +="2";
          
        else if(x==="button42")
        this.message3 +="3";
         
        else if(x==="button43"){
          if(this.message3===""&&this.message1===""){
            this.message1="0";
            this.message2="+";
          }
          else if(this.message2!=""&&this.message1!=""&&this.message2!="+"&&this.message3==="")
          this.message2="+";
          else{
            this.allSpansFull();
            setTimeout(() => { 
            this.message1=this.message3;
            this.message2="+";
            this.message3=" ";
            this.message3="";
                             }, 100  );
            
          }
        }
        return;
      },

      /*row 5*/
      row5:function(){
        if(this.x==0){
          this.x ++;
          return "<sup>+</sup>/<sub>-</sub> ";
        }
        else if (this.x==1){
          this.x ++;
          return "0";
        }
        else if (this.x==2){
          this.x ++;
          return ".";
        }
        else if (this.x==3){
          this.x =0;
          return "=";
        }
      },
      buttonRow5:function(x){
        this.foundError();
        if(x==="button50"){
          if(this.message3.charAt(0)!="-")
          this.message3="-"+this.message3;
          else{
            this.message3=this.message3.substring(1);
          }
        }
        
        else if(x==="button51")
        this.message3 +="0";
          
        else if(x==="button52"){
        let str=this.message3;
        if(this.message3===""){
          console.log(this.message3);
          console.log("length "+str.length);
          for(let i = 0; i < str.length; i++){
            console.log(str[i]);
            if (str[i]==="."){
             this.mianbool=true;
              break;
            }
            else{
              this.mianbool=false;
            }
          }
          if(str.length==0)
          this.mianbool=false;

          console.log("iam here boy1");
          console.log(this.mianbool);
          if(!(this.mianbool)){
            console.log("iam here boy2");
            this.message3 +="0.";
           this.mianbool=true;
          }

          }
          else{
            for(let i = 0; i < str.length; i++){
            if (str[i]==="."){
              this.mianbool=true;
              break;
            }
            else{
              this.mianbool=false;
            }
          }
          console.log("iam here boy2");
          console.log(this.mianbool);
          if(!(this.mianbool)){
            this.message3+=".";
           this. mianbool=true;
          }
          }
          
        }
        else if(x==="button53"){
          if(this.message1!=""&&this.message2!=""&&this.message3!=""){
            this.doubleOperants();
          }
          else if (this.message1==""||this.message2==""||this.message3==""){
            /*nothing do */

          }

          

        }
        return;
      },
      allSpansFull:function(){
        if(this.message1!=""&&this.message2!=""&&this.message3!="")
        this.doubleOperants();
        return;
      },
      foundError:function(){
        if(this.message3==="E"||this.message1==="NaN"||this.message3==="NaN"||this.message1==="E"){
          console.log("koks");
          this.message1="";
          this.message2="";
          this.message3="";

        }
      },
       doubleOperants:function(){
         if(this.message2=="&divide")
         this.message2="÷";
         if(this.message2=="+")
         this.message2="%2B";

        let y='http://localhost:8085/double?OperantOne='+this.message1+'&'+'Operation='+this.message2+'&'+'OperantTwo='+this.message3;
        console.log(y);
        fetch(y)
        .then(x=>{return x.text()})
        .then(data=>{
          this.message3=data;
          console.log("span 1 "+this.message3);
          if(this.message3=="NaN")
          this.message3="E";
        }); 
     
      this.message2="";
      this.message1="";
      setTimeout(() => {    
      console.log("span 1 "+this.message3); }, 101 );

    
      console.log("here from backend");
      console.log("span 1 "+this.message3);
      console.log("span 2 "+ this.message2);
      console.log("span 3 "+this.message1);


        return;

      },
      SingleOperants:function(){
        if(this.message4=="%")
        this.message4='percent';
        let y='http://localhost:8085/single?OperantOne='+this.message3+'&'+'Operation='+this.message4;
        console.log("y "+y);
        fetch(y)
        .then(x=>{return x.text()})
        .then(data=>{
          this.message3=data;
          console.log("span 1 "+this.message3);
        }); 
        this.message4="";
      
     
      setTimeout(() => {    
      console.log("span 1 "+this.message3); }, 101 );
        return;

      },

    },
    computed: {
      
    },
    watch: {
      
    },


  })