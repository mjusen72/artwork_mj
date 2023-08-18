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



///게시판 모달
$(document).ready(function() {
  var listItems = $(".noti_list");
  var modalItems = $(".notiboard_wrap > div");

  // 순번 자동 배치
  var count = listItems.length;
  var order = count;

  listItems.each(function(index) {
    var listItem = $(this);
    var itemText = listItem.find("p").text().trim();
    var twoDigitOrder = ("0" + order).slice(-2);

    if (itemText !== "") {
      listItem.find("h4").text(twoDigitOrder);
      listItem.addClass("has-content");
    } else {
      listItem.find("h4").text("-");
      listItem.find("p").text("-");
      listItem.addClass("no-content");
    }

    order--;
  });

  // 호버 효과 적용
  var listItemsWithContent = $(".noti_list.has-content");

  listItemsWithContent.hover(
    function() {
      $(this).addClass("hover-effect");
    },
    function() {
      $(this).removeClass("hover-effect");
    }
  );

  // 데이터가 있는 칸부터 숫자 생성
  var dataExists = false;
  listItems.each(function(index) {
    var listItem = $(this);
    var itemText = listItem.find("p").text().trim();

    if (itemText !== "") {
      dataExists = true;
    }

    if (dataExists) {
      var order = index + 1;
      listItem.attr("data-target", "noti_list_board-" + order);
      listItem.on("click", function() {
        var target = $(this).attr("data-target");
        $(".notiboard").hide();
        $("#" + target).show();
        $("#notice_board").hide();
      });
    }
  });

  // 빈 칸 처리
  for (var i = count; i < 7; i++) {
    var emptyListItem = $("<li class='noti_list'><h4>-</h4><p>-</p></li>");
    emptyListItem.attr("data-target", "noti_list_board-" + (i + 1));
    listItems.parent().append(emptyListItem);

    emptyListItem.on("click", function() {
      var target = $(this).attr("data-target");
      var modalContent = $("#" + target);

      if (modalContent.length) {
        $(".notiboard").hide();
        modalContent.show();
        $("#notice_board").hide();
      }
    });
  }

  // 모달창 순서 역순으로 매겨주기
  modalItems.each(function(index) {
    var modalItem = $(this);
    var order = modalItems.length - index;
    modalItem.attr("id", "noti_list_board-" + order);
    modalItem.attr("data-target", "noti_list_board-" + order);
    modalItem.css("order", order);
  });

  // 모달창 닫기 버튼 클릭 시 모달창 닫기
  $("span#notice_exit").click(function() {
    $("#notice_board").hide();
    $(".notiboard_wrap > div").hide();
  });

  // 수정 가능 여부 확인 및 처리
  $(document).on("click", "#admin_edit_noti", function() {
    var textarea = $(this).closest(".noti_input").find("textarea");

    // 수정 가능 여부 확인
    if (!textarea.prop("disabled")) {
      textarea.prop("disabled", true);
      $(this).addClass("on");
    } else {
      textarea.prop("disabled", false);
      textarea.focus();
      $(this).removeClass("on");
    }
  });
  ///데이터에...저장하기...
  // 저장 버튼 클릭 시 공지사항 내용 저장
  $(document).on("click", "#save_notice", function() {
    var currentNotice = $(this).closest(".noti_input");
    var textarea = currentNotice.find("textarea");
    var modifiedContent = textarea.val();
    textarea.prop("disabled", true);
    // 여기서 수정된 내용을 서버에 저장하는 로직을 추가할 수 있습니다.
  });

  // 평소에는 textarea 비활성화
  $(".noti_input textarea").prop("disabled", true);

  // textarea의 클래스에 순번 추가
  $(".noti_input textarea").each(function(index) {
    var textarea = $(this);
    var classes = textarea.attr("class");
    var newClass = classes + "_" + ("0" + (index + 1)).slice(-2); // 순번은 01, 02, 03... 형태로 만듭니다.
    textarea.attr("class", newClass);
  });

  // noti_list_board 보여주기
  function showNotiListBoard(index) {
    var target = "noti_list_board-" + (index + 1);
    $(".notiboard_wrap > div").hide();
    $("#" + target).show();
    $("#notice_board").show();
  }

  // noti_list_board 클릭 시 해당 noti_list_board 보여주기
  $(".noti_list").on("click", function() {
    var target = $(this).attr("data-target");
    var index = parseInt(target.split("-")[1]) - 1;
    var modalContent = $("#" + target);

    if (modalContent.length) {
      showNotiListBoard(index);
    }
  });

  // 이전 페이지 버튼 클릭 시 이전 항목의 noti_list_board 보여주기
  $("#prev-page").click(function() {
    var currentPage = parseInt($("#page-num").text());
    if (currentPage > 1) {
      showNotiListBoard(currentPage - 2);
      $("#page-num").text(currentPage - 1);
    }
  });

  // 다음 페이지 버튼 클릭 시 다음 항목의 noti_list_board 보여주기
  $("#next-page").click(function() {
    var currentPage = parseInt($("#page-num").text());
    var totalPages = parseInt($("#total-pages").text());
    if (currentPage < totalPages) {
      showNotiListBoard(currentPage);
      $("#page-num").text(currentPage + 1);
    }
  });

  // 공지사항 1번 글 클릭 시 notice_board와 noti_list_board-1 블록 처리
  $("#project_contain_noti li[data-target='noti_list_board-1']").click(function() {
    showNotiListBoard(0);
  });

  // 순서에 맞는 noti_list_board 보여주기
  function showNotiListBoard(index) {
    var target = "noti_list_board-" + (index + 1);
    var modalContent = $("#" + target);

    if (modalContent.length) {
      $(".notiboard_wrap > div").hide();
      modalContent.show();
      $("#notice_board").show();
    }
  }
});
