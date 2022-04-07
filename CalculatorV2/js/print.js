function print() {
  window.jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF("p", "pt", "letter");
  var margins = {
    top: 80,
    bottom: 60,
    left: 40,
    width: 522,
  };
  var source = document.querySelector("#quotePrint");

  doc.html(source, {
    callback: function (pdf) {
      doc.save("test.pdf");
    },
    autoPaging: false,
  });

  // const quality = 5; // Higher the better but larger file
  // html2canvas(document.body, { scale: quality }).then((canvas) => {
  //   const pdf = new jsPDF("p", "mm", "a4");
  //   pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
  //   pdf.save("test.pdf");
  // });

  // var pdfBase64 = doc.output('datauristring');
}

////////email
var filename;
function savePDF(action) {
  window.jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF();
  //  var specialElementHandlers = {
  //   '#fav-items': function (element, renderer) {
  //       return true;
  //   }
  //    };

  //  $('#quotePrint').click(function () {
  // doc.fromHTML(document.querySelector("#quotePrint"), 15, 15, {
  //   width: 700,
  //   // 'elementHandlers': specialElementHandlers
  // });

  doc.html(document.querySelector("quotePrint-content"), {
    callback: function (pdf) {
      doc.save("test.pdf");
    },
    autoPaging: false,
  });
  if (action == "send") {
    pdfMake.createPdf(doc).getBase64(function (encodedString) {
      data = encodedString;
      sendEmail(data);
    });
  }
}

function sendEmail(pdfBase64) {
  alert($.i18n("sent"));

  Email.send({
    Host: "smtp.gmail.com",
    Username: "miradario@gurudevelopers.com.ar",
    Password: "mira4200",
    To: document.getElementById("email").value,
    From: "miradario@gurudevelopers.com.ar",
    Subject: "Quote from Promax",
    Body: "hi! <Br /> Thanks for trusting in PROMAX",
    Attachments: [
      {
        name: filename,
        data: pdfBase64,
      },
    ],
  })
    .then(() => {
      console.log("Email enviado");
    })
    .catch((error) => {
      Alert(error);
    });
}

var valid;

function success() {
  //$('.message.success').show();
  document.getElementById("send").style.display = "inline";
}

function error() {
  $(".message.error").show();
  document.getElementById("send").style.display = "none";
}

// $(function () {
//   // var regExp = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
//   var regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

//   $('[type="email"]').on("keyup", function () {
//     $(".message").hide();
//     regExp.test($(this).val()) ? success() : error();
//   });
// });
