$(document).ready(function() {
  // 데이터 저장
  const tableData = [
   		 {no:'', //넘버 자동 새겨짐
		 title:'차시명', //차시명
		 sme:'선생님', //선생님
		 script_drf:'✕', // 원고_초안
		 script_con:'✕', // 원고_확정 
		 sb_drf:'✕',  // 설계_초안
		 sb_con:'✕',  // 설계_확정
		 video_film:'✕', // 촬영
		 video_rough:'✕', // 가편
		 client_re:'✕', // 검토
		 client_con:'✕', // 검수_수정완
		 graphic:'✕', //디자인
		 edit:'✕', // 편집
		 html:'✕' // HTML
		},
		{no:'', //넘버 자동 새겨짐
		 title:'차시명', //차시명
		 sme:'선생님', //선생님
		 script_drf:'✕', // 원고_초안
		 script_con:'✕', // 원고_확정 
		 sb_drf:'✕',  // 설계_초안
		 sb_con:'✕',  // 설계_확정
		 video_film:'✕', // 촬영
		 video_rough:'✕', // 가편
		 client_re:'✕', // 검토
		 client_con:'✕', // 검수_수정완
		 graphic:'✕', //디자인
		 edit:'✕', // 편집
		 html:'✕' // HTML
		},
		{no:'', //넘버 자동 새겨짐
		 title:'차시명', //차시명
		 sme:'선생님', //선생님
		 script_drf:'✕', // 원고_초안
		 script_con:'✕', // 원고_확정 
		 sb_drf:'✕',  // 설계_초안
		 sb_con:'✕',  // 설계_확정
		 video_film:'✕', // 촬영
		 video_rough:'✕', // 가편
		 client_re:'✕', // 검토
		 client_con:'✕', // 검수_수정완
		 graphic:'✕', //디자인
		 edit:'✕', // 편집
		 html:'✕' // HTML
		},
		{no:'', //넘버 자동 새겨짐
		 title:'차시명', //차시명
		 sme:'선생님', //선생님
		 script_drf:'✕', // 원고_초안
		 script_con:'✕', // 원고_확정 
		 sb_drf:'✕',  // 설계_초안
		 sb_con:'✕',  // 설계_확정
		 video_film:'✕', // 촬영
		 video_rough:'✕', // 가편
		 client_re:'✕', // 검토
		 client_con:'✕', // 검수_수정완
		 graphic:'✕', //디자인
		 edit:'✕', // 편집
		 html:'✕' // HTML
		},
		// 5 //
		{no:'', //넘버 자동 새겨짐
		 title:'차시명', //차시명
		 sme:'선생님', //선생님
		 script_drf:'✕', // 원고_초안
		 script_con:'✕', // 원고_확정 
		 sb_drf:'✕',  // 설계_초안
		 sb_con:'✕',  // 설계_확정
		 video_film:'✕', // 촬영
		 video_rough:'✕', // 가편
		 client_re:'✕', // 검토
		 client_con:'✕', // 검수_수정완
		 graphic:'✕', //디자인
		 edit:'✕', // 편집
		 html:'✕' // HTML
		},
		{no:'', //넘버 자동 새겨짐
		 title:'차시명', //차시명
		 sme:'선생님', //선생님
		 script_drf:'✕', // 원고_초안
		 script_con:'✕', // 원고_확정 
		 sb_drf:'✕',  // 설계_초안
		 sb_con:'✕',  // 설계_확정
		 video_film:'✕', // 촬영
		 video_rough:'✕', // 가편
		 client_re:'✕', // 검토
		 client_con:'✕', // 검수_수정완
		 graphic:'✕', //디자인
		 edit:'✕', // 편집
		 html:'✕' // HTML
		},
		{no:'', //넘버 자동 새겨짐
		 title:'차시명', //차시명
		 sme:'선생님', //선생님
		 script_drf:'✕', // 원고_초안
		 script_con:'✕', // 원고_확정 
		 sb_drf:'✕',  // 설계_초안
		 sb_con:'✕',  // 설계_확정
		 video_film:'✕', // 촬영
		 video_rough:'✕', // 가편
		 client_re:'✕', // 검토
		 client_con:'✕', // 검수_수정완
		 graphic:'✕', //디자인
		 edit:'✕', // 편집
		 html:'✕' // HTML
		},
		{no:'', //넘버 자동 새겨짐
		 title:'차시명', //차시명
		 sme:'선생님', //선생님
		 script_drf:'✕', // 원고_초안
		 script_con:'✕', // 원고_확정 
		 sb_drf:'✕',  // 설계_초안
		 sb_con:'✕',  // 설계_확정
		 video_film:'✕', // 촬영
		 video_rough:'✕', // 가편
		 client_re:'✕', // 검토
		 client_con:'✕', // 검수_수정완
		 graphic:'✕', //디자인
		 edit:'✕', // 편집
		 html:'✕' // HTML
		}
//    ,{no:'09', title:'차시명', teacher:'선생님', percent:'0%', col4:'0%', col5:'0%', col6:'0%', col7:'0%', col8:'o', col9:'o', col10:'o'}
  ];
//	
//	if (isAdmin()) {
//  // 어드민인 경우 버튼을 보이게 함
//  $('#edit_tdplus_btn').show();
//  $('#edit_tdelet_btn').show();
//  $('#edit_tdelet_btn').show();
//
//} else {
//  // 어드민이 아닌 경우 버튼을 숨김
//  $('#edit_tdplus_btn').hide();
//  $('#edit_tdelet_btn').hide();
//  $('#edit_tdelet_btn').hide();
//}
	
// 셀 더블클릭 이벤트 처리 (수정된 부분)
$('#chasi_table tbody').on('dblclick', 'td', function() {
		// 유저 데이터 따라 가능하게
	// if (isAdmin()) {  // 어드민일 경우에만 셀을 편집할 수 있음
  makeCellEditable($(this));

});
	// 셀렉트 기능 추가 함수 수정
function makeRowSelectable(row) {
  row.on('click', function() {
    row.toggleClass('selected');
  });
}
  // 행 추가 함수
  function addRow(rowData) {
    const row = $('<tr>');
    const keys = Object.keys(rowData);
    for (let i = 0; i < keys.length; i++) {
      const cell = $('<td>').html(rowData[keys[i]]);
      row.append(cell);
    }
    $('#chasi_table tbody').append(row);

    updateFooter();
  }

// 아이콘과 평균값 =========================================
// 셀의 값을 아이콘으로 변경하는 함수
function convertToIcon(value) {
	if (value === '✕') {
	  return 0;
	} else if (value === '△') {
	  return 50;
	} else if (value === '○') {
	  return 100;
	} else {
	  return value;
	}
  }

// 평균 계산 함수 (수정된 부분)
function calculateAverage() {
	const progressKeys = Object.keys(tableData[0]).filter(key => key !== 'no' && key !== 'title' && key !== 'sme');
	const averageRow = {
	  no: '',
	  title: '평균',
	  sme: '',
	};
  
	for (let i = 0; i < progressKeys.length; i++) {
	  const key = progressKeys[i];
	  const values = tableData.map(row => row[key]);
  
	  // 엑스, 세모, 동그라미를 처리하기 위해 새로운 함수를 사용합니다.
	  const averageValue = calculateAverageForIcon(values);
	  averageRow[key] = averageValue;
	}
  
	return averageRow;
  }
  
// 아이콘 값들의 평균을 계산하는 함수 (수정된 부분)
function calculateAverageForIcon(values) {
  let xCount = 0;
  let triangleCount = 0;
  let circleCount = 0;
  let totalCount = 0;

  for (const value of values) {
    if (value === '✕') {
      xCount++;
      totalCount++;
    } else if (value === '△') {
      triangleCount++;
      totalCount++;
    } else if (value === '○') {
      circleCount++;
      totalCount++;
    } else {
      // 아이콘 값이 아닌 경우 숫자로 간주하여 계산에 참여하도록 합니다.
      totalCount++;
    }
  }
  
  const percentageX = (xCount / totalCount) * 100;
  const percentageTriangle = (triangleCount / totalCount) * 100;
  const percentageCircle = (circleCount / totalCount) * 100;

  // 아이콘 값 대신 평균 값을 숫자로 계산하여 반환합니다.
  const averageValue = (percentageX * 0 + percentageTriangle * 50 + percentageCircle * 100) / 100;
  return averageValue.toFixed(0) + '%';
}
    


// 셀 더블클릭 시 인풋 요소로 변경하는 함수 (수정된 부분)
function makeCellEditable(cell) {
  const cellValue = cell.text().trim();
  const rowIndex = cell.closest('tr').index();
  const cellIndex = cell.index();
  const columnName = Object.keys(tableData[0])[cellIndex];

  if (cell.parent().index() !== tableData.length && columnName !== 'no') {
    // 마지막 평균값이 아니고 차시명과 sme 칸이 아닌 경우에만 셀을 클릭 가능하도록 처리
    cell.empty();

    if (columnName === 'title' || columnName === 'sme') {
      // 차시명과 sme 칸인 경우 텍스트 입력란으로 대체
      const input = $('<input>')
        .val(cellValue)
        .addClass('editable-input')
        .appendTo(cell);

      input.focus(); // 인풋 요소에 포커스를 줍니다.

      // 입력란에서 포커스를 잃었을 때(탭을 누르거나 다른 곳을 클릭했을 때) 입력값을 적용하고 셀을 일반 텍스트로 변경
      input.blur(function () {
        const newValue = input.val().trim();
        cell.text(newValue);
        updateTableData(cell);
      });

      // 엔터 키 입력 시 입력값을 적용하고 셀을 일반 텍스트로 변경
      input.keydown(function (event) {
        if (event.key === 'Enter') {
          const newValue = input.val().trim();
          cell.text(newValue);
          updateTableData(cell);
        }
      });
    } else {
      // 차시명과 sme 칸이 아닌 경우는 드롭다운 메뉴 생성
      const dropdown = $('<select>')
        .addClass('editable-dropdown')
        .appendTo(cell);

      // 드롭다운 메뉴에 옵션 추가
      const options = ['✕', '△', '○'];
      options.forEach(option => {
        const optionElement = $('<option>').val(option).text(option);
        dropdown.append(optionElement);
      });

      // 기존 값과 일치하는 옵션 선택
      dropdown.val(cellValue);

      // 드롭다운 메뉴를 클릭하면 옵션 선택 가능하도록 처리
      dropdown.click(function (event) {
        event.stopPropagation(); // 이벤트 전파 방지
      });

      // 드롭다운 메뉴 선택 시 입력값을 적용하고 셀을 일반 텍스트로 변경
      dropdown.change(function () {
        const newValue = dropdown.val();
        cell.text(newValue);
        updateTableData(cell);
        dropdown.remove(); // 드롭다운 메뉴 제거
      });
    }
  }
}





	
// 아이콘과 평균값 ==========================================

	
	
  // 테이블 데이터 추가
  for (let i = 0; i < tableData.length; i++) {
    tableData[i].no = (i + 1).toString().padStart(2, '0');
    addRow(tableData[i]);
  }

  // 평균 행 추가
  const averageData = calculateAverage();
  addRow(averageData);



// 표 데이터 업데이트 함수 수정
function updateTableData(cell) {
  const rowIndex = cell.closest('tr').index();
  const cellIndex = cell.index();
  const key = Object.keys(tableData[0])[cellIndex];
  const newValue = cell.text().trim();

  tableData[rowIndex][key] = newValue;
  updateAverageRow(); // 수정 시 평균 값을 다시 계산하도록 호출

  // no 값 업데이트
  if (key === 'no') {
    updateTableRowNumbers();
  }
}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////========================================================================================================================================

let tempTableData = [...tableData];
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////========================================================================================================================================

// 추가 버튼 클릭 이벤트 처리
$("#edit_tdplus_btn").on("click", function () {
  const newRow = {
    no: (tableData.length + 1).toString().padStart(2, '0'), // 넘버 자동 증가
    title: '차시명',
    sme: '선생님',
    script_drf: '✕',
    script_con: '✕',
    sb_drf: '✕',
    sb_con: '✕',
    video_film: '✕',
    video_rough: '✕',
    client_re: '✕',
    client_con: '✕',
    graphic: '✕',
    edit: '✕',
    html: '✕'
  };

  tableData.push(newRow); // 데이터 배열에 새로운 행을 추가합니다.

  // 기존 평균행을 삭제하고 다시 추가하여 항상 테이블의 맨 아래에 위치하도록 합니다.
  $("#chasi_table tbody tr:last").remove();
  addRow(newRow);
  addRow(averageData);

  updateNoValues(); // 추가한 행의 no 값을 업데이트합니다.
  updateAverageRow(); // 수정된 평균 값을 다시 계산하도록 호출
});

// 삭제 버튼 클릭 이벤트 처리
$('#edit_tdelet_btn').on('click', function () {
  const selectedRows = $('#chasi_table tbody tr.selected');

  if (selectedRows.length > 0) {
    if (confirm('정말로 선택한 행을 삭제하시겠습니까?')) {
      selectedRows.each(function () {
        const rowIndex = $(this).index();
        tableData.splice(rowIndex, 1); // 선택한 행의 데이터를 tableData에서 삭제
        $(this).remove(); // 선택한 행을 테이블에서 삭제
      });

      updateTableRowNumbers(); // 행 번호 업데이트
      updateFooter(); // 풋터 업데이트
      recalculateAverage(); // 평균 값 재계산

      // 임시 데이터 배열을 현재 테이블 데이터로 업데이트
      tableData = [...tempTableData];
    }
  } else {
    alert('선택된 행이 없습니다.');
  }
});

// 새로운 행 추가 시 no 값 자동 증가 함수
function updateNoValues() {
  const rows = $('#chasi_table tbody tr');
  const dataRows = rows.slice(0, -1); // 평균 행을 제외한 데이터 행들만 선택합니다.

  // 데이터 행들의 'no' 값을 자동으로 증가시킵니다.
  dataRows.each(function (index) {
    const noCell = $(this).find('td:first');
    noCell.text((index + 1).toString().padStart(2, '0'));
  });
}

// 저장 버튼 클릭 이벤트 처리
$('#save_btn').on('click', function () {
  updateDatabase(); // DB에 업데이트하는 로직을 수행하도록 호출
  updateTableRowNumbers(); // 행 번호 업데이트
  updateFooter(); // 풋터 업데이트
  recalculateAverage(); // 평균 값 재계산

  // 임시 데이터 배열을 현재 테이블 데이터로 업데이트
  tableData = [...tempTableData];

  // 수정된 평균 값을 다시 UI에 반영
  updateAverageRow();
});
	
	//-----------------------------------------------------------------------------------------------------------------------------------------------DB!-----------------------------------------------------------------------------------------------------------------------------------------
// DB에 업데이트하는 로직을 수행하는 함수 (예시 구현)
function updateDatabase() {
  console.log('데이터를 DB에 업데이트합니다.');
  console.log(tableData); // 업데이트할 데이터를 출력하는 예시
}

// 행 번호 업데이트 함수
function updateTableRowNumbers() {
  const rows = $('#chasi_table tbody tr:not(:last-child)');
  rows.each(function (index) {
    const numberCell = $(this).find('td').first();
    numberCell.text((index + 1).toString().padStart(2, '0'));
  });
}

// 평균 값 다시 계산 함수
function recalculateAverage() {
  // 기존 평균 행을 삭제합니다.
  $('#chasi_table tbody tr:last').remove();

  // 새로운 평균 행을 추가합니다.
  const averageData = calculateAverage();
  addRow(averageData);
  
  updateFooter(); // 평균 행이 업데이트될 때마다 풋터 업데이트 호출
}




// 테이블 데이터 추가 함수 수정
function addRow(rowData) {
  const row = $('<tr>');
  const keys = Object.keys(rowData);
  for (let i = 0; i < keys.length; i++) {
    const cell = $('<td>').html(rowData[keys[i]]);
    row.append(cell);
  }

  // 평균 행이 아니면 셀렉트 기능을 추가합니다.
  if (rowData.no !== '' && rowData.title !== '평균' && rowData.sme !== '') {
    makeRowSelectable(row);
  }

  $('#chasi_table tbody').append(row);
  updateFooter(); // 셀이 추가될 때마다 풋터 업데이트 호출
}
	
	// 평균 행 업데이트 함수
function updateAverageRow() {
  const averageData = calculateAverage();
  const averageRow = $('#chasi_table tbody tr:last');
  const averageCells = averageRow.find('td');

  for (let i = 0; i < averageCells.length; i++) {
    const key = Object.keys(tableData[0])[i];
    averageData[key] = convertToIcon(averageData[key]); // 아이콘 값을 숫자로 변환
    averageCells.eq(i).text(averageData[key]);
  }

  updateAveragePercentage(); // 수정된 평균 값을 다시 UI에 반영
  updateFooter(); // 평균 행이 업데이트될 때마다 풋터 업데이트 호출
}
	
  // 초기 풋터 업데이트
  updateFooter();
	
// 평균 값을 특정 셀의 숫자 값으로 가져와서 해당 요소에 삽입하는 함수
function displayAverageValues() {
  const specificCells = [
    'script_con',
    'sb_con',
    'video_rough',
    'client_re',
    'graphic',
    'edit',
    'html',
  ];

  // 평균 값을 계산한 후에, 특정 셀의 평균 값을 가져옵니다.
  const averageData = calculateAverage();
  const specificCellAverages = specificCells.map(cell => averageData[cell]);

  // 평균 값을 해당 요소에 삽입합니다.
  const progressList = document.querySelector("#chasi_contain_progress ul");
  const progressItems = progressList.querySelectorAll("li");
  const percentageElements = progressList.querySelectorAll(".percentage");

  for (let i = 0; i < specificCellAverages.length; i++) {
    const cellValue = parseInt(specificCellAverages[i]);
    percentageElements[i].textContent = cellValue + '%';

    // 여기서 필요한 경우 셀 값에 따라 특정 스타일을 추가로 적용할 수 있습니다.
    // 예를 들어:
    if (cellValue >= 90 && cellValue <= 100) {
      percentageElements[i].classList.add('red');
    } else if (cellValue >= 70 && cellValue < 90) {
      percentageElements[i].classList.add('orange');
    } else if (cellValue >= 50 && cellValue < 70) {
      percentageElements[i].classList.add('yellow');
    } else if (cellValue >= 30 && cellValue < 50) {
      percentageElements[i].classList.add('blue');
    } else if (cellValue >= 0 && cellValue < 30) {
      percentageElements[i].classList.add('green');
    }
  }
}

// 평균 값이 업데이트될 때마다 displayAverageValues 함수를 호출하여 percentage를 수정합니다.
// 예를 들어, 1초마다 평균 값이 업데이트되도록 설정하는 경우:
setInterval(displayAverageValues, 1000);
	
  // 풋터 업데이트 함수 추가
function updateFooter(isRemoval) {
  const trCount = $('#chasi_table tbody tr').length;
  const mainHeight = trCount > 8 ? 900 + 35 * (trCount - 8) : 900;
  const proHeight = trCount > 8 ? 900 + 35 * (trCount - 8) : 900;
  const gnbHeight = trCount > 8 ? 1110 + 35 * (trCount - 8) : 1110;
  const footerBottom = trCount > 8 ? -35 * (trCount - 8) : 0;

  $('main').css('height', `${mainHeight}px`);
  $('gnb').css('height', `${gnbHeight}px`);
  $('#project_container').css('height', `${proHeight}px`);
  $('footer').css('bottom', `${footerBottom}px`);
}

});