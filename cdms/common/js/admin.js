$(document).ready(function() {
  let selectedTable;

 $("#addClientBtn").click(function() {
    openModal("client");
  });

  $("#addProjectBtn").click(function() {
    openModal("project");
  });

  $(".close").click(function() {
    closeModal();
  });

  $("#client_field_content").submit(function(e) {

    let modalType = $("#modalType").val();
    let clientName = $("#clientName").val();
    let projectName = $("#projectName").val();

    if (modalType === "client") {
      addClient(clientName, projectName);
    } else if (modalType === "project") {
      addProject(selectedTable, projectName);
    }

    closeModal();
  });
	

  function openModal(modalType) {
    $("#modalType").val(modalType);
    $("#client_field").css("display", "block");
  }

  function closeModal() {
    $("#client_field").css("display", "none");
  }

  function addClient(clientName, projectName) { 
		// 클라이언트 추가 코드를 여기에 작성하십시오.
  
  }

  function addProject(targetTable, projectName) {
    // 프로젝트 추가 코드를 여기에 작성하십시오.
  }
});
