var pdf;
var doc;
var pdfBase64;
var link;

window.addEventListener("message", (event) => {
  if (
    event.data.type === "hsFormCallback" &&
    event.data.eventName === "onFormSubmit"
  ) {
    console.log("Form Submit started");
    $('input[name="budget"]').val(
      document.getElementById("totalPrice").innerHTML
    );

    SendEmail(
      document.getElementById("email-97dd74af-5075-4ae5-aeec-15418f69e8bd")
        .value
    );
  }
});
function generateLink() {
  var url = "https://www.promax.com/pricing-calculator?";
  var solution = "solution=" + sessionStorage.getItem("solution");

  if (sessionStorage.getItem("solution") == "REMOTE") {
    link = url + solution;
    const mediahubnum = sessionStorage.getItem("mediahubnum");
    link += "&NumMh=" + mediahubnum;
    const mediahubsize = sessionStorage.getItem("IndexSizeMh");
    link += "&SizeMh=" + mediahubsize;

    const formats = sessionStorage.getItem("IndexTypical");
    link += "&Typical=" + formats;
  }
  if (
    sessionStorage.getItem("solution") == "ON-PREMISE" ||
    sessionStorage.getItem("solution") == "HYBRID"
  ) {
    link = url + solution;

    const serverSel = sessionStorage.getItem("IndexServerSelected");
    link += "&serverSelected=" + serverSel;

    const Switch = sessionStorage.getItem("connect");
    let valSwitch;
    if (Switch == "Switch") {
      valSwitch = 1;
    } else {
      valSwitch = 0;
    }
    link += "&Switch=" + valSwitch;

    const have = sessionStorage.getItem("already");
    link += "&have=" + have;

    const DriverType = sessionStorage.getItem("IndexSelectDirect");
    link += "&DriverType=" + DriverType;

    const DriveNum = sessionStorage.getItem("storageqty");
    link += "&DriveNum=" + DriveNum;

    const NumEx = sessionStorage.getItem("IndexSelectNex");
    link += "&NExpan=" + NumEx;

    const NUser = sessionStorage.getItem("users");
    link += "&User=" + NUser;

    const formats = sessionStorage.getItem("IndexTypical");
    link += "&Typical=" + formats;

    const softwareSuite = sessionStorage.getItem("IndexSuites");
    link += "&Software=" + softwareSuite;

    const installations = sessionStorage.getItem("installations");
    link += "&Instalation=" + installations;

    const workflow = sessionStorage.getItem("workflowtraining");
    link += "&workflow=" + workflow;
  }

  if (sessionStorage.getItem("solution") == "HYBRID") {
    const mediahubnum = sessionStorage.getItem("mediahubnum");
    link += "&NumMh=" + mediahubnum;
    const mediahubsize = sessionStorage.getItem("IndexSizeMh");
    link += "&SizeMh=" + mediahubsize;
  }

  console.log(link);

  return link;
}

/*
https://www.promax.com/pricing-calculator?solution=Hybrid&serverType=13995&Switch=1&have=1&DriverType=2&DriveNum=18&NExpan=2&User=6&RemoteU=6&NumMh=4&SizeMh=3&Typical=2&Software=2&Instalation=0&workflow=0


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
      document.querySelector("#selectSuites").innerText
    );


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
  */

function saveDoc(printp, mail) {
  var scale;
  var orientation;
  var w = document.getElementById("quotePrint").offsetWidth;
  var h = document.getElementById("quotePrint").offsetHeight;
  if (w <= 968) {
    scale = 3;
  } else {
    scale = 0.5;
  }
  html2canvas(document.getElementById("quotePrint"), {
    dpi: 300, // Set to 300 DPI
    scale: scale, // Adjusts your resolution

    onrendered: function (canvas) {
      var img = canvas.toDataURL("image/png", 1);
      if (w <= 968) {
        doc = new jsPDF("p", "px", [w, h]);
        doc.addImage(img, "PNG", 0, 50, w, h - 150);
      } else {
        doc = new jsPDF("L", "px", [w, h]);
        doc.addImage(img, "PNG", 50, 50, w - 50, h - 50);
      }

      pdfBase64 = doc.output("datauristring");
      console.log("pdf1" + pdfBase64);
      if (printp) {
        sendEmail(pdfBase64, mail);
      }
      return pdfBase64;
    },
  });
}

function Download() {
  saveDoc(false, "");
  doc.save("quote.pdf");
}

function SendEmail(mail) {
  const pdf = saveDoc(true, mail);

  // sendEmail(pdf);
}

function sendEmail(pdfBase64, mail) {
  var link = generateLink();
  Email.send({
    Host: "smtp.office365.com",
    Username: "info@promax.com",
    Password: "Nug82276",
    To: mail,

    //To: "miradario@gmail.com",
    From: "info@promax.com",
    Subject: "Your ProMAX Workflow Design",
    Body:
      "Your workflow design is ready!<Br /> Thanks for taking the time to configure your ProMAX workflow design! Your design and quote are attached. <Br /> If you have any additional questions or are ready to process your order please book time <a href='https://www.promax.com/jody'> here </a> <Br /> You can check your budget <a href=" +
      link +
      "> here </a><Br />  Best,",
    Attachments: [
      {
        name: "ProMAX Systems Design.pdf",
        data: pdfBase64,
      },
    ],
  })
    .then(() => {
      console.log("Quote sent");
    })
    .catch((error) => {
      alert(error);
    });
}

var valid;

function success() {
  // $(".message.success").show();
  document.getElementById("send").style.display = "inline";
}

function error() {
  $(".message.error").show();
  document.getElementById("send").style.display = "none";
}

$(function () {
  // var regExp = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
  var regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

  $('[type="email"]').on("keyup", function () {
    $(".message").hide();
    regExp.test($(this).val()) ? success() : error();
  });
});
