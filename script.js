window.dictionary = [];
fetch("dictionary.json")
.then((x) => x.json())
.then((words) => {
  window.dictionary = words;
  document.querySelector("html").classList.remove("loading");
});

window.septle = {
  firstDay: new Date(2022, 2, 1, 0, 0, 0, 0),
  wordList: {
    "nytimes":["rupee","nasty","mourn","ahead","brine","cloth","hoard","sweet","month","lapse","watch","today","focus","smelt","tease","cater","movie","saute","allow","renew","their","slosh","purge","chest","depot","epoxy","nymph","found","shall","harry","stove","lowly","snout","trope","fewer","shawl","natal","comma","foray","scare","stair","black","squad","royal","chunk","mince","shame","cheek","ample","flair","foyer","cargo","oxide","plant","olive","inert","askew","heist","shown","zesty","hasty","trash","fella","larva","forgo","story","hairy","train","homer","badge","midst","canny","fetus","butch","farce","slung","tipsy","metal","yield","delve","being","scour","glass","gamer","scrap","money","hinge","album","vouch","asset","tiara","crept","bayou","atoll","manor","creak","showy","phase","froth","depth","gloom","flood","trait","girth","piety","payer","goose","float","donor","atone","primo","apron","blown","cacao","loser","input","gloat","awful","brink","smite","beady","rusty","retro","droll","gawky","hutch","pinto","gaily","egret","lilac","sever","field","fluff","hydro","flack","agape","voice","stead","stalk","berth","madam","night","bland","liver","wedge","augur","roomy","wacky","flock","angry","bobby","trite","aphid","tryst","midge","power","elope","cinch","motto","stomp","upset","bluff","cramp","quart","coyly","youth","rhyme","buggy","alien","smear","unfit","patty","cling","glean","label","hunky","khaki","poker","gruel","twice","twang","shrug","treat","unlit","waste","merit","woven","octal","needy","clown","widow","irony","ruder","gauze","chief","onset","prize","fungi","charm","gully","inter","whoop","taunt","leery","class","theme","lofty","tibia","booze","alpha","thyme","eclat","doubt","parer","chute","stick","trice","alike","sooth","recap","saint","liege","glory","grate","admit","brisk","soggy","usurp","scald","scorn","leave","twine","sting","bough","marsh","sloth","dandy","vigor","howdy","enjoy","valid","ionic","equal","unset","floor","catch","spade","stein","exist","quirk","denim","grove","spiel","mummy","fault","foggy","flout","carry","sneak","libel","waltz","aptly","piney","inept","aloud","photo","dream","stale","vomit","ombre","fanny","unite","snarl","baker","there","glyph","pooch","hippy","spell","folly","louse","gulch","vault","godly","threw","fleet","grave","inane","shock","crave","spite","valve","skimp","claim","rainy","musty","pique","daddy","quasi","arise","aging","valet","opium","avert","stuck","recut","mulch","genre","plume","rifle","count","incur","total","wrest","mocha","deter","study","lover","safer","rivet","funny","smoke","mound","undue","sedan","pagan","swine","guile","gusty","equip","tough","canoe","chaos","covet","human","udder","lunch","blast","stray","manga","melee","lefty","quick","paste","given","octet","risen","groan","leaky","grind","carve","loose","sadly","spilt","apple","slack","honey","final","sheen","eerie","minty","slick","derby","wharf","spelt","coach","erupt","singe","price","spawn","fairy","jiffy","filmy","stack","chose","sleep","ardor","nanny","niece","woozy","handy","grace","ditto","stank","cream","usual","diode","valor","angle","ninja","muddy","chase","reply","prone","spoil","heart","shade","diner","arson","onion","sleet","dowel","couch","palsy","bowel","smile","evoke","creek","lance","eagle","idiot","siren","built","embed","award","dross","annul","goody","frown","patio","laden","humid","elite","lymph","edify","might","reset","visit","gusto","purse","vapor","crock","write","sunny","loath","chaff","slide","queer","venom","stamp","sorry","still","acorn","aping","pushy","tamer","hater","mania","awoke","brawn","swift","exile","birch","lucky","freer","risky","ghost","plier","lunar","winch","snare","nurse","house","borax","nicer","lurch","exalt","about","savvy","toxin","tunic","pried","inlay","chump","lanky","cress","eater","elude","cycle","kitty","boule","moron","tenet","place","lobby","plush","vigil","index","blink","clung","qualm","croup","clink","juicy","stage","decay","nerve","flier","shaft","crook","clean","china","ridge","vowel","gnome","snuck","icing","spiny","rigor","snail","flown","rabid","prose","thank","poppy","budge","fiber"],
    "six":["german","guitar","toasty","caught","crafts","pointy","lovers","brainy","preset","jumper","teabag","trivia","aphids","unseat","myself","radius","badger","corpse","hunter","lizard","trophy","traced","advise","rhythm","banter","todler","genius","studio","honest","adverb","ponder","satire","formal","podium"],
    "septle":["spinach","because","ghostly","godsend","gardens","reptile","between","plastic","forever","musical","haircut","explain","condemn","narwhal","formula","lactose","drastic","stylist","elastic","ragtime","muscled","pyramid","clarify","aspirin","copycat","glacial","seizure","garnish","tabloid","harvest","eastern","factory","posture","contour","partake","obscure","paprika","special","confide","treason"]
  },
  getWord: function (list) {
    if(!list) {
      list = this.listName;
    }
    this.listName = list;
    let dayOffset = Math.round(
      (new Date().setHours(0, 0, 0, 0) -
      new Date(this.firstDay).setHours(0, 0, 0, 0)) /
      864e5
    );
    document.querySelector("#dayNumber").innerText = dayOffset + 1 + 254; // adjusted to be same as actual wordle
    let word = this.wordList[list][dayOffset % this.wordList[list].length];
    return {
      word: word,
      dayOffset: dayOffset
    };
  },
  getBoard: function() {
    let todayOffset = this.getWord()["dayOffset"];
    let basicBoard = {
      "day": todayOffset,
      "nytimes": {
        "solved": false,
        "state":[]
      },
      "six": {
        "solved": false,
        "state":[]
      },
      "septle": {
        "solved": false,
        "state":[]
      }
    };
    let board = localStorage.septleBoard || JSON.stringify(basicBoard);
    board = JSON.parse(board);
    if(board["day"] != todayOffset) {
      board = basicBoard;
    }
    this.saveBoard(board);
    return board;
  },
  saveBoard: function(board) {
    if(!board) {
      board = this.getBoard();
    }
    localStorage.septleBoard = JSON.stringify(board);
    ["nytimes","six","septle"].forEach(listName => {
      let box = document.querySelector("div#" + listName);
      let data = board[listName];
      if(data["solved"] == true) {
        box.classList.remove("started");
        box.classList.add("complete");
      } else if(data["solved"] == "fail") {
        box.classList.remove("started");
        box.classList.add("fail");
      } else if(data["state"].length > 0) {
        box.classList.add("started");
      }
    });
  },
  new: function (word, silence) {
    // get variables
    if (!word) word = this.getWord()["word"];
    this.word = word;
    let collums = word.length;
    let rows = 8;
    if(collums <= 5) {rows = 6}
    if(collums == 6) {rows = 7}
    let table = document.querySelector("table.squares");
    // clean up keyboard
    document.querySelectorAll("button.key").forEach(key => {
      key.classList.remove("filled");
      key.removeAttribute("data-state");
    });
    // set up board
    table.style = "--letters:" + collums + ";--rows:" + rows;
    table.innerHTML = "";
    for (let i = 0; i < rows; i++) {
      let newRow = table.insertRow();
      if (i == 0) newRow.classList.add("current");
      for (let i2 = 0; i2 < collums; i2++) {
        let newCell = newRow.insertCell();
        if (i2 == 0) newCell.classList.add("current");
      }
    }
    // fill in existing words
    let simpleBoard = this.getBoard()[this.listName]; // get storage
    simpleBoard["state"].forEach(word => {
      word.split("").forEach(letter => {
        this.letterPress(letter);
      });
      if(silence) {
        this.enterPress("silence");
      } else {
        this.enterPress(true);
      }
    });
    // start keyboardListener
    this.keyboardListener.start();
  },
  aside: {
    show: function(id) {
      this.hideAll();
      document.querySelector("aside#" + id).classList.add("show");
      let button = document.querySelector(".icon button." + id);
      if(button) {
        button.classList.add("active");
      }
    },
    hideAll: function() {
      document.querySelectorAll("aside").forEach(aside => {
        aside.classList.remove("show");
      });
      document.querySelectorAll(".icon button").forEach(aside => {
        aside.classList.remove("active");
      });
    }
  },
  start: function(what) {
    let box = what.parentElement;
    if(box.classList.contains("halfButtons")) {
      box = box.parentElement
    }
    let listName = box.id;
    let button = what;
    if(button.classList.contains("play") || button.classList.contains("board")) {
      if(!box.classList.contains("complete")) {
        //box.classList.add("started");
      }
      let word = this.getWord(listName)["word"];
      this.new(word);
      this.aside.hideAll();
    }
  },
  enterPress: function (nosave) {
    let cell, row;
    if(document.querySelector(".squares tr.current td.current")) {
      row = document.querySelector(".squares tr.current");
      cell = row.querySelector("td.current");
    } else {
      return;
    }
    if (!cell.nextElementSibling && cell.innerText != "") {
      // if last letter of row typed in
      let word = window.septle.word.toUpperCase();
      let wordArray = word.split("");
      let remainingLetters = word.split("");
      let guessWord = "";
      document.querySelectorAll(".squares tr.current td").forEach((cell) => {
        guessWord += cell.innerText.toUpperCase();
      });
      if (!window.dictionary.includes(guessWord.toUpperCase()) && word != guessWord) {
        alert("Not in word list!");
        row.classList.add("invalid");setTimeout(function(){row.classList.remove("invalid")},600);
        return;
      }
      // add to board state
      let board = this.getBoard();
      let simpleBoard = board[this.listName];
      simpleBoard["state"].push(guessWord);
      // end of adding
      document.querySelectorAll(".squares tr.current td").forEach((cell) => {
        let letter = cell.innerText.toUpperCase();
        let index = Array.prototype.indexOf.call(cell.parentNode.children,cell);
        if(wordArray[index] == letter) {
          let state = "correct";
          cell.setAttribute("data-state", state);
          remainingLetters.splice(remainingLetters.indexOf(letter), 1); // remove letter from remaining letters
        }
      });
      document.querySelectorAll(".squares tr.current td").forEach((cell) => {
        let letter = cell.innerText.toUpperCase();
        let index = Array.prototype.indexOf.call(cell.parentNode.children,cell);
        let state = cell.getAttribute("data-state");
        if(!state || state == "tbd") {
          state = "absent";
        }
        if (remainingLetters.includes(letter) && state != "correct") {
          state = "present";
          remainingLetters.splice(remainingLetters.indexOf(letter), 1); // remove letter from remaining letters
        }
        // set tile state
        cell.setAttribute("data-state", state);
        cell.classList.add("filled");
        // set keyboard stuff
        let keyboardKey = document.querySelector("button.key[data-value=" + letter + "]");
        let currentKeyState = keyboardKey.getAttribute("data-state");
        if (currentKeyState && (state == "absent" || currentKeyState == "correct")) {
          // do nothing if the key already is filled
        } else {
          keyboardKey.setAttribute("data-state", state);
          keyboardKey.classList.add("filled");
        }
      });
      // move on to next row
      cell.classList.remove("current");
      row.classList.remove("current");
      // check for winners
      if (guessWord == word) {
        // they won!
        if(!nosave) {
          setTimeout(function(){alert("You won!");},1600);
          setTimeout(function(){window.septle.aside.show('home');},3100);
        }
        simpleBoard["solved"] = true;
      } else if (row.nextElementSibling) {
        // more chances
        row.nextElementSibling.classList.add("current");
        row.querySelector("td").classList.add("current");
      } else {
        // losers
        if(nosave != "silence") {
          setTimeout(function(){alert("You lost! The correct word is " + word);},1600);
          simpleBoard["solved"] = "fail";
        }
        if(!nosave) {
          setTimeout(function(){window.septle.aside.show('home');},3100);
          this.statistics.updateStreak(false);
        }
      }
      // save board state
      if(!nosave) {
        board[this.listName] = simpleBoard;
        this.saveBoard(board);
        // call functions that required data to be saved first
        if(guessWord == word) {
          let length = this.getBoard()[this.listName]["state"].length;
          this.statistics.updateStreak(true, length);
        }
      }
      // end saving
    } else {
      alert("Not enough letters!");
      row.classList.add("invalid");setTimeout(function(){row.classList.remove("invalid")},600);
    }
  },
  deleteLetter: function () {
    let cell, row;
    if(document.querySelector(".squares tr.current td.current")) {
      row = document.querySelector(".squares tr.current");
      cell = row.querySelector("td.current");
    } else {
      return;
    }
    if (cell.previousElementSibling) {
      cell.classList.remove("current");
      if (cell.nextElementSibling || !cell.getAttribute("data-state")) {
        cell = cell.previousElementSibling;
      }
      cell.classList.add("current");
      cell.innerHTML = "";
      cell.setAttribute("data-state", "");
    }
  },
  letterPress: function (letter) {
    let cell, row;
    if(document.querySelector(".squares tr.current td.current")) {
      row = document.querySelector(".squares tr.current");
      cell = row.querySelector("td.current");
    } else {
      return;
    }
    if (cell.getAttribute("data-state") != "tbd") {
      cell.innerText = letter;
      cell.setAttribute("data-state", "tbd");
    } else {
      //alert("out of letters!");
    }
    if (cell.nextElementSibling) {
      cell.classList.remove("current");
      cell.nextElementSibling.classList.add("current");
    }
  },
  statistics: {
    fetchEmojis: function() {
      // get the share emojis
      let shareContent = {};
      let max = 6;
      let emojis = {
        "correct":"🟩",
        "present":"🟨",
        "absent":"⬜"
      }
      if(localStorage.contrastTheme && localStorage.contrastTheme == "true") {
        emojis["correct"] = "🟧";
        emojis["present"] = "🟦";
      }
      let originalList = septle.listName;
      let wordLists = ["nytimes","six","septle"];
      wordLists.forEach(listName => {
        let tries = 0;
        let emojiString = "";
        let allCorrect = false;
        let word = window.septle.getWord(listName)["word"];
        window.septle.new(word,true); // create board
        document.querySelectorAll("section.board tr").forEach(row => {
          if(row.querySelector("td").classList.contains("filled")) {
            allCorrect = true;
            tries++;
            row.querySelectorAll("td").forEach(square => {
              let state = square.getAttribute("data-state");
              emojiString += emojis[state];
              if(state != "correct") {
                allCorrect = false;
              }
            });
            emojiString += "\n";
          }
        });
        if(!allCorrect && tries != 0) {
          tries = "X";
        }
        let gameNames = {
          "septle": "Septle",
          "six": "Bonus",
          "nytimes": "Wordle"
        }
        let all = "";
        if(tries != 0) {
          all = "\n" + gameNames[listName] + ": " + tries + "/" + max + "\n" + emojiString;
        }
        shareContent[listName] = {
          "emojis":emojiString,
          "tries":tries,
          "max":max,
          "all":all
        }
        max++;
      });
      // re-establish board
      let dayNumber = window.septle.getWord(originalList);
      let word = dayNumber["word"];
      dayNumber = dayNumber["dayOffset"] + 1 + 254;
      window.septle.new(word,true);
      // generate full sharing string
      let streak = this.load()["streak"];
      shareContent["day"] = dayNumber;
      shareContent["all"] = "#Septle " + dayNumber + " - " + streak + " day streak - septle.com\n" + shareContent["septle"]["all"] + shareContent["six"]["all"] + shareContent["nytimes"]["all"];
      shareContent["tweet"] = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareContent["all"]);
      shareContent["facebook"] = "https://www.facebook.com/sharer/sharer.php?u=septle.com&quote=Paste your score";
      return shareContent;
    },
    copy: function() {
      let shareText = this.fetchEmojis()["all"];
      navigator.clipboard.writeText(shareText);
      alert("Copied results to clipboard!");
      gtag("event","share");
    },
    share: function() {
      let shareText = this.fetchEmojis()["all"];
      if(navigator.share) {
        navigator.share({text:shareText});
      } else {
        this.copy();
      }
    },
    url: function(type) {
      this.copy();
      let url = this.fetchEmojis()[type];
      let opened = window.open(url);
      if(opened == null || typeof(opened) == undefined) {
        alert("Popup was blocked by your browser!")
      }
      gtag("event",type);
    },
    updateStreak: function(won, answerCount) {
      let offset = window.septle.getWord()["dayOffset"];
      let stats = this.load();
      if(won == true) {
        stats["win"]++;
        gtag("event","win");
      } else if(won == "test") {
        // do nothing with the win count
      } else {
        stats["fail"]++;
        gtag("event","fail");
      }
      if(answerCount) {
        stats["distribution"][answerCount-1]++;
      }
      if(offset != stats["lastStreak"]) {
        if(offset - 1 != stats["lastStreak"]) {
          stats["streak"] = 0;
        }
        let completedToday = 0, solvedToday = 0;
        let board = window.septle.getBoard();
        if(board["septle"]["solved"] == true) {
          stats["streak"]++;
          stats["lastStreak"] = offset;
        } else if(board["septle"]["solved"] == "fail") {
          stats["streak"] = 0;
          stats["lastStreak"] = offset;
        }
      }
      localStorage.septleStats = JSON.stringify(stats); // save
      this.load(); // run visual elements
    },
    load: function() {
      let basicStats = {
        "distribution":[0,0,0,0,0,0,0,0],
        "streak":0,
        "win":0,
        "fail":0,
        "lastStreak":0
      };
      let stats = localStorage.septleStats || JSON.stringify(basicStats);
      stats = JSON.parse(stats);
      // if coming over from old version
      if(localStorage.statistics && !localStorage.importedStatistics) {
        let oldStats = JSON.parse(localStorage.statistics);
        stats["streak"] += oldStats["currentStreak"];
        stats["win"] += oldStats["gamesWon"];
        stats["fail"] += oldStats["gamesPlayed"] - oldStats["gamesWon"];
        let distValues = Object.values(oldStats["guesses"]);
        for(var i=0; i<8; i++) {
          stats["distribution"][i] += distValues[i];
        }
        alert("Streak carried over!");
        localStorage.importedStatistics = true;
      }
      // save any changes
      localStorage.septleStats = JSON.stringify(stats);
      // do visual updates
      this.distribution(stats);
      this.todayScores();
      return stats;
    },
    todayScores: function() {
      // update scores
      let board = window.septle.getBoard();
      let number = 6;
      ["nytimes","six","septle"].forEach(listName => {
        let tries = board[listName]["state"].length;
        if(board[listName]["solved"] == false || board[listName]["solved"] == "fail") {
          tries = "X";
        }
        document.querySelector("#" + listName + "Score").innerText = tries + "/" + number;
        number++;
      });
    },
    distribution: function(stats) {
      // do distribution stats
      let array = stats["distribution"];
      let buttons = document.querySelectorAll("#distribution button");
      let max = Math.max(...array);
      if(max == 0) {
        max = 1;
      }
      for(i = 0; i<array.length; i++) {
        let value = array[i];
        let percent = 100 * (1 - value/max);
        let grayPercent = percent - 5;
        if(grayPercent < 0) {
          grayPercent = 0;
        }
        buttons[i].style.background = "linear-gradient(var(--color-tone-4) " + grayPercent + "%,var(--green) " + percent + "%)";
        buttons[i].querySelector("strong").innerText = value;
      }
      // do streak stats
      let optionalS = (stats["streak"] != 1);
      if(optionalS) {
        optionalS = "s";
      } else {
        optionalS = "";
      }
      document.querySelector("#streak").innerText = stats["streak"] + " day" + optionalS;
      document.querySelector("#winCount").innerText = stats["win"];
      document.querySelector("#failCount").innerText = stats["fail"];
      document.querySelector("#winsPercent").innerText = Math.round(100 * stats["win"] / (stats["win"] + stats["fail"])) + "%";
    }
  },
  keyboardListener: {
    start: function () {
      if (!this.enabled) {
        document.onkeydown = this.run;
        document.querySelectorAll("button.key").forEach(key => {
          key.setAttribute("onclick", "window.septle.keyboardListener.builtIn(this)");
        });
        this.enabled = true;
        gtag("event","start");
      }
    },
    builtIn: function(what) {
      if(what.id == "enter") {
        window.septle.enterPress();
      } else if(what.id == "delete") {
        window.septle.deleteLetter();
      } else {
        let letter = what.innerText;
        window.septle.letterPress(letter);
      }
    },
    run: function (eventKeyName) {
      eventKeyName = eventKeyName || window.event;
      let key = eventKeyName.keyCode || eventKeyName.charCode;
      if (key == 13) {
        // enter key pressed
        eventKeyName.preventDefault();
        window.septle.enterPress();
      } else if (key == 8 || key == 46) {
        // backspace pressed
        window.septle.deleteLetter();
      } else {
        let letter = String.fromCharCode(key);
        if (letter.match(/[a-z]/i)) {
          // letter key pressed
          window.septle.letterPress(letter);
        }
      }
    },
    enabled: false
  },
  word: "flowers",
  listName: "septle",
  theme: {
    toggle: function() {
      localStorage.darkTheme = document.body.classList.toggle("dark");
    },
    contrast: function() {
      localStorage.contrastTheme = document.body.classList.toggle("contrast");
      this.updateBrowser();
    },
    load: function() {
      if(localStorage.darkTheme && localStorage.darkTheme == "true" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        localStorage.darkTheme == "true";
      }
      if(localStorage.contrastTheme && localStorage.contrastTheme == "true") {
        document.body.classList.add("contrast");
        this.updateBrowser();
      }
      window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
        if (e.matches) {
          document.body.classList.add("dark");
          localStorage.darkTheme == "true";
        } else {
          document.body.classList.remove("dark");
          localStorage.darkTheme == "false";
        }
      });
    },
    updateBrowser: function() {
      let color = "#6aaa64";
      if(localStorage.contrastTheme && localStorage.contrastTheme == "true") {
        color = "#f5793a";
      }
      document.querySelector('[name="theme-color"]').setAttribute("content",color);
    }
  },
  initialDay: 0
};

// run loaded functions
window.septle.initialDay = window.septle.getWord()["dayOffset"];
window.septle.saveBoard();
window.septle.theme.load();
window.septle.statistics.load();
window.septle.statistics.updateStreak("test");

// check to see if day has passed
document.addEventListener("focus", function(){
  if(window.septle.initialDay != window.septle.getWord()["dayOffset"]) {
    location.reload();
  }
});

// check to see if coming from nytimes version
if(localStorage.gameState && !localStorage.welcomeBackMessage) {
  localStorage.welcomeBackMessage = true;
  window.septle.aside.show("welcomeBack");
}

if (window.self === window.top) {
  // if not loaded in frame, add arc
  let arcScript = document.createElement("script");
  arcScript.async = true;
  arcScript.src = "https://arc.io/widget.min.js#V4PvzRNr";
  document.body.appendChild(arcScript);
  arcScript.onload = function(){
    let waitingLoop = setInterval(function(){
      if(document.querySelector("#arc-widget")) {
        document.querySelector("#arc-widget").style = "bottom: auto !important;left: auto !important;right: 0 !important;top: 0 !important;";
        document.querySelector("#arc-space").style.display = "inline-block";
        clearInterval(waitingLoop);
      }
    },100);
  };
  // trigger some google analytics thing here
} else {
  // otherwise trigger something else for google analytics
}

// replace alert function
function alert(text) {
  let alertBox = document.querySelector("#alertBox");
  let span = document.createElement("span");
  span.innerText = text;
  span.addEventListener("click",function(event){
    event.target.remove();
  });
  alertBox.appendChild(span);
  setTimeout(function(){
    span.remove();
  },1500);
}
