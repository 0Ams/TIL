(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{500:function(s,t,n){"use strict";n.r(t);var a=n(21),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"ulimit-이란"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ulimit-이란"}},[s._v("#")]),s._v(" ulimit 이란?")]),s._v(" "),n("ul",[n("li",[s._v("ulimit는 프로세스의 자원 한도를 설정하는 명령, soft한도,hard한도 두가지로 나뉨\n"),n("ul",[n("li",[s._v("soft : 새로운 프로그램을 생성하면 기본으로 적용되는 한도")]),s._v(" "),n("li",[s._v("hard : 소프트한도에서 최대로 늘릴 수 있는 한도")])])]),s._v(" "),n("li",[s._v("프로세스(서비스)에 연결되는 유저가 많을 수록 증가됨")])]),s._v(" "),n("h1",{attrs:{id:"ulimit-옵션-값-centos-rhel-기준"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ulimit-옵션-값-centos-rhel-기준"}},[s._v("#")]),s._v(" ulimit [옵션] 값 ( Centos , RHEL 기준)")]),s._v(" "),n("p",[s._v("-a : 모든 제한 사항을 보여줌.\n-c : 최대 코어 파일 사이즈\n-d : 프로세스 데이터 세그먼트의 최대 크기\n-f : shell에 의해 만들어질 수 있는 파일의 최대 크기\n-s : 최대 스택 크기\n-p : 파이프 크기\n-n : 오픈 파일의 최대수\n-u : 오픈파일의 최대수\n-v : 최대 가상메모리의 양\n-S : soft 한도\n-H : hard 한도")]),s._v(" "),n("ul",[n("li",[s._v("각 항목의 설명")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -a         // Soft 설정 보기\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -aH        // Hard 설정 보기\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("core "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" size          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("blocks, -c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                             "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 코어파일의 최대크기\ndata seg size           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kbytes, -d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited               "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 프로세스의 데이터 세그먼트 최대크기\nscheduling priority             "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" size               "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("blocks, -f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited                    :쉘에서 생성되는 파일일 최대크기\npending signals                 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14943")]),s._v("\nmax locked memory       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kbytes, -l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\nmax memory size         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kbytes, -m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited           "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" resident "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" size의 최대 크기"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("메모리 최대크기"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" files                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("                         "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 한 프로세스에서 열 수 있는 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" descriptor의 최대 숫자"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("열수 있는 최대 파일 수"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  ,Too many "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" files error 발생시 해당값 조절해주면됨\npipe size            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes, -p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("                         "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("-바이트 블럭의 파이프 크기\nPOSIX message queues     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bytes, -q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("819200")]),s._v("\nreal-time priority              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nstack size              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kbytes, -s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),s._v("\ncpu "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v("               "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seconds, -t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited            "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 총 누적된 CPU 시간"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("초"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmax user processes              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-u"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("                 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 단일 유저가 사용가능한 프로세스의 최대 갯수\nvirtual memory          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kbytes, -v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited            "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 쉘에서 사용가능 한 가상 메모리의 최대 용량\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" locks                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h1",{attrs:{id:"설정방법"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#설정방법"}},[s._v("#")]),s._v(" 설정방법")]),s._v(" "),n("h2",{attrs:{id:"_1-ulimit-명령을-통한-변경"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-ulimit-명령을-통한-변경"}},[s._v("#")]),s._v(" 1. ulimit 명령을 통한 변경")]),s._v(" "),n("ul",[n("li",[s._v("-n –u 를 사용하여 max user process 와 open files 개수를 수정 합니다.")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -u "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -a\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".중략\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" files                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\nmax user processes              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-u"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".중략\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"_2-etc-security-limits-conf-설정-파일-수정"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-etc-security-limits-conf-설정-파일-수정"}},[s._v("#")]),s._v(" 2. /etc/security/limits.conf 설정 파일 수정")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/security/limits.conf\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".중략\n*           soft    nproc          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n*           hard    nproc          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"참고-user별로-설정-가능"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#참고-user별로-설정-가능"}},[s._v("#")]),s._v(" 참고 user별로 설정 가능")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_3-확인"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-확인"}},[s._v("#")]),s._v(" 3. 확인")]),s._v(" "),n("ul",[n("li",[s._v("재 로그인 or 리부팅할 경우 기본 설정으로 적용됨")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ulimit -aH")]),s._v("\ncore "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" size          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("blocks, -c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited\ndata seg size           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kbytes, -d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited\nscheduling priority             "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" size               "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("blocks, -f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited\npending signals                 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14943")]),s._v("\nmax locked memory       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kbytes, -l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\nmax memory size         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kbytes, -m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" files                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\npipe size            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes, -p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\nPOSIX message queues     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bytes, -q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("819200")]),s._v("\nreal-time priority              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nstack size              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kbytes, -s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited\ncpu "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v("               "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seconds, -t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited\nmax user processes              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-u"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\nvirtual memory          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kbytes, -v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" locks                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unlimited\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);