arithmeticTriplets=(n,d)=>{s=new Set(n),c=0;for(e of s){if(s.has(e+d)&&s.has(e+d*2)){c++}};return c}