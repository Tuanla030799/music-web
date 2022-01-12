const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'tuaans'

const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const playing = $('.player')
const progres = $('#progress')
const nextOneStep = $('.btn-next')
const preOneStep = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [

        {
            name: '31073',
            singer: 'Wn x Nâu x Duongg',
            path: './assets/music/31073  Wn x Nâu x Duongg x Titie  Hương Ly Cover.mp3',
            image: './assets/img/imgMusic (1).jpg',
            time: ''
        },
        {
            name: 'Buồn lắm em ơi',
            singer: 'Hương Ly cover',
            path: './assets/music/BUỒN LẮM EM ƠI   TRỊNH ĐÌNH QUANG   HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (2).jpg',
            time: ''
        },
        {
            name: 'Có chàng trai viết lên cây',
            singer: 'Hương Ly cover',
            path: './assets/music/CÓ CHÀNG TRAI VIẾT LÊN CÂY  PHAN MẠNH QUỲNH  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (3).jpg',
            time: ''
        },
        {
            name: 'Cứ chill thôi',
            singer: 'Hương Ly cover',
            path: './assets/music/Cứ Chill Thôi  Chillies ft Suni Hạ Linh  Rhymastic  Hương Ly Cover.mp3',
            image: './assets/img/imgMusic (4).jpg',
            time: ''
        },
        {
            name: 'Forget Me Now',
            singer: 'Hương Ly cover',
            path: './assets/music/Forget Me Now.mp3',
            image: './assets/img/imgMusic (5).jpg',
            time: ''
        },
        {
            name: 'Hành Lang cũ',
            singer: 'Hương Ly cover',
            path: './assets/music/HÀNH LANG CŨ HẠ NHỚ  LONG NÓN LÁ  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (6).jpg',
            time: ''
        },
        {
            name: 'Hôm nay em cưới rồi',
            singer: 'Hương Ly cover',
            path: './assets/music/Hôm Nay Em Cưới Rồi  Khải Đăng  Hương Ly Cover.mp3',
            image: './assets/img/imgMusic (7).jpg',
            time: ''
        },
        {
            name: 'Khó vẽ nụ cười',
            singer: 'Hương Ly cover',
            path: './assets/music/KHÓ VẼ NỤ CƯỜI  ĐạtG x DuUyên  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (8).jpg',
            time: ''
        },
        {
            name: 'Khóc cùng em',
            singer: 'Hương Ly cover',
            path: './assets/music/KHÓC CÙNG EM  Mr Siro x Gray x Wind  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (9).jpg',
            time: ''
        },
        {
            name: 'Mascara',
            singer: 'Hương Ly cover',
            path: './assets/music/Mascara  Chillies x BLAZE  Hương Ly Cover.mp3',
            image: './assets/img/imgMusic (10).jpg',
            time: ''
        },
        {
            name: 'Muộn rồi àm sao còn',
            singer: 'Hương Ly cover',
            path: './assets/music/MUỘN RỒI MÀ SAO CÒN  SƠN TÙNG MTP  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (1).jpg',
            time: ''
        },
        {
            name: 'Nàng thơ',
            singer: 'Hương Ly cover',
            path: './assets/music/nang thơ.mp3',
            image: './assets/img/imgMusic (2).jpg',
            time: ''
        },
        {
            name: 'Nơi em là bình yên',
            singer: 'Hương Ly cover',
            path: './assets/music/NƠI EM LÀ BÌNH YÊN  TÓC TIÊN x BINZ x TOULIVER x RHYMASTIC  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (3).jpg',
            time: ''
        },
        {
            name: 'Nắm',
            singer: 'Hương Ly cover',
            path: './assets/music/NẮM  HƯƠNG LY  MV LYRICS.mp3',
            image: './assets/img/imgMusic (4).jpg',
            time: ''
        },
        {
            name: 'Sai lầm của anh',
            singer: 'Hương Ly cover',
            path: './assets/music/SAI LẦM CỦA ANH  ĐÌNH DŨNG  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (5).jpg',
            time: ''
        },
        {
            name: 'SÀi gòn đau lòng quá',
            singer: 'Hương Ly cover',
            path: './assets/music/SÀI GÒN ĐAU LÒNG QUÁ  HỨA KIM TUYỀN x HOÀNG DUYÊN  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (6).jpg',
            time: ''
        },
        {
            name: 'Sắp 30',
            singer: 'Hương Ly cover',
            path: './assets/music/SẮP 30  TRỊNH ĐÌNH QUANG  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (7).jpg',
            time: ''
        },
        {
            name: 'Thích em hơi nhiều',
            singer: 'Hương Ly cover',
            path: './assets/music/THÍCH EM HƠI NHIỀU  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (8).jpg',
            time: ''
        },
        {
            name: 'Yêu từ đâu mà ra',
            singer: 'Hương Ly cover',
            path: './assets/music/YÊU TỪ ĐÂU MÀ RA  LIL ZPOET  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (9).jpg',
            time: ''
        },
        {
            name: 'Đom đóm',
            singer: 'Hương Ly cover',
            path: './assets/music/ĐOM ĐÓM  JACK  HƯƠNG LY COVER.mp3',
            image: './assets/img/imgMusic (10).jpg',
            time: ''
        }

    ],
    settConfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? "active" : ""}" data-index = ${index}>
            <div class="thumb"
                style="background-image: url('${song.image}')">
            </div>
            <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
            `
        })
        playlist.innerHTML = htmls.join('')
        // const listSong = $$('.song')
        // console.log(listSong);
    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong',
            {
                get: function () {
                    return this.songs[this.currentIndex]
                }
            })

    },
    handleEvents: function () {
        const _this = this
        const cdWidth = cd.offsetWidth

        // xu li cd quay va dung
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 50000, //10 second
            iteration: Infinity
        })
        cdThumbAnimate.pause()
        //xu li phong to , thu nho cd
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newWidth = cdWidth - scrollTop

            cd.style.width = newWidth > 0 ? newWidth + 'px' : 0
            cd.style.opacity = newWidth / cdWidth
        }
        // xu li khi click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                _this.isPlaying = false
                audio.pause()
                playing.classList.remove('playing')
            } else {
                audio.play()
            }
        }
        // khi song dc play
        audio.onplay = function () {
            _this.isPlaying = true
            //_this.settConfig('isPlaying', _this.isPlaying)
            playing.classList.add('playing')
            cdThumbAnimate.play()
        }
        // khi song dc pause
        audio.onpause = function () {
            _this.isPlaying = false
            // _this.settConfig('isPlaying', _this.isPlaying)
            playing.classList.remove('playing')
            cdThumbAnimate.pause()
        }
        // khi tien do bai hat thay doi 
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progresPersent = Math.floor(audio.currentTime / audio.duration * 100)
                progres.value = progresPersent
            }
        }
        // xu likhi tua bai hat
        progres.oninput = function (e) {
            const seekTime = e.target.value / 100 * audio.duration
            audio.currentTime = seekTime
        }

        //next song
        nextOneStep.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                if (_this.currentIndex >= _this.songs.length - 1) {
                    app.currentIndex = 0
                } else {
                    _this.currentIndex++
                }
                _this.settConfig('currentIndex', _this.currentIndex)
                _this.loadCurrentSong()
                audio.play()
            }
            _this.render()
            _this.scrollActiveSong()
        }
        //pre song
        preOneStep.onclick = function () {
            if (_this.currentIndex == 0) {
                app.currentIndex = 0
                _this.loadCurrentSong()
                playing.classList.remove('playing')

            } else {
                _this.currentIndex--
                _this.loadCurrentSong()
                audio.play()
            }
            _this.settConfig('currentIndex', _this.currentIndex)
            _this.render()
            _this.scrollActiveSong()
        }
        // random song
        randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom
            _this.settConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }
        //xu li next song khi audio end
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play()
            } else {
                nextOneStep.click()
            }
        }
        // xu li lap lai 1 song
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            _this.settConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }
        // lang nghe su kien click vao playlist click
        playlist.onclick = function (e) {
            if (e.target.closest('.song:not(.active)')
            ) {
                if (!e.target.closest('.option')) {
                    _this.currentIndex = Number(e.target.closest('.song:not(.active)').dataset.index)
                    _this.settConfig('currentIndex', _this.currentIndex)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                } else {
                    
                }

            }
        }
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    playRandomSong: function () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex == this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
        audio.play()
    },
    scrollActiveSong: function () {
        setTimeout(function () {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }, 300)
    },

    loadConfig: function () {
        this.isRepeat = this.config.isRepeat
        randomBtn.classList.toggle('active', this.isRandom)
        this.isRandom = this.config.isRandom
        repeatBtn.classList.toggle('active', this.isRepeat)
        this.currentIndex = this.config.currentIndex
        this.loadCurrentSong()
        //this.isPlaying = this.config.isPlaying 
    },


   


    start: function () {
        this.defineProperties()

        this.handleEvents()

        this.loadCurrentSong()

        this.loadConfig()

        this.render()
        //  console.log(playBtn);


    }
}
app.start()


