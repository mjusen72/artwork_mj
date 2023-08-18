
  function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
    var day = currentDate.getDate();

    return {
      year: year,
      month: month,
      day: day
    };
  }

  // 실제 달력 시간을 입력하는 함수
  function fillCalendar(year, month) {
    var currentDate = getCurrentDate();
    var presentMonth = currentDate.month;

    // 실제 해당 월의 첫째 날짜와 마지막 날짜를 가져옵니다.
    var firstDay = new Date(year, month - 1, 1).getDay();
    var lastDay = new Date(year, month, 0).getDate();

    // ul 요소를 가져옵니다.
    var calendarUl = document.querySelector("#calendar_dates");

    // ul 요소의 내용을 비우기 위해 li 요소를 모두 제거합니다.
    while (calendarUl.firstChild) {
      calendarUl.removeChild(calendarUl.firstChild);
    }

    // 첫 번째 줄에 요일을 표시하는 li 요소를 추가합니다.
    var daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var daysLi = document.createElement("li");
    daysLi.className = "weekdays";
    daysOfWeek.forEach(function (dayOfWeek) {
      var div = document.createElement("div");
      div.className = "day";
      div.textContent = dayOfWeek;
      daysLi.appendChild(div);
    });
    calendarUl.appendChild(daysLi);

// 날짜를 생성하여 li 요소를 동적으로 추가합니다.
var date = 1;
for (var i = 0; i < 6; i++) {
  var li = document.createElement("li");
  for (var j = 0; j < 7; j++) {
    var div = document.createElement("div");

    if (i === 0 && j < firstDay) {
      // 첫 번째 줄에서 첫 번째 날짜 이전은 비웁니다.
      div.textContent = "";
    } else if (date > lastDay) {
      // 마지막 날짜 이후는 비웁니다.
      div.textContent = "";
    } else {
      // 해당 날짜를 할당합니다.
      div.textContent = date;
      div.classList.add("date-" + date);
			div.id = "date_" + date;
			// 날짜에 해당하는 클래스를 추가합니다.
      date++;
			div.style.cursor = "pointer";
    // 현재 날짜에 해당하는 날짜에 클래스를 추가하여 스타일을 변경합니다.
          if (date - 1 === currentDate.day &&
        year === currentDate.year &&
        month === currentDate.month) {
      div.classList.add("current-day");
    }

    // 일정이 있는지 확인하고, 있으면 일정의 제목을 출력합니다.
    var savedEvents = JSON.parse(localStorage.getItem("events"));
    if (savedEvents &&
        savedEvents.hasOwnProperty(year + "-" + month) &&
        savedEvents[year + "-" + month].hasOwnProperty(date)) {
      var eventTitle = savedEvents[year + "-" + month][date].title;

      // 일정 제목을 표시하기 위한 span 요소를 생성합니다.
      var span = document.createElement("span");
      span.textContent = eventTitle;
      div.appendChild(span);

      // 일정이 있는 경우에 대한 클래스를 추가합니다.
      div.classList.add("date-with-event");
    } else {
      // 일정이 없을 경우에 대한 스타일을 설정합니다.
      var span = document.createElement("span");
      span.classList.add("no-event");
      span.textContent = " ";
      div.appendChild(span);
    }

    // 특정 날짜에 대해 class.red를 추가합니다.
//    var specificDate = 15; // 특정 날짜를 지정합니다.
//    if (date === specificDate) {
//      div.classList.add("red");
//    }
			
      // 날짜 div에 클릭 이벤트 리스너를 추가할 때, 일정 메모를 클릭하여 작은 창을 나타내는 이벤트를 추가합니다.
      div.addEventListener("click", function () {
        openModal(this.textContent);

        // 작은 창을 나타내는 이벤트를 추가합니다.
        var memoElement = document.querySelector(".event-memo");
        memoElement.addEventListener("click", showMemoWindow);
      });
    }
    li.appendChild(div);
  }
  calendarUl.appendChild(li);
}

		
		
		
		

  // 현재 월과 년도를 표시합니다.
  document.querySelector(".present").textContent = year + " " + month + "월";
}

  // 다음 달로 이동하는 함수
  function nextMonth() {
    var present = document.querySelector(".present").textContent;
    var presentYear = parseInt(present.split(" ")[0]);
    var presentMonth = parseInt(present.split(" ")[1].split("월")[0]);

    var nextYear, nextMonth;
    if (presentMonth === 12) {
      nextYear = presentYear + 1;
      nextMonth = 1;
    } else {
      nextYear = presentYear;
      nextMonth = presentMonth + 1;
    }

    fillCalendar(nextYear, nextMonth);
  }

  // 이전 달로 이동하는 함수
  function previousMonth() {
    var present = document.querySelector(".present").textContent;
    var presentYear = parseInt(present.split(" ")[0]);
    var presentMonth = parseInt(present.split(" ")[1].split("월")[0]);

    var previousYear, previousMonth;
    if (presentMonth === 1) {
      previousYear = presentYear - 1;
      previousMonth = 12;
    } else {
      previousYear = presentYear;
      previousMonth = presentMonth - 1;
    }

    fillCalendar(previousYear, previousMonth);
  }

  // 페이지가 로드될 때 현재 달의 달력을 표시합니다.
  window.addEventListener("load", function () {
    var currentDate = getCurrentDate();
    fillCalendar(currentDate.year, currentDate.month);
  });




// 날짜를 클릭하여 모달 창 열기
function openModal(date) {
  var modal = document.getElementById("calendar_eventModal");
  var modalDate = document.getElementById("calendar_modalDate");
  var eventTitle = document.getElementById("calendar_eventTitle");
  var eventDescription = document.getElementById("calendar_eventDescription");
  var clickedDate = document.getElementById("clickedDate");

  modalDate.value = date;
  eventTitle.value = "";
  eventDescription.value = "";
  clickedDate.innerText = "일정: " + date + "일";

  modal.style.display = "block";

  // 모달 창에 드래그 앤 드롭 기능 추가
//  makeElementDraggable(modal);

  // 내용 입력 필드에 드래그 앤 드롭 이벤트 중단
  var inputs = modal.querySelectorAll("input, textarea");
  inputs.forEach(function (input) {
    input.addEventListener("mousedown", function (e) {
      e.stopPropagation();
    });
  });
}

// 모달 창 닫기
function closeModal() {
  var modal = document.getElementById("calendar_eventModal");
  modal.style.display = "none";
}


///////옵션창/////

// 옵션창 변수 선언
var eventTypeSelect = document.querySelector(".event_type");
var selectedOptionDisplay = eventTypeSelect.querySelector(".selected_option");
var optionsList = eventTypeSelect.querySelector(".options");

// 이벤트 리스너 추가
var isEventTypeSelectOpen = false;

eventTypeSelect.addEventListener("click", function () {
  isEventTypeSelectOpen = !isEventTypeSelectOpen;
  updateEventTypeSelectState();
});

var options = optionsList.querySelectorAll(".option");
options.forEach(function (option) {
  option.addEventListener("click", function () {
    var selectedOption = this.getAttribute("data-value");
    selectedOptionDisplay.textContent = selectedOption;
    isEventTypeSelectOpen = false;
    updateEventTypeSelectState();
  });
});

document.addEventListener("click", function (event) {
  var isClickedInsideEventTypeSelect = eventTypeSelect.contains(event.target);
  if (!isClickedInsideEventTypeSelect) {
    isEventTypeSelectOpen = false;
    updateEventTypeSelectState();
  }
});

function updateEventTypeSelectState() {
  if (isEventTypeSelectOpen) {
    eventTypeSelect.classList.add("open");
  } else {
    eventTypeSelect.classList.remove("open");
  }
}

// 일정 저장
function saveEvent() {
  var modalDate = document.getElementById("calendar_modalDate");
  var modalTitle = document.getElementById("calendar_eventTitle");
  var modalMemo = document.getElementById("calendar_eventDescription");

  var eventDate = modalDate.value;
  var eventTitle = modalTitle.value;
  var eventMemo = modalMemo.value;

  // 일정을 저장하는 로직을 추가합니다.
  // 예시로 콘솔에 일정 정보를 출력하거나 다른 요소에 일정 정보를 보여줄 수 있습니다.
  console.log("일정 저장:", eventDate, eventTitle, eventMemo);

  // 일정을 저장한 후 원하는 곳에 일정 정보를 보여줄 수 있도록 코드를 추가합니다.
  var divElement = document.getElementById("your-div-element-id");

  // 저장된 일정의 벨류에 따라 클래스를 추가합니다.
  switch (eventTitle) {
    case "option1":
      divElement.classList.add("red");
      break;
    case "option2":
      divElement.classList.add("yellow");
      break;
    case "option3":
      divElement.classList.add("green");
      break;
			 case "option4":
      divElement.classList.add("blue");
      break;
			 case "option5":
      divElement.classList.add("purple");
      break;
    // 필요한 만큼 case를 추가할 수 있습니다.
    default:
      // 일치하는 벨류가 없는 경우에 대한 처리를 추가합니다.
      break;
  };


  // 일정을 날짜 창에 출력합니다.
var dateDiv = document.getElementById("date_" + eventDate);

// 일정 제목을 표시하기 위한 span 요소를 생성합니다.
var span = document.createElement("span");
span.textContent = eventTitle;

// 이미 일정이 5개 있다면 추가되지 않도록 처리합니다.
if (dateDiv.childElementCount >= 5) {
  alert("최대 5개의 일정까지만 추가할 수 있습니다.");
} else {
  dateDiv.appendChild(span);
}
	
	
  // 일정을 날짜별로 저장합니다.
  var events = {};
  events[eventDate] = {
    title: eventTitle,
    memo: eventMemo,
  };

  // 일정을 저장합니다.
  localStorage.setItem("events", JSON.stringify(events));

  closeModal();
}





// 각 날짜 div에 클릭 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", function () {
  // 날짜 클릭 이벤트 리스너 추가
  var dateDivs = document.querySelectorAll("#project_contain_calendar .calender ul li:not(.weekdays) div");
  dateDivs.forEach(function (dateDiv) {
    dateDiv.addEventListener("click", function () {
      openModal(this.textContent);
    });
  });
});



