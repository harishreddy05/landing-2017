'use strict';

var app = angular.module("myApp", []); 
app.controller("contactCtrl", function($scope) {
  $scope.secretaries2017 = [
              {
                  "title": "Secretary, Cultural Affairs (Arts)",
                  "name": "Gokulesh",
                  "email": "tggokulesh@saarang.org",
                  "phone": "+919489102889",
                  "img"  :"gokulesh.png"
              },
              {
                  "title": "Secretary, Cultural Affairs (Literary)",
                  "name": "Shreyas Harish",
                  "email": "shreyas.harish@saarang.org",
                  "phone": "+919043263666",
                  "img"  :"shreyas.png"
              }];            
  $scope.contacts2017 = [
              {
              "name": "Secretary, Cultural Affairs (Arts)",
              "members": [
                {
                  "name": "Gokulesh",
                  "email": "tggokulesh@saarang.org",
                  "phone": "+919489102889",
                  "img"  :"gokulesh.png"
                }
              ]
              },
              {
              "name": "Secretary, Cultural Affairs (Literary)",
              "members": [
                {
                  "name": "Shreyas Harish",
                  "email": "shreyas.harish@saarang.org",
                  "phone": "+919043263666",
                  "img"  :"shreyas.png"
                }
              ]
              },
              {
              "name": "Sponsorship & PR",
              "members": [
                {
                  "name": "Priy Ranjan",
                  "email": "priy.ranjan@saarang.org",
                  "phone": "+919043243399",
                  "img"  :"priy.png"
                },
                {
                  "name": "Rajat Shringi",
                  "email": "rajat.shringi@saarang.org",
                  "phone": "+919003112313",
                  "img"  :"rajat.png"
                }
              ]
              },
              {
              "name": "Events",
              "members": [
                {
                  "name": "Ferril",
                  "email": "ferril@saarang.org",
                  "phone": "+919789855067",
                  "img"  :"ferril.png"
                },
                {
                  "name": "K.Sri Ravi Teja",
                  "email": "raviteja@saarang.org",
                  "phone": "+919003112590",
                  "img"  :"raviteja.png"
                }
              ]
              },
              {
              "name": "Professional Shows",
              "members": [
                {
                  "name": "Vishnu",
                  "email": "vishnu@saarang.org",
                  "phone": "+919962427935",
                  "img"  :"vishnu_ak.png"
                },
                {
                  "name": "Ruchin",
                  "email": "ruchin@saarang.org",
                  "phone": "+919677275504",
                  "img"  :"ruchin.png"
                }
              ]
              },
              {
              "name": "Marketing & Sales",
              "members": [
                {
                  "name": "Shyam Prasad Reddy",
                  "email": "shyamprasad@saarang.org",
                  "phone": "+919042539396",
                  "img"  :"shyam.png"
                },
                {
                  "name": "Nihal Abdussamad",
                  "email": "nihal@saarang.org",
                  "phone": "+919940233059",
                  "img"  :"nihal.png"
                }
              ]
              },
              {
              "name": "Publicity",
              "members": [
                {
                  "name": "Rohan Ajith",
                  "email": "rhnajith@saarang.org",
                  "phone": "+919003112082",
                  "img"  :"rohan.png"
                }
              ]
              },
              {
              "name": "Hospitality",
              "members": [
                {
                  "name": "Yashasvini",
                  "email": "yashasvini@saarang.org",
                  "phone": "+919043245554",
                  "img"  :"yashaswini.png"
                }
              ]
              },
              {
              "name": "Web & Mobile Operations",
              "members": [
                {
                  "name": "Harish Reddy",
                  "email": "harishreddy@saarang.org",
                  "phone": "+918220156276",
                  "img"  :"harish.png"
                },
                {
                  "name": "S. Seetharaman",
                  "email": "sseetharaman@saarang.org",
                  "phone": "+919176484419",
                  "img"  :"seetharaman.png"
                }
              ]
              },
              {
                "name":"Design and Media",
                "members":[
                {
                  "name":"Kranthi Chaitanya S",
                  "email":"kranthichaitanya@saarang.org",
                  "phone" :"+919940257247",
                  "img"  :"kranthi.png"
                },
                {
                  "name":"Arun Pavithran R",
                  "email":"apavithran096@saarang.org",
                  "phone":"+918754265375",
                  "img"  :"arun_p.png"
                },
                {
                  "name": "Sharath Chandra",
                  "email": "sharath@saarang.org",
                  "phone": "+919043269988",
                  "img"  :"sharath.png"
                }
                ]
              },
              {
                "name":"Finance",
                 "members":[
                 {
                   "name":"Arun Ramakrishnan",
                   "email":"arunr@saarang.org", 
                   "phone":"+919840282857",
                   "img"  :"arun_r.png"
                 },
                 {
                   "name":"A.Tharun Justice",
                   "email":"tharunjustice@saarang.org", 
                   "phone":"+919940250911",
                   "img"  :"tharun.png"
                 },
                 {
                    "name":"B. Vishnu Harsha",
                    "email":"vishnuharsha@saarang.org", 
                    "phone":"+919600178106",
                    "img"  :"vishnu.png"
                 }
                ]  
              },
              {
                "name":"Facilities",
                "members" :[
                {
                  "name":"Nama Praveen Kumar",
                  "email":"nama@saarang.org", 
                  "phone":"+919884179484",
                  "img"  :"praveen.png"
                },
                {
                  "name":"Kirushanth Kumar",
                  "email":"kirushanth@saarang.org", 
                  "phone":"+919629380532",
                  "img"  :"kiru.png"
                }
                ]
              },
              {
                "name":"Safety & Security",
                "members":[
                {
                  "name":"B S S Srikar",
                  "email":"srikarbezwada@saarang.org",
                  "phone": "+918056229392",
                  "img"  :"srikar.png"  
                },
                {
                  "name":"Rakesh Emmadi",
                  "email":"rakesh_emmadi@saarang.org",
                  "phone": "+919962877238",
                  "img"  :"rakesh.png"
                }
                ]
              },
              {
                "name":"QMS",
                "members":[
                {
                  "name":"Kedarnath Goud",
                  "email":"kedar@saarang.org",
                  "phone":"+917382379967",
                  "img"  :"kedarnath.png"
                },
                {
                  "name":"Divya Sigilipelli",
                  "email":"divya_sigilipelli@saarang.org",
                  "phone":"+919884699848",
                  "img"  :"divya.png"
                }
                ]
              }]; 
  });
app.controller("sponsCtrl",function ($scope,$http) {

  $http.get('http://erp.saarang.org/api/mobile/display_spons/').success(function(data){
            var groupeddata=data.data.slice(0);
            var mixeddata=[];
            var mix=[];
            var temp;
            var k=0;
            for(var i=1;i<groupeddata.length;i++)
              {
                for(var j=0;j<groupeddata.length-i;j++)
                {
                  if(groupeddata[j].priority<groupeddata[j+1].priority)
                  {
                    temp=groupeddata[j+1];
                    groupeddata[j+1]=groupeddata[j];
                    groupeddata[j]=temp;
                  }
                }
              }
            for(var i=0;i<groupeddata.length;i++)
              {
                k=0;
                mix.push(groupeddata[i]);
                j=i;
                if(j!=groupeddata.length-1)
                {
                while(groupeddata[j].row_layout==groupeddata[j+1].row_layout && k<(groupeddata[i].row_layout-1))
                  {
                    mix.push(groupeddata[j+1]);
                    k++;
                    j++;
                    i=j;
                    if(j==groupeddata.length-1)
                      break;
                  }
                }
                mixeddata.push(mix);
                mix=[];
              }
            $scope.logos = mixeddata;
          }).error(function(error){
            console.log(error)
          });

});

app.controller("galleryCtrl",function ($scope,$http) {

$scope.pics = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg','38.jpg','39.jpg','40.jpg','41.jpg','43.jpg','44.jpg','45.jpg','46.jpg','47.jpg','48.jpg','49.jpg','50.jpg','51.jpg'];
$scope.selectedPic = '1.jpg';
$scope.show = function (num) {
      $scope.selectedPic = $scope.pics[num];
  }
});