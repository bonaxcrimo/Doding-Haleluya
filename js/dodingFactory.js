angular.module('dodingFactory',[])
    .factory('dodingS',function($http,$sce){
    function getData(callback){
        $http({
            method : 'GET',
            url : 'doding.json',
            cache : true
        }).success(callback);
    }
    return {
        list : getData,
        find : function(no,callback){
            getData(function(data){
                var doding = data.filter(function(entry){
                    return entry.no === no;
                })[0];
                callback(doding);
            });
        }
    };
});
