// HTML 코드를 생성할 배열
var html = [];

// 프로젝트 정보
var projects = [
  {
    name: "프로젝트 네임 - 교수학습",
    gwajeongs: [
      "학습 과정 안내 (1)",
      "학습 과정 안내 (2)",
      "과정 내용 설명",
      "과정 내용 설명",
      "과정 내용 설명",
      "과정 내용 설명",
      "과정 내용 설명",
    ],
  },
  {
    name: "미디어 콘텐츠 과정",
    gwajeongs: [
      "학습 과정 안내 (1)",
      "학습 과정 안내 (2)",
      "과정 내용 설명",
      "과정 내용 설명",
      "과정 내용 설명",
      "과정 내용 설명",
      "과정 내용 설명",
    ],
  },
];

// index.html 내용 생성
html.push('<div id="customer_menu">');

for (var i = 0; i < projects.length; i++) {
  var project = projects[i];
  var projectId = i + 1;

  html.push('<div class="customer_project">');
  html.push(
    '<div class="project_name">' +
      projectId +
      ". " +
      project.name +
      '<i class="fa-solid fa-xmark"></i></div>'
  );

  html.push('<div class="gwajeong_menu">');
  for (var j = 0; j < project.gwajeongs.length; j++) {
    var gwajeong = project.gwajeongs[j];
    var gwajeongId = i + 1 + "_gwajeong_" + (j + 1);

    html.push(
      '<div class="gwajeong ' +
        gwajeongId +
        '">' +
        projectId +
        "." +
        (j + 1) +
        " " +
        gwajeong +
        "</div>"
    );
  }
  html.push("</div>");

  html.push("</div>");
}

html.push("</div>");

// 프로젝트 페이지 내용 생성
for (var i = 0; i < projects.length; i++) {
  var project = projects[i];
  var projectId = i + 1;
  var projectFilename =
    projectId == 1 ? "index.html" : "project_" + projectId + ".html";

  for (var j = 0; j < project.gwajeongs.length; j++) {
    var gwajeongId = i + 1 + "_gwajeong_" + (j + 1);
    var prevGwajeong =
      i + 1 == 1 && j == 0
        ? "index.html"
        : i + 1 + "_gwajeong_" + j + ".html";
    var nextGwajeong =
      j == project.gwajeongs.length - 1
        ? projectFilename
        : i + 1 + "_gwajeong_" + (j + 2) + ".html";

    var gwajeongHtml = '<div class="gwajeong-container">';
    gwajeongHtml +=
      '<div class="prev-gwajeong"><a href="' +
      prevGwajeong +
      '">이전 과정</a></div>';
    gwajeongHtml +=
      '<div class="gwajeong-content"><h1>' +
      project.name +
      "</h1><p>" +
      project.gwajeongs[j] +
      "</p></div>";
    gwajeongHtml +=
      '<div class="next-gwajeong"><a href="' +
      nextGwajeong +
      '">다음 과정</a></div>';
    gwajeongHtml += "</div>";

    // 파일에 쓰기
    fs.writeFile(
      gwajeongId + ".html",
      '<html><head><title>' +
        project.name +
        " - " +
        project.gwajeongs[j] +
        '</title><link rel="stylesheet" href="./common/css/main.css"></head><body>' +
        gwajeongHtml +
        '</body></html>',
      function (err) {
        if (err) throw err;
        console.log(gwajeongId + ".html saved!");
      }
    );
  }
}

// index.html 파일에 쓰기
fs.writeFile(
  "index.html",
  '<html><head><title>Customer Menu</title><link rel="stylesheet" href="./common/css/main.css"></head><body>' +
    html.join("") +
    '</body></html>',
  function (err) {
    if (err) throw err;
    console.log("index.html saved!");
  }
);

$(document).ready(function() {
  // 첫 번째 div.project_name, 첫 번째 div.gwajeong_menu에 'on' 클래스 추가
  $('.customer_project:first .project_name, .gwajeong_menu:first').addClass('on');

  // 프로젝트 이름에 대한 'on' 클래스 전환 및 gwajeong_menu에 공통 'on' 클래스 입력
  $('.project_name').click(function() {
    if (!$(this).hasClass('on')) {
      $('.project_name.on').removeClass('on').siblings('.gwajeong_menu').slideUp();
      $(this).addClass('on').siblings('.gwajeong_menu').slideDown();
    } else {
      $(this).removeClass('on').siblings('.gwajeong_menu').slideUp();
    }
  });

  // 클릭된 project_name과 gwajeong_menu가 있는 경우에만 프로젝트 파일로 이동
  $('.gwajeong').click(function() {
    var project = $(this).closest('.customer_project');
    if (project.find('.project_name').hasClass('on') && project.find('.gwajeong_menu').hasClass('on')) {
      var projectIndex = project.index() + 1; // 프로젝트 인덱스 1부터 시작
      var gwajeongIndex = $(this).index() + 1; // gwajeong 인덱스 1부터 시작
      window.location.href = projectIndex + '_gwajeong_' + gwajeongIndex + '.html';
    }
  });
});


/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
$(document).ready(function() {
  $("#project_contain_noti .noti_list").click(function() {
    $("#noti_board").show();
    loadNotices();
  });

  $("#create_noti").click(function() {
    $("#modal").hide();
    $("#create_notice").show();
  });

  $("#save_notice").click(function() {
    var content = $("#notice_content").val();
    // 저장 로직 추가
    $("#create_notice").hide();
    $("#noti_board").show();
    loadNotices();
  });

  function loadNotices() {
    // 공지글 로딩 로직 추가
  }
});


