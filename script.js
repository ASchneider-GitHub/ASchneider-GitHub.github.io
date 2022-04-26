window.dictionary = [];
fetch("shortened.json")
.then((x) => x.json())
.then((words) => {
  window.dictionary = words;
  document.querySelector("html").classList.remove("loading");
}).catch(error => {
  dictionaryFallback();
});
function dictionaryFallback() {
  fetch("https://ifiles.ga/p/dictionary.json")
  .then((x) => x.json())
  .then((words) => {
    window.dictionary = words;
    document.querySelector("html").classList.remove("loading");
  });
}

window.septle = {
  firstDay: new Date(2022, 2, 1, 0, 0, 0, 0),
  wordList: {
    "nytimes":["rupee","nasty","mourn","ahead","brine","cloth","hoard","sweet","month","lapse","watch","today","focus","smelt","tease","cater","movie","saute","allow","renew","their","slosh","purge","chest","depot","epoxy","nymph","found","shall","stove","lowly","snout","trope","fewer","shawl","natal","comma","foray","scare","stair","black","squad","royal","chunk","mince","shame","cheek","ample","flair","foyer","cargo","oxide","plant","olive","inert","askew","heist","shown","zesty","trash","larva","forgo","story","hairy","train","homer","badge","midst","canny","fetus","butch","farce","slung","tipsy","metal","yield","delve","being","scour","glass","gamer","scrap","money","hinge","album","vouch","asset","tiara","crept","bayou","atoll","manor","creak","showy","phase","froth","depth","gloom","flood","trait","girth","piety","goose","float","donor","atone","primo","apron","blown","cacao","loser","input","gloat","awful","brink","smite","beady","rusty","retro","droll","gawky","hutch","pinto","egret","lilac","sever","field","fluff","flack","agape","voice","stead","stalk","berth","madam","night","bland","liver","wedge","augur","roomy","wacky","flock","angry","trite","aphid","tryst","midge","power","elope","cinch","motto","stomp","upset","bluff","cramp","quart","coyly","youth","rhyme","buggy","alien","smear","unfit","patty","cling","glean","label","hunky","khaki","poker","gruel","twice","twang","shrug","treat","waste","merit","woven","needy","clown","widow","irony","ruder","gauze","chief","onset","prize","fungi","charm","gully","inter","whoop","taunt","leery","class","theme","lofty","tibia","booze","alpha","thyme","doubt","parer","chute","stick","trice","alike","recap","saint","glory","grate","admit","brisk","soggy","usurp","scald","scorn","leave","twine","sting","bough","marsh","sloth","dandy","vigor","howdy","enjoy","valid","ionic","equal","floor","catch","spade","stein","exist","quirk","denim","grove","spiel","mummy","fault","foggy","flout","carry","sneak"],
    "six":["german","guitar","toasty","caught","crafts","pointy","lovers","brainy","preset","jumper","teabag","trivia","aphids","unseat","myself","radius","badger","corpse","hunter","lizard","trophy","traced","advise","rhythm","banter","potato","genius","studio","honest","ponder","satire","formal","podium","CASUAL","JETLAG","ASHAME","UNMOOR","BUNTED","ARGUED","JOKERS","BUTTER","DENIED","ASLEEP","GHOSTS","COINED","GRISLY","WEEKLY","POKING","ASCENT","SNOUTS","OPPOSE","MOTHER","ROCKET","SPOILS","MAKING","EIGHTY","adverb","SOCKET","FLAIRS","INJECT","HISSED","DEBATE","OGLING","AIMING","LEASES","UNRIPE","STRONG","BEARER","HONEST","STAKED","PERMIT","FLOCKS","GREEDY","ORDERS","PUNDIT","FLIGHT","COTTON","FAMILY","LITTLE","EXPORT","DIALOG","GOATEE","DOLLAR","FOUGHT","RENDER","THRUST","SAMPLE","UNSAFE","TUNNEL","UTMOST","GAMING","PIMPLE","COLDER","MISFIT","AUTHOR","COATED","PATROL","ALMOST","NOTIFY","GURGLE","GLAZED","OYSTER","ESCAPE","GANDER","OWNERS","REDACT","MARKUP","ROYALS","BLIMEY","PLUMBS","NICELY","BURSTS","EXPERT","STRESS","STRUNG","ETHICS","WILTED","EXODIC","SQUINT","RAFFLE","PRUNED","HARKEN","DARKLY","BREAST","BRANCH"],
    "septle":["spinach","because","ghostly","godsend","gardens","reptile","between","plastic","forever","musical","haircut","explain","condemn","narwhal","formula","lactose","drastic","stylist","elastic","ragtime","muscled","pyramid","clarify","aspirin","copycat","glacial","seizure","garnish","tabloid","harvest","eastern","factory","posture","contour","partake","obscure","paprika","special","confide","treason","DANCERS","OFFLINE","CATALOG","SPAMMED","DIRTIED","FRIENDS","OMITTED","RAGEFUL","DEVOTED","SLOWEST","RINGING","REPLAYS","cabinet","CREASED","JOBLESS","PHANTOM","FIREMEN","REFUSED","INSPECT","BUGLERS","PITYING","ITCHING","SECURED","PROBLEM","VISUALS","UNSLUNG","IMPEACH","SERGING","SNIPPER","LIVIDLY","SPINAGE","CLANGER","UNICORN","TASTERS","CAUTION","THREATS","SOYBEAN","ARMLOAD","SEEPING","BEANBAG","OUTLAWS","MEANING","JUNKIER","DANGERS","NEWBORN","ROYALLY","POTPIES","LIMPING","WILDCAT","WARSHIP","MARBLES","FREEWAY","INMATES","STARTED","UNBRAID","COLORED","DOORMEN","LOCATOR","STENCHY","MAJESTY","TEENAGE","PASTELS","WORKOUT","GOURMET","DINNING","WAYSIDE","WINDOWS","FORKFUL","FLAMMED","PARCELS","DENSITY","ALUMIUM","BRACING","EQUINOX","WEAVERS","AFFECTS","HACKSAW","POTLUCK","REPLACE","CENSORS","EXISTED","INCASED","ABUSING","UNBOUND","INKWELL","ECHOING","CHEMIST","AMAZING","INFANTS","ALMONDS","BALISTA","RUNWAYS","ALEGGED","EXECUTE","SLIDING","SANDPIT","LAUNDER","REVOKES","PLUCKED","PROJECT","JOURNAL","BLOCKED","SPILLED","UNSLICK","BRIDALS","UPLOADS","CASTOFF","MARSHAL","TOPCOAT","UPGRADE","TOURIST","ENCRYPT","DISTURB","BROUGHT","COMPOST","GYMNAST","BUTTERY","REMOVES","RELLISH","FORMULA","SOMEONE","DISTANT","SYNAPSE","SUMMARY","WEAVING","WEIRDOS","SLIPPER","LOANERS","ORPHANS","PARDONS","ANNOYED","DWARVES","BIOTICS","RAMPAGE","TEASING"]
  },
  getWord: function (list) {
    if(!list) {
      list = this.listName;
    }
    this.listName = list;
    if(list == "practice") {
      list = "septle";
    }
    let dayOffset = Math.round(
      (new Date().setHours(0, 0, 0, 0) -
      new Date(this.firstDay).setHours(0, 0, 0, 0)) /
      864e5
    );
    let visible = dayOffset + 1 + 254; // adjusted to be same as actual wordle
    document.querySelector("#dayNumber").innerText = visible;
    let word = this.wordList[list][dayOffset % this.wordList[list].length];
    return {
      word: word,
      dayOffset: dayOffset,
      visible: visible
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
    let todayInfo = this.getWord();
    if (!word) word = todayInfo["word"];
    this.word = word;
    let collums = word.length;
    let rows = collums + 1;
    let table = document.querySelector("table.squares");
    let scale = 1;
    let scales = {5:1.35,6:1.15,7:1}
    if(scales[collums]) {
      scale = scales[collums];
    }
    // clean up keyboard
    document.querySelectorAll("button.key").forEach(key => {
      key.classList.remove("filled");
      key.removeAttribute("data-state");
    });
    // setup/reset board
    table.style = "--letters:" + collums + ";--rows:" + rows + ";transform:scale(" + scale + ");";
    table.innerHTML = "";
    table.setAttribute("class","squares");
    // add caption/title
    let title = document.createElement("caption");
    if(this.listName != "practice") {
      let presentedNames = {"septle":"Septle","nytimes":"Wordle","six":"Septle Bonus"};
      title.innerHTML = "<strong>" + presentedNames[this.listName] + " #" + todayInfo["visible"] + "</strong>";
    }
    title.classList.add("title");
    table.appendChild(title);
    let caption = document.createElement("caption");
    caption.innerText = "Correct Word: " + word.toUpperCase();
    caption.style = "caption-side:bottom;";
    caption.classList.add("answer");
    table.appendChild(caption);
    // create squares
    for (let i = 0; i < rows; i++) {
      let newRow = table.insertRow();
      if (i == 0) newRow.classList.add("current");
      for (let i2 = 0; i2 < collums; i2++) {
        let newCell = newRow.insertCell();
        newCell.setAttribute("onclick", "window.septle.focus(this)");
        if (i2 == 0) newCell.classList.add("current");
      }
    }
    // fill in existing words
    let simpleBoard = {};
    if(this.listName != "practice") {
      simpleBoard = this.getBoard()[this.listName]; // get storage
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
    }
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
      box = box.parentElement;
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
  practice: function(length) {
    let word = "";
    while(word.length != length) {
      word = window.dictionary[Math.round(Math.random() * window.dictionary.length)];
    }
    this.listName = "practice";
    this.new(word);
    this.aside.hideAll();
  },
  focus: function(direction) {
    let element;
    if(typeof(direction) == "object") {
      element = direction;
      if(element.parentElement.classList.contains("current")) {
        let current = element.parentElement.querySelector("td.current");
        if(current) { current.classList.remove("current"); }
        element.classList.add("current");
      }
    } else if(direction == "right" || direction == "left") {
      element = document.querySelector("tr.current td.current");
      if(element) {
        element.classList.remove("current");
        newElement = direction == "right" ? element.nextElementSibling : element.previousElementSibling;
      }
      if(!element || !newElement) {
        let cells = document.querySelectorAll("tr.current td");
        newElement = direction == "right" ? cells[0] : cells[cells.length - 1];
      }
      newElement.classList.add("current");
    }
  },
  enterPress: function (nosave) {
    let cell, row;
    if(document.querySelector(".squares tr.current")) {
      row = document.querySelector(".squares tr.current");
      //cell = row.querySelector("td.current");
    } else {
      return;
    }
    if (row.querySelectorAll('[data-state=tbd]').length == row.querySelectorAll("td").length/*!cell.nextElementSibling && cell.innerText != ""*/) {
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
      simpleBoard = {};
      let board = {};
      if(this.listName != "practice") {
        board = this.getBoard();
        simpleBoard = board[this.listName];
        simpleBoard["state"].push(guessWord);
      }
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
      //cell.classList.remove("current");
      row.classList.remove("current");
      // check for winners
      function goHome() {
        let homeScreen = septle.listName == "practice" ? "practice" : "home";
        window.septle.aside.show(homeScreen);
      }
      if (guessWord == word) {
        // they won!
        if(!nosave) {
          alert("You won!");
          window.confetti({particleCount:150,ticks:150});
          setTimeout(goHome,3000);
        }
        simpleBoard["solved"] = true;
      } else if (row.nextElementSibling) {
        // more chances
        row.nextElementSibling.classList.add("current");
        row.querySelector("td").classList.add("current");
      } else {
        // losers
        if(nosave != "silence") {
          document.querySelector("table.squares").classList.add("fail");
          simpleBoard["solved"] = "fail";
        }
        if(!nosave) {
          alert("You lost. Better luck next time!");
          setTimeout(goHome,3000);
        }
      }
      // save board state
      if(!nosave && this.listName != "practice") {
        board[this.listName] = simpleBoard;
        this.saveBoard(board);
        // call functions that required data to be saved first
        if(simpleBoard["solved"]) {
          let pass = (simpleBoard["solved"] != "fail");
          let length = this.getBoard()[this.listName]["state"].length;
          this.statistics.updateStreak(pass, length);
        }
      }
      // end saving
    } else {
      alert("Not enough letters!");
      row.classList.add("invalid");setTimeout(function(){row.classList.remove("invalid")},600);
    }
    this.dim(document.querySelector(".key#enter")); // keyboard animation
  },
  deleteLetter: function () {
    let cell, row, newCell;
    if(document.querySelector(".squares tr.current")) {
      row = document.querySelector(".squares tr.current");
      cell = row.querySelector("td.current") || undefined;
      if(cell && cell.innerHTML != "") {
        // if selecting already filled cell
        newCell = cell;
      } else if(cell && cell.previousElementSibling) {
        // if in middle of word
        newCell = cell.previousElementSibling;
        cell.classList.remove("current");
      } else if(cell) {
        // at start of word and blank, dont delete anything
        return;
      } else {
        // if no letter selected, delete the last letter
        newCell = row.querySelectorAll("td")[row.querySelectorAll("td").length - 1];
      }
    } else {
      return;
    }
    newCell.classList.add("current");
    newCell.innerHTML = "";
    newCell.setAttribute("data-state", "");
    this.dim(document.querySelector(".key#delete")); // keyboard animation
  },
  letterPress: function (letter) {
    let cell, row;
    if(document.querySelector(".squares tr.current td.current")) {
      row = document.querySelector(".squares tr.current");
      cell = row.querySelector("td.current");
    } else {
      return;
    }
    // set values
    cell.innerText = letter;
    cell.setAttribute("data-state", "tbd");
    // move on to next letter
    cell.classList.remove("current");
    if (cell.nextElementSibling) {
      cell.nextElementSibling.classList.add("current");
    } else {
      // if at end of word, select any unfilled cells
      let unfilled = [], cells = row.querySelectorAll("td");
      cells.forEach((item) => {
        if(!item.getAttribute("data-state") || item.getAttribute("data-state") != "tbd") {
          unfilled.push(item);
        }
      });
      if(unfilled.length > 0) {
        unfilled[0].classList.add("current");
      }
    }
    // keyboard animation
    let key = document.querySelector(".key[data-value=" + letter + "]");
    this.dim(key);
  },
  dim: function(element) {
    element.classList.add("dim");
    setTimeout(function(){
      element.classList.remove("dim");
    },150);
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
      if(localStorage.aprilFools && localStorage.aprilFools == "true") {
        emojis["present"] = "🟪";
        emojis["absent"] = "🟫";
      }
      if(localStorage.contrastTheme && localStorage.contrastTheme == "true") {
        emojis["correct"] = "🟧";
        emojis["present"] = "🟦";
      }
      if(localStorage.darkTheme && localStorage.darkTheme == "true") {
        emojis["absent"] = "⬛️";
      }
      let originalList = septle.listName;
      if(originalList == "practice") {
        originalList = "septle";
      }
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
      shareContent["all"] = "#Septle " + dayNumber + " - 🔥 " + streak + " day streak - septle.com\n" + shareContent["septle"]["all"] + shareContent["six"]["all"] + shareContent["nytimes"]["all"];
      shareContent["email"] = "mailto:?subject=Septle " + dayNumber + "&body=" + encodeURIComponent(shareContent["all"]);
      shareContent["tweet"] = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareContent["all"]);
      shareContent["telegram"] = "https://t.me/share/url?url=https://septle.com&text=" + encodeURIComponent(shareContent["all"]);
      shareContent["facebook"] = "https://www.facebook.com/sharer/sharer.php?u=septle.com&quote=Paste your score";
      return shareContent;
    },
    copy: function() {
      let shareText = this.fetchEmojis()["all"];
      if(navigator.clipboard) {
        navigator.clipboard.writeText(shareText);
        alert("Copied results to clipboard!");
      } else {
        this.copyFallback(shareText);
      }
      gtag("event","share");
    },
    copyFallback: function(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      textArea.style.opacity = 0;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, 99999);
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert("Copied results to clipboard using fallback!");
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
          if(stats["bestStreak"] < stats["streak"]) {
            stats["bestStreak"] = stats["streak"];
          }
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
        "bestStreak":0,
        "win":0,
        "fail":0,
        "lastStreak":0
      };
      let stats = localStorage.septleStats || JSON.stringify(basicStats);
      stats = JSON.parse(stats);
      // establish best streak if not already saved to localStorage
      if(stats["bestStreak"] === undefined) {
        stats["bestStreak"] = stats["streak"];
      }
      // if coming over from old version
      if(localStorage.statistics && !localStorage.importedStatistics) {
        let oldStats = JSON.parse(localStorage.statistics);
        stats["streak"] += oldStats["currentStreak"];
        if(stats["bestStreak"] < stats["streak"]) {
          stats["bestStreak"] = stats["streak"];
        }
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
      let optionalS = stats["streak"] == 1 ? "" : "s";
      document.querySelector("#streak").innerText = stats["streak"] + " day" + optionalS;
      optionalS = stats["bestStreak"] == 1 ? "" : "s";
      document.querySelector("#bestStreak").innerText = stats["bestStreak"] + " day" + optionalS;
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
      } else if(key == 37 || key == 39) {
        // side arrow keys pressed
        let direction = key == 37 ? "left" : "right";
        window.septle.focus(direction);
      } else if(key == 32) {
        // space key pressed
        window.septle.focus("right");
        eventKeyName.preventDefault();
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
    },
    aprilFools: function() {
      localStorage.aprilFools = document.body.classList.toggle("aprilFools");
    },
    load: function() {
      if(localStorage.darkTheme && localStorage.darkTheme == "true" || !localStorage.darkTheme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        localStorage.darkTheme = "true";
      }
      if(localStorage.aprilFools && localStorage.aprilFools == "true") {
        document.body.classList.add("aprilFools");
      }
      if(localStorage.contrastTheme && localStorage.contrastTheme == "true") {
        document.body.classList.add("contrast");
      }
      window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
        if (e.matches) {
          document.body.classList.add("dark");
          localStorage.darkTheme = "true";
        } else {
          document.body.classList.remove("dark");
          localStorage.darkTheme = "false";
        }
      });
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
// load more resources
document.body.appendChild(document.createElement('script')).src='concepts/confetti.js';
document.body.appendChild(document.createElement('script')).src='concepts/image.js';

// change the title to be more readable
document.title = "Septle";

// check to see if day has passed
document.addEventListener("focus", function(){
  if(window.septle.initialDay != window.septle.getWord()["dayOffset"]) {
    location.reload();
  }
});

/* Messages */
// introduction first time
if(!localStorage.intro) {
  localStorage.intro = true;
  window.septle.aside.show("intro");
}
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
  },2000);
}
