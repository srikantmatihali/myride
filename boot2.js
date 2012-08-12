(function() {
    var Event = YAHOO.util.Event,
        Dom   = YAHOO.util.Dom,
        Anim = YAHOO.util.Anim,
        lang  = YAHOO.lang,
        slider, 
        bg="slider-bg", thumb="slider-thumb", 
        valuearea="slider-value", textfield="slider-converted-value", bg2="slider-bg2", thumb2="slider-thumb2", 
        valuearea2="slider-value2", textfield2="slider-converted-value2",bg3="slider-bg3", thumb3="slider-thumb3", 
        valuearea3="slider-value3", textfield3="slider-converted-value3",textfield4="slider-converted-value4",textfield5="slider-converted-value5"
    var screenwidth = Dom.getViewportWidth();
    var screenheight = Dom.getViewportHeight();
    //Average Settings
    var cycle_efficiency = 20;
    var bike_efficiency = 45;
    var car_efficiency = 14;
    var petrol = 76;
    var diesel = 55;
    var distance,bike_fuel_cost,car_fuel_cost,cycle_fuel_cost = 0,cycle_time,bike_time,car_time;
    var cycle_speed = 15,bike_speed = 50,car_speed = 40,average_weight = 72; 
    //

    // The slider can move 0 pixels up
    var topConstraint = 0,topConstraint2 = 0,topConstraint3 = 0;
    // The slider can move 200 pixels down
    var bottomConstraint = 600,bottomConstraint2 = 600,bottomConstraint3 = 600;
    // Custom scale factor for converting the pixel offset into a real value
    var scaleFactor = 1.5;
    // The amount the slider moves when the value is changed with the arrow
    // keys
    var keyIncrement = 5,keyIncrement2 = 1,keyIncrement3 = 1;
    var tickSize = 25;
    //Type Name
    var typename = 1;
    Event.onDOMReady(function() {
        //Set default values
        var class_name = Dom.getElementsByClassName("blk");
        Dom.setStyle('blocks', 'height', screenheight+"px");
        //YAHOO.all(".blk").setStyle("height", screenheight+"px");
        Dom.setStyle(class_name,"height",screenheight+"px");
        //Slider 1
        slider = YAHOO.widget.Slider.getHorizSlider(bg, 
                         thumb, topConstraint, bottomConstraint, 25);
        slider.getRealValue = function() {
            return Math.round((this.getValue())/5);
        }
        slider.subscribe("change", function(offsetFromStart) {
            var valnode = Dom.get(valuearea);
            var fld = Dom.get(textfield);
            // Display the pixel value of the control
            valnode.innerHTML = offsetFromStart;
            var actualValue = slider.getRealValue();
            fld.value = actualValue;
            Dom.get("distancevalue").innerHTML = actualValue;
        });
        //End Slider 1

        //Slider 2
        slider2 = YAHOO.widget.Slider.getHorizSlider(bg2, 
                         thumb2, topConstraint2, bottomConstraint2, 1);
        slider2.getRealValue2 = function() {
            return Math.round(this.getValue()/6);
        }
        slider2.subscribe("change", function(offsetFromStart2) {
            var valnode2 = Dom.get(valuearea2);
            var fld2 = Dom.get(textfield2);
            // Display the pixel value of the control
            valnode2.innerHTML = offsetFromStart2;
            var actualValue2 = slider2.getRealValue2();
            fld2.value = actualValue2;
             Dom.get("fuelvalue").innerHTML = actualValue2;
        });
        //End Slider 2


        //Slider 3
        slider3 = YAHOO.widget.Slider.getHorizSlider(bg3, 
                         thumb3, topConstraint3, bottomConstraint3, 1);
        slider3.getRealValue3 = function() {
            var minval = this.getValue()/0.41;
            if(minval>1440) minval = 1440;
            return Math.round(minval);          
        }
        slider3.subscribe("change", function(offsetFromStart3) {
            var valnode3 = Dom.get(valuearea3);
            var fld3 = Dom.get(textfield3);
            var fld4 = Dom.get(textfield4);
            var fld5 = Dom.get(textfield5);
            // Display the pixel value of the control
            valnode3.innerHTML = offsetFromStart3;
            var actualValue3 = slider3.getRealValue3();
            fld3.value = actualValue3;
            //console.log(); 
            
            fld4.value = Math.round(actualValue3/60);
            Dom.get("timehourvalue").innerHTML = Math.round(actualValue3/60);
            fld5.value = actualValue3%60;
            Dom.get("timeminvalue").innerHTML = actualValue3%60;
        });

        //End Slider 3

        /*var attributes = {
                scroll: { to: [0, 500] }
            };
        var anim = new YAHOO.util.Scroll('blocks', attributes);*/
        var first_jump = '-353px';
        //Type Selection click
        var typeclick = function (event, matchedEl, container) {
            typename = Dom.getAttribute(this,"data-value");
            if((typename === '2')||(typename === '3')){
                alert("Open Car / Bike");
                //Show the fuel slider with animation
                //YAHOO.util.Dom.setStyle(document.body, 'opacity', '0');
                /*var ani = new YAHOO.util.Anim('bike-car' , {
                 opacity: {from: 0, to: 1 }
                 }, 1, YAHOO.util.Easing.easeOut);
                ani.animate();*/
                Dom.setStyle('bike-car', 'display', 'block');
            }else{
                Dom.setStyle('bike-car', 'display', 'none');
            }
            var n_value = screenheight - 5;
            var attributes = {
        scroll: { to: [0, n_value] }
    };
    var anim = new YAHOO.util.Scroll('blocks', attributes);
    anim.animate();
            /*var ani = new YAHOO.util.Anim('blocks' , {
                 top: first_jump
                 }, 1, YAHOO.util.Easing.easeOut);
        ani.animate();*/
        /*YAHOO.util.Dom.setStyle('blocks', 'top', first_jump);*/
        };
        Event.delegate("typeselection", "click", typeclick, "li"); 


//Submit form
var submitclick = function (event, matchedEl, container) {
    //alert("SUBMIT: "+typename);
            //Dom.setStyle('bike-car', 'display', 'block');
            var n_value = screenheight + screenheight - 5;
            var attributes = {
        scroll: { to: [0, n_value] }
    };
    var anim = new YAHOO.util.Scroll('blocks', attributes);
    anim.animate();
            /*var ani = new YAHOO.util.Anim('blocks' , {
                 top: first_jump
                 }, 1, YAHOO.util.Easing.easeOut);
        ani.animate();*/
        /*YAHOO.util.Dom.setStyle('blocks', 'top', first_jump);*/
        //console.log('esfafdaf');
         rundata();
        };

        Event.on("submitdata", "click", submitclick); 

//End Submit form

        //End Type Selection

        //Distance click
        var distanceclick = function (event, matchedEl, container) {
            distance = Dom.getAttribute("distancedata","value");
            //alert(distance);
        };
        Event.delegate("distance", "click", distanceclick); 
        Event.on("distance", 'click', rundata);
        function rundata(){
            distance = Dom.get("slider-converted-value").value;

            //cost module
            bike_fuel_cost = fuelcost(distance,bike_efficiency,petrol);
            car_fuel_cost = fuelcost(distance,car_efficiency,petrol);
            cycle_fuel_cost = 0;
            //set colors
            Dom.addClass('cycle_cost', 'green'); 
            if(bike_fuel_cost>car_fuel_cost){
                Dom.addClass('bike_cost', 'red'); 
                Dom.addClass('car_cost', 'orange'); 
            }
            else{
                Dom.addClass('bike_cost', 'orange'); 
                Dom.addClass('car_cost', 'red'); 
            }
            //set colors
            //cost module

            //speed module
             var vh_time_hr = Dom.get("slider-converted-value4").value;           
             var vh_time_min =  Dom.get("slider-converted-value5").value;                        
             var vh_time_seconds = parseInt(getSeconds(vh_time_hr,'hours'))+parseInt(getSeconds(vh_time_min,'minutes'));

             var vh_speed = Math.round(parseFloat(get_speed(distance,vh_time_seconds,'hours'))); 
            /*console.log('cy_time_seconds: '+getSeconds(cy_time_hr,'hours'));
            console.log('cy_time_seconds: '+getSeconds(cy_time_min,'minutes'));
            console.log('cy_time_seconds: '+cy_time_seconds);*/
            switch(parseInt(typename))
            {
                case 1:              
                        cycle_speed = vh_speed;                       
                        break;
                case 2: 
                        bike_speed = vh_speed;
                        break;
                case 3: 
                        car_speed = vh_speed;
                        break;
            }
            
            Dom.get("cycle_speed").innerHTML =cycle_speed;
            Dom.get("bike_speed").innerHTML = bike_speed;
            Dom.get("car_speed").innerHTML = car_speed;   

            if((cycle_speed>bike_speed)&&(cycle_speed>car_speed)){
                    
                Dom.addClass('cycle_speed', 'green'); 
                if(bike_speed>car_speed){
                    Dom.addClass('bike_speed', 'orange'); 
                    Dom.addClass('car_speed', 'red'); 
                }else{
                    Dom.addClass('bike_speed', 'red'); 
                    Dom.addClass('car_speed', 'orange'); 
                }    
                   

            }else if(bike_speed>car_speed){
                
                Dom.addClass('cycle_speed', 'red'); 
                Dom.addClass('bike_speed', 'orange'); 
                Dom.addClass('car_speed', 'green'); 

            }else{
                Dom.addClass('cycle_speed', 'red'); 
                Dom.addClass('bike_speed', 'green'); 
                Dom.addClass('car_speed', 'orange'); 

            }    

            //speed module

            //calorie module starts
            var calorie_burned = calorieburner(50,vh_time_seconds,'seconds');
            //console.log(calorie_burned);
            Dom.get("cycle_calorie").innerHTML = calorie_burned;
            //calorie module ends


            //console.log(bike_fuel_cost);
            //Set Fuel Data
            //var cc = Dom.get("cycle_cost");
           
            Dom.get("cycle_cost").innerHTML = cycle_fuel_cost;
            Dom.get("bike_cost").innerHTML = bike_fuel_cost;
            Dom.get("car_cost").innerHTML = car_fuel_cost;
            //End Fuel Data
            //Set Time
            cycle_time = getTime(distance,cycle_speed);
            bike_time = getTime(distance,bike_speed);
            car_time = getTime(distance,car_speed);
            Dom.get("cycle_time").innerHTML = cycle_time;
            Dom.get("bike_time").innerHTML = bike_time;
            Dom.get("car_time").innerHTML = car_time;
            //End Time
        }
        //End Distance click

       /* function biggestnumber(num1,num2,num3)
        {
            if((num1>num2)&&(num1>num3)){
                return "num1";
            }else if(num2>num3){
                return 
            }
        }*/

        //Basic Function
        //Function to get calorie

        function fuelcost(totaldistance,efficiency,cost)
            {
                return  Math.round((totaldistance / efficiency) * cost );
            }

        //calculate calorie
        function calorieburner(kg,time_data,type)
        {
            var hr = time_data;     
            switch(type)
            {
                case 'seconds': hr = time_data / 3600;
                               break;
                case 'minutes': hr = time_data / 60;
                               break;
                case 'hours':  hr = time_data;
                               break;               
            }
            return Math.round((kg*10)*hr);
        }    

        function get_speed(metres,seconds,type)
        {
            switch(type)
            {
                //gets speed in hours
                case 'hours': return (metres*1000*3.6) / seconds;
                
                //gets speed in minutes
                case 'minutes': return (metres*1000*0.6) / seconds;
                
                //get speed in seconds.
                case 'seconds': return (metres*1000) / seconds;
            }
            
        }
    
    
    
        function getSeconds(data,type)
        {
            var SecondsRequired = 0;    
            switch(type)
            {
                case 'minutes': SecondsRequired = data * 60;    
                                break;
                case 'hours'  : SecondsRequired = data * 3600 ;             
                                break;
                case 'days'   : SecondsRequired = data * 86400 ;
                                break;
            }
            return parseFloat(formatDecimal(SecondsRequired,8));
        } 

        function metresPerSec2KMH(mps){  
            return( mps * 3600 );
        }
    
        function formatDecimal(num, numPlaces)
        {
            var snum = new String(parseFloat(num))
            var i=z=0; 
            var sout=ch="" 
            while(i<snum.length && ch != '.' ){
                ch = snum.charAt(i++)
                sout+=ch
            }
            while(i<snum.length && z++<numPlaces){
                ch = snum.charAt(i++)
                sout+=ch
            }
            if(snum.indexOf('.')==-1)sout+='.';
            while(z++<numPlaces)sout+='0';
            return sout
        }

        //To find Time
        function getTime(totaldistance,speed){
            var ntime = Math.round((totaldistance / speed)*60);
            var nhour =  parseInt(ntime/60);
            var nmin =  parseInt(ntime%60);
            return "H: "+nhour+"M: "+nmin;
        }

        //Calorie
        function getCalorie(average_weight){

        }

        //


    });
})();

