
angular.module('myApp', ['ngRoute','ui.router'])

.controller('myCtrl', ['$scope', function($scope){
	
//	$scope.allPhoto = [{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"}]
	
	$scope.allNumber = [{uiSref:".a",number:1},{uiSref:".b",number:2},{uiSref:".c",number:3}]
	
	$('.works_photo ul li').hover(function(){
		
		$(this).siblings().css('opacity','0.8')
		
	},function(){
		
		
	})

}])

.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	
	$stateProvider.state('a',{
		
		url:'/a',
		templateUrl:'../template/workTemplate.html',
		controller: 'aController'
	})
	.state('b',{
		url:'/b',
		templateUrl:'workTemplate.html',
		controller: 'bController'
	})
	.state('c',{
		url:'/c',
		templateUrl:'workTemplate.html',
		controller: 'cController'
	})
	
	$urlRouterProvider.otherwise('/a')
	
	
}])
.controller('aController', function($scope) {
	$scope.allPhoto = [{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060653155729.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060644036711.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060636593272.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"}]
	
	
	
	
			})
.controller('bController', function() {
$scope.allPhoto = [{src:"../images/works-images/060709231441.jpg",h3:"狠狠",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"}]
			})
.controller('cController', function() {
$scope.allPhoto = [{src:"../images/works-images/060709231441.jpg",h3:"呵呵哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"},{src:"../images/works-images/060709231441.jpg",h3:"哈哈哈",time:"wadsoidaas,wieopda"}]
			})
//.run(['$rootScope',function(){
//	
//	$rootScope.$on('$stateChangeStart',function(){
//		
//		console.log('开始跳转了')
//	})
//	
//	
//	
//	
//	
//}])
