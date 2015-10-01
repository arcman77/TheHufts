function test2(array){
  var buy = [];
  var buyCopy = []
  var sell = [];
  array.forEach(function(dayData,index){
    price = dayData[1];
    time = dayData[0];
    if(index == array.length - 1){ return }

    if(price < array[index+1][1]){
      buy.push([time,price]);
    }
    buy.forEach(function(buyDayData,index2){
      buyPrice = buyDayData[1];

      if( buyPrice < price ){
        sell.push( [time,price] );
        buyCopy.push(buy[index2]);
        buy[index2] = undefined;
      }
    });
    //cleaing up buy array
    buy = buy.filter(function(dayData){
      return dayData != undefined;
    });
  });
  return {
    buy: buyCopy,
    sell: sell
  }
}

test2([["1",2],["2",3],["3",1],["4",4],["5",5],["6",6],["7",5],["8",4],["9",5]]);

