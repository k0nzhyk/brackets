module.exports = function check(str, bracketsConfig) {
    let array = [];

       for( let i = 0; i < str.length; i++ ){
           for ( let bracket of bracketsConfig ) {
               if( str[i] == bracket[0]  && bracket[0] == bracket[1]
                   && bracket[0] == array[array.length - 1] ){
                   array.pop();
                   break;
               }
               if ( str[i] == bracket[0] ){
                   array.push( str[i] );
                   break;
               }
               if( str[i] == bracket[1] ){
                   if( bracket[0] != array.pop() ){
                       return false;
                   }
               }
           }
       }
       if( array.length ) return false;
       return true;
   }
