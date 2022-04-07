let time;
let runningCounter = false;
let type = "PREMISE";
//accordeon
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
const containerBox = document.querySelectorAll(".container-solution .box");
const Boxes = document.querySelectorAll(".box");
const ServerDiv = document.querySelectorAll(".container-server .directSwitch");
const ServerSwitch = document.querySelectorAll(".directSwitch");

//banner-Illustrator
const buttonImg = document.querySelectorAll("#btnImg");
const container = document.querySelectorAll("#on-off img");
const premise = document.querySelector(".premise");
const linkQuote = document.querySelector(".linkQuote");
const remote = document.querySelector(".remote");
const hybrid = document.querySelector(".hybrid");
const cloud = document.querySelector(".cloud");
const platformOnpremise = document.querySelector(".platform-onpremise");
const platformHybrid = document.querySelector(".platform-hybrid");

//dropUp
const dropUp_btn = document.querySelector(".dropUp-btn");
const triangles = document.querySelector(".triangleDown");
const dataList = document.querySelector(".dropUp-background");
const btnSave = document.querySelector(".dropUp__content");

function hideModal() {
  document.getElementById("platformDisclaimer").style.display = "none";
}

// hosting function
initialValues();
loadPrices();
accordeonFunction();
showQuote();
modalFunction();
imgFunction();
dropUP();
Calc();

document.getElementById("setupOpt").addEventListener("click", () => {
  setTimeout(() => {
    document
      .getElementById("selectSuites")
      .scrollIntoView({ behavior: "smooth" });
  }, 200);
});

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });

  if (result == null) {
    result = 0;
  }
  return result;
}

function fnSolution() {
  document.querySelectorAll(".box").forEach((box) => {
    box.classList.remove("box-style");
  });
  const resSolution = findGetParameter("solution");
  if (resSolution == "REMOTE") {
    buttonImg[1].classList.add("box-style");
    solutionClick(buttonImg[1]);
    return true;
  }
  if (resSolution == "HYBRID") {
    buttonImg[2].classList.add("box-style");
    solutionClick(buttonImg[2]);
    return true;
  }
  if (resSolution == "ON-PREMISE") {
    buttonImg[0].classList.add("box-style");
    solutionClick(buttonImg[0]);
    return true;
  } else {
    return false;
  }
}
function initSwitch() {
  ServerSwitch.forEach((switches) => {
    switches.classList.remove("server-style");
  });
  document.querySelector("#direct-switch").classList.add("server-style");
}

function initialValues() {
  var parSol = findGetParameter("solution");

  if (parSol == 0) {
    return false;
  }
  fnSolution();
  var condition = parSol == "REMOTE" || parSol == "HYBRID";
  if (condition) {
    document.getElementById("NumMh").value = findGetParameter("NumMh");

    document.getElementById("sizeMh").getElementsByTagName("option")[
      findGetParameter("SizeMh")
    ].selected = "selected";
    console.log("sizemh");

    document.getElementById("selectTypical").getElementsByTagName("option")[
      findGetParameter("Typical")
    ].selected = "selected";
  }

  var condition = parSol == "ON-PREMISE" || parSol == "HYBRID";
  if (condition) {
    document.querySelector("#serverSelect").getElementsByTagName("option")[
      findGetParameter("serverSelected")
    ].selected = "selected";
    if (findGetParameter("Switch") == "1") {
      initSwitch();
    }
    if (findGetParameter("have") == "1") {
      document.querySelector("#alreadySwitchChk").checked = true;
    }
    document.getElementById("selectDirect").getElementsByTagName("option")[
      findGetParameter("DriverType")
    ].selected = "selected";

    document.getElementById("selectNum").value = findGetParameter("DriveNum");

    document.getElementById("selectNEx").getElementsByTagName("option")[
      findGetParameter("NExpan")
    ].selected = "selected";

    document.getElementById("numberOfUser").value = findGetParameter("User");

    document.getElementById("selectTypical").getElementsByTagName("option")[
      findGetParameter("Typical")
    ].selected = "selected";
    document.getElementById("selectSuites").getElementsByTagName("option")[
      findGetParameter("Software")
    ].selected = "selected";

    if (findGetParameter("Instalation") == "0") {
      document.querySelector("#instalation").checked = false;
    } else {
      document.querySelector("#instalation").checked = true;
    }
    if (findGetParameter("workflow") == "0") {
      document.querySelector("#workflowTraing").checked = false;
    } else {
      document.querySelector("#workflowTraing").checked = true;
    }
    document.getElementById("inputmediaHubUser").value = 0;

    /*  document
      .getElementById("sizeMh")
      .getElementsByTagName("option")[0].selected = "selected"; */
    return true;
  }

  /*   document.getElementById("inputmediaHubUser").value =
    findGetParameter("RemoteU");

  document.getElementById("sizeMh").getElementsByTagName("option")[
    findGetParameter("SizeMh")
  ].selected = "selected"; */

  // https://www.promax.com/pricing-calculator?solution=Hybrid&serverType=13995&Switch=1&have=1&DriverType=2&DriveNum=18&NExpan=2&User=6&RemoteU=6&NumMh=4&SizeMh=3&Typical=2&Software=2&Instalation=0&workflow=0
}

function loadPrices() {
  // const servers = priceCalc.serverTypes;
  // const serverInput = document.getElementById("serverSelect");
  // const drives = priceCalc.driveTypes;
  // const driveInput = document.getElementById("selectDirect");
  // // const expansions = priceCalc.expansionTypes;
  // // const expansionInput = document.getElementById("selectExpansion");
  // const typicalFormats = priceCalc.typicalFormats;
  // const formatInput = document.getElementById("selectTypical");
  // const softwareSuites = priceCalc.softwareSuites;
  // const suiteInput = document.getElementById("selectSuites");
  // const mediaHubSizes = priceCalc.mediaHubSizes;
  // const mediaHubInput = document.getElementById("sizeMh");

  // function fillInput(data, target) {
  //   for (i = 0; i < data.length; i++) {
  //     var item = document.createElement("option");
  //     item.value = data[i].price;
  //     item.text = data[i].name;
  //     if (data[i].selected) {
  //       item.selected = true;
  //     }
  //     if ("storage" in data[i]) {
  //       item.setAttribute("storage", data[i].storage);
  //     }
  //     if ("platform" in data[i]) {
  //       item.setAttribute("platform", data[i].platform);
  //     }
  //     if ("bays" in data[i]) {
  //       item.setAttribute("bays", data[i].bays);
  //     }
  //     target.options.add(item);
  //   }
  // }

  // fillInput(servers, serverInput);
  // fillInput(drives, driveInput);
  // fillInput(expansions, expansionInput);
  // fillInput(typicalFormats, formatInput);
  // fillInput(softwareSuites, suiteInput);
  // fillInput(mediaHubSizes, mediaHubInput);
  document.getElementById("direct-switch").value =
    getPriceByKey("switch_price");
}

function loadSoftwareOptions() {
  const softwareSuites = priceCalc.softwareSuites;
  const suiteInput = document.getElementById("selectSuites");
  for (i = 0; i < suiteInput.options.length; i++) {
    suiteInput.remove(i);
  }
  for (i = 0; i < softwareSuites.length; i++) {
    var item = document.createElement("option");
    item.value = softwareSuites[i].price;
    item.text = softwareSuites[i].name;
    if (softwareSuites[i].selected) {
      item.selected = true;
    }
    suiteInput.options.add(item);
  }
}

function accordeonFunction() {
  accordionItemHeaders.forEach((accordionItem) => {
    accordionItem.addEventListener("click", () => {
      accordionItem.classList.toggle("active");
      const accordionItemBody = accordionItem.nextElementSibling;

      if (accordionItem.classList.contains("active")) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });

  containerBox.forEach((allboxes) => {
    allboxes.addEventListener("click", () => {
      Boxes.forEach((box) => {
        box.classList.remove("box-style");
      });
      allboxes.classList.add("box-style");
    });
  });

  ServerDiv.forEach((divSwitch) => {
    divSwitch.addEventListener("click", () => {
      ServerSwitch.forEach((switches) => {
        switches.classList.remove("server-style");
      });
      divSwitch.classList.add("server-style");
    });
  });
}

function showQuote() {
  linkQuote.addEventListener("click", () => {
    sessionStorage.setItem(
      "total",
      document.querySelector("#totalFinal").innerText
    );

    sessionStorage.setItem("iscloud", checkSolution("cloud") ? 1 : 0);

    sessionStorage.setItem(
      "showserver",
      document.querySelector("#serverContentWrapper").style.display == "none"
        ? 0
        : 1
    );
    sessionStorage.setItem(
      "server",
      document.querySelector(".selection-menu__content--label").innerText
    );
    sessionStorage.setItem(
      "connect",
      document.querySelector(".selection-menu__content--p").innerText
    );
    sessionStorage.setItem(
      "platform",
      document.querySelector("#platformLabel").style.display == "none" ? 0 : 1
    );
    sessionStorage.setItem(
      "already",
      document.querySelector("#alreadySwitchChk").checked ? 1 : 0
    );
    sessionStorage.setItem(
      "serverprice",
      document.querySelector("#price1").innerText
    );
    sessionStorage.setItem(
      "solution",
      document.querySelector(".selection-menu__tittle").innerText
    );
    sessionStorage.setItem(
      "solutionimg",
      document
        .querySelector(".selection-menu__content--icon")
        .getAttribute("src")
    );

    sessionStorage.setItem(
      "showstorage",
      document.querySelector(".selection-menu__Storage").style.display == "none"
        ? 0
        : 1
    );
    sessionStorage.setItem(
      "storageqty",
      document.querySelector("#selectNum").value
    );
    sessionStorage.setItem(
      "storage",
      document.querySelector(".selection-menu__driverType").innerText
    );
    sessionStorage.setItem(
      "showexpansion",
      document.querySelector("#expansionDetails").style.display == "none"
        ? 0
        : 1
    );
    sessionStorage.setItem(
      "expansions",
      document.querySelector(".selection-menu__expansionCapacity").innerText
    );
    sessionStorage.setItem(
      "expansionsqty",
      document.querySelector("#selectNEx").value
    );
    sessionStorage.setItem(
      "storageprice",
      document.querySelector("#price2").innerText
    );
    sessionStorage.setItem(
      "storageunitcost",
      document.querySelector("#selectDirect").value
    );
    // sessionStorage.setItem("expansionunitcost", document.querySelector("#selectExpansion").value);

    sessionStorage.setItem(
      "showusers",
      document.querySelector("#userSect").style.display == "none" ? 0 : 1
    );
    sessionStorage.setItem(
      "showremoteusers",
      document.querySelector("#numMHUsers").style.display == "none" ? 0 : 1
    );
    sessionStorage.setItem("users", document.querySelector(".users").innerText);
    sessionStorage.setItem(
      "remoteusers",
      document.getElementById("inputmediaHubUser").value
    );
    sessionStorage.setItem(
      "usersmh",
      document.querySelector(".usersmh").innerText
    );
    sessionStorage.setItem(
      "usersprice",
      document.querySelector("#priceMediaHubUsers").innerText
    );

    sessionStorage.setItem(
      "showsetup",
      document.querySelector("#setupSect").style.display == "none" ? 0 : 1
    );
    sessionStorage.setItem(
      "formats",
      document.querySelector(".Typical-formats").innerText
    );

    // link
    sessionStorage.setItem(
      "IndexTypical",
      document.querySelector("#selectTypical").selectedIndex
    );
    sessionStorage.setItem(
      "IndexSizeMh",
      document.querySelector("#sizeMh").selectedIndex
    );

    sessionStorage.setItem(
      "IndexServerSelected",
      document.querySelector("#serverSelect").selectedIndex
    );

    sessionStorage.setItem(
      "IndexSelectDirect",
      document.querySelector("#selectDirect").selectedIndex
    );

    sessionStorage.setItem(
      "IndexSelectNex",
      document.querySelector("#selectNEx").selectedIndex
    );

    sessionStorage.setItem(
      "IndexSuites",
      document.querySelector("#selectSuites").selectedIndex
    );

    //fin link

    sessionStorage.setItem(
      "suites",
      document.querySelector(".software-suites").innerText
    );

    sessionStorage.setItem(
      "setupprice",
      document.querySelector("#price4").innerText
    );
    sessionStorage.setItem(
      "ssuiteprice",
      document.querySelector("#price4a").innerText
    );
    sessionStorage.setItem(
      "serviceprice",
      document.querySelector("#price4b").innerText
    );
    sessionStorage.setItem(
      "installations",
      document.querySelector("#instalation").checked ? 1 : 0
    );

    sessionStorage.setItem(
      "accel",
      document.querySelector("#acceleratedUploadChk").checked ? 1 : 0
    );
    sessionStorage.setItem(
      "workflowtraining",
      document.querySelector("#workflowTraing").checked ? 1 : 0
    );
    sessionStorage.setItem(
      "mediahub",
      document.querySelector("#mediaHubSet").checked &&
        document.getElementById("MediahubSwitch").style.display == "block"
        ? 1
        : 0
    );

    sessionStorage.setItem(
      "showmediahub",
      document.querySelector("#MHSect").style.display == "none" ? 0 : 1
    );
    sessionStorage.setItem(
      "mediahubnum",
      document.querySelector("#mediaHubNum").innerText
    );
    sessionStorage.setItem(
      "mediahubsize",
      document.querySelector("#mediaHubSize").innerText
    );
    sessionStorage.setItem(
      "mediahubprice",
      document.querySelector("#priceMHSize").innerText
    );

    window.open("http://promax.com/quotes");
  });
}

function modalFunction() {
  const modal = document.querySelector("#myModal");
  const btn = document.querySelector("#myBtn");

  btn.addEventListener("click", () => {
    modal.classList.toggle("active");
    if (modal.classList.contains("active")) {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  });
  const spanClose = document.querySelector(".close");
  spanClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.onclick = addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
  return modal;
}

function userInit() {
  document.querySelector("#numberOfUser").value = 0;
  document.querySelector(".usersNumTittle").textContent = 0;
  document.querySelector(".usersNumMhTittle").textContent = 0;

  document.querySelector("#price3").innerHTML = 0;
  document.querySelector("#perc3").innerHTML = 0;

  document.querySelector("#priceMediaHubUsers").innerHTML = 0;
}

function mostrar(type, valor) {
  let mostrar = valor ? "block" : "none";
  userInit();

  if (type == "expansion") {
    document.getElementById("expansionCapacityInput").style.display = mostrar;
    document.getElementById("driveNumberSection").style.display = mostrar;
    document.getElementById("expansionDetails").style.display = mostrar;
  }

  if (type == "installation") {
    if (!valor) {
      document.getElementById("instalation").checked = false;
    }
    document.getElementById("inputInstallation").style.display = mostrar;
  }

  if (type == "training") {
    if (!valor) {
      document.getElementById("workflowTraing").checked = false;
    }
    document.getElementById("training").style.display = mostrar;
  }

  if (type == "mhuser") {
    document.getElementById("numMHUsers").style.display = mostrar;
    document.getElementById("labelMHUsers").style.display = mostrar;
    document.getElementById("acceleratedUpload").style.display = mostrar;
  }

  if (type == "typical") {
    document.getElementById("inputTypicalFormats").style.display = mostrar;
    document.getElementById("labelTypicalFormats").style.display =
      mostrar == "block" ? "inline" : "none";
  }

  if (type == "suites") {
    document.getElementById("inputSuites").style.display = mostrar;
    // document.getElementById("labelTypicalFormats").style.display = mostrar;
  }

  if (type == "user") {
    userInit();
    document.getElementById("userSect").style.display =
      mostrar == "block" ? "flex" : mostrar;
    document.getElementById("usersOpt").style.display = mostrar;
  }

  if (type == "storage") {
    userInit();
    document.getElementById("storageSect").style.display =
      mostrar == "block" ? "flex" : mostrar;
    document.getElementById("storageOpt").style.display = mostrar;
  }

  if (type == "server") {
    document.getElementById("serverOpt").style.display = mostrar;
    document.getElementById("serverContentWrapper").style.display = mostrar;
    document.getElementById("serverPercentageBar").style.display = mostrar;
    document.getElementById("serverPercentageBar").style.display = mostrar;
    document.querySelector(".selection-menu__Solution").style.flex =
      mostrar == "block" ? "auto" : 1;

    document.getElementById("acceleratedUploadChk").checked = false;
    document.getElementById("acceleratedUpload").style.display = false;
  }

  if (type == "mediahub") {
    document.getElementById("MediahubSwitch").style.display = mostrar;
    document.querySelector(".mediaHubSetUp").checked = valor;
    document.getElementById("acceleratedUpload").style.display = mostrar;
    document.getElementById("acceleratedUploadChk").checked = mostrar;
    document.getElementById("accelerated").style.display = "mostrar";
  }

  if (type == "mediasize") {
    document.getElementById("setupMedia").style.display = mostrar;
    document.getElementById("MHSect").style.display =
      mostrar == "block" ? "flex" : mostrar;
    document.getElementById("acceleratedUpload").style.display = mostrar;
    document.getElementById("acceleratedUploadChk").checked = mostrar;
    document.getElementById("accelerated").style.display = mostrar;

    // contrario
    // mostrar = !valor ? "block" : "none";
    // document.getElementById("setupOpt").style.display = mostrar;
    // document.getElementById("setupSect").style.display = mostrar == "block" ? "flex" : mostrar;
  }

  if (type == "software") {
    mostrar = valor ? "block" : "none";
    document.getElementById("setupOpt").style.display = mostrar;
    document.getElementById("setupSect").style.display =
      mostrar == "block" ? "flex" : mostrar;
  }

  if (type == "cloud") {
    document.getElementById("acceleratedUpload").style.display = mostrar;
    document.getElementById("selectDirect").style.display = "none";
    document.getElementById("cloudStorage").style.display = mostrar;
    document.getElementById("storageDiskLabel").innerHTML =
      "Total Cloud Storage (TB)";
    // mostrar = !valor ? "block" : "none";
    // document.getElementById("setupSect").style.display = mostrar == "block" ? "flex" : mostrar;
    // document.getElementById("setupOpt").style.display = mostrar;
  }

  if (type == "performance") {
    document.querySelector("#performanceBanner").style.display =
      mostrar == "block" ? "flex" : "none";
  }
}

function solutionClick(btnImg) {
  container.forEach((allImg) => {
    const imgSelect = document.querySelector(".selection-menu__content--icon");
    const textheader = document.querySelector(".selection-menu__tittle");
    const performanceData = document.querySelector(".performance-data");
    const storangeData = document.querySelector(".storange-data");
    const valuebtn = document.querySelectorAll(".value");

    mostrar("user", true);
    mostrar("mhuser", true);
    mostrar("typical", true);
    mostrar("suites", true);
    mostrar("training", true);
    mostrar("installation", true);
    mostrar("expansion", true);
    mostrar("server", true);
    mostrar("software", true);
    mostrar("storage", true);
    mostrar("cloud", false);
    mostrar("mediahub", false);
    mostrar("mediasize", false);
    mostrar("performance", true);

    document.getElementById("acceleratedUploadChk").checked = false;

    document.getElementsByClassName(
      "selection-menu__content"
    )[0].style.justifyContent = "space-between";

    document
      .getElementById("storageOpt")
      .getElementsByClassName("accordion-item-header")[0]
      .classList.remove("active");
    document
      .getElementById("storageOpt")
      .getElementsByClassName("accordion-item-body")[0].style.maxHeight = 0;

    document
      .getElementById("setupOpt")
      .getElementsByClassName("accordion-item-header")[0]
      .classList.remove("active");
    document
      .getElementById("setupOpt")
      .getElementsByClassName("accordion-item-body")[0].style.maxHeight = 0;

    document.getElementById("training").style.display = "block";
    document.getElementById("workflowTraing").checked = false;
    document.getElementById("workflow").style.display = "none";

    document.getElementById("userLabelText").innerHTML = "Users";
    document.getElementById("userMHLabelText").innerHTML = "MediaHub Users";
    document.getElementById("userInputLabelText").innerHTML = "Users";
    document.getElementById("userInputMHLabelText").innerHTML =
      "MediaHub Users";
    document.getElementById("storageDiskLabel").innerHTML = "Drive Type";
    document.getElementById("selectDirect").style.display = "block";

    if (btnImg.classList.contains("box")) {
      if (btnImg.classList.contains("premise")) {
        document.querySelector("#acceleratedUploadChk").checked = false;
        premise.style.display = "block";
        textheader.textContent = "ON-PREMISE";
        document.querySelector("#NumMh").value = 0;
        imgSelect.src =
          "{{ get_asset_url('../assets/solution-icn-alt-01-onpremise.png') }}";
        allImg.style.display = "none";
        document.getElementById("mediaHubSet").checked = false;
        mostrar("user", true);
        mostrar("mhuser", false);
        mostrar("mediahub", false);
        mostrar("mediasize", false);
        document.getElementById("mediahublbl").style.display = "none";
        const value = parseInt(valuebtn[0].value);
        performanceData.innerHTML = value;
        // storangeData.innerHTML = 280;
      } else if (btnImg.classList.contains("remote")) {
        document.querySelector("#acceleratedUploadChk").checked = true;
        remote.style.display = "block";
        textheader.textContent = "REMOTE";
        document.querySelector("#NumMh").value = 2;
        imgSelect.src =
          "{{ get_asset_url('../assets/solution-icn-alt-02-remote.png') }}";
        document.getElementById("mediahublbl").style.display = "block";
        allImg.style.display = "none";
        mediaHubSet.checked = true;
        mostrar("mediahub", false);
        mostrar("user", false);
        mostrar("typical", true);
        mostrar("suites", false);
        mostrar("installation", false);
        mostrar("storage", false);
        mostrar("server", false);
        mostrar("mediasize", true);
        mostrar("mediahub", true);
        mostrar("software", true);
        mostrar("performance", false);

        document.getElementsByClassName(
          "selection-menu__content"
        )[0].style.justifyContent = "center";
        document.getElementById("training").style.display = "none";
        const value2 = parseInt(valuebtn[1].value);
        performanceData.innerHTML = value2;
      } else if (btnImg.classList.contains("hybrid")) {
        document.querySelector("#instalation").checked = true;
        document.querySelector("#acceleratedUploadChk").checked = true;
        mediaHubSet.checked = true;
        mostrar("user", true);
        mostrar("mediahub", true);
        mostrar("mediasize", true);
        mostrar("software", true);
        hybrid.style.display = "block";
        textheader.textContent = "HYBRID";
        imgSelect.src =
          "{{ get_asset_url('../assets/solution-icn-alt-03-hybrid.png') }}";
        allImg.style.display = "none";
        document.getElementById("userLabelText").innerHTML = "Local Users";
        document.getElementById("userMHLabelText").innerHTML = "Remote Users";
        document.getElementById("userInputLabelText").innerHTML = "Local Users";
        document.getElementById("userInputMHLabelText").innerHTML =
          "Remote Users";
        document.getElementById("numberOfUser").value = 2;
        document.getElementById("mediahublbl").style.display = "block";
        const value3 = parseInt(valuebtn[2].value);
        performanceData.innerHTML = value3;
      } else if (btnImg.classList.contains("cloud")) {
        allImg.style.display = "none";
        textheader.textContent = "CLOUD";
        imgSelect.src =
          "{{ get_asset_url('../assets/solution-icn-alt-04-cloud.png') }}";
        cloud.style.display = "block";
        mostrar("server", false);
        mostrar("software", true);
        mostrar("cloud", true);
        mostrar("typical", true);
        mostrar("suites", false);
        mostrar("installation", false);
        mostrar("training", false);
        mostrar("mhuser", false);
        mostrar("mediahub", false);
        mostrar("expansion", false);
        mostrar("performance", false);

        document.getElementsByClassName(
          "selection-menu__content"
        )[0].style.justifyContent = "center";

        const value4 = parseInt(valuebtn[3].value);
        performanceData.innerHTML = value4;
      }
    } else {
      allImg.style.display = "none";
    }
  });
  Calc();
}

function imgFunction() {
  buttonImg.forEach((btnImg) => {
    btnImg.addEventListener("click", () => {
      solutionClick(btnImg);
    });
  });
}
function dropUP() {
  const modalWindow = document.querySelector(".container-modal");
  const scrollAcc = document.querySelector("#scroll");

  dropUp_btn.addEventListener("click", () => {
    dropUp_btn.classList.toggle("active");

    if (dropUp_btn.classList.contains("active")) {
      triangles.classList.replace("triangleDown", "triangleUp");
      dataList.style.display = "block";
      dropUp_btn.classList.add("prueba");
    } else {
      dataList.style.display = "none";
      triangles.classList.replace("triangleUp", "triangleDown");
      dropUp_btn.classList.remove("prueba");
    }
  });
  window.onclick = addEventListener("click", (e) => {
    if (e.target == modalWindow || e.target == scrollAcc) {
      triangles.classList.replace("triangleUp", "triangleDown");
      dropUp_btn.classList.remove("active");
      dataList.style.display = "none";
    }
  });
}
function detectMob() {
  return window.innerWidth <= 800 && window.innerHeight <= 1200;
}

function SumifVisi(elementId, value) {
  const isMob = detectMob();

  if (isMob) {
    return value;
  }

  const element = document.querySelector(elementId);
  if (element.offsetWidth > 0 && element.offsetHeight > 0) {
    console.log("elemento a sumar" + elementId);
    return value;
  } else {
    return 0;
  }
}

function Calc() {
  //variables
  const serverType = document.querySelector("#serverSelect");
  const DirectConnect = document.querySelector("#direct-connect");
  const DirectSwitch = document.querySelector("#direct-switch");
  const cloudStorage = document.querySelector("#cloudStorage");
  const directType = document.querySelector("#selectDirect");
  const selectExpansion = document.querySelector("#selectNumExp");
  const numberOfUser = document.querySelector("#numberOfUser");
  const numberOfMediaHubUser = document.querySelector("#inputmediaHubUser");
  const selectNum = document.querySelector("#selectNum");
  const nUsers = document.querySelector("#numberOfUser");
  const nMHUser = document.querySelector(".nMHUsers");
  const numberExpansion = document.querySelector("#selectNEx");
  const selectTypical = document.querySelector("#selectTypical");
  const selectSuites = document.querySelector("#selectSuites");

  const sizeMhs = document.querySelector("#sizeMh");
  const NumMhs = document.querySelector("#NumMh");

  const checkIns = document.querySelector("#instalation");
  const checkAccel = document.querySelector("#acceleratedUploadChk");
  const checkHaveSwitch = document.querySelector("#alreadySwitchChk");
  // const platformSwitch = document.querySelector("#platformStudio");

  const workflowTraing = document.querySelector("#workflowTraing");
  const mediaHubSet = document.querySelector("#mediaHubSet");

  let text = () => {
    const storangeData = document.querySelector(".storange-data");
    const performanceData = document.querySelector(".performance-data");

    const selectServerType = serverType.options[serverType.selectedIndex].text;
    const ServerTypeText = (document.querySelector(
      ".selection-menu__content--label"
    ).innerHTML = selectServerType);

    const selectDirectText = directType.options[directType.selectedIndex].text;

    const directText = (document.querySelector(
      ".selection-menu__driverType"
    ).innerHTML = selectDirectText);
    if (checkSolution("cloud")) {
      document.querySelector(".selection-menu__driverType").innerHTML =
        parseInt(document.querySelector("#cloudStorage").value) + " TB";
    }
    const directStorage =
      directType.options[directType.selectedIndex].getAttribute("storage");

    const selectExpansionText = selectExpansion.value;
    const expansionText = selectExpansionText;
    document.querySelector(".selection-menu__expansionCapacity").innerHTML =
      expansionText + " TB";
    const expansionStorage = selectExpansion.value; //selectExpansion.options[selectExpansion.selectedIndex].getAttribute("storage");

    const selectNexText =
      numberExpansion.options[numberExpansion.selectedIndex].text;
    const NExText = (document.querySelector("#x2Expansion").innerHTML =
      selectNexText);
    const numExpansions = numberExpansion.value;
    if (numExpansions == 0) {
      document.querySelector("#expansionDetails").style.visibility = "hidden";
    } else {
      document.querySelector("#expansionDetails").style.visibility = "visible";
    }

    const selectDrvText = selectNum.value;
    document.querySelector("#x2Driver").innerHTML = "x" + selectDrvText;

    const selectTypicalText =
      selectTypical.options[selectTypical.selectedIndex].text;
    const TypicalText = (document.querySelector(".Typical-formats").innerHTML =
      selectTypicalText);

    const selectSuiteText =
      selectSuites.options[selectSuites.selectedIndex].text;
    const SuiteText = (document.querySelector(".software-suites").innerHTML =
      selectSuiteText);
    if (document.querySelector(".box-style").classList.contains("cloud")) {
      document.querySelector(".software-suites").innerHTML = "";
    }

    storangeData.innerHTML =
      parseFloat(directStorage) * parseInt(selectDrvText) +
      parseFloat(expansionStorage) * parseInt(numExpansions);
    performanceData.innerHTML = calculatePerformance(
      ServerTypeText,
      directText,
      parseInt(selectDrvText)
    );
  };
  serverType.addEventListener("change", text);
  directType.addEventListener("change", text);
  selectExpansion.addEventListener("change", text);
  numberExpansion.addEventListener("change", text);
  selectTypical.addEventListener("change", text);
  selectSuites.addEventListener("change", text);
  selectSuites.addEventListener("change", trainingSet);
  selectNum.addEventListener("change", text);
  serverType.addEventListener("change", platformSelect);

  let sum = () => {
    function dsValue() {
      if (DirectConnect.classList.contains("server-style")) {
        const directValue = parseInt(DirectConnect.value);
        return directValue;
      } else {
        const switchValue = parseInt(DirectSwitch.value);
        return switchValue;
      }
    }

    document.addEventListener("click", (e) => {
      const textSelectionMenu = document.querySelector(
        ".selection-menu__content--p"
      );

      if (e.target.matches("#direct-connect")) {
        DirectConnect.classList.add("server-style");
        textSelectionMenu.textContent = "Direct Connect";
        document.getElementById("alreadySwitch").style.display = "none";
        dsValue();
      }
      if (e.target.matches("#direct-switch")) {
        DirectSwitch.classList.add("server-style");
        textSelectionMenu.textContent = "Switch";

        document.getElementById("alreadySwitch").style.display = "block";
        document.getElementById("alreadySwitch").style.visibility = "visible";
        dsValue();
      }
    });

    function checkAccel() {
      const txSwitch = document.querySelector("#acceleratedUploadChk");
      const lblAccel = document.querySelector("#accelerated");

      //lblAccel.style.display = "none";
      let increment = 0;

      if (txSwitch.checked) {
        increment += getPriceByKey("software_sync");
        //lblAccel.style.display = "block";
      }
      return increment;
    }
    const accel = checkAccel();

    function checkHaveSwitch() {
      const txSwitch = document.querySelector("#alreadySwitchChk");
      const txHaveSwitch = document.querySelector("#Swichtx");
      let haveSwitch = false;
      txHaveSwitch.style.visibility = "hidden";
      if (txSwitch.checked) {
        haveSwitch = true;
        txHaveSwitch.style.visibility = "visible";
      }
      return haveSwitch;
    }
    const HaveSwitch = checkHaveSwitch();

    let serverSuma = parseInt(serverType.value);
    if (!HaveSwitch) {
      serverSuma += parseInt(dsValue());
    }
    // if (serverSelect.options[serverSelect.selectedIndex].getAttribute("platform")) {
    //   handlePlatform(true);
    // } else {
    //   handlePlatform(false);
    // }
    let Span1 = (document.querySelector("#price1").innerHTML = serverSuma);
    Span1 = SumifVisi("#price1", Span1);

    document.getElementById("selectNumExp").value =
      parseFloat(
        directType.options[directType.selectedIndex].getAttribute("storage")
      ) * parseInt(selectNum.value);

    const driveCost = parseInt(directType.value) * parseInt(selectNum.value);
    const expansionCost =
      (driveCost +
        parseInt(
          serverType.options[serverType.selectedIndex].getAttribute("bays")
        )) *
      parseInt(numberExpansion.value);

    // const storangeSuma =
    let Span2 = driveCost + expansionCost;

    if (checkSolution("cloud")) {
      const totalTB = parseInt(document.getElementById("cloudStorage").value);

      if (totalTB < 50) {
        Span2 = totalTB * 25;
      }
      if (totalTB >= 50 && totalTB < 200) {
        Span2 = totalTB * 19;
      }
      if (totalTB > 200) {
        Span2 = totalTB * 15;
      }
    }

    document.querySelector("#price2").innerHTML = Span2;
    Span2 = SumifVisi("#price2", Span2);

    const nUser = Math.min(parseInt(numberOfUser.value), 9);
    const nMHUserval = parseInt(numberOfMediaHubUser.value);

    let Span3a = nUser * 0; //priceCalc.user;
    let Span3hub = nMHUserval * 0; //priceCalc.mediaHubuser;
    let Span3 = Span3a + Span3hub;
    if (checkSolution("premise") || checkSolution("hybrid")) {
      if (parseInt(numberOfUser.value) >= 9) {
        document.getElementById("direct-switch").click();
      }
      Span3 = 0;
    }
    document.querySelector("#priceMediaHubUsers").innerHTML = Span3;
    Span3 = SumifVisi("#priceMediaHubUsers", Span3);

    let textUser = parseInt(nUsers.value);
    const userTittle = (document.querySelector(".usersNumTittle").textContent =
      textUser);

    textUser = parseInt(nMHUser.value);
    const userTittlemh = (document.querySelector(
      ".usersNumMhTittle"
    ).textContent = textUser);

    // media hub size y numbers

    let textMHnum = parseInt(NumMhs.value);
    document.querySelector(".MHNumTitle").textContent = textMHnum;

    let textMHsize = sizeMhs.options[sizeMhs.selectedIndex].text;
    document.querySelector(".MHSizetitle").textContent = textMHsize;

    document.querySelector("#priceMH").innerHTML = textMHnum;

    let Span5MHSize = (document.querySelector("#priceMHSize").innerHTML =
      sizeMhs.value * textMHnum);

    let Span5MH = Span5MHSize;

    document.querySelector("#priceMHSize").innerHTML = Span5MH;
    Span5MH = SumifVisi("#priceMHSize", Span5MH);

    const totalSuites = parseInt(selectSuites.value);

    function checkInstallations() {
      const txIns = document.querySelector(".istallationsText");
      let increment = 0;

      if (checkIns.checked) {
        increment += getPriceByKey("installation_price");
        txIns.style.display = "block";
      } else {
        increment = increment;
        txIns.style.display = "none";
      }
      return increment;
    }
    const installations = checkInstallations();

    function checkWorkflow() {
      const workflow = document.querySelector(".workflow");
      let increment = 0;

      if (workflowTraing.checked) {
        increment += getPriceByKey("workflow_price");
        workflow.style.display = "block";
      } else {
        increment = 0;
        workflow.style.display = "none";
      }
      return increment;
    }
    const workFlow = checkWorkflow();

    function checkMediaHub() {
      const mediaHubSetUpText = document.querySelector(".mediaHubSetUp");
      let increment = 0;

      if (mediaHubSet.checked) {
        numMediaHubs = parseInt(document.getElementById("NumMh").value);
        increment += getPriceByKey("mediahub_price") * numMediaHubs;
        mediaHubSetUpText.style.display = "flex";
      } else {
        increment = 0;
        mediaHubSetUpText.style.display = "none";
      }
      return increment;
    }
    const mediaHub = checkMediaHub();

    const setUpSuma =
      parseInt(selectTypical.value) +
      totalSuites +
      parseInt(installations) +
      parseInt(workFlow) +
      parseInt(mediaHub) +
      accel * parseInt(document.getElementById("NumMh").value);
    let Span4SS = parseInt(selectTypical.value) + totalSuites;

    let Span4Services =
      parseInt(installations) +
      parseInt(workFlow) +
      parseInt(mediaHub) +
      accel * parseInt(document.getElementById("NumMh").value);
    let Span4 = (document.querySelector("#price4").innerHTML = setUpSuma);
    document.querySelector("#price4a").innerHTML = Span4SS;
    document.querySelector("#price4b").innerHTML = Span4Services;
    Span4 = SumifVisi("#price4", Span4);
    let SpanTotal;
    if (
      document.querySelector(".selection-menu__tittle").textContent == "REMOTE"
    ) {
      SpanTotal = Span4 + Span5MH;
    } else if (
      document.querySelector(".selection-menu__tittle").textContent ==
      "ON-PREMISE"
    ) {
      SpanTotal = Span1 + Span2 + Span3 + Span4;
    } else {
      SpanTotal = Span1 + Span2 + Span3 + Span4 + Span5MH;
    }

    // let totalFinal = (document.querySelector("#totalFinal").innerHTML = SpanTotal);
    // const totalPrice = document.querySelector("#totalPrint").innerHTML;
    document.querySelector("#totalPrint").innerHTML = SpanTotal;
    // totalPrice.innerHTML = totalFinal;

    function count() {
      const counter = document.querySelector("#totalFinal");
      const initial = parseInt(counter.innerHTML);
      let increment = initial;

      const direction = SpanTotal > initial ? 1 : -1;
      const magnitude = parseInt(Math.abs(initial - SpanTotal) / 30);

      clearInterval(time);
      time = setInterval(() => {
        increment = increment + magnitude * direction;
        counter.textContent = increment;

        if (increment >= SpanTotal && direction == 1) {
          increment = SpanTotal;
          counter.textContent = increment;
          clearInterval(time);
        }

        if (increment <= SpanTotal && direction == -1) {
          increment = SpanTotal;
          counter.textContent = increment;
          clearInterval(time);
        }

        if (SpanTotal == 0) {
          counter.textContent = SpanTotal;
          clearInterval(time);
        }
      }, 10);
    }
    count();

    function progressBar() {
      const barra = document.querySelectorAll(".barra");
      const progress = document.querySelectorAll(".progressColor");
      let sp1, sp2, sp3, sp4, sp5MH;

      barra.forEach((bar) => {
        const maxVal = bar.getAttribute("max");

        sp1 = (Span1 / SpanTotal) * 100 + "%";
        sp2 = (Span2 / SpanTotal) * 100 + "%";
        sp3 = (Span3 / SpanTotal) * 100 + "%";
        sp4 = (Span4 / SpanTotal) * 100 + "%";
        sp5MH = (Span5MH / SpanTotal) * 100 + "%";

        progress[0].style.width = sp1;
        progress[1].style.width = sp2;
        progress[2].style.width = sp3;
        progress[3].style.width = sp5MH;
        progress[4].style.width = sp4;
      });

      const Percentage = () => {
        const showPorcentage = document.querySelectorAll(".percentage");
        let test = () => {
          showPorcentage[0].textContent = Math.round(parseInt(sp1));
          showPorcentage[1].textContent = Math.round(parseInt(sp2));
          showPorcentage[2].textContent = Math.round(parseInt(sp3));
          showPorcentage[4].textContent = Math.round(parseInt(sp4));
          showPorcentage[3].textContent = Math.round(parseInt(sp5MH));
        };
        test();
      };
      Percentage();
    }
    progressBar();

    return SpanTotal, totalFinal;
  };
  serverType.addEventListener("change", sum);
  cloudStorage.addEventListener("change", sum);
  selectTypical.addEventListener("change", sum);
  selectSuites.addEventListener("change", sum);
  directType.addEventListener("change", sum);
  selectExpansion.addEventListener("change", sum);
  numberExpansion.addEventListener("change", sum);
  nUsers.addEventListener("change", sum);

  nMHUser.addEventListener("change", sum);
  nMHUser.addEventListener("change", mirrorRemoteUsers);

  // hub size
  sizeMhs.addEventListener("change", sum);

  NumMhs.addEventListener("change", sum);
  NumMhs.addEventListener("change", mirrorMediaHubsNum);

  selectNum.addEventListener("change", sum);
  checkAccel.addEventListener("click", sum);
  checkIns.addEventListener("click", sum);
  checkHaveSwitch.addEventListener("click", sum);

  workflowTraing.addEventListener("click", sum);
  mediaHubSet.addEventListener("click", sum);
  DirectConnect.addEventListener("click", sum);
  DirectSwitch.addEventListener("click", sum);

  return sum(), text();
}
const loadDefaultValues = () => Calc();
window.onload = loadDefaultValues();

function mirrorRemoteUsers() {
  if (document.querySelector(".box-style").classList.contains("hybrid")) {
    document.getElementById("NumMh").value = parseInt(
      document.getElementById("inputmediaHubUser").value
    );
  }
}

function mirrorMediaHubsNum() {
  if (document.querySelector(".box-style").classList.contains("hybrid")) {
    document.getElementById("inputmediaHubUser").value = parseInt(
      document.getElementById("NumMh").value
    );
  }
}

function calculatePerformance(server, drive, driveNum) {
  const bays = server.substring(0, 2);
  const hdd = drive.includes("HDD");
  if (hdd) {
    if (bays == 16) {
      return driveNum * 75;
    } else {
      return driveNum * 62.5;
    }
  } else {
    if (driveNum > 11) {
      return 4000;
    } else {
      return 3000;
    }
  }
}

function platformSelect() {
  if (
    serverSelect.options[serverSelect.selectedIndex].getAttribute("platform")
  ) {
    handlePlatform(true);
  } else {
    handlePlatform(false);
  }
}

function handlePlatform(isPlatform) {
  if (isPlatform) {
    document.getElementById("platformStudioSection").style.display = "flex";
    document.getElementById("inputInstallation").style.display = "none";
    document.getElementById("instalation").checked = false;
    document.getElementById("training").style.display = "none";
    document.getElementById("workflowTraing").checked = false;
    document.getElementById("MediahubSwitch").style.display = "none";
    document.getElementById("selectNum").value = 0;
    document.getElementById("selectNum").disabled = true;
    container.forEach((image) => {
      image.style.display = "none";
    });
    if (checkSolution("premise")) {
      platformOnpremise.style.display = "block";
    } else {
      platformHybrid.style.display = "block";
    }
    document.querySelector(".selection-menu__content--icon").src =
      "{{ get_asset_url('../assets/solution-icn-alt-01-platform.png') }}";
    // document.getElementById("platformDisclaimer").style.display = "block";
    const softwareOptions = document.getElementById("selectSuites");
    /*  for (i = softwareOptions.options.length - 1; i >= 0; i--) {
      if (softwareOptions.options[i].text != "Media Management Suite") {
        softwareOptions.remove(i);
      }
    } */
  } else {
    document
      .getElementById("setupOpt")
      .getElementsByClassName("accordion-item-header")[0]
      .classList.remove("active");
    document
      .getElementById("setupOpt")
      .getElementsByClassName("accordion-item-body")[0].style.maxHeight = 0;
    document.getElementById("platformStudioSection").style.display = "none";
    document.getElementById("inputInstallation").style.display = "block";
    document.getElementById("training").style.display = "block";
    // document.getElementById("selectNum").value = 1;
    document.getElementById("selectNum").disabled = false;
    if (checkSolution("hybrid")) {
      document.getElementById("MediahubSwitch").style.display = "block";
      document.getElementById("mediaHubSet").checked = true;
    }
    //loadSoftwareOptions();
    if (checkSolution("premise")) {
      platformOnpremise.style.display = "none";
      premise.style.display = "block";
      document.querySelector(".selection-menu__content--icon").src =
        "{{ get_asset_url('../assets/solution-icn-alt-01-onpremise.png') }}";
    } else if (checkSolution("hybrid")) {
      platformHybrid.style.display = "none";
      hybrid.style.display = "block";
      document.querySelector(".selection-menu__content--icon").src =
        "{{ get_asset_url('../assets/solution-icn-alt-03-hybrid.png') }}";
    }
  }
}

function checkSolution(parsolution) {
  return document.querySelector(".box-style").classList.contains(parsolution);
}

function getPriceByKey(key) {
  const price = parseInt(document.getElementById(key).innerHTML);
  return price;
}

function trainingSet() {
  const sel = document.getElementById("selectSuites");
  if (sel.options[sel.selectedIndex].text != "Shared Storage Suite") {
    document.getElementById("workflowTraing").checked = true;
  }
}

const printPDF = () => {
  console.log("Print PDF");
  // window.jsPDF = window.jspdf.jsPDF;
  // const doc = new jsPDF({
  //   orientation: "landscape",
  // });

  // doc.html(document.getElementById("titleTest"), {
  //   callback: function (pdf) {
  //     doc.save("test.pdf");
  //   },
  // });

  // const quality = 1; // Higher the better but larger file
  // html2canvas(document.body, { scale: quality }).then((canvas) => {
  //   const pdf = new jsPDF("l", "mm", "a4");
  //   pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
  //   pdf.save("test.pdf");
  // });
};
