// ======================================================================
// formats a given hashrate (H/s) to human readable hashrate
// like xxx.yyy GH/s
// ======================================================================


 export let formatHashrate = function(rate) {
          rate= parseFloat(rate); let unit= 'H/s';
          if(rate >= 1000) { rate /= 1000; unit= 'KH/s'; }
          if(rate >= 1000) { rate /= 1000; unit= 'MH/s'; }
          if(rate >= 1000) { rate /= 1000; unit= 'GH/s'; }
          if(rate >= 1000) { rate /= 1000; unit= 'TH/s'; }
          if(rate >= 1000) { rate /= 1000; unit= 'PH/s'; }
          return (rate.toFixed(2) + ' ' + unit);
        }
      
      // ======================================================================
      // formats a given int value to human readable si format
      // ======================================================================
  export let formatInt = function(rate) {
          rate= parseFloat(rate); let unit= '';
          if(rate >= 1000) { rate /= 1000; unit= ' K'; }
          if(rate >= 1000) { rate /= 1000; unit= ' M'; }
          if(rate >= 1000) { rate /= 1000; unit= ' G'; }
          if(rate >= 1000) { rate /= 1000; unit= ' T'; }

          return ((unit=='' ? rate.toFixed(0) : rate.toFixed(2)) + unit);
      }

  // ======================================================================
  export let formatSeconds = function (sec_num) {
    sec_num = parseInt(sec_num, 10);
    var days    = Math.floor(sec_num / 86400);
    var hours   = Math.floor((sec_num - (days * 86400)) / 3600);
    var minutes = Math.floor((sec_num - (days * 86400  + hours * 3600)) / 60);
    var seconds = sec_num - (days * 86400) - (hours * 3600) - (minutes * 60);

    var time= '';
    if(days > 0) time+= days + 'd ';
    time += hours + 'h ' + minutes +  'm ' + seconds + 's';
    return time;
}
export let sad = (a, b)=>{return a + b}

