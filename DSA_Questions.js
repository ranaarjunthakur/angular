//////////////////////get the volume of a Cylinder with four decimal places using object classes.///////////////////////////


function Cylinder(height,diameter) {
  this.height = height;
  this.diameter = diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.diameter / 2;
  return this.height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume().toFixed(4)); =>  volume = 87.9646


////////////////////BUBBLE SORT/////////////////////////////////////

var arr = [5,6,3,1,2,4];  
  
bubbleSortAlgo(arr);  
  
function bubbleSortAlgo(arr){  
    for(var i=0;i<arr.length;i++){  
        for(var j=0;j<arr.length-i-1;j++){  
            if(arr[j]>arr[j+1]){  
                var tempValue= arr[j];  
                arr[j]=arr[j+1];  
                arr[j+1]=tempValue;  
            }  
        }  
    }  
    console.log(arr);  
}  
