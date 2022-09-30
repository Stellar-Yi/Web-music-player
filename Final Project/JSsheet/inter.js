let currentPlaying; // 현재 재생되고 있는 리스트 아이템의 index
let currentAudio; // 현재 재생되는 있는 리스트 아이템의 audio 태그

$(function () {
    // ===== List 생성하기 =====
    addItem('No Time For Caution', './musics/Inter/Inter.png', './musics/Inter/Hans Zimmer - No Time For Caution.mp3');
    addItem('S.T.A.Y.', './musics/Inter/Inter.png', './musics/Inter/Hans Zimmer - S.T.A.Y..mp3');
    addItem('Cornfield Chase', './musics/Inter/Inter.png', './musics/Inter/Hans Zimmer - Cornfield Chase.mp3');
    setPlayer(0); // 0번 곡으로 초기값 설정

    // ===== 재생 이벤트 등록 =====
    $('#prev').click(function () {
        playPrev();
    });
    $('#pause').click(function () {
        pauseAndPlay();
    });
    $('#next').click(function () {
        playNext();
    });

    // ===== 프로그래스바 채우기 =====
    setInterval(function () {
        let progress = getProgress() * 100;
        $('.player-progress > div').css('width', progress + '%');
    }, 100)
})


// ===== List에 아이템을 추가하는 함수 =====
function addItem(title, image, audio) {
    let newItem = $('#example_item').clone(true);
    newItem.removeProp('id');
    newItem.show();

    // 팀별로 리스트 아이템에 맞는 클래스 정보를 찾아서 교체해주기
    newItem.find('.item-title').text(title);
    newItem.find('.item-img').css('background-image', "url('" + image + "')");
    newItem.find('.item-audio > source').attr('src', audio);

    // 리스트 아이템 클릭시 이벤트 등록
    newItem.click(function () {
        currentAudio[0].pause(); // 재생중인 오디오 중지
        currentAudio[0].currentTime = 0; // 재생중인 오디오 위치 초기화
        $(this).find('.item-audio')[0].play(); // 선택된 오디오 재생
        $("#pause > img").attr("src", "./images/pause.png"); //이미지 교체
        $('#spotlight').css("opacity", "1"); //전등 on

        setPlayer($(this).index()); // setPlayer 함수 호출 (플레이어로 정보 전달)
    })

    // 리스트에 아이템 추가
    $('#music_list').append(newItem);
}

// ===== Player에 정보 넣는 함수 =====
function setPlayer(index) {
    currentPlaying = index;
    currentAudio = $('#music_list > .item').eq(index).find('.item-audio');


    // 아이템에 들어가는 정보에 따라 변경
    let title = $('#music_list > .item').eq(index).find('.item-title').text();
    let image = $('#music_list > .item').eq(index).find('.item-img').css('background-image');

    $('.player-title').text(title)
    $('.player-img').css('background-image', image);

    $('#music_list > .item').find('.item-title').removeClass('bold');
    $('#music_list > .item').eq(index).find('.item-title').addClass('bold');
}

// ===== 재생 컨트롤 함수 =====
function playPrev() {
    currentPlaying--;
    if (currentPlaying < 0) currentPlaying = $('#music_list > .item').length - 1;

    $('#music_list > .item').eq(currentPlaying).click();
}

function pauseAndPlay() {
    if (currentAudio[0].paused) {
        currentAudio[0].play();
        $("#pause > img").attr("src", "./images/pause.png"); //이미지 교체
        $('#spotlight').css("opacity", "1"); //전등 on
    } else {
        currentAudio[0].pause();
        $("#pause > img").attr("src", "./images/play.png"); //이미지 교체
        $('#spotlight').css("opacity", "0"); //전등 off
    }
}

function playNext() {
    currentPlaying++;
    if (currentPlaying >= $('#music_list > .item').length) currentPlaying = 0;

    $('#music_list > .item').eq(currentPlaying).click();
}

function getProgress() {
    return currentAudio[0].currentTime / currentAudio[0].duration;
}

//페이지전환
$(function () {
    $("body").fadeIn(500, function () {
        $(this).animate({}, 1000);
    });

    $("a").click(function () {
        var url = $(this).attr("href");
        $("body div").animate({
            "opacity": "0",
            "top": "10px"
        }, 500, function () {
            document.location.href = url;
        });

        return false;
    });
});