document.addEventListener('DOMContentLoaded', function() {
  var percent_INFO = {
    '원고': 90,
    'SB': 70,
    '촬영': 50,
    '종편': 30,
    'HTML': 10
  };

	

  var progressList = document.querySelector("#project_contain_progress ul");
  for (var i = 0; i < progressList.children.length; i++) {
    var p = progressList.children[i].querySelector("p").textContent;
    var percentValue = percent_INFO[p];
    progressList.children[i].querySelector(".percentage").textContent = percentValue + "%";

    if (percentValue >= 90 && percentValue <= 100) {
      progressList.children[i].querySelector('.percentage').classList.add('red');
    } else if (percentValue >= 70 && percentValue < 90) {
      progressList.children[i].querySelector('.percentage').classList.add('orange');
    } else if (percentValue >= 50 && percentValue < 70) {
      progressList.children[i].querySelector('.percentage').classList.add('yellow');
    } else if (percentValue >= 30 && percentValue < 50) {
      progressList.children[i].querySelector('.percentage').classList.add('blue');
    } else if (percentValue >= 0 && percentValue < 30) {
      progressList.children[i].querySelector('.percentage').classList.add('green');
    }
  }
});