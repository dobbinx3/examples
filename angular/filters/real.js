angular.module('exemploAngular')
  .filter('real', function() {

    function formatReal( int ){
      var tmp = int.toString().indexOf('.') !== -1 ? int + '' : int + '.00';
      var res = tmp.replace('.','');
      tmp = res.replace(',','');
      var neg = false;
      if(tmp.indexOf('-') === 0){
        neg = true;
        tmp = tmp.replace('-','');
      }
      if(tmp.length === 1) {
        tmp = '0'+tmp;
      }
      tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
      if( tmp.length > 6){
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
      }
      if( tmp.length > 9){
        tmp = tmp.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,'.$1.$2,$3');
      }
      if( tmp.length > 12){
        tmp = tmp.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,'.$1.$2.$3,$4');
      }
      if(tmp.indexOf('.') === 0){
        tmp = tmp.replace('.','');
      }
      if(tmp.indexOf(',') === 0){
        tmp = tmp.replace(',','0,');
      }
      return (neg ? '-'+tmp : tmp);
    }

    return function(input) {
      if (!input || input === '') return '';

      return 'R$ ' + formatReal(input); 

    }

  });
