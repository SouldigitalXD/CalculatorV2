window.onload = function () {
  init();
  generateLink();
};

function init() {
  const total = sessionStorage.getItem("total");

  const iscloud = sessionStorage.getItem("iscloud");

  const showserver = sessionStorage.getItem("showserver");
  const server = sessionStorage.getItem("server");
  const connect = sessionStorage.getItem("connect");
  const already = sessionStorage.getItem("already");
  const serverPrice = sessionStorage.getItem("serverprice");
  const solution = sessionStorage.getItem("solution");
  const solutionImg = sessionStorage.getItem("solutionimg");

  const showstorage = sessionStorage.getItem("showstorage");
  const storage = sessionStorage.getItem("storage");
  const storageQty = sessionStorage.getItem("storageqty");
  const showexpansion = sessionStorage.getItem("showexpansion");
  const expansions = sessionStorage.getItem("expansions");
  const expansionsQty = sessionStorage.getItem("expansionsqty");
  const accel = sessionStorage.getItem("accel");
  const storagePrice = sessionStorage.getItem("storageprice");
  const storageUnitCost = sessionStorage.getItem("storageunitcost");
  // const expansionUnitCost = sessionStorage.getItem("expansionunitcost");

  const showusers = sessionStorage.getItem("showusers");
  const showRemoteUsers = sessionStorage.getItem("showremoteusers");
  const users = sessionStorage.getItem("users");
  const remoteUsersQty = sessionStorage.getItem("remoteusers");
  const usersPrice = sessionStorage.getItem("usersprice");

  const showsetup = sessionStorage.getItem("showsetup");
  const formats = sessionStorage.getItem("formats");
  const suites = sessionStorage.getItem("suites");
  const setupPrice = sessionStorage.getItem("setupprice");
  const ssuitePrice = sessionStorage.getItem("ssuiteprice");
  const servicePrice = sessionStorage.getItem("serviceprice");
  const installations = sessionStorage.getItem("installations");
  const workflowTraining = sessionStorage.getItem("workflowtraining");
  const mediahub = sessionStorage.getItem("mediahub");

  const showmediahub = sessionStorage.getItem("showmediahub");
  const mediahubnum = sessionStorage.getItem("mediahubnum");
  const mediahubsize = sessionStorage.getItem("mediahubsize");
  const mediahubprice = sessionStorage.getItem("mediahubprice");

  const TotalPrice = document.querySelector("#totalPrice");
  const ServerSection = document.querySelector(".selection-solution");
  const Server = document.querySelector("#server");
  const Connect = document.querySelector("#connect");
  const Already = document.querySelector("#already");
  const ServerPrice = document.querySelector("#price1");
  const Solution = document.querySelector("#solution");
  const SolutionImg = document.querySelector(".selection-menu__content--icon");

  const StorageSection = document.querySelector(".selection-menu__Storage");
  const Storage = document.querySelector(".selection-menu__driverType");
  const StorageQty = document.querySelector("#x2Driver");
  const ExpansionSection = document.querySelector(".expansion");
  const Expansions = document.querySelector(
    ".selection-menu__expansionCapacity"
  );
  const ExpansionsQty = document.querySelector("#x2Expansion");
  const Accelerated = document.querySelector(".selection-menu__accelerated");
  const StoragePrice = document.querySelector("#price2");

  const UsersSection = document.querySelector("#localUsers");
  const Users = document.querySelector(".users");
  const RemoteUsers = document.querySelector("#remoteUsers");
  const UsersPrice = document.querySelector("#price3");

  const SetupSection = document.querySelector(".selection-menu__setup");
  const Formats = document.querySelector(".Typical-formats");
  const Suites = document.querySelector(".software-suites");
  const SetupPrice = document.querySelector("#price4");
  const ServicePrice = document.querySelector("#price6");
  const Instalations = document.querySelector(".istallationsText");
  const Workflow = document.querySelector(".workflow");
  const Mediahub = document.querySelector(".mediaHubSetUp");

  const MediaHubSection = document.querySelector(".selection-menu__mediahub");
  const MediahubNum = document.querySelector("#mediaHubNum");
  const MediahubSize = document.querySelector("#mediaHubType");
  const MediahubPrice = document.querySelector("#price5");
  const DriveUnitCost = document.querySelector("#driveUnitCost");
  const DriveUnitCostSection = document.querySelector("#driveUnitCostSection");
  // const ExpansionUnitCost = document.querySelector("#expansionUnitCost");

  if (showsetup == "0") {
    SetupSection.classList.add("hideSection");
    MediaHubSection.classList.add("last-section");
  }
  if (showmediahub == "0") {
    MediaHubSection.classList.add("hideSection");
  }
  if (showusers == "0") {
    UsersSection.classList.add("hideSection");
  }
  if (showRemoteUsers == "0") {
    RemoteUsers.classList.add("hideSection");
  } else {
    RemoteUsers.innerHTML = remoteUsersQty + " REMOTE USERS";
  }
  if (showstorage == "0") {
    StorageSection.classList.add("hideSection");
  }
  if (showexpansion == "0") {
    ExpansionSection.classList.add("hideSection");
  }
  if (showserver == "0") {
    ServerSection.classList.add("hideSection");
    StorageSection.classList.add("last-section");
  }
  if (iscloud == "1") {
    DriveUnitCostSection.classList.add("hideSection");
  }

  TotalPrice.innerHTML = total;
  Server.innerHTML = server;
  Connect.innerHTML = connect;
  if (already == "1") {
    Already.style.display = "block";
  }
  ServerPrice.innerHTML = serverPrice;
  Solution.innerHTML = solution;
  SolutionImg.src = solutionImg;
  Storage.innerHTML = storage;
  StorageQty.innerHTML = "x" + storageQty;
  StoragePrice.innerHTML = storagePrice;
  Expansions.innerHTML = expansions;
  ExpansionsQty.innerHTML = "x" + expansionsQty;
  if (showRemoteUsers == "0") {
    Users.innerHTML = users + " USERS";
  } else {
    Users.innerHTML = users + " LOCAL USERS";
  }
  UsersPrice.innerHTML = usersPrice;
  Formats.innerHTML = formats;
  Suites.innerHTML = suites;
  SetupPrice.innerHTML = ssuitePrice;
  ServicePrice.innerHTML = servicePrice;
  MediahubNum.innerHTML = mediahubnum + " Media Hubs";
  MediahubSize.innerHTML = mediahubsize;
  MediahubPrice.innerHTML = mediahubprice;
  DriveUnitCost.innerHTML = storageUnitCost;

  if (installations == "0") {
    Instalations.remove();
  }

  if (workflowTraining == "0") {
    Workflow.remove();
  }

  if (mediahub == "0") {
    Mediahub.remove();
  }

  if (accel == "0") {
    Accelerated.remove();
  }
}
